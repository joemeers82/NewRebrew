var express = require('express');
var breweryDb = require('brewerydb-node');
var bodyParser = require('body-parser');
var request = require('request');
var beerDBkey = process.env["BEERDBKEY"];



var app = express();

app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));



app.get('/', function(req,res){
	res.render('index.ejs');
});
app.get('/error',function(req,res){
  res.render('error.ejs');
});



app.get('/search',function(req,res){
	var query = req.query.searchBeer;
	
    var url="http://api.brewerydb.com/v2/search?key="+beerDBkey+"&type=beer&q="+query;
		request(url,function(error,response,body){
      if(query==''){
        res.render('error.ejs');
      }else{
        var beerData=JSON.parse(body).data;
        res.render('beerresults.ejs',{details: beerData});
      }
    });
});

app.listen(process.env.PORT || 3000,function(){
  console.log("THE SERVER IS LISTENING ON LOCALHOST:3000");
});

var $about =$('.aboutBeer');
var $link =$('.listedBeers');
var $hide =$('.closeAbout');

$link.each(function(){
	$(this).click(function(){
		$(this).find($about).fadeToggle(300);
	});
});





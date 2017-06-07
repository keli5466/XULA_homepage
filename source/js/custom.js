$(function() {
  $('.footer-links-holder p').click(function () {
    $(this).parent().toggleClass('active');
  });
});
$(function()
{
	// Hide search wrap by default;
	$(".search-wrap").hide();

	$(".toggle-search").on("click", function(e)
	{
		// Prevent default link behavior
		e.preventDefault();

		// Stop propagation
		e.stopPropagation();

		// Toggle search-wrap
		$(".search-wrap").slideToggle(500, function()
		{
			// Focus on the search bar
			// When animation is complete
			$("#search-bar").focus();
		});
	});

	// Close the search bar if user clicks anywhere
	$(document).click(function(e)
	{
		var searchWrap = $(".search-wrap");

		if(!searchWrap.is(e.target) && searchWrap.has(e.target).length === 0)
		{
			searchWrap.slideUp(500);
		}
	});
});
$(function() {
    $("a[href=#menuExpand]").click(function(e) {
        $(".menu").toggleClass("menuOpen");
        e.preventDefault();
    });
});
// $(function() {
// var div = document.getElementById('mobile_overlay');
//
// $('.icon-menu').click(function() {
//   $(this).toggleClass("on");
//
//   if ($(this).hasClass("on")){
//    			div.style.visibility = 'visible';
//
//          $('.navigator').animate({right: '0px'}, 100);
//
//   }
//
//   else {
//      div.style.visibility = 'hidden';
//       $('.navigator').animate({right: ' -50px'}, 100);
//   }
//
//
//
// });
//
// });

var div = document.getElementById('mobile_overlay');
$(document).ready(function () {
	//  document.body.style.backgroundColor = "white";
// div.style.visibility = 'visible';

    $('.icon-menu').click(function () {
// document.getElementByClassName('mobile_overlay').style.visibility='visible';
        if ($('.navigator').css("right") == "-300px") {
            $('.navigator').animate({right: '0px'}, 100);
						div.style.visibility = 'visible';

									// document.body.style.backgroundColor = "rgba(0,0,0,.5)";
            // $('.menu-icon').animate({right: '250px'}, 350);
            // $('.menu-text').animate({right: '300px'}, 350);
        }
        else  {
            $('.navigator').animate({right: '-300px'}, 100);
            $(this).animate({right: '0px'}, 100);
						div.style.visibility = 'hidden';
									// document.body.style.background = "white";
            // $('.menu-text').animate({right: '50px'}, 350);

        }
	});
    $('.icon-menu').click(function () {
$(this).toggleClass("on");
// div.style.visibility = 'hidden';
							// if ($(this).toggleClass("on")){
								// div.style.visibility = 'visible';
							// $('.mobile_overlay').style.visibility = "visibility";
						// 	document.getElementByClassName('mobile_overlay').style.visibility='visible';
						// }
							//  document.body.style.backgroundColor = "yellow";
					// 		if ($(this).toggleClass("on")){
					// 	 document.body.style.backgroundColor = "green";
					//  }
					//  else {
					// 		// 	div.style.visibility = 'hidden';
					//  }
					 });
});

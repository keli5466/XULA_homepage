// var accord = document.getElementsByClassName('accordion');
//
// accord.addEventListner('click',openAccord ,false);
//
// function openAccord(){
// 	this.className = 'active';
// }
//
//
// var ac = document.getElementsByClassName('accordion');
// var i;
//
// for (i = 0; i < ac.length; i++) {
//     ac[i].onclick = function akk() {
//         this.classList.toggle('active');
//         var panel = this.nextElementSibling;
//         if (panel.style.display === 'block') {
//             panel.style.display = 'none';
//         } else {
//             panel.style.display = 'block';
//
//         }
//     }
// }

$(function () {
	// var $d = $('.down');
	// var $abay = $('.abay');
	// var $list = $('.myList');
	// $('.myList').each(function(){
  $('.abay').on('click', '.down' ,function(e) {
		e.preventDefault();
		$(this)
		.next('.contentp')
		// .not(':animated')
	   .slideToggle();
});
// });

});

var acc = document.getElementsByClassName("acd");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    }
}
var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].onclick = function accord() {
	var panel = this.nextElementSibling;
		this.classList.toggle('active');
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
	panel.style.maxHeight = panel.scrollHeight + 'px';
		}
	};
}

//TODO convert to regular Javascript (bootstrap 5)


 // jQuery - ensure JQuery is loaded
 if (window.jQuery === 'undefined') {
  console.log('jQuery library is *not* loaded.');
  throw new Error('The jQuery JavaScript library was not loaded!');
}


// bootstrap navbar - hide collapse in small screen (mobiles) clicks
$('a.navbar-brand').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});
$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});

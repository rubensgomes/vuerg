/**
 * @file Manages interactions with the navigation menu.
 * 
 * This script relies on:
 * <ul>
 * <li>{@link https://jquery.com/ jQuery}</li>
 * <li>{@link https://jqueryvalidation.org/ jQuery Validation Plugin} </li>
 * </ul>
 * 
 * @author Rubens Gomes <rubens.s.gomes@gmail.com>
 */


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

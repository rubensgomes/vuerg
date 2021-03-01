/**
 * @file Manages interactions with the contact-form.
 * 
 * This script relies on:
 * <ul>
 * <li>{@link https://jquery.com/ jQuery}</li>
 * <li>{@link https://jqueryvalidation.org/ jQuery Validation Plugin} </li>
 * <li>{@link https://www.google.com/recaptcha/intro/v3.html Google reCAPTCHA}</li>
 * </ul>
 * 
 * @author Rubens Gomes <rubens.s.gomes@gmail.com>
 */


 // jQuery - ensure JQuery is loaded
if (window.jQuery === 'undefined') {
  console.log('jQuery library is *not* loaded.');
  throw new Error('The jQuery JavaScript library was not loaded!');
}


// JQuery Validate Plugin - validate contact form
$().ready(function() {
  // validate form
  var validator = $('#contact-form').validate();

  // clear form
  $('#reset-btn').click(function() {
    validator.resetForm();
  });
});


// Google reCaptcha V2 - validate captcha is checked
var onloadCallback = function () {
  grecaptcha.render('recaptcha-contact', {
    sitekey: '6LcIV7IZAAAAADs-VOVIP2Grqc6AbKCFQF94xIPn',
  });
  console.log('grecaptcha is ready!');
};

var form = document.getElementById('contact-form');
form.addEventListener(
  'submit',
  function (event) {
    if (grecaptcha.getResponse() === '') {
      event.preventDefault();
      // display bootstrap modal dialog if captcha not checked
      $('#recaptcha-modal').modal();
    }
  },
  false
);

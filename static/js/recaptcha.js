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

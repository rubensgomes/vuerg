// JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


// Google reCaptcha V2 - validate captcha is checked
var onloadCallback = function() {
  grecaptcha.render('recaptcha-contact', {
    sitekey: '6LcIV7IZAAAAADs-VOVIP2Grqc6AbKCFQF94xIPn',
  });
  console.log('grecaptcha is ready!');
};

var form = document.getElementById('contact-form');
form.addEventListener(
  'submit',
  function(event) {
    if (grecaptcha.getResponse() === '') {
      event.preventDefault();
      // display bootstrap modal dialog if captcha not checked
      $('#recaptcha-modal').modal();
    }
  },
  false
);

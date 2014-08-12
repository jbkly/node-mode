var validator = require('validator');

window.validate = function (input) {
  console.log("input: " + input);

  if (validator.isEmail(input)) {
    alert("\"" + input + "\" is a valid email. Great job!");
  } else {
    alert("\"" + input + "\" is NOT a valid email, yo.");
  }
};

$(".user-form").submit(function(event) {
  event.preventDefault();
  validate($('#email-input').val());
});

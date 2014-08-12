var validator = require('validator');

function validate() {

  var input = process.argv[2];
  console.log("input: " + input);

  if (validator.isEmail(input)) {
    console.log("That email is valid!");
  } else {
    console.log("Nope, not an email, fucker.");
  }
}

exports.validate = validate;

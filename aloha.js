
$(document).ready(function(){

  var $email = $('form input[name="email'); //change form to id or containment selector
  var re = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(
  ".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA
  -Z-0-9]+.)+[a-zA-Z]{2,}))$/igm;
  if ($email.val() == '' || !re.test($email.val()))
  {
      alert('Please enter a valid email address.');
      return false;
  }





  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validate() {
    $("#result").text("");
    var email = $("#email").val();
    if (validateEmail(email)) {
      $("#result").text(email + "Thanks for subscribing!");
      $("#result").css("color", "green");
      alert("Thanks for subscribing!");
    } else {
      $("#result").text(email + "Enter a valid email address ");
      $("#result").css("color", "red");
      alert("Enter a valid email address");
    }
    return false;
  }

  $("form").bind("submit", validate);

}
}

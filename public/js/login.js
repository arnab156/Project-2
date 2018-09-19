$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("#loginForm");
  var emailInput = $("input#username");
  var passwordInput = $("input#userpass");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      console.log("Something wrong with the user data");
      return;
    }

    console.log(userData);
    

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function(data) {
      console.log(data);
      alert("hi");
      // window.location.href = "/api/customerComplete";


      $.get("/api/customerComplete/"+data.id, function(res){
        console.log("/api/customerComplete/"+data.id);
           //console.log(res);
    });

      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }

});

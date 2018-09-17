$(document).ready(function() {
  // Getting references to our form and inputs


  // Customer Login
  var loginForm = $("#loginForm");
  var emailInput = $("input.username");
  var passwordInput = $("input.userpass");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
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
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }


  // login front desk 
  var loginFormFront = $("#frontdeskForm");
  var emailInputFront = $("input#frontDeskName");
  var passwordInputFront = $("input#frontDeskPass");

  // When the form is submitted, we validate there's an email and password entered
  loginFormFront.on("submit", function(event) {
    event.preventDefault();
    var frontData = {
      email: emailInputFront.val().trim(),
      password: passwordInputFront.val().trim()
    };

    if (!frontData.email || !frontData.password) {
      
      return;
    }
    console.log(frontData);
    
    loginUserFront(frontData.email, frontData.password);
    emailInputFront.val("");
    passwordInputFront.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUserFront(email, password) {
    $.post("/api/loginfrontdesk", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }


});

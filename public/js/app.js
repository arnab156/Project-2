// $(document).ready(function() {
// var $firstName = $("#firstName");
// var $lastName = $("#lastName");
// var $phone = $("#phone");
// var $email = $("#email");
// var $password = $("#password");
// var $address_1 = $("#address_1");
// var $address_2 = $("#address_2");
// var $city = $("#city");
// var $state = $("#state");
// var $zip = $("#zip");
// var $credit_card = $("#credit_card");
// var $expiration = $("#expiration");
// var $cvc = $("#cvc");
// var $comment = $("#comment");
// var registerForm = $("#registerForm");

// $(registerForm).on("submit", handleFormSubmit);
// console.log(registerForm);

// function handleFormSubmit(event) {
//   event.preventDefault();
//   alert("i am here in index.js &&&&&&");
//   // Wont submit the post if we are missing a body, title, or author
//   // if (!firstname.val().trim() || !phoneNum.val().trim() || !email.val()) {
//   //   return;
//   // }
//   // Constructing a newPost object to hand to the database
//   var newCustomer = {
//     firstName: firstName.val(),
//     lastName: lastName.val(),
//     address_1: address_1.val(),
//     address_2: address_2.val(),
//     city: city.val(),
//     state: state.val(),
//     zip: zip.val(),
//     phone: phone.val(),
//     email: email.val(),
//     password: password.val(),
//     credit_card: credit_card.val(),
//     expiration: expiration.val(),
//     cvc: cvc.val(),
//     comment: comment.val()
//   };

//   console.log(newCustomer);

//   submitPost(newCustomer);

//   function submitPost(Post) {
//     $.post("/api/customers/", Post, function() {
      // window.location.href = "/";
  //   });
  // }

  // If we're updating a post run updatePost to update a post
  // Otherwise run submitPost to create a whole new post
  // if (updating) {
  //   newPost.id = postId;
  //   updatePost(newPost);
  // }
  // else {
    // submitRegistration(newCustomer);
  // }
}

// function submitRegistration(post) {
//   $.post("/api/customer", post, function() {
//     window.location.href = "/";
//   });
// }
// The API object contains methods for each kind of request we'll make











// var API = {
//   saveExample: function(customer) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/customers",
//       data: JSON.stringify(customer)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/customers",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/customers/" + id,
//       type: "DELETE"
//     });
//   }
// };

// refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);



// });
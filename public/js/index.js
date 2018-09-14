// Get references to page elements
var $firstname = $("#firstname");
var $lastname = $("#lastname");
var $phoneNum = $("#phoneNum");
var $email = $("#email");
var $psw = $("#psw");
var $add1 = $("#add1");
var $add2 = $("#add2");
var $city = $("#city");
var $state = $("#state");
var $zip = $("#zip");
var $cci = $("#cci");
var $cce = $("#cce");
var $cvc = $("#cvc");
var $comment = $("#comment");

var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");


$(registerForm).on("submit", handleFormSubmit);
function handleFormSubmit(event) 


{
  event.preventDefault();
  // Wont submit the post if we are missing a body, title, or author
  // if (!firstName.val().trim() || !bodyInput.val().trim() || !authorSelect.val()) {
  //   return;
  // }
  // Constructing a newPost object to hand to the database
  var newCustomer = {
    firstName: firstname.val(),
    lastName: lastname.val(),
    address_1: add1.val(),
    address_2: add2.val(),
    city: city.val(),
    state: state.val(),
    zip: zip.val(),
    phone: phoneNum.val(),
    email: email.val(),
    password: psw.val(),
    credit_card: cci.val(),
    expiration: cce.val(),
    cvc: cvc.val(),
    comment: comment.val()
  };

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
var API = {
  saveExample: function(customer) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/customers",
      data: JSON.stringify(customer)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/customers",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/customers/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

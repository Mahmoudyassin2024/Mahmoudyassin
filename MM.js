document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var responseDiv = document.getElementById("response");
  responseDiv.innerHTML = "<p>Name: " + name + "</p><p>Email: " + email + "</p><p>Message: " + message + "</p><p>We are glad that you have contacted us , we will respond to you as soon as possible.&#9829; " + "</p>";
});

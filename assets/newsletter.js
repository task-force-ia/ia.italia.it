---
# newsletter_js
---
{% include setlang.html %}
"use strict";

var placeholder_subscribed = (window.location.href.indexOf("en") != -1) ? "Your subscription has been successful!" : "Adesso sei iscritto alla newsletter!";
var thanks = (window.location.href.indexOf("en") != -1) ? "Thanks" : "Grazie";

(function newsletter() {
  var form = document.getElementById("newsletter");
  var email = document.getElementById("newsletter-email");
  var submitButton = document.getElementById("newsletter-submit");

  form.addEventListener("submit", function(e) {
    var xhr = new XMLHttpRequest();
    e.preventDefault();
    submitButton.disabled = true;
    xhr.responseType = "json";
    xhr.open("POST", form.action);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
      if (xhr.response.status != "subscribed") {
        email.value = "";
        email.placeholder = "{{ t.error }}: " + xhr.response.title;
        submitButton.disabled = false;
      } else {
        email.value = "";
        email.placeholder = placeholder_subscribed;
        submitButton.innerHTML = thanks;
      }
    };
    xhr.send("email=" + email.value);
  });
})();

"use strict";

function sendEmail(sendersEmail, password, recieversEmail, subject, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: sendersEmail,
    Password: password,
    To: recieversEmail,
    From: sendersEmail,
    Subject: subject,
    Body: message,
  }).then(function (message) {
    alert("mail sent successfully");
  });
}

document.querySelector(".send").addEventListener("click", function () {
  let sendersEmail = document.querySelector(".semail").value;
  let password = document.querySelector(".password").value;
  let recieversEmail = document.querySelector(".remail").value;
  let subject = document.querySelector(".subject").value;
  let message = document.querySelector(".message").value;

  sendEmail(sendersEmail, password, recieversEmail, subject, message);
});

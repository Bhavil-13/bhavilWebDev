"use strict";

let sendersEmail, password, recieversEmail, subject, message;

document.querySelector("send").addEventListener("click", function () {
  sendersEmail = document.querySelector("semail");
  password = document.querySelector("password");
  recieversEmail = document.querySelector("remail");
  subject = document.querySelector("subject");
  message = document.querySelector("message");
  console.log(sendersEmail);
});

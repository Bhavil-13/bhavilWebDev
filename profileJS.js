"use strict";

const publish = document.querySelector(".publishBlog");
const emailID = String(document.querySelector(".userInputEmail"));
const password = document.querySelector(".userInputPassword");
const title = document.querySelector(".userInputTitle");
const content = document.querySelector(".contentInput");
const tags = document.querySelector(".tagInput");

class feedContent {
  constructor(emailID, password, title, content, tags) {
    this.emailID = emailID;
    this.password = password;
    this.title = title;
    this.content = content;
    this.tags = tags;
  }
}
if (publish) {
  publish.addEventListener("click", function () {
    // 1. Put all the details in a variable, and then in an object of feedContent
    let myBlog = new feedContent(emailID, password, title, content, tags);

    // 2. Then, send all that to feedJS.js file
  });
}

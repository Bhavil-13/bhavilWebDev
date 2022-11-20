"use strict";

const publish = document.querySelector(".publishBlog");

class feedContent {
  constructor(emailID, password, title, content) {
    this.emailID = emailID;
    this.password = password;
    this.title = title;
    this.content = content;
    // this.tags = tags;
  }
}

let tagArr = ["Entertainment", "Educational", "News"];
let contentArr = [];

if (publish) {
  publish.addEventListener("click", function (e) {
    e.preventDefault();
    // 1. Put all the details in a variable, and then in an object of feedContent
    const emailID = document.querySelector("#inputEmail4").value;
    const password = document.querySelector("#inputPassword4").value;
    const title = document.querySelector("#userInputTitle").value;
    const content = document.querySelector("#contentInput").value;
    const tag1 = document.querySelector("#gridCheck1").value;
    const tag2 = document.querySelector("#gridCheck2").value;
    const tag3 = document.querySelector("#gridCheck3").value;
    console.log(emailID, password, title, content, tag1, tag2, tag3);

    let myBlog = new feedContent(emailID, password, title, content);
    contentArr.push(JSON.stringify(myBlog));
    localStorage.setItem("test", JSON.stringify(myBlog));

    // 2. Then, send all that to feedJS.js file
  });
}

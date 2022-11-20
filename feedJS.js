"use strict";

let contentArr = [];
let html = "";
function showBlog() {
  contentArr.forEach(element => {
    html += `<div class="card mb-3 container my-4">
    <div class="card-body">
      <h5 class="card-title">${element.Heading}</h5>
      <div id="feedContent">
      <p class="card-text">${element.Content}</p>
    </div>
    </div>
  </div>`;

    let blogHTML = document.querySelector("#blogCard");
    blogHTML.innerHTML = html;
  });
}

const data = require("./feedData.json");
let sizeOfFile = Object.keys(data).length;
for (const key in data) {
  if (Object.hasOwnProperty.call(data, key)) {
    contentArr.push(data[key]);
  }
}

showBlog();
function browserOrServer() {
  if (typeof window !== "undefined") {
    console.log("You are on the browser");
  } else {
    console.log("You are on the server");
  }
}

const myBlogInput = require("./profileJS");
let html = "";
console.log(myBlogInput.content);
let feedContent = document.getElementById("feedContent");
html += `<p class="card-text">${myBlogInput.content}</p>`;
feedContent.innerHTML = html;

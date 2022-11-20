let contentArr = [];
let html = "";
const data = require("./feedData.json");
let sizeOfFile = Object.keys(data).length;
for (const key in data) {
  if (Object.hasOwnProperty.call(data, key)) {
    // const element = data[key];
    contentArr.push(data[key]);
  }
}
// console.log(typeof contentArr[0]);
contentArr.forEach(element => {
  html += `<div class="card mb-3 container my-4">
  <div class="card-body">
    <h5 class="card-title">${element.Heading}</h5>
    <div id="feedContent">
    <p class="card-text">${element.Content}</p>
  </div>
  </div>
</div>`;
  let blogHTML = document.getElementById("blogCard");
  blogHTML.innerHTML = html;
});
console.log(html);

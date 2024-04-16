let add = document.querySelector("#add");
let subract = document.querySelector("#subtract");
let output = document.querySelector("#output");

add.addEventListener("click", function () {
  let result = Number(output.innerText) + 1;
  output.innerText = result;
});

subract.addEventListener("click", function () {
  let result = Number(output.innerText) - 1;
  output.innerText = result;
});
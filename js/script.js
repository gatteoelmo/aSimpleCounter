let counter = document.querySelector("div");
let add = document.createElement("button");
let output = document.createElement("span");
let subract = document.createElement("button");

subract.textContent = "-";
output.textContent = "0";
add.textContent = "+";
counter.appendChild(subract);
counter.appendChild(output);
counter.appendChild(add);

add.addEventListener("click", function () {
  let result = Number(output.innerText) + 1;
  output.innerText = result;
});

subract.addEventListener("click", function () {
  let result = Number(output.innerText) - 1;
  output.innerText = result;
});
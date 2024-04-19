let add;
let subract;
let output;

add.addEventListener("click", function () {
  let result = Number(output.innerText) + 1;
  output.innerText = result;
});

subract.addEventListener("click", function () {
  let result = Number(output.innerText) - 1;
  output.innerText = result;
});
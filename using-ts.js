var button = document.querySelector("button");
var input1 = document.getElementById("firstNumber");
var input2 = document.getElementById("secondNumber");
function betterAdd(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else
        return +a + +b;
}
button.addEventListener("click", function () {
    console.log(betterAdd(+input1.value, +input2.value));
});

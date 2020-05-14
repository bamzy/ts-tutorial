const button = document.querySelector("button");
const input1 = document.getElementById("firstNumber");
const input2 = document.getElementById("secondNumber");

function add(a,b){
    return a+b;
}
function betterAdd(a,b){
    if (typeof a === "number" && typeof b === "number"){
        return a+b;
    } else
        return +a + +b;
}

button.addEventListener("click", function(){
    console.log(betterAdd(input1.value,input2.value));
});
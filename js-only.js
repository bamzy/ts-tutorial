const button = document.querySelector("button");
const input1 = document.getElementById("firstNumber");
const input2 = document.getElementById("secondNumber");

function add(a,b){
    return a+b;
}

button.addEventListener("click", function(){
    console.log(add(input1.value,input2.value));
});
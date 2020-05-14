const button = document.querySelector("button");
const input1 = document.getElementById("firstNumber") as HTMLInputElement;
const input2 = document.getElementById("secondNumber") as HTMLInputElement;


function betterAdd(a: number,b: number){
    if (typeof a === "number" && typeof b === "number"){
        return a+b;
    } else
        return +a + +b;
}

button.addEventListener("click", function(){
    console.log(betterAdd(+input1.value,+input2.value));
});
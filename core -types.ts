// and example of literal plus union
function combine(input1: number, input2: number, showFlag: "A" | "B") {
  return input1 + input2;
}

console.log(combine(1, 2, "C"));

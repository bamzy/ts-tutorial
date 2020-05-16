// and example of type alias plus union
type Combinable = number | string | boolean | 'A';
function combine(input1: number, input2: number, showFlag: Combinable): string {
  return input1 + input2;
} 



console.log(combine(1, 2, ));

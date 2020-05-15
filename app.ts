console.log("our code goes here");
let a: number = 5;
let b: number = 6;

const person: { name: string; age: number; hobbies: string[], roles: [number,string]  } = {
  name: "Maximilan",
  age: 10,
  hobbies: ["a", "b", "c"],
  roles: [2,'admin']
};

person.hobbies.push('d');
person.roles.push('a') ;
console.log(person.hobbies);
console.log(person.roles);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

// This is two ways of defining an array type
const a1: Array<number> = [1, 2, 3];
const a2: number[] = [1, 2, 3];

// any is also a type for all types
const a3: any[] = [1, "2", false];


// enums are a type you get to define
enum ROLES {ADMIN = 1, READ_ONLY = 1, WRITE = 2};
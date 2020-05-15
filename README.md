# TypeScript-tutorial

This is my hands-on TS coding by using VS Code.

* TypeScript is a javascript superset meaning it adds stuff to JS.
* But TS cannot be exucted by JS compilers like the one in your browser!
* Even Node.js cannot excutes TS.
* TS can be compiled to JS code and used, but writing in TS means a more cleaner and stable code.
* TS compiler understands more than just JS features. But these improvements should always be convertible to JS capabilities.

## Why TS?
1- less error
2- compile time error/validations/sanitize
3- explicit types and a push toward static typed js language 

## Install:
1- npm install -g typescript
## Compile:
1- tsc [filename]

## TypeScript Syllabus:

1- Types become essintial here.
2- IDE integration is a real blessing.
3- We can use next-gen JS features that are then compiled down for older browser compatibility.
4- Non-javascript features like **Classes**, **Interfaces** and **Generics** are also added to JS via TS.
5- Meta-programming features like **Decorators**, **Namespaces**, **Modules** 
6- Webpack
7- Rich configuration options.
8- Modern tooling is even usefull if you are not using other TS features.


## Usefull VSCode Plugins:
* Prettier
* Lite-server
* ESLint
* Material Icon Theme
* Path Intellisense
* Markdown Preview

### How to install lite-server
1- npm install lite-server
2- Edit  package.json and add the code below to script field of the object
```javascript
 "start": "lite-server"
```
3- Then run:
```npm
 npm start 
 ```



 ## Core Types TS introduced:
 1- **number**: includes int, double, floats 
 2- **string**: all text values
 3- **boolean**: true or false
 4- **arrays**: 
 ```javascript 
 a : strin[]; b: number[]
 ```
 5- **object**: 
 ```javascript 
 const Person : {age:number, name:string} = {
     age : 10
     name: 'bamzy'
 }
 ```
 6- **tuples**: 
 ```javascript
 const person : 
 {roles: [number,string]} = {
     roles: [1,'admin']
 } 
 ```
 7- **enumeration**:
 ```javascript
 enum ROLES {ADMIN, READ_ONLY, WRITE};
 enum ROLES {ADMIN = 4, READ_ONLY = 5, WRITE = 6};
if (person.role == ROLES.ADMIN) ...
```

8- **union** types:
```javascript
const a : number | string
```
10- **literal** types:
```javascript
function combine(input1: number, input2: number, showFlag: 'A' | 'B')
```

9- **any** type: this is how JS already behaves.

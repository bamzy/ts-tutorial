console.log("our code goes here");
var a = 5;
var b = 6;
var person = {
    name: "Maximilan",
    age: 10,
    hobbies: ["a", "b", "c"],
    roles: [2, 'admin']
};
person.hobbies.push('d');
person.roles.push('a');
console.log(person.hobbies);
console.log(person.roles);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
// This is two ways of defining an array type
var a1 = [1, 2, 3];
var a2 = [1, 2, 3];
// any is also a type for all types
var a3 = [1, "2", false];
// enums are a type you get to define
var ROLES;
(function (ROLES) {
    ROLES[ROLES["ADMIN"] = 1] = "ADMIN";
    ROLES[ROLES["READ_ONLY"] = 1] = "READ_ONLY";
    ROLES[ROLES["WRITE"] = 2] = "WRITE";
})(ROLES || (ROLES = {}));
;

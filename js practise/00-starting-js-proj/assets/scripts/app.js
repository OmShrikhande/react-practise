

import { apiKey } from "./util.js";

console.log(apiKey);
/*


// basic javascript code with the object 
const userName = "Khan";
const userAge = 30;
const user = {
    name: userName,
    age: userAge,
    greet() {
        console.log("Hello " + this.name);
    },
}
console.log(user.greet());
*/





/*
//OOPs in javascript 
class Demosh{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello " + this.name);
    }
}
const demo = new Demosh("Khan", 30);
demo.greet()
*/







/*
//Aray and Array methods like map, filter, reduce, find, forEach, some, every, splice, slice, push, pop, shift, unshift

const hobbies = ["sports", "cooking", "reading"];
console.log(hobbies[0])

hobbies.push("coding")

const index = hobbies.findIndex((item)=>{
    return item === "reading";
})
console.log(index)


const logging = hobbies.map((item)=> ({text: item}) );
console.log(logging)
*/






/*
// destructuring of array and object

const hobbies = ["sports", "cooking", "reading"];
const user={
    name: "Khan",
    age: 30,
}

//destructureing of array
const [hobby1, hobby2] = hobbies;
//the upside code have the same meaning as the below code
//alternative way to destructure the array
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

console.log(hobby1)
console.log(hobby2)

//destructureing of object
const {name:userName, age:Userage} = user; //here :userName and Userage are the new variable names (aliase)
//the upside code have the same meaning as the below code   
//alternative way to destructure the object
// const name = user.name;
// const age = user.age;
console.log(userName)
console.log(Userage)
*/




/*
// Spread Operator 

const user={
    name: "Khan",
    age: 30,
}
const hobbies = ["sports", "cooking", "reading"];

//spread operator on the array
const newHobbies = [...hobbies, "coding"];
//spread operator spreads the array and adds the new element to the end of the array
console.log(newHobbies)


//spread operator on the object
const extendedUser = {
    isAdmin: true,
    ...user,
    //this will add the user object to the extendedUser object
};
console.log(extendedUser)
*/









/*
// Conditional staments
const password= prompt("Enter your password: ");
if(password =="om"){
console.log("Hello " + password);
}else if(password == "neha"){
    console.log("Hello " + password);
}
else{
    console.log("Hello " + password);
}
*/


/*
//  for loop
const numbers = [1, 2, 3, 4, 5];
for(const number of numbers){
    console.log(number);
}
*/
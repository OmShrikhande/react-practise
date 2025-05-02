export const apiKey = "1234567890";



// some tricky codes 





/*
//function as a value to inbuild functions
function handleTimeout(){
    console.log("Timeout!");
}

const handleTimeout2 = ()=> { 
    console.log("Timeout ..agian!");
}

setTimeout(handleTimeout, 2000); //in this case the function is passed as a value to the setTimeout function and it will be executed after 2 seconds

// if we pass the handelTimeout() instead of handleTimeout, it will be executed immediately and not after 2 seconds because in this case we are calling the function and not passing it as a value to the setTimeout function

setTimeout(handleTimeout2, 3000); //in this case the function is passed as a value to the setTimeout function and it will be executed

setTimeout(()=>{ //here we are passing an anonymous function to the setTimeout function and it will be executed but not immediately because we are defining it not executing it.
    console.log("more Timeout ..agian!")
}, 4000); //in this case the function is passed as a value to the setTimeout function and it will be executed
*/



/*
//funtion as a parameter to another function
function greeter(greetfn){
    greetfn();
}
greeter(()=>{
    console.log("Hello World!");
})
//in this case we are passing an anonymous function to the greeter function and it will be executed but not immediately because we are defining it not executing it.
*/




/*
// function in a function
function inti(){
    function greet(){
        console.log("Hello World!");
    }
    greet();
}
//greet(); //this will give an error because the greet function is not defined in the global scope`
inti();
*/








//reference vs premitive types
 const a = 10; //primitive type

const hobbies = ["sports", "cooking", "reading"]; //reference type
hobbies.push("coding"); //this will not change the reference of the hobbies array but will change the value of the array
console.log(hobbies); //this will print the array with the new value



// global variables 


// functions
function printName() {
    console.log("Your Name Here");
}

function sayHello(person){
    // if the person is empty dont do anything
    if(person.length == 0){
        return;
    }
    
    console.log("Hello " + person);
}

function sumTwoNumbers(num1, num2) {
    let res = num1 + num2;
    return res;

    console.log("Never");
}
function init(){
    console.log("My Super Cool Page");

    // do the magic
    printName(); // call / exec

    sayHello("Jane"); // Hello Jane
    sayHello("Matt"); // Hello Matt

    // using the new function, get the sum of 21 plus 21
    // and print the result
    let result = sumTwoNumbers(21, 21);
    console.log(result);


    // arrays
    let colors = [];
    colors.push("Red");
    colors.push("Blue");
    colors.push("Green");
    colors.push("Yellow");
    colors.push("Pink");
    colors.push("White");

     console.log(colors[0]); // print the first element


     // for loop
     for(let i=0; i < colors.length; i++) {
         let color=colors[i];
         console.log(colors);
     }

    // 1 - print nums 0 to 20
    // 2 - skip 7
    // 3 - and skip 13
    for(let j=0; j <= 20 ; j++) {
        // if j is not 7 AND j is not 13
        if(j !=7 && j != 13) {
            console.log(j);
        }    
    }


    // print the sum on an array
    let numbers = [1,345,5678,5234,8567,234,123,56,678,789,3645,5687,234, 123897];

    let total = 0;
    for(let i=0; i< numbers.length; i++) {
        let num = numbers[i];
        total = total + num;
    }

    console.log("The sum is: " + total); // 155 168
}


// wait for all the HTML to be rendered (on the screen)
// and then call the init function
window.onload = init;
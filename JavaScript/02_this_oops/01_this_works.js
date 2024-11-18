// Statement 1
// Native object and a Host object 

/*
    Environment:
        Host object: 
            Browser -> [window(all events, array, etc), document(html), localStorage]
            NodeJs -> [global, os, process]
    JavaScript:
        Native Object:
            [Date, JSON, Obeject]
*/

// Global Area
// GEC -> var will go to global object
// var firstVal = "steve";
// let secondVal = "loki";
// console.log("first: ", firstVal);
// console.log("second: ", secondVal);
// console.log("Hello from ", this);  // In Global Execution Contex (GEC) 'this' = window
// first:  steve
// second:  loki
// Hello from  Window {window: Window, self: Window, document: document, name: 'Swapnil', location: Location, …}

// firstVal = "steve";    // if no data type is assign by default it is var
// var firstVal = "steve";   //
// let secondVal = "loki";   // initial both let and var in the GEC but because of let scope it will remain in GEC and var will out
// console.log("first: ", window.firstVal);  //var is global and it is part of the window
// console.log("second: ", window.secondVal);  // let is global but its not a part of the window
// first:  steve
// second:  undefined


let cap = {
    // property 
    firstName: "Steve",
    // method
    sayHi: function () {
        console.log("Hi from ", this.firstName);
    }
}
cap.sayHi();     // method call  // this.firstName == cap.firstName 
// Hi from Steve
// here we calling function sayHi over a cap object. here we have all access to 
// cap object and here "this" means cap object and we have "firstName" in cap 
// object which steve

let sayHiAdd = cap.sayHi;   // function call    // this.firstName == window.firstName //I just extracted sayHi function from the cap object, now this function is present in the global execution context environment and from GEC i m inviking this function
// Hi from undefined   
// so here sayHiAdd only have the memory address of sayHi there is no contact 
// with cap object. and it means here "this" is refering to global(window) and 
// window dont have any "firstName" variable so thas why its prints a "undefined"
sayHiAdd();

// var firstName = "loki";
// sayHiAdd();      // window.firstName == this.firstName
// Hi from  loki
// now the global have firstName and "this" is reffering to window object and 
// window have that value which is "loki"


// ******************** rules for "this" ************************** //
// GEC -> this -> window object
// EC is created with -> method call -> this will be that object, Example: cap.sayHi()
// EC is created with -> function call -> this will be that window, Example: let a = cap.sayHi and then a()


// ********************* Question 2 ******************************* //
let cap2 = {
    firstName: "Steve",
    sayHi: function (param) {
        console.log("47", this.firstName);
        const iAmInner = function (param) {
            console.log("49", this.firstName);
        }
        // EC by this kind of all -> window
        iAmInner(20);  // function call and in that this is refering to window and window dont have firstName
    }
}

// EC by this -> cap
cap2.sayHi(10);  // method call over cap object and this is reffering to cap object and cap object have the first name
// 47 Steve
// 49 undefined

// iAmInner -> this window, param = 20
// cap.sayHi -> param = 10, this = cap
// GEC

// ******************************** Question 3 ************************************ //
// var -> GEC
let cap3 = {
    firstName: "Steve", 
    sayHi: function () {
        console.log("53", this.firstName);
        // arrow -> does not have it's own this. I am going to cheat it from outside
        const iAmInner = () => {
            console.log("55", this.firstName); // in arrow function this is always equal to nearest scope (means cap3 obeject)
        }
        iAmInner();
    }
}
cap3.sayHi();
// 53 Steve
// 55 Steve

// *********************** rule for "this" for arrow function ***************************** //
// GEC -> this -> window object
// EC is created with -> method call -> this will be that object
// EC is created with -> function call -> this will be that window
// Arrow function doesn't bother about above rules -> it takes this from outside (nearest scope)


// *************************** Question 3 ************************************ //
var firstName = "thanos";
let cap4 = {
    firstName: "steve",
    sayHi: function () {
        console.log("91", this.firstName);
        // arrow -> does not have it's own this. I am going to cheat it from outside
        const subInner = () => {
            console.log("94", this.firstName);
            const iAmInner = () => {
                console.log("95", this.firstName);
            }
            iAmInner(); // arrow function call (this = nearest scope)
        }
        subInner();  // arrow function call (this = nearest scope)
    }
}
cap4.sayHi();  // method call (this = object(cap4))
// 91 steve
// 94 steve
// 95 steve


// *********************************** Question 4 ************************************** //
var firstName = "thanos";
let cap5 = {
    firstName: "Steve",
    sayHi: function () {
        console.log("109", this.firstName);
        // arrow -> does not have it's own this. I am going to cheat it from outside
        const subInner = () => {
            console.log("94", this.firstName);
            const iAmInner = function () {
                console.log("114", this.firstName);
                const iAmSuperInner = function () {
                    console.log("117", this.firstName);
                }
                iAmSuperInner(); // simple function call (this = window)
            }
            iAmInner(); // arrow function call (this = nearest scope)
        }
        subInner();  // arrow function call (this = nearest scope)
    }
}
cap5.sayHi();  // method call (this = object(cap4))
// 109 Steve
// 94 Steve
// 114 thanos
// 117 thanos



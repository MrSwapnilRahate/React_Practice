let cap = {
  name: "Steve",
  team: "Cap",
  petersTeam: function (mem1, ...mem2) {
    console.log(`Hey ${this.name} I am your neighbourhood's 
            spiderman and i belong to ${this.team}'s team with member ${mem1} & ${mem2}`);
  },
};

let ironMan = {
  name: "Tony",
  team: "Iron Man",
};

// Statement 1 -------------------------------------------------------------

// polyfill of call method    

// manually implemented a methode (myCall) that allows you to invoke a function 
// with "this" context, even if the function originally belongs to a different object.
// This helps in reusing functions across different objects while ensuring that the 
// correct object is referenced by "this" during the function call.

Function.prototype.myCall = function (requiredObj, ...args){
    // "myCall" method is being added to the "Function.prototype", 
    // which means it can be used by all functions

    // get your Function 
    const functionToBeInvoked = this;  // this == petersTeam
    // console.log("hey",functionToBeInvoked);
    // console.log(requiredObj)

    // copy your function
    // temporalily attach the function (cap.petersTeam) to the "requiredObj" (ironMan)
    // now this == requiredObj (ironMan)
    requiredObj.tempfunction = functionToBeInvoked; 

    // Call your targeted function using "requiredObj" (ironMan) with args  
    requiredObj.tempfunction(...args);

    // console.log(requiredObj.tempfunction);
    // delete temp method 
    // delete requiredObj.tempfunction;
    // console.log(requiredObj.tempfunction);

}
// cap.petersTeam.myCall(ironMan, "thor", "loki", "Natasha", "pabhusingh", "sushil", "vishal", "dharani", "surya");
// Hey Tony I am your neighbourhood's 
//    spiderman and i belong to Iron Man's team with member thor & loki,Natasha,pabhusingh,sushil,vishal,dharani,surya
// console.log(ironMan);
// {name: 'Tony', team: 'Iron Man', tempfunction: ƒ} // before delete tempfunction

// Statement 2 -------------------------------------------------------------

// polyfill of Apply method
    // - Invokes a function with a specified "this" value and arguments passed as an array
// i have to pass two thing -> reaquiredObj and one argument(this one arguement represent the complete array)

Function.prototype.myApply = function (requiredObj, argsInFormArray) {
    // get your targeted function
    const functionToBeInvoked = this;

    // copy your function
    requiredObj.tempfunction = functionToBeInvoked;

    // call your function
    requiredObj.tempfunction(...argsInFormArray);

    // delete temp function
    delete requiredObj.tempfunction;
}

// cap.petersTeam.myApply(ironMan, ["thor", "loki", "dhoki", "popi"]);
// console.log(ironMan);
// Hey Tony I am your neighbourhood's 
//    spiderman and i belong to Iron Man's team with member thor & loki,dhoki,popi

// {name: 'Tony', team: 'Iron Man', tempfunction: ƒ} // before delete tempfunction


// Statement 3 -------------------------------------------------------------

// polyfills for bind
// i need to pass my function

Function.prototype.myBind = function (requiredObj) {
    // get your targeted function
    const functionToBeInvoked = this;

    return function (...args) {
        functionToBeInvoked.call(requiredObj, ...args);
    }
}

const boundFunction = cap.petersTeam.myBind(ironMan);
boundFunction("thor", "loki" );
console.log(ironMan);



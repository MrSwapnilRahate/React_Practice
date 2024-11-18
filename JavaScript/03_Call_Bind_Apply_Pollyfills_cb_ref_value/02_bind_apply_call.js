// why use case of bind, apply, call -> borrow features
let cap = { 
    name: "Steve",
    team: "Cap",

    petersTeam: function (mem1, ...mem2) {
        console.log(`Hey ${this.name} I am your neighbourhood's 
            spiderman and i belong to ${this.team}'s team with member ${mem1} & ${mem2}`);
    }
}

let ironMan = {
    name: "Tony",
    team: "Iron Man"
}

// borrow the method only once with defined number of param
// use petersTeam method -> only once
// cap.petersTeam.call(ironMan, "wintersoldier", "Thor", "bala", "kala", "sala");
// equivalent to: ironMan.petersTeam("wintersoldier", "Thor", "bala", "kala", "sala")
// Hey Tony I am your neighbourhood's 
    // spiderman and i belong to Iron Man's team with member wintersoldier & Thor,bala,kala,sala


// ******************************** Apply ****************************************** //

// Apply : borrow the method only once with n no of param
// let membersArray = ["thor", "loki", "Thor", "bala", "kala", "sala"];
// i just pass the params in the form of array 
// cap.petersTeam.apply(ironMan, membersArray);
// Hey Tony I am your neighbourhood's 
    // spiderman and i belong to Iron Man's team with member thor & loki,Thor,bala,kala,sala



// ********************************* Bind **************************************************** //

// bind: making permanent copy of that method to use multiple times

// const boundFn = cap.petersTeam.bind(ironMan);
// boundFn(membersArray);
// Hey Tony I am your neighbourhood's 
    // spiderman and i belong to Iron Man's team with member thor,loki,Thor,bala,kala,sala & 

// boundFn("cap", "war machine");
// Hey Tony I am your neighbourhood's 
    // spiderman and i belong to Iron Man's team with member cap & war machine


//  Guess the answer
var name = "superman";
var team = "Swapnil";
cap.petersTeam.call(); // function call
 

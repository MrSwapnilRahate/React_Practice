let cap = { 
    name: "Steve",
    team: "Cap",

    petersTeam: function (mem1, mem2, ...otherMem) {
        console.log(`Hey ${this.name} I am your neighbourhood's spiderman and i belong to ${this.team}'s team`);

        console.log(`I am working with ${mem1} & ${mem2} with ${otherMem}`);
    }
}

let ironMan = {
    name: "Tony",
    team: "Iron Man"
}

cap.petersTeam("black panther", "wintersoldier", "Thor");

// Hey Steve I am your neighbourhood's spiderman and i belong to Cap's team
// I am working with black panther & wintersoldier with Thor

// borrow a fnn(method) from another obj for another object
// used to call it

// *************************** call ******************************** //

cap.petersTeam.call(ironMan, "Natasha", "pabhusingh", "sushil");
// i want to call "peatersTeam" method on "ironMan" object with ("Natasha", "pabhusingh", "sushil") this arguements
// Hey Tony I am your neighbourhood's spiderman and i belong to Iron Man's team
// I am working with Natasha & pabhusingh with sushil



// *************************** apply ********************************* //

// apply -> borrow for n number of parameters (you can pass n number of parameters)
cap.petersTeam.apply(ironMan, ["Natasha", "WarMachine", "doctor strange", "loki", "thor"]);
// Hey Tony I am your neighbourhood's spiderman and i belong to Iron Man's team
// I am working with Natasha & WarMachine with doctor strange,loki,thor



// *************************** Bind ********************************* //

// bind -> copies function that you can call later with the same this
let ironManStolenMem = cap.petersTeam.bind(ironMan);
// means it actually copy the petersTeam and pasted it ironMan object

ironManStolenMem("Natasha", "WarMachine", "doctor strange");
// Hey Tony I am your neighbourhood's spiderman and i belong to Iron Man's team
// I am working with Natasha & WarMachine with doctor strange

ironManStolenMem("loki", "thor", "Antman");
// Hey Tony I am your neighbourhood's spiderman and i belong to Iron Man's team
// I am working with loki & thor with Antman


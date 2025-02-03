// --- opgave 1 ---

let person = {
    fornavn: "Louise",
    efternavn: "Pedersen",
    stilling: "Front-end dev",
    anciennitet: 3,

}

console.log(person.stilling);
console.log(person.anciennitet);

// --- opgave 2 ---

let person1 = {
    fornavn: "Louise",
    efternavn: "Pedersen",
    stilling: "Front-end dev",
    by: "København",
    anciennitet: 3,
    frokostordning: true, 
    team: ["Karoline", "Mads", "Frederik", "Jens"],
    erfaring: {
        firma: "Lego",
        varighed: 5
    },
}

person1.team.forEach(function(team) {
    console.log(team)
});

console.log(person1.erfaring.firma);
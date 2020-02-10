const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const doctorsBill = {
    officeName: "The Good Doctor",
    streetAddress: "38 Good Doctor Blvd",
    doctorName: "Dr. Good",
    patientName: "Mr. Unhealthy",
    visitDate: "Everyday",
    amountBilled: "All the money",
    dueDate: "Now!"
}

// Use square bracket notation to output the value 
// of those three properties to the console in Chrome.

console.log(doctorsBill[dateVisited]);
console.log(doctorsBill[owed]);
console.log(doctorsBill[patient]);


// Use Object.values() to output all the property values to the console in Chrome.

console.log(Object.values(doctorsBill));


// Output all of the key names from your doctor's office bill to the console in Chrome.

console.log(Object.keys(doctorsBill));


// Output all of the key names from your doctor's officebill to the DOM
// inside a parent <section> element. Wrap each one in a <span> element.

for (const key of Object.keys(doctorsBill)) {
document.getElementById("props").innerHTML += `<span>${key} </span>`
}


const paninifiedChickenSandwich = {
    name: "Chicken Panini",
    outside: "Bread",
    smearOnBread: "Coconut Oil",
    inside: "Chicken",
    alsoInside: "Swiss Cheese",
    isPaninified: true,
    desiredPaninificationLevel: "Crispy bread, warm but not hot inside",
    add: "Pickles, hot sauce, etc.",
    action: "Eat it",
    tastes: "Nice"
}

// Output all of the key/value pairs into the DOM inside an <article> element with a class of food.

for (const prop of Object.entries(paninifiedChickenSandwich)) {
    document.querySelector(".food").innerHTML += `<p><strong>${prop[0]}:</strong> ${prop[1]}</p>`
}
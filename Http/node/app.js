const fs = require("fs");
const path = require("path");
const {Person, Car} = require("./person.js")
let person = new Person("Gregor", "Greg", 1);
let car = new Car("Škoda", "Octavia");

console.log(person);
console.log(car);


/*fs.promises.readFile(path.join(__dirname, "person.js"), "utf-8").then(
    (data) => {
        console.log(data);
    }
).catch((error) => {
    console.log(error);
}) */

 
fs.readFile(
    path.join(__dirname, "person.js"), "utf-8",
    (error, data) => {
        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }
    }
)

/*

console.log(path.join(__dirname, "person.js"));


const os = require("os"); 
console.log(os.userInfo()); */

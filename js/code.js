/*var test = "Hello World";
console.log(test);*/

// var hotel = {
//     name: "Quay",
//     rooms: 40,
//     booked: 25,
//     checkAvailabity: function() {
//         return this.rooms - this.booked;
//     }
// };

// var hotel = new Object();
//     hotel.name = "Quay";
//     hotel.rooms = 40;
//     hotel.booked = 25;
//     hotel.checkAvailabity = function() {
//         return this.rooms - this.booked;
//     };

function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailabity = function () {
        return this.rooms - this.booked;
    };
};

var hotel1 = new Hotel("Quay", 40, 25);
var test = document.getElementById("test");
test.innerHTML = hotel1.checkAvailabity();
console.log(hotel1.checkAvailabity());

// var test01 = "test2";//global here
// function TEST() {
//     var test01 = "test2";//local here
//     return "My string of text is " + test01;
// }
// console.log(test01);

var test01 = "test2"; //global here
var TEST = function () {
    var test01 = "test2"; //local here
    return "My string of text is " + test01;
}() //immediately invoked function
console.log(test01);
console.log(TEST);

function Generate() {
    var myNumber = Math.floor(Math.random() * 101);
    console.log(myNumber);
    var para = document.getElementById("para02");
    para.innerHTML = myNumber;
    para.style.fontSize = "6em";
    para.style.color = "#fff";
    var random = document.getElementById("random");
    console.log(random);
    if (myNumber < 30) {
        random.style.backgroundColor = "#000";
    } else if (myNumber < 60) {
        random.style.backgroundColor = "#F00";
    } else {
        random.style.backgroundColor = "#FF0";
    }
}
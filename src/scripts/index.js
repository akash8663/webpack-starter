console.log('Tell me, Do you bleed!!!!!');
const id = 100;
console.log(id);
var varid = 10;
console.log(varid);
var letid = 10;
console.log(letid);

function restParam(car,...cars){        //rest param
    // console.log(car);
    cars.forEach(id=> console.log(id));
    // console.log(car2);
    // console.log(car3);
}

let cars = "cars";

restParam("car1","car2", 100);

let moons = [1,2,3,4,5];        //destructuring arrays
// let moon1, moon;
let [,moon1,...moon] = moons;
console.log(moons);

let states = {name: "CA", loc:"west"};     //destructuring objects
let {name, loc} = states;
console.log(states);

let s1 = "Zoo";
let s2 = "alphabets";

console.log(s1.toUpperCase < s2.toUpperCase? true:false);


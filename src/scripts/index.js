import { _ } from "core-js";

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

console.log(s1 < s2? true:false);

let eating=(function(){
    let time = 'hungry';
    console.log('when');
    // return time;\
    let date = function(){
        return time;
    };
    return {
        date: date
    };
})();
console.log(eating.date());

let o = {
    carId: '123',
    getId: function(prefix){
        return(this.carId);
    }
};
console.log(o.getId());
let o2 = {carId:'456'};
let newo = o.getId.bind(o2);
console.log('bind: '+newo());
console.log('call: '+o.getId.call(o2));
// console.log('call: '+o.getId.apply(o2, ['My car id is: ']));


let s = _ => 'hungry';
console.log(s());

let status = (a1,a2) => a1+a2+'hungry';
console.log(status('I ','AM '));

//Array

let carIds = [
    { carId: 1, style: 'sedan'},
    { carId: 2, style: 'convertible'},
    { carId: 3, style: 'sedan'},
    { carId: 4, style: 'SUV'},
    { carId: 5, style: 'SUV'}
];

carIds.forEach(car => console.log(car));
carIds.forEach((car,i) => console.log(car,i));

let sedan = carIds.filter(  //filter returns the filtered set of data
    car=>car.style==='sedan'
);
console.log(sedan);

let convertible = carIds.every(  // every returns boolean 
    car=>car.carId>0
);
console.log(convertible);

let suv = carIds.filter(  // find stops searching when find one match
    // car=>car.style == 'SUV'
    car=>car.carId > 3
);
console.log(suv);

class Car{
    constructor(id){
        this.id = id;
    }
    indentify(color){
        return `My car is ${color} ${this.id}`;
    }
}
let car = new Car('sedan');
car.id = 'suv';
console.log(car.indentify('red'));
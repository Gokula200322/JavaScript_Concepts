
/*let a = [1,2,3,4,"Gokula"];

console.log(a);

 /a = [
    1,
    2,
    3,
    null,
    false,
    function x(){
        console.log("hai guys from array");
    },
    {name :"gokula",age:22},
];

console.log(a);
console.log(a[5]());
console.log(a[6]);
console.log(typeof(a));
console.log(Array.isArray(a));
console.log(a.length);*/

/*let a = new Array(1,2);
console.log(a);
console.log(a.length);
a = new Array(5);
console.log(a);
console.log(a.length);*/

function Array(){
    this.x = 10;
}

a = new Array(5);

console.log(a); // this is the confusion it creates when u use overide constructor and do this.x = 10; giving false name as Array when we print a .

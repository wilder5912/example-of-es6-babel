//babel --watch objectExamples.js --out-file es5.js
//http://localhost:63342/example-of-es6-babel/index.html?_ijt=17sobvg3e2s9acn027nouo4k19
var person = {
    firstname:"Tom",
    lastname:"Hanks",
    func:function(){
        return "Hello!!";
    },
};
//access the object values
console.log(person.firstname);
console.log(person.lastname);
console.log(person.func());

var foo = 'bar';
var baz = { foo:foo };
console.log(baz.foo);

/*
//----------------------------------------------------------------------
*/
function Car() {
    this.make = "Ford";
    this.model = "F123";
}
var obj = new Car();
console.log(obj.make);
console.log(obj.model);

/*------------------------------------------------------------------------------
Example − Cloning an Object*/

"use strict"
var det = { name:"Tom", ID:"E1001" };
var copy = Object.assign({}, det);
var copy2 = Object.assign({}, copy);
console.log(copy,"-----------sss");
for (let val in copy2) {
    console.log(copy2[val],"*---");
}

/*
Example − Merging Objects*/
var o1 = { a: 10 };
var o2 = { b: 20 };
var o3 = { c: 30 };
var obj = Object.assign(o1, o2, o3);
console.log(obj,"4");
console.log(o1,"5");

/*Deleting Properties*/

// Creates a new object, myobj, with two properties, a and b.
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;

// Removes the ‘a’ property
delete myobj.a;
console.log ("a" in myobj); // yields "false"


/*Object De-structuring*/
var emp = { name: 'John', Id: 3 };
var { name, Id } = emp;
console.log(name);
console.log(Id);


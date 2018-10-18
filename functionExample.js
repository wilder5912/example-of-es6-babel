//babel --watch functionExample.js --out-file es5.js
//http://localhost:63342/example-of-es6-babel/index.html?_ijt=17sobvg3e2s9acn027nouo4k19
var func = function(x,y){ return x*y };
function product() {
    var result;
    result = func(10,20);
    console.log("The product : "+result);
}
product();

function fun1(...params) {
    console.log(params.length);
}
fun1();
fun1(5);
fun1(5, 6, 7);

function* ask() {
    const name = yield "1-What is your name?";
    const sport = yield "2*What is your favorite sport?";
    return `${name}'s 3favorite sport is ${sport}`;
}
const it = ask();
console.log(it.next());
console.log(it.next('Ethan2'));
console.log(it.next('Cricket34'));
console.log(it.next('Cricket345'));
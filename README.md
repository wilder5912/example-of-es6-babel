# example-of-es6-babel

**1.-what is it "use strict"?**
 Defines that JavaScript code should be executed in "strict mode".

(function() {
  "use strict";
  x = 5; // ReferenceError: x is not defined
})(); 

x = 5; 

(function() {
  "use strict";
  window.undefined = 5; // TypeError: Cannot assign to read only
})();                   // property 'undefined' of [object Object]

window.undefined = 5; // No hace nada


(function() {
  "use strict";
  with(Object) {} // SyntaxError: Strict mode code may not include a with statement
})();

(function() {
  "use strict";
  var x = {
    a: 1,
    a: 2
  };  // SyntaxError: Duplicate data property in object literal 
})(); // not allowed in strict mode

var x = {
  a: 1,
  a: 2
}; // x es igual a {a: 2} 

function f(a, a) {
  "use strict";
} // SyntaxError: Strict mode function may not have duplicate parameter names

function f(a, a) {
  return a;
}
f(1,2); // regresa 2
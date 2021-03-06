//babel --watch loop.js --out-file es5.js
//http://localhost:63342/example-of-es6-babel/index.html?_ijt=17sobvg3e2s9acn027nouo4k19
// This is the label name
outerloop: for (var i = 0; i < 5; i++) {
  console.log("Outerloop: " + i);
  innerloop: for (var j = 0; j < 5; j++) {
    if (j > 3) break;

    // Quit the innermost loop
    if (i == 2) break innerloop;

    // Do the same thing
    if (i == 4) break outerloop; // Quit the outer loop
    console.log("Innerloop: " + j);
  }
}


function weird() {
    height = 50;
    return height
}

weird()

//leakage of global variables


// 'use strict'  a way to prevent javascript for doing this weird unpredictable cases
// allows uus to avoid pitfalls that should not happen

//18:39

'use strict'
function weird() {
    var height = 50;
    return height
}

weird()

//18:39

 var heyhey = function doodle() {
     //do something
     doodle() //here1
     return 'heyhey'
 }

 heyhey()
 doodle() // Error // doodle function is enclosed in its on scope gets 
            // added to its own executional context variable enviroment
            // we cannot access in a global scope
            // we can only access here1
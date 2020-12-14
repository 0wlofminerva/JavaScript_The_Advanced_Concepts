function two() { //(4. go into two world)
    var isValid; //(5. nothing assigned, remains undefined)
}

function one() { // (2.go into the function one)
    var isValid = true; //2.(local enviroment //  variable enviroment)
    two(); // 3.(run function two. a new EC created)
}

// global
var isValid = false;
one();

//stack below

//two//(5.)-- undefined
//one()//(1.create a new executioin context)// -- true 
//global() --false

// each of this worlds carrry information, or variables or data that have acces to

// 10:27

// Scope Chain
// all of this variables have access to the global scope
// all of this function have global lexical enviroment
// they are written in the global space. Not inside of another function
// on the main page they get attach to the global/window object
// they have access their own variable enviroment
// they have access to their own variables
// they have access to a link called Scope Chain
// The Scope Chain links and give access to variables 
    // that are in our parent enviroment
    // in this case to the global enviroment

// In javascript our lexical scope 
    //(available data + variables where the fuunction was defined) 
    //determines our available variables. Not where the fuunctiion is called 
    //(dynamic scope)

// No matter where the function is called in the execution stack
    // what matters where the function is written

// Interesting characteristc
    // Idea of 'lexical scope/ static scope'
    // only by looking at the source code we can determine
    // which enviroment the variables & data are available in
    // that what the javascript compiler does
    // the javascript compiler looks at the code & attaches all this scope chains
    // before it even runs the code
    // Because we have lexical scope
    // we know what enviroments are linked to each other &
    // we know what data can be access by which function

    // the scope chain starts where the variabble is defined &
    // goes all the way down to the global context
    // to see if the variable exists

    // Hey where can I access that variable ?
    // Where is that variable in my code ?

var x = 'x'
function findName() {
    console.log(x)
    var b = 'b'
    return printName();
}

function printName() {
    var c = 'c'
    return 'Andrei Neagoie'
}

function sayMyName() {
    var a = 'a';
    return findName()
}

sayMyName()

// 11:06

// A function Lexical enviroment
    // finName is written inside of sayMyName function
    // findName function lexical environment is sayMyName &
    // printName function lexical environment is findName

// the scope chain (cadena de alcance) goes down
// hipothetically 
// printName have access to 'b' & 'a'
// findName have access to 'b' & 'a'

// by running console.log(a) inside function printName()
// I go up the scope chain one function lexical environment to finName & check if is there
// there is no in findName
// So go up another level in scope chain to sayMyName & find 'a'

// but

// if I console.log(c) in findName I get an Error 'c' is not defined

// The global scope is the outter most scope
// so variables declared outside a function are called 'global scope'
// they can be access in any other scope
// that is inside of the functions
// we can always access global scope

// Local Scope
// any scope that is local to a function
// variables declared to a local scope are accesible within this scope
// aswell as any scopes surrounding

// scope defines the accesability of variables and function in the code
// it tell us what we can access, what we cannot


function sayMyName() {
    var a = 'a';
    return function findName() {
        var b = 'b';
        // console.log(c)
        return function printName() {
            var c = 'c';
        // console.log(c)
        // console.log(b)
        // console.log(a)
            return 'Andrei Neagoie'
        }
    }
}

sayMyName()()()

// 'undefined' is a type in javascript
// it means that we have a variable but is not assigned anything right now

// lexical environment === [[scope]]
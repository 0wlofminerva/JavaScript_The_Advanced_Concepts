// I want to create a generic multiplyBy function

const multiplyBy

// I am going to do a function that accepts number 1 'num1' a number, 

const multiplyBy = function(num1) {}

// & inside of this functioin is going to return another function 
// that is going to have 'num2' as a parameter

const multiplyBy = function(num1) {
    return function(num2) {

    }
}

// & thatts simply is going to return num1*num2 number one time number 2

const multiplyBy = function(num1) {
    return function(num2) {
        return num1*num2
    }
}

// & with this in place I can do multiplyBy(2)

const multiplyBy = function(num1) {
    return function(num2) {
        return num1*num2
    }
}

multiplyBy(2);

// & I can assign this to another variable
// lets say

const multiplyBy = function(num1) {
    return function(num2) {
        return num1*num2
    }
}

const multiplyByTwo = multiplyBy(2);

// & know I have this functionality

const multiplyBy = function(num1) {
    return function(num2) {
        return num1*num2
    }
}

const multiplyByTwo = multiplyBy(2);
multiplyByTwo(4)

// this function that I can keep reusing
// I can lets say multiplyByTwo by 10

const multiplyBy = function(num1) {
    return function(num2) {
        return num1*num2
    }
}

const multiplyByTwo = multiplyBy(2);
multiplyByTwo(4)
multiplyByTwo(10)

// I have the functionality over & over
// with this Higher Order Function

// what is the Higher Order Function here
// the multiplyBy is a Higher Order Function

const multiplyBy = function(num1) {
    return function(num2) {
        return num1*num2
    }
}

// because it returns another function

                                 {
    return function(num2) {
        return num1*num2
    }
}

// & I can also extends this 
// I can create something new
// I can do multiplyByFive

const multiplyBy = function(num1) {
    return function(num2) {
        return num1*num2
    }
}

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);
multiplyByTwo(4)
multiplyByTwo(10)

// & if I do multiplyByFive Here
// I can now extends multiplyByFive
// lets say multiply 6 by five

const multiplyBy = function(num1) {
    return function(num2) {
        return num1*num2
    }
}

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);
multiplyByTwo(4)
multiplyByTwo(10)
multiplyByFive(6)

// we get 30

30

// awesome

// we can also write this in a cleaner way
// & it looks something like this:

const multiplyBy = (num1) => (num2) => num1*num2

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);
multiplyByTwo(4)
multiplyByTwo(10)
multiplyByFive(6)

// a single line of code
// if I run this it stills work

30

// I like us¡ing arrrow functions because visualy it makes sense

// all I say is give me a parameter 
(num1)

// & then another parameter

(num2)

//

const multiplyBy = (num1) => (num2) => num1*num2

//

const multiplyBy = (num1) => (num2) => num1*num2

multiplyBy(4)(6)

// so if I do number one: (4)
// & then add another bracket multiply by (6)
// six times four:

24

// && thats all these brackets are showing you
// dont get confused by all these arrows

// its a Higer Order Function
// but each bracket shows you how to call a function
// so that we can  do something like this

// Higer Order Functions
// I hope you startt to see the power of them
// because we are gonna use them a lot in the rest of the course

// we learnt how to gi from a simle function
// to a function with parameters
// & finally a  supersian Higher Order Function

// the main benefit is the idea of maikng the code more general
// keeeping our code dry
// not reaping ourself
// just breaking things down into small functionalitites

// some people may argue that Higher Orrder Functions
// doesnt necesarily simply our code
// it makes it look mre complex & complicated
// & thats a subject up for debate

// but this fun new knowledge
// I am think we are ready to get into the first ?pilars clousures

/////////////////////////////////////////// 7. Closures

// we are finally Headersis time to learn the first pilar of jacascript
// that is closures
// as I sayed before these two pilars:

1 – closures

2 – prototypes

// I think give you superpowers
// if you understand them deeply as a programmer
// now you think i am exagerating Here 
// but hopefully after a few videos you understand why

// specially when it comes to closures 
// we unlock some really interesting habilities in our programms

// so lets lear how ?harvest power

// we have this things called closures in javascript
// because two things that we get 

// one is the fact that in javascript
// functions are first class citizens
// we have talked about this we know what that is
// we can pass functions arround like data
// like any type in javascript

// we also have this idea of lexical scope
// that is the javascript engine knows 
// based on where the code is written before even we run the code
// what variables which functions have access to

// & closure is simple a combination 
// of function & the lexical environment from which it was declared

// closures allows a function to access variables
// from an enclosing scope or environment
// even after it leaves scope it was declared

// sounds pretty confusing

// closuure is one of the most confusing things
// but it is an important topic

// let me demostrate with code

function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

a()

//

[Function: b]

//

function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

a()()

//

[Function: c]

//

function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

a()()()

//

grandpa > father > son

// if you have been working with javascript
// this shouldnt surprise yuu
// this is the expected behaviour

// but this is my question
// how does son remember what grandpa was?

// if we call function a()
// lets say const one


//

function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

const one = a();

// if we run this function
// this function was invoked so the only have we have remaining is this:

            function b() {
    let father = 'father'
    return function c() {
        let son = 'son'
        return `${grandpa} > ${father} > ${son}`
    }
}

function a() {}

// got pop up the stack

function a() {
    let grandpa = 'grandpa'
    return

}

// so what happen when things got pop up the stack?
// we remove the variable environment

// so shouldnt

let grandpa = 'grandpa'

// be garbage collected & thrown away becauuse we remove it from stack?
// right?

// somehow son have access to 

${grandpa}

// & also has access to

${father}

// even after we call the b() function

function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

const one = a();
b()

// & this is what closure is
let 

// lets visualize what happens
// diagram mograph video

// with a closureswhen we run a() functioin first
// it pops up into the stack or
// it gets pushed into the stack
// & we create a variable environment
// this context execution has grandpa
// as a variable
// buut also has paremeters here 
// such as tthe arguments keyword
// but because we havent give it any other parameters
// there is no other variables here
// just grandpa

// & the grandpa once we call function a()
// whats is goinig to happen to it?
// we have a cahin here that gives as a link to the global scope

// that means if there were any variables in the global scope
// or global executioin environmet
// then we might have access to them

// for now in here oonce this gets remove of the stack is gone
// but grandpa still remains

// thats why grandpa overhere goes up into the box of closure
// now, why is that?
// because this box overhere is  technically where the memory is
// is a bunch of memory
// as soon  as we dont things anymore
// we need to remove it

// however when the garbage collecter comes
// see grandpa & says ummm there is a closuure here
// is in the special closure here 
// & this special closure box
// I cant clean up
// because there is something that 
// is referencing grandpa from inside of it

// so the next b() function gets called
// again, we add it to the stack
// a new variable environment is created
// & we have father then

// once we father is removed
// or once b() getts pop up the stack
// well once again father is been reference
// by another function inside of it
// so gets put into the closure box

// & then c() comes arround
// finally gets called
// & we have 'son' variable here
// now, when we return the statement
// grandfather father son
// the c() variable environment is going to return
// & say alright lets find out what the grandpa variable 
// its going to look at the grandpa variable environment
// & say no I cant find it

// but then now
// instead o looking in the global scope
// global variable
// it looks in this little clousure box
// & say, hey! do youu have grandpa?
// I do
// Hey! do you have father?
// yea I do
// How cool is that!
// javascrip does something unique here
// the javascript engine makes sure that
// the function has access to all of the variables 
// outside of the function, with this closure
// that is this  little box
// so closure is a featuure of javascript

// lets go back to our function again

// because function c() is inside of function b() & function a()
// the javascript engine is gonna say
// alright I create a variable for you
// all the variables outside of the c() function
// I am going to keep arround if c() is using instanceof

// that is if we have another variable
// lets say

function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        let random = 7487623876
        return function c() {
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

const one = a();
b()

//

let random = 7487623876

// well the javascript engine 
// once b()is invoked
// isnt going to be random arround
// because its gonna be garbage colleted
// nothing is rreferrencing it
// buut the javascript engine is gonna to keep any 
// that still being reference by a child function
// in this case c() still father & grandpa
// so its gonna to keep them arround

// & closures are also called lexical scoping
// lets think about that
// we have seen that before, right?

// lexical scoping

// lexical means: where it is written
// scoping means: what variable we have access to

// by that definitiion
// that means the javascript engine before we run any code
// before we get to line 12 or line 13
// already knows which function has access to which variables
// because javascript is lexically scope or statically scope
// it sees during the first phase
// where it looks through code & says
// yea I am gonna keep grandpa arround
// I am gonna keep father arround
// even if he gets hold
// because I am gonna create these scope chains for us

// remeber this
// we have the hidden property scope
// that created our scope chains 
// & what we have access to
// so that the javascript engine
// before we run the code has 
// these little chains between the functions
// & this works because these values 
// are on the callstack
// instead they are in the memeory heap
// & the heap just gets clean by the garbage collector
// javascript engine ays no no no
// we need some of theses variables

// diagram

// why do we use closures again?
// just becauuse what I just mention

// we can have fuuntions that returns functions
// functioins as first clas citizen
// & we have this idea of lexical scope

// where we write the function matters
// not where we call the fuunction
// or  where we invoke the function

// lets look to another example

function boo(string) {
    return function(name) {
        return function (name2) {
            console.log(`${string} ${name} ${name2}`)
        }
    }
}

// a cleaner way with arrow functions is to simply do this:

const boo = (string)=>(name)=>(name2)=>
     console.log(`${string} ${name} ${name2}`)

// we remove all the brackets
// just like that & keep it in one line

// becase we only have one line here 
// we dont need curly brackets
// we have console log

// if I run

const boo = (string)=>(name)=>(name2)=>
     console.log(`${string} ${name} ${name2}`)

boo('hi')('tim')('beca')

// I get

hi tim beca

// if you havent realize why
// why I get so exited about closures
// & why youu should do?

// is because we can have some hidden powers now

const booString = boo('hi')
//5 years
const booStringName = booString()

// I could hipothetically 
// if the javascripit engine is running 
// wait 5 years & then finaly
// call

booString()

// & booString() even thouugh the boo('hi') function is off the stack
// it still remember for me this ('hi') that we gave it 
// five years ago

// thats because remember parameters are treated like local variables
// that get store in variable environmets

// so I can wait five years & hold on information in memory
// doesnt get deleted
// I can call it whenever I want

// revisit this idea more to understand its true power


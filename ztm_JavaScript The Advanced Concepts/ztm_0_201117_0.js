//16. Global Variables//

// how evil they are
// Andrei, why dont we just do global variables all the time?
// Remember how we had global lexical environment?
// Why dont we just declare all our variables into  de global scope?
// Whatever function we use, will have access to all those variables?
// Wouldnt it be nice if everything have access to everything?
// & we dont have to worry about undefined, undeclared variables
// Instead of having something like previously, where we have these weird scope chains
// Dosent it make our code more complex? Harder to understand
// There is few issues with what we called 'poluting the global name space'
// having to much data on our global executioin environment
// remember, we have limited space, limited memory
// we talk abouut when memory leaks happen,
// when we have to much stock in our memory heap
// that eventually it overflows, making things slower & slower,
// until our browser crash
// one of the main ways that we do that, is with global variables
// now you are thiinking, ... Well, Am i going to declare only a few variables?
// I am not gonna have so many, thhat I am gonna completely crash the webbrowser

// there is another issuue here with global variables
// & why we want to avoid or minimize the use of global variables

// the issue with global variables is that you can have variable collision 1'55'' – 16lesson

// for example imagina that we have multiple scripts Headers, 
// as our applicatiion gets larger & larger
// we have more than one javascript file

// <script>var z = 1</script>
// <script>var zz = 2</script>
// <script>var zzz = 3</script>
// <script>var z = 10000</script>

// if I look at z in the console I get 1000
// i overwritten whatever I have overhere at the top z = 1
// because we have a collision
// & the way it works, in the html all these script tags get combined
// essentially to one execution context
// so everrything gets bost up together
// everything is the global execuutiion context
// & they overwrite each other, if  there is any duplicates

// this creates a lot of possible bugs
// we write different variables
// & maybe we think we are save in the first script
// but somebody in another file overwrites our super secret important variables

// How do we solve this issue
// we have an entire sectioin on thhis topic
// about this idea of modules
// but I want to scratch the surfaces here
// in the next video when it comes to scopes
// that is
// how we use what we know now about scope & scope chain
// to avoid the issue og global variables

//17. IIFE//

// Global variables are bad, they cause a lot of issues
// How can we minimize it
// with modern javascript we have things like ES modules and modules bundles

// something that we are gonna talk about in the course, but before we have those things
// javascriipt developers use what we know now about the languaje itself to avoid this global variable issues
// its called an IIFE or an immediately invoked function expresion

// lets see what it looks like
// an IIFE is a function expression thats look something like this:

// IIFE

(function() {

})();

// here we go!, confused!?
// dont BeforeUnloadEvent, because we already know this 
// & we should understand what the javascript engine is going to do with this code

// You see IIFE are a common javascript design pattern
// designed by a lot of popular libraries
// specially back in the day, like jquery or even backbonejs

// the idea was using this pattern, 
// we can place all library code inside of local scope
// to avoid any ?naive based collition

// So, lets have a look one by one

// the first thing we are doing is,
// we say with these brackets, hey this isnt a function declaration
// its a function expression
(function
// the javascript engine, wont see function as the first item on the line,
// instead is going to see these brackets,
(
// this automatically makes it into a function expression
// & then after we ve done that
// we created an anonimous function, there is no name attached to this function
function()
// & we immediately invoked it
// that is we call the function
();

// So, if i run this I get uundefined

// just to test our assumption

// what if I do something like this
// what if I use a function eclaration
// & call it immediately afterwarrds

function(){}()

// thats our function declaration
// & right afterwards I gonna call it
// I gonna to get a SyntaxError

// you cant really call a function declaration immediately afterwards
// a function expression however you can

// whats the benefit in doing this?
// since the anonimous function within this IIFE
// is a function expression
// & is not being assigned to any global variables
// no global properety is going to be created
// & all of the properties created inside overhere,
// inside the function expression
// are gonna to be scoped inside the curly brackets
// so its only to be available inside this IIFE
// but not available outside

(function() {

})();

//

(function() {
    var a = 1
})();

a;

// I cant really acces 'a'
// 'a' is not defined

// Immediately Invoked Function expression

// diagram

// an Immediatelly Invoked Function Expression
// simply allows us to call immediately as javascript is executing
// is gonna define what it is
// right afterwards with the brackets its going to call it
// it is gonna to create a new variable environment
// a new execution context
// that is gonna have the new variable scope
// this allows us to attach private data right in the variable environmet
// that can be access by the global executioin context
// because the chain runs down

// before I get into an example
// let me show you another thing

(function() {
    var a = 1
})();

a;

// 13:13

// what do you think happens if I remove or move this brackets to inside overhere,

(function() {
    var a = 1
}());

// will anything change?
// no it does not
// we still following the rules of javascript
// we have the function expression because of the parentesis
// && then right after the compiler looks through the code and says
// alright, here is the function

function() {
    var a = 1
}

// will immediately go to run

// lets see this in action

// httml sheet
// video audio not transcripted
// further coverage notetaking with ipad

// immediatly invoked functiion expressions
// is something that we will get into a little bit more
// when we talk about modules
// but I want to introduce you now
// because they take advantage what we learn about scope
// it enables us to attach private data to a function
// it creates a fresh environmet for us
// so, that we dont polute our global execution context
// as we start to get more and more want to make sure that we wrap up files
// in a function to scope things into their own environments
// minimize the amount  of data that we place on the global execution context



///////////////////////////// 18. This keyword //

// the scariest part of javascript
// 'this'
// somebody say its the most confusing
// some even hate it so much
// that they try to avoid at all cost in their code
// because it creates so much confusion

// lets try to code this mystery and figure out what 'this' is all about

// keep in mind this is a topic we will really dive depp into
// during ourobject oriented programming session of the course
// but we are focusing on learning the fundamentals
// of 'this' keyword in this section
// so that when this term comes out in the coursewe have
// a foundation ready
// so what is this
// although it looks intimidating this is not that hard
// because all that it means is this

// this is the object that the function is a property of

// thats it

// what dose that mean?
// well,
// this is the object that the function is a property of

obj.someFunc(this)

// simply means that we have an object
// this object have some function
// inside of this function
// when we do something
// we have access to this keyword
// && this refers to the object that the function is a property of

// video audio not transcripted
// further coverage notetaking with ipad

// remember our diagram
// when the global execution context starts
// during the creation phase
// we create the 'global object' & 'this'
// & they equal each other
// in this case the 'window object' is 'global object' 

function a() {
    console.log(this)
}

//

a()

//

window.a()

// 'a' function is a property of the window object

// we get window
// this is equal to window
// remember the definition
// this is the object that the function is the property
// that means that we are calling window.a() & running it

// so, what is the object that the functioin is a property of?
// the functioin is the prroperty of the window object
// that´s what this is, is the  window

// here is the problem
// when it comes to coding
// this javascript is a little bit weird 
// in the sense that most of the time when we are coding
// we never want 'this' to refer to the 'global object'
// but obviously it happens all the time
// as we see later on one the pitfalls 
// with this is unexpected have this refer to the window object
// when we think it should be something else

// video audio not transcripted
// further coverage notetaking with ipad

// 'use strict' was added to javascript 
// as way for us to avoid the common mistakes that can happen with javascript
// when the languaje was originaly designed it wasnt perfect
// & there were bits & pieces of mistakes
// & things like 'use strict' allow us to not have this 
// where the this refers to the window object

function b() {
    'use strict'
    console.log(this) 
}

//

b()
undefined
//

// use strict can be added at the beginning, the first line of a function
// or at the beginning of our script
// ES6 Modules (discussed later) have 'use strict' by default

// diagram



function a() {
    console.log(this)
}

a()

// remember our global execution context
// we get this ou of the box
// but also when we have a new function we have this aswell
// but, Whats the point of it?
// if most of the time we dont even care that 'this' points to the global object
// Why  do they even include this in the languaje

// lets have a look of an example where 'this' actually becomes useful,
// and the reason that 'this' keyword was created

const obj = {
    name: 'Veronica',
    sing: function() {
        return 'lalala' + this.name
    }
}

obj.sing()

// inside of an object how can access a property 
// so that sing: function() can sing Billy´s name
// we can write return: 'lalala Billy' statically,
// but what if it changes and becomes Veronica,
// we use the 'this' keyword
// I can simply say 'this.name'
// why is that?
// because, remember our definition,
// 'this 'is the object that the functioin is a property of
// 'this' is the object that the 'sing function' is a property of

// we are simply saying here ('this.name') 'object.name'
// obviously obj.name wouldnt work here
// so we have to have something else like this keyword

// so if I run
// obj.sing()

// I have:
// lalala Veronica

// if I change back this to Billy

const obj = {
    name: ' Billy',
    sing: function() {
        return 'lalala' + this.name
    }
}

obj.sing()

// i dont have to change anything in the function
// it gives me the same correct function
// I lalala Billy

// by the way you can actually convert this to a newr syntax
// which also works & its a little bit cleaner

const obj = {
    name: ' Veronica',
    sing() {
        return 'lalala' + this.name
    }
}

obj.sing()

// 'this' is the object that the functioin is the property of
// this is the rule of thumb I like to use
// this refers to whatever is to the left of the dot
// remember with an object
// we access properties and methods of an object
// and a method of an object is a function
// methods are functions that are inside of objects
// the property in method can be access
// with this dot notation ( obj.sing() )
// & when it comes to 'this'
// 'this' simply refers to:
// Hey! inside of this function obj.sing()
// whats to the left of the dot,
// well: obj
// its whatever to the left of the dot
// which is
// the object of that the function is a property of

//...//

// lets use another example

const obj = {
    name: ' Veronica',
    sing() {
        return 'lalala' + this.name
    },
    singAgain() {
        return 'lalala' + this.name + '!'
    }
}

obj.singAgain()

//

const obj = {
    name: ' Veronica',
    sing() {
        return 'lalala' + this.name
    },
    singAgain() {
        return 'lalala' + this.name + '!'
    }
}

obj.singAgain()

// but this is not good
// one of the principles of being a good programmer is 'drop'
// do not repeat yourself
// this is a simple example with one line of code when it comes to a function
// you see here that we have just copy code
// the exact same thing over and over
// a better way of doing this is
// to call the same function and the add the exclamatioin mark to it
// once again
// if we change something
// lets say we change something in the same function, we dont have to change it here aswell ( refering to the secon return )
// we are not repeating ourselves
// we are keeping things dry

const obj = {
    name: ' Veronica',
    sing() {
        return 'lalala' + this.name
    },
    singAgain() {
        return this.sing() + '!'
    }
}

obj.singAgain()

lalala Veronica!

// here are the two benefits of this
// & why this keyword was created

// the number one reason
// 1: it gives methods access to their object
// it gives 
// sing() access to the object
// const obj = {
// so that it can use properties and methods within that object
// name: 'Billy' property
// singAgain() {
//     return this.sing() + '!'
// } method

// the second reason that this keyword is so important or it benefits us
// 2: we can execute the same code for multiple objects
// What does the second one mean

// number one that makes sense
// we have access to all these methods and properties
// of the object
// we can keep our code dry like I sown your here
// but what about this second part
// lets talk about the second part
// the second benefit of this with another example

// lets create a function

function importantPerson() {
    console.log(this.name)
}

importantPerson()

//

function importantPerson() {
    console.log(window.name)
}

const name = 'Sunny';
const obj1 = {
    name: 'Cassy',
    importantPerson: importantPerson
}
const obj2 = {
    name: 'Jacob',
    importantPerson: importantPerson
}

// it executes the same code for multiple objects
// I have written a function once and multiple objects can use this
// object one obj1 have importantPerson method, &
// object two obj2 has importantPerson method once again

// as long I change the code only here,(this.name)
// both of them are goin to get the changes

function importantPerson() {
    console.log(this.name+'!')
}

window.importantPerson()

if I add an exclamation mark here '!'
both of tthese have the same code
again keeping your code dry

but what happens now?
lets see what happens now

//

function importantPerson() {
    console.log(window.name)
}

const name = 'Sunny';
const obj1 = {
    name: 'Cassy',
    importantPerson: importantPerson
}
const obj2 = {
    name: 'Jacob',
    importantPerson: importantPerson
}

console.log(name)

// what the result would be?
// or more importantly if I run importantPerson

function importantPerson() {
    console.log(this.name+'!')
}

const name = 'Sunny';
const obj1 = {
    name: 'Cassy',
    importantPerson: importantPerson
}
const obj2 = {
    name: 'Jacob',
    importantPerson: importantPerson
}

importantPerson()

// remember the importantPerson function 
// simply runs console.log(this.name+'!')
// the importantPerson in this case is
// whats to the left? or 
// who is calling the important person?
// the global object window is calling
// so we get Sunny
// because Sunny is the property of the global object
// which we created

// but, What if I do ...
// obj1.importantPerson()
obj1.importantPerson()
// Who is the importantPerson?
// who is calling it?
// object one obj1 is calling importantPerson
// the left of the dot
// so the importantPerson in this case is 
// Cassy!
// becuase we are calling this method
// importantPerson: importantPerson
// and this is refreing to
// this is a function that is a method of object one obj1

// if I change it to object two obj2
// obj2.importantPerson()
obj2.importantPerson()
// I get Jacob!

// those are the two main benefits of this 
// it gives methods access to the object
// & it also executes same code for multiple objects
// both thing make our code cleaner
// we are not repeating ourselves

// to review
// this is usually determined by asking 
// Hey, execution context,
// what call the function?
// what call me?
// you can think of 'this' 
// as who call me?
// who is that person that ran me?
// as a function
// & the this keyword act as a placeholder
// & will  refer to whichever object call that method

// now, there is an interesting thing that happen here
// which we are gonna visit in the next video







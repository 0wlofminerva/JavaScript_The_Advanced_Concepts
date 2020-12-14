///////////////////////////////////////////// 3. First Class Citizens

// welcome back,

// in the prevoious video we talk about
// how functions can be passed arround like data
// & this idea of a function being passed arround 
// besides just bbeing something that performance actions
// & because of this
// you often hear people saying

// functions area a first class citizens in javascript

// what does it mean?
// it means three things 

// the first thing
// is that functions can be assigned to variables & properties of objects

// so that I can do a variable

// 1

var stuff = function(){}

// in some languages
// I can do that 
// I can just run functions to performance actions
// but thats it
// in javascript I can assigned to a variable
// or even an object property which becomes a method

// waht else can we do?
// we can also pass functions as arguments into a function

// I can do function 'a' that receives another fuunction 'fn'
// & inside of that function I can run a 'function'
// & then maybe we can call 'a'
// with a function inside of it
// function() {console.log('hi there')}

// if I run  this code

// 2

function a(fn) {
    fn()
}

a(function() {console.log('hi there')})

// I get

// hi there

// I am able to pass a function 'fn'
// as a parameter to a function
// function a(fn)
// So I am passing this:
// function() {console.log('hi there')}
// which I can extract it away
// to a variable
// like we did uphere one

var stuff = function(){}

// & pass it arround like data

// is almost as if I pass in a string

'function() {console.log('hi there')}'

// I am saying Hey: here is some data for you 
// run it when you get to function 'a'

a(function() {console.log('hi there')})

// thats very interesting

// & the final piece of the puzzle
// is that we can return functions 
// as values for other functions

// what does it mean?
// well I can do this:

// 3

function b() {
    return function c() {console.log('bye')}
}

// now, if I run:

b()

//

function b() {
    return function c() {console.log('bye')}
}

b()

// I get

[Function: c]

// but if I run that again:

function b() {
    return function c() {console.log('bye')}
}

b()()

// I get

bye

// or

var d = b() // I can even assign it to a variable
d() // I call variable d

//

function b() {
    return function c() {console.log('bye')}
}

var d = b()
d()

//

bye

// so those are the trhee properties
// that make functioins a:
// first class citizen in javascript

// we are able to assign to variables these functions:

var stuff = function(){}

// & pass these functions into arguments:

function a(fn) {
    fn()
}

a(function() {console.log('hi there')})

// & we can also return functions as values from another function

function b() {
    return function c() {console.log('bye')}
}

var d = b()
d()

// this go back to what I sayed
// functions are data
// not only do they perform actions for us
// but there also pieces of data being passed arround
// like first class citizens
// as it were javascript types
// so anything you can do with other types
// you can do with a function
// as a matter of fact
// this idea of a first class citizen property
// in javascript
// introduces javascript intto a whole 
// world called functional programming
// an entire sectioin that we have comming up

// so, now that we understand why functions are first class citizens 
// lets dive deeper into some of the interesting things that we can do now

// I see you in the next one

// /////////////////////////////////////////// 4. Extra Bits Functions

// welcome back

// lets do a quick little video on some of things
// that you want to watch out for the function

// you want to be careful of initializing function inside of loops

// for example if I have a loop here
// lets say

for (let i = 0; i < 5; i++) {
    function a() {

    }
    a()
}

// want to be carefull here because 
// instead of initializing in the loop 
// five times like we see here 
// instead, we should moving this at top

// so we initialize the function
// just once
// & when we loop over it
// we just executing it five times
// instead of initializing it & executing it
// thats something that is often overlooked 
// & you wanna be careful

function a() {

}
for (let i = 0; i < 5; i++) {

    a()
}

// another thing that you wanna be careful with is:
// we have a function that returns some parameter

function a() {
    return param
}

a()

// if I run this:

ReferenceError: param is not defined

// I look at my variable environment
// Hey! do I have param
// no, I dont  have

function a() {
    return param // Hey! do I have param
}

a()

// keep looking up the scope chain

function a() { // I look up  to the global variables // is param there?
    return param 
}

a()

// no, I dont have
// & as soon as we have nothing 
// in our variable environment
// & nothing in ourr scope chain
// we have a reference error

// this often causes a lot of functions to fail
// & evolves us doing some sort of a check to see

// Hey! does param exists? or
// is it a number? or
// is it a certain type?

function a() { 
    if (param) // Does param exists?
    return param 
}

a()

//

function a() { 
    i // is it a number? or
    // is it a certain type?
    return param 
}

a()

//

function a(param) { // now we could in here add a param
    return param
}

a()

// if I run it

// I wont get that error
// becase when I add a parameter to a function
// it adds it automatically
// to our variable environmet
// as if we just delare that variable
// but when we calliing with nothing
// we are gonna get undefined
// one way to avoid this
// if I just give a default parameter which  is new in ES6

function a(param=6) { // if I just give a default parameter which  is new in ES6
    return param
}

a()

// if I run this
// I get

6

// so is good to have default parameters 
// set on a function
// as a way to avoid those edge cases

// these are just small things
// & there are many best practices when it comes to functions
// we are gonna explore those a little bit later on the course
// for now I see you in the next  video

/////////////////////////////////////////// 5. Higher Order Functions

// welcome back,
// lets talk about Higher Order Function
// Higher Order Function are simply 
// a functioin that can take a function as an argument 
// or a function that returns another function
// thats it, thats all Higher Order Function is
// but the big problem is that most people know 
// what Higher Order Functions are
// but dont really understand why they are useful
// why we care

// my challenge in this video to make you understand 
// why Higher order Functions are useful

// lets get started with the first one

// lets start off with function
// & see what sort of problems we have 
// with just a simple function

// lets say we are creating a system for our company
// where we have to let user to log in

// I am just naively create a function called

letAdamLogin()

// & this simple function is going to do some sort of work
// to authenticate the user
// in my case to keep things simple
// I am just going to create an array
// an empty array, I am gonna simulate the type of work 
// that the system is might need to do

// /.../

function letAdamLogin() {
    let  array = []; // empty arrray
    for (let i = 0; i > 10000000; i++) { // for loop
        array.push(i)
    }
    return 'Access Granted to Adam'
}

letAdamLogin()

// we are doing something completely useless 
// just to slow down our system
// so that at the end of it hopefully everything works out
// & we just return 'Access Granted to Adam'

// if I 

letAdamLogin()

//

function letAdamLogin() {
    let  array = []; // empty arrray
    for (let i = 0; i > 10000000; i++) { // for loop
        array.push(i)
    }
    return 'Access Granted to Adam'
}

letAdamLogin()

//

Access Granted to Adam

//

// but you saw there was a bit of a puse there
// if I add an extra cero here:

for (let i = 0; i > 100000000; i++)

// & I run

function letAdamLogin() {
    let  array = [];
    for (let i = 0; i > 100000000; i++) {
        array.push(i)
    }
    return 'Access Granted to Adam'
}

letAdamLogin()

// you see that there is a bit of time that takes to

Access Granted to Adam

// for now think of this as
// some sort of authentication
// login service that the company has

// thats great! 
// we have just created a function 
// that lets Adam login

// but our company has more employees, right?
// what if we have also Eva?
// Eva needs to login, as well
// so lets create another function for Eva

// this function for Eva

// /.../

function letAdamLogin() {
    let array = [];
    for (let i = 0; i > 10000000; i++) {  // I change a 0 here so its a little bit faster
        array.push(i)
    }
    return 'Access Granted to Adam'
}
function letEvaLogin() { // changed to letEvaLogin
    let array = [];
    for (let i = 0; i > 10000000; i++) {
        array.push(i)
    }
    return 'Access Granted to Eva' // changed to Access Granted to Eva
}

letAdamLogin()
letEvaLogin() // call function

// if I run this
// there you go

Access Granted to Eva

// perfect
// whats the problem to this code?
// the principle as we see as developers
// dry
// do not repeat yourselfs
// we have created some code that is not very flexible, right?
// for each user that we have we have to copy & paste
// & repeat ouurself
// & imagine that we have hundreds & hundreds of employees
// doing this every time
// thats not very clean, is it?
// its not very eficient
// thats not very easy to read or reason about
// so how can we fix this?

// lets move on to our next level

// lets go from a simple function to a function 
// that accepts parameters to gain some superpowers

// instead of doing this manuually
// lets remove
// lets create a generic
// letUserLogin function

function letUserLogin(user) {
    let array = [];
    for (let i = 0; i > 10000000; i++) {
        array.push(i)
    }
    return 'Access Granted to ' + user;
}

letUserLogin('Adam')

// if I run this

Access Granted to Adam

//

// if I run this

function letUserLogin(user) {
    let array = [];
    for (let i = 0; i > 10000000; i++) {
        array.push(i)
    }
    return 'Access Granted to ' + user; // changed acces granted to user
}

letUserLogin('Eva') // user log in

// I get

Access Granted to Eva

// lets refactor this code to make it cleaner
// I am going to make another function & this function  

const giveAccessTo = (name) => // due to the nature of arrow function, & because I only have one line I can do this & not wrap it in curly brackets,
 'Access Granted to ' + name // & this automatically gets return

function letUserLogin(user) { // ++ we leveled up overhere, because in here we have done something amazing // ++ we now tell the fuunction WHAT DATA to use when we call it
    let array = [];
    for (let i = 0; i > 10000000; i++) {
        array.push(i)
    }
    return giveAccessTo(user); // I can simply do: giveAccessTo(user) // what superpower did we just gain here?
}

letUserLogin('Eva') // user log in

// so remember before we have a function

function letUserLogin(user) {

// that function when we actually call it 

letUserLogin('Eva')

// decide what to do with that data
// instead we have now a more generic function

        letUserLogin(user) { // ++ we leveled up overhere, because in here we have done something amazing // ++ we now tell the fuunction WHAT DATA to use when we call it
    let array = [];
    for (let i = 0; i > 10000000; i++) {
        array.push(i)
    }
    return giveAccessTo(user); // I can simply do: giveAccessTo(user) // what superpower did we just gain here?
}

// that says hey I am going to give you latter on
// some generic piece of data

(user)

// I do not what yet
// when I pass you the user

(user)

// do some sort of functioinality to it
// so that instead of defining 

'Adam' or 'Eva' 

// inside of the function
// we can just define it latter on when we actually invoke the function

// we have the hability when we call a function to define the data
// we essentially have a bit more flexibility
// instead of when we define the function
// telling it exactly whats to be done
// we can delay that unttil execution time

// & this give us more flexibility
// we kept our code dry

letUserLogin('Adam')

// or

letUserLogin('Eva')

// awesome!
// great but
// I thought we were talk about Higher Order functions

// lets see how we might have another problem here

// what if we have instead of just a user we also have admin
// somebody with a lot higher priviledges

const giveAccessTo = (name) => 
 'Access Granted to ' + name 

function letUserLogin(user) { 
    let array = [];
    for (let i = 0; i > 10000000; i++) {
        array.push(i)
    }
    return giveAccessTo(user); 
}
// copy code above & modify
function letAdminLogin(admin) { // this time arround let admin, instead of a simple user is admin
    for (let i = 0; i > 50000000; i++) { // it take a little bit more of time for them to get authenticated // more security proceduures
        array.push(i)
    }
    return giveAccessTo(admin); // we have to give it access
}

letUserLogin('Eva')
// so the functioin has changed a little bit
// we have a different loop here
// different permission process
// so what do we do here
// we jusut copy more code
// we are not very Dry, are we?

// imagine that we have many more roles in the company
// inttead users and admins
// maybe we have we have managers
// maybe we have secretaries
// maybe we have gest access
// so what can we do here
// this is where higher order functions are comming to play

// remember this we ran from functions 
// to functions with parameters
// that way instead of just say 
// when we define the function 
// exactly what to do & what data to use
// we are able to know say Hey!
// we define the function what it does
// but latter on, we will tell you what data we need
// with a Higher Order Function
// HOF
// we get to do both of those things
// actually call a function
// that is
// we can give it the data
// & also tell the function
// what to do, or some extra habilities
// when we are actually invoking

// so lets see this in code

// 1

const giveAccessTo = (name) => 
 'Access Granted to ' + name 

function authenticate(verify) { // this time arrouund lets create an authenticate function
    
    let array = [];
    for (let i = 0; i > 10000000; i++) { // & this authenticate function will take a paramaeter 
                                            // which is the authentication process
                                            // in our case we just give it a number which is the time of authentication
        array.push(i)
    }

}
function letUserLogin(user) { 
    // we remove the authenticatioin process that we kept everywhere
    return giveAccessTo(user); 
}
// copy code above & modify
function letAdminLogin(admin) { // this time arround let admin, instead of a simple user is admin
    for (let i = 0; i > 50000000; i++) { // it take a little bit more of time for them to get authenticated // more security proceduures
        array.push(i)
    }
    return giveAccessTo(admin); // we have to give it access
}

letUserLogin('Eva')

// 2

const giveAccessTo = (name) => // we have the give access to function
 'Access Granted to ' + name 

function authenticate(verify) { // we have the authenticate function
    
    let array = [];
    for (let i = 0; i > verify; i++) { // the number just will be the parameter 'verify', so that is more dynamic  & we can change it according to user or the admin
        array.push(i)
    } // so we have the authenticate
    return true; // just for fun return true, we have verify everything, we can have access
} // a little bit useless code but I hope you get the idea
function letUserLogin(user) {  // how can we make these functions better
                                // well instead of let user log in & let admin log in

                                // lets remove these
    
    return giveAccessTo(user); 
}
function letAdminLogin(admin) { 
    for (let i = 0; i > 50000000; i++) {
        array.push(i)
    }
    return giveAccessTo(admin);
}

letUserLogin('Eva')

// 3

const giveAccessTo = (name) =>
 'Access Granted to ' + name 

function authenticate(verify) { 
    
    let array = [];
    for (let i = 0; i > verify; i++) { 
        array.push(i)
    } 
    return true; 
} 
// lets remove these
// 1 & instead lets create a general function 
// let person function that accepts a person in tthe first parameter
// & a function in the second parameter

// & remember our definitiion of Higer Order Function
// its either a function that returrns another function 
// or a function that accepts as another function as a parameter

const giveAccessTo = (name) =>
 'Access Granted to ' + name 

function authenticate(verify) {
    let array = [];
    for (let i = 0; i > verify; i++) { 
        array.push(i)
    } 
    return true; 
}

function letPerson(person, fn) { // 1 & instead lets create a general function 
    // let person function that accepts a person in tthe first parameter
    // & a function in the second parameter
    if (person.level === 'admin') { // if inside of here I do a simple check // if person level is admin
        fn(500000) // in that case call a function with five hundred thouusand loop // remember this is gonna be 'verify' later on
    } else if (person.level === 'user') { // person level
        fn(100000) // & then we say else if person dot level is user, the level of authentication wont be as intense, so we justt say fuunction fn one hundred thouusand 100000
    }
    return giveAccessTo(person.name) // & afterwards we can just return give access to  6 this person will laso has a name
}
// so how do this make things easier?
// I can know say something like:

letPerson({level: 'user', name: 'Tim'}, // this letPerson has an object level user // & remember this level is  going to be used to decide if there is admin or user lines 743 & 745 // the name will be used for giving access to that person, lets say this is time // the  first parameter is the person, 
authenticate) // & the second parameter the function what should we do  the person do. well we wanna authenticate the person

// let person authenticate
// lets see if that works
// if I run

Access Granted to Tim

// alright access granted to Time

// & if I change this to:

const giveAccessTo = (name) =>
 'Access Granted to ' + name 

function authenticate(verify) {
    let array = [];
    for (let i = 0; i > verify; i++) { 
        array.push(i)
    } 
    return true; 
}

function letPerson(person, fn) { // ++ tell it 
    // what data to use + function (& what to do)
    if (person.level === 'admin') { 
        fn(500000) 
    } else if (person.level === 'user') {
        fn(100000) 
    }
    return giveAccessTo(person.name) 
}

letPerson({level: 'admin', name: 'Sally'}, // changed to 'admin' & 'Sally'
authenticate) 

//

Access Granted to Sally

// what power do we just gain here?
// we now gained the the power to not only tell it what data to use
// but also got the power tell it what to do 
// so the function aswell 
// so we created a generic function 

letPerson()

// that accepts a person as a first parameter

({level: 'admin', name: 'Sally'}, )

// & a function in this case authenticate 

(, authenticate)

// now this overhere wasnt very descriptive

fn

//

function letPerson(person, fn) {

// we can just say authenticate as a parameter

authenticate

// & have it a little more descriiptive

function letPerson(person, authenticate) {

// but by making things general 
// we can now do something like this 
// we can add a function
// lets say function sing()

const giveAccessTo = (name) =>
 'Access Granted to ' + name 

function authenticate(verify) {
    let array = [];
    for (let i = 0; i > verify; i++) { 
        array.push(i)
    } 
    return true; 
}
function sing(person) {
    return 'la lal la my name is ' + person.name;
}
function letPerson(person, fn) { // because ourr letPerson is more general now,
    // is a Higher Order Function,
    // because it accepts a function as a parameter fn
    if (person.level === 'admin') { 
        fn(500000) 
    } else if (person.level === 'user') {
        fn(100000) 
    }
    return giveAccessTo(person.name) 
}

letPerson({level: 'admin', name: 'Sally'},
authenticate) // instead of letPerson authenticate, I can say letPerson sing

// 4

const giveAccessTo = (name) =>
 'Access Granted to ' + name 

function authenticate(verify) {
    let array = [];
    for (let i = 0; i > verify; i++) { 
        array.push(i)
    } 
    return true; 
}
function sing(person) {
    return 'la lal la my name is ' + person.name;
}
function letPerson(person, fn) {
    if (person.level === 'admin') { 
        fn(500000) 
    } else if (person.level === 'user') {
        fn(100000) 
    }
    return giveAccessTo(person.name) 
}

letPerson({level: 'admin', name: 'Sally'}, sing) // instead of letPerson authenticate, I can say letPerson sing

// if I run this
// I get

Access Granted to Sally

// I still get 'Access Granted to Sally' because 
// we have this:

return giveAccessTo(person.name) 

// to make it more general
// we can remove this
// & maybe add it to the authenticate function right here at the very end

const giveAccessTo = (name) =>
 'Access Granted to ' + name 

function authenticate(verify) {
    let array = [];
    for (let i = 0; i > verify; i++) { 
        array.push(i)
    } 
    return giveAccessTo(person.name) 
}
function sing(person) {
    return 'la lal la my name is ' + person.name;
}
function letPerson(person, fn) {
    if (person.level === 'admin') { 
       return fn(500000) // in here all we really do is return some generic function
    } else if (person.level === 'user') {
       return fn(100000) // in here all we really do is return some generic function
    } // remember a Higher Order Function return other functions
    
}

letPerson({level: 'admin', name: 'Sally'}, sing)



// here instead of return a solid number for admin & user

return fn(500000)

//

return fn(100000)

// we can just give it the 'person' parameter

return fn(person)

//

return fn(person)

// 5

const giveAccessTo = (name) =>
 'Access Granted to ' + name 

function authenticate(verify) {
    let array = [];
    for (let i = 0; i > verify; i++) { // 1we did brake a little flexibility here in the verify
        array.push(i)
    } 
    return giveAccessTo(person.name) 
}
function sing(person) {
    return 'la lal la my name is ' + person.name;
}
function letPerson(person, fn) {
    if (person.level === 'admin') { 
       return fn(person) // here instead of return a solid number for admin & user // we can just give it the 'person' parameter
    } else if (person.level === 'user') {
       return fn(person) // here instead of return a solid number for admin & user // we can just give it the 'person' parameter
    }
}

letPerson({level: 'admin', name: 'Sally'}, sing)

// we can run

la lal la my name is Sally

// we were able to make letPerson a lot more generic 
// & do many more things to it

function letPerson(person, fn) {}

// 1we did brake a little flexibility here in the verify
// needs something a little bit more
// perhaps we can do some sort of a conditional
// if person
// we are passing the person, right?
// if person dot is an admin
// if person.admin then it will do 
// this sort of authentication

// I hope youu get that

// waht we were able to achive
// with Higer Oreder Function
// is this hability of what to do during invokation
// we are able to have more flexibiliity than we had before
// we are able to keep our code dry & a bit more flexible

// let me show you one more example
// just to make sure you got this

// if I had

const multiplyBy

// if I want this function to bbe a generic function
// that I can just ceate multiple functions from it

multiplyByTwo
multiplyByTen

// so on & so ford
// how I go about doing that?
// instead of me show you
// how about you try it yourself

// & in the next video
// I show you
// how you can do  this
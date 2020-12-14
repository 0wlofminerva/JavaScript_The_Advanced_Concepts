/////////////////////////////////////////// 8. Exercise Closures

// welcome back
// lets do a fun little exercise
// if I run this function call me maybe:

// Exercise
function callMeMaybe() {
    const callMe = 'Hi I am now here!';
    setTimeout(function() {
        console.log(callMe);
    }, 4000);
}

// what is going to happen?
// this should be fairly obvious, right?

// if I run

callMeMaybe()

// we are using 

setTimeout

// If I run, I wait a few seconds ...

function callMeMaybe() {
    const callMe = 'Hi I am now here!';
    setTimeout(function() {
        console.log(callMe);
    }, 4000);
}

callMeMaybe()

// & look at that

Hi I am now here!

// I get a callback, thats great
// & what do we us here for us to get this
// if you gessed closures
// good you were paying attention

// because we have a function here

function() {
    console.log(callMe);
}

// that if you rememeber the way setTimeout works
// it gets sent to the web API
// to start a timer for four seconds

4000);

// & once that time is gonne
// we send this piece of code

function() {
    console.log(callMe);
}

// to the callback queue
// & the callback queue 
// is going to wait there 
// until the callstack is empty
// so callMeMaybe() has been called
// is now popped up the stack
// & the evnt loop is going to 
// push this function

function() {
    console.log(callMe);
}

// onto the stack 
// & run it
// & is going to console log call me

console.log(callMe);

// now, this variable

callMe

// technically it should have beeng gone. right?

callMeMaybe()

// has been poped up the stack by the time this line gets ran

console.log(callMe);

// but, because of closures,
// & yes even if some of the functions 
// go all the way out
// to the web API world
// well they still use closures
// & they are able to remember this variable

callMe

// because of closures

// let me ask you this
// based on what you now abouut closures,
// if I remeove that variable from outthere & put it down here
// What is going to happen?
// can you guess?
// before I hit ruun think about it

// I run the function

function callMeMaybe() {
    setTimeout(function() {
        console.log(callMe);
    }, 4000);
    const callMe = 'Hi I am now here!';
}

callMeMaybe()


// I wait, I wait ...
// & I got it back

// Hi I am now here!

// why is that?
// because it doesnt mattter
// where we define this variable
// yes, even if its const
// that doesnt get hoisted
// we dont care about hoisting here

// instead this piece of code

setTimeout(function() {
    console.log(callMe);
}, 4000);

// goes all the way into the web API world
// gets put out in the callback queue
// the event loop pushes it back
// onto the stack
// but by that time we already ran this function

const callMe = 'Hi I am now here!';
}

// const callMe has already been created & assigned
// & because it sees that there is an enclosing function
// that is using it
// is going to create a closure
// how cool is that

// al right
// lets ttake a bbreak & do some more exercises

/////////////////////////////////////////// 9. Closures and Memory

// welcome back
// I feel youu still not really convinced
// you are thinking Andrei you are over hyping closures
// they are not that exciting
// you said its gonna give me suuperpowers
// well maybe this video will convince you otherwise

// you see closures have two very important main benefits
// I mean there is obviously a lot of benefits
// but there is two that I really wanna focus on
// that is, they can be very:

Memory efficient

// & it also allows to do something called:

Encapsulation

// this two things are probably the coolest part of enclosuures
// I hope this is gonna blow your mind
// lets start off with the first one:

// Memory efficient

function heavyDuty() {
    const bigArray = new Array(7000).fill('😊')
    return bigArray
}

heavyDuty()

// this heavy duty function is heavy duuty
// because we are gonna create a big array here
// in a nice simple way to create a massive array
// is to do something like this:

const bigArray = new Array(7000)

// I filled it out with 7000 entries

// & uuse the fill method that comes with arrays
// & fill it in with smile faces

const bigArray = new Array(7000).fill('😊')

// in here we justt return big array

function heavyDuty() {
    const bigArray = new Array(7000).fill('😊')
    return bigArray // return big array
}

heavyDuty() // just to test it out lets see what happens when I run heavy duty 

//

[
    '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊',
    '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊',
    '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊',
    '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊',
    '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊',
    '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊',
    '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊',
    '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊',
    '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊',
    '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊', '😊',
    ... 6900 more items
  ]

// lots of smile faces
// everybby is is happy
// thats great

// obviously thats a silly example
// but let assume that this is a heavy duty operation that we need to do
// maybe this operation  is accessing a massive array

// for example if I do index:

function heavyDuty(index) { // index
    const bigArray = new Array(7000).fill('😊')
    return bigArray[index] // I can access big array by the index number
}

heavyDuty(688) // I can access different parts of the array

// if I run this

😊

// there you go I am accessing the index of the array
// so far so good
// but let say this index 688
// is someplace in maybe a data base
// or just an array that get access a lot 
// what if we call this functions many times many many times
// everytime I run it

// lets add a 

console.log('created')

// which will be a string
// that we ran four times

function heavyDuty(index) { 
    const bigArray = new Array(7000).fill('😊') // we are creating a big array
    console.log('created') // added console log string
    return bigArray[index] 
}

heavyDuty(688) 
heavyDuty(688) 
heavyDuty(688) 
heavyDuty(688) 

// in this case we see here that
// we  are creating a big array 

const bigArray = new Array(7000).fill('😊')

// we are adding data to the memory

new Array(7000).fill('😊')

// which we have limited memory of
// we are creating it every time

// so everytime we run this function we create this Memory

const bigArray = new Array(7000).fill('😊')

// & then we return it

return bigArray[index] 

// & because nothing is referencing it
// it gets destroyed

function heavyDuty(index) { 
    const bigArray = new Array(7000).fill('😊') // we are create this memory
    console.log('created')
    return bigArray[index] 
}

heavyDuty(688) //  we are create this memory  above // & it gets destroyed
heavyDuty(688) //  we are create this memory  above // & it gets destroyed
heavyDuty(688) //  we are create this memory  above // & it gets destroyed
heavyDuty(688) //  we are create this memory  above // & it gets destroyed

// that doesnt sound very efficient
// wouldnt it be great?
// if there was a way
// for us to create this array 
// & because we know it is going 
// to be used a lot 
// to only create it once
// & just having in memory there
// so just constantly access it
// instead of do all that work
// how can we do that with closures?

// if you want pause here & try to solve it yourself
// Remember: we dont want to pollute the global scope
// otherwise I gonna get going

// instead of using the original heavyDuty() function
// lets create another function downhere

function heavyDuty2(index) { 
    const bigArray = new Array(7000).fill('😊') // we are create this memory
    console.log('created')
    return bigArray[index] 
}

// so heavyDuty2() we are gonna make some adjustments to it so it uses closure
// the first thing that we should think about
// a closure returns a function
// we wanna add this:

const bigArray = new Array(7000).fill('😊')

// to that little closure box
// & then return a function that holds a reference to big arrray

// so lets do that:

function heavyDuty2(index) { 
    const bigArray = new Array(7000).fill('😊')
    console.log('created Again') // changed to created again
    return function(index) { // in here create a function that receives an index
        return bigArray[index] // inside of here, return bigArray index
    }
}

// nothing much differnce from above
// except for one tthing
// we have created closure

// that is we have a reference

return bigArray[index]

// to bigArray:

const bigArray = new Array(7000).fill('😊')

// lets see what happens if we run this

function heavyDuty(index) { 
    const bigArray = new Array(7000).fill('😊') // we are create this memory
    console.log('created')
    return bigArray[index] 
}

heavyDuty(688) // I am going to run the heavy duty original function three times
heavyDuty(688) 
heavyDuty(688) 
const getHeavyDuty = heavyDuty2(); // Create a variable called getHeavyDuty  // this variable use the heavyDuty2 function
getHeavyDuty(688)
getHeavyDuty(700)
getHeavyDuty(800)

function heavyDuty2() { // heavyDuty2(index) doesnt need the parameter index anymore
    const bigArray = new Array(7000).fill('😊')
    console.log('created Again') 
    return function(index) { // because index is something that we are gonna pass through fuunctiion that gets return from it
        return bigArray[index]
    }
}

// if I run this:

created
created
created
created Again
😊

// did you see that
// obviously I am able to use heavyDuty() 
// or heavyDuty2() up over here because of hoisting
// function declaration
// get hoisted to the top

const getHeavyDuty = heavyDuty2();

// you see a difference here. right?
// the first heavyDuty() was created three times
// vs
// heavyDuty2() where we created closures
// we were able to create the bigArray once

    bigArray = new Array(7000).fill('😊')

// because we need to access it a lot
// we just maintain thatt closure scope over it
// we are able to call it over & over it

getHeavyDuty(688)
getHeavyDuty(700)
getHeavyDuty(800)

// & we are able to call it over & over 
// without doing all that creation destruction work 
// how cool is that

// still not convinced that closures are called?

// how about the second benefit of closures?
// encapsulation

/////////////////////////////////////////// 10. Closures and Encapsulation

// so ok you still not that impressed with closures
// you are a tough cookie to crack
// maybe with encapsulation I can convince you otherwise

// Encapsulation

// lets create a serious function this time
// not that silly functions that I kept creating

// this function well do a few things

const makeNuclearButton =  () => {}

// actually the first thing that 
// it should do is to launch a nuclear bomb

const makeNuclearButton = () => {
    const launch = () => return '💥' // I am going to create a launch function // this launch function is going to return a big boom
}

// alright, thats our launch function

// you know waht, I want this function to maybe do more than launch stuff
// lets have a count down
// or lets figure out how much time do we have without the bomb
// let me show you what I mean

const makeNuclearButton = () => {
    let timeWithoutDestruction // lets create a variable called:
    const launch = () => return '💥'
}

// & time without destruction will be cero 0

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0
    const launch = () => return '💥'
}

// we are gonna create a little counter 
// that counts how long its been 
// since we have this mutually assured destruction

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0
    const passTime = () => timeWithoutDestruction++; // so in here I am going to have a variable called passTime
    // & this passTime variable or function in this case 
    // which it happens to be assigned to a variable 
    // swill simply have timeWithoutDestruction & increment that time ++
    const launch = () => return '💥' ;
}

//

const makeNuclearButton =  () => {
    let timeWithoutDestruction = 0
    const passTime = () => timeWithoutDestruction++;
    const launch = () => return '💥'
    setInterval(passTime, 1000) // & finally to make all of this work I am gonna to add a setInterval
    // which is like a setTimeout but it keeps running the function that we give it
    // so in this time I am gonna to run pass time
    // so that is to increment the timeWithoutDestruction by one
    // & we will do it every one second
}

// so I have created this
// nothing has been return from this function

// lets return a few things

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction; // 3 – & I am going to create another function called const totalPeaceTime
    // which will just return the timeWithoutDestruction
    const launch = () => return '💥';
    setInterval(passTime, 1000)
    return {
        launch: launch, // 1 – I am going to return an object that has the launch function
        totalPeaceTime: timeWithoutDestruction // 2 – & lets maybe also make a totalPeaceTime function that simply gets the timeWithoutDestruction
    }
}

//

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => return '💥';
    setInterval(passTime, 1000)
    return {
        launch: launch,
        totalPeaceTime: timeWithoutDestruction
    }
}

//

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1; // you know what just to keep aligned with everything
// lets with the launch, before we return the bomb 
// lets change timeWithoutDestruction = -1
        return '💥';
    }
    setInterval(passTime, 1000)
    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime 
    }
}

//

// lets see if this works
// now I can assign this to a variable
// const ohno
// & ohno is gonna say make nuclear button

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return '💥';
    }
    setInterval(passTime, 1000)
    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime
    }
}
const ohno = makeNuclearButton();

// I am going to run this
// if I click run

Hint: hit control+c anytime to enter REPL.

// well nothing happens because we have to actually run some
// we have just assigned an object to ohno

// so by come down here & say:
ohno.totalPeaceTime()

// & I run this function:

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return '💥';
    }
    setInterval(passTime, 1000)
    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime
    }
}
const ohno = makeNuclearButton();
ohno.totalPeaceTime()

//

0

// in the dev tools
// if I do

ohno.totalPeaceTime()

// I get

12 

// 12 seconds have passsed

// /.../

// but then all if a sudden I decide I gonna launch

ohno.launch()

// boom

"💥"

// ohno boy we have a big explosion

// & if I go to total peace time

ohno.totalPeaceTime()

// we go back to:

85

// thats no good, but our function is working

// I hope this function isnt too confusing
// but let me demostrate something to you
// we use here closures
// the timeWithoutDestruction
// is something that this functions have access to
// but we dont also want people have powers like launch() right
// instead lets remove the launch function from the return object
// & instead just have totalPeaceTime()
// so that if I have run launch() now
// no launch is not a function
// & thats what encapsulation does
// its hidding off information that is inecessary 
// to be seen by the outside world r manipulated

// this gets into the idea of principle of least priviledge
// a big security principle when it comes to programming
// where you dont wanna get anybbody access to your API
// to your special functions or variables
// using closures we are able to access
// things like timeWithoutDestruction
// that I dont wanna anybody else touching
// because I just setInterval to constantly increment that

// but at the same time I want people 
// to have access to things like totalPeaceTime()
// so that that totalPeaceTime() function can access the variables 
// that are secret to

// & this is one of the  main variables of closures
// of data encapsulation
// & it refers to the idea that some data not be directly exposed
// & we are able to do that
// now, latter on the course when we will talk about modules in javascript
// you will see that classical moduule patterns 
// like peope used to use that immediately invoked function expressions
// use this pattern
// & we are able to do that because of closures

// I hope you trully understand the power of closures
// I think is time for us  to do a couple of exercises

// see you in the next one, byebye

/////////////////////////////////////////// 11. Exercise Closures 2

// welcome back
// lets do an exercise

// lets say I have a function called initialize
// & this function initiaizes let say a view of some sort
// perhaps is a webpage
// & this the first function that initializes
// the view of a webpage
// now, you wanna create this function but
// you are also hoping that people dont abuse of it
// because we have it out in the open in the global scope

//

function initialize() {}

//

// lets say maybe that is new on your developer team 
// comes in & by mistake doesnt know that 
// this thing shouuld be only called once
// & instead in their code initialize a bunch of times
// & maybe this is not what you wanna to do
// so that when I run this

let view;
function initialize() {
    view = '';
    console.log('view has been set!')
}

initialize();
initialize();
initialize();
console.log(view)

// you see that it set the view three times

view has been set!
view has been set!
view has been set!


// perhaps even reseting the webpage
// what the user was using currently in the web page
// thats not good, thats a bug. right

// so using what you know about closures can you turn this function into a function that can only be ran once?

// that even though somebody might abuse it & run it a buunch of times
// as long as the function was run once
// well its only to run this one time

// give it a go
// & in the next video
// we will see what we can do
// I see you in the next one bye bye


let view;
function initialize() {
    view = '';
    console.log('view has been set!')
}

initialize();
initialize();
initialize();
console.log(view)

/////////////////////////////////////////// 12. Solution Closures 2

// welcome back
// lets see how can we solve this issue

// I am gonna do a naif approach to is
// but there are many ways to it using closures

// so let me show youu my way

let view;
function initialize() {
    view = '';
    console.log('view has been set!')
}

initialize();
console.log(view)

// if wanna this to only being called once

// /.../

let view;
function initialize() {
    let called = 0; // idealy I have  a variable inhere called
    // & maybe its a counter counting how many times the function has been called
    // & in here I wanna keep track of this called 
    // I wanna use closures
    // & keep track of it

    // but I dont wanna people outside of this world
    // toching it
    // so I wanna return a function
    // so I have an enclosing fuunction 
    // that is surrounded by another function
    return function() {
    // & inhere I can rreference called
    // & I know that I have access to it
    // even though if the outsideworld wont have access to it
    // as soon as initializes gets pop up the stack
        if (called > 0) {
            // so I am gonna simply say called is greater than cero
            // well in that case just return & do nothing
        } else {
            view = '🌍'; // otherwise I am going to set the view
            called++; // & then finally we also wanna increment called
            // to say, Hey! We updated called, this function has been called
            console.log('view has been set!')
        }
    }

}

const startOnce = initialize(); // I do const  start once & I do initialize
startOnce(); // I do start once
startOnce(); // if I do start once again // view has already been set 
// so nw it does not matter how many times I call, it is not going to work
startOnce();
console.log(view)

// alright. Lets see if that works

let view;
function initialize() {
    let called = 0;
    return function() {
        if (called > 0) {
        } else {
            view = '🌍';
            called++;
            console.log('view has been set!')
        }
    }

}

const startOnce = initialize();
startOnce();
startOnce();
startOnce();
console.log(view)

// if I run

view has been set!
🌍

// you maybe asking yourself Andrei that new program are can still called initialize()
// I am going to leave you for you to figure ouut how to do it
// in that case perhaps we can use Encapsulation
// & only return the starrtOnce after we initialize something but I leave that to you
// if you gotten this
// good job, I think you started to get closures

// lets do one more exercise

/////////////////////////////////////////// 13. Exercise Closures 3

// welcome back
// here is another exercise for you
// & here is a hint
// there is actually two ways of solving this problem

// lets see if we can find both solutions

// I am using this question because 
// it has be one of the most commonly asked questions 
// for javascript developers
// so hopefully you are able to understand it

// I have an array here
// & also a loop over this array

// we are just looping over the array
// & we are running setTimeout
// so we are calling that web API
// & we have a callback function right here
// that will be called in three seconds
// that will console log I am at index of i

//

const array = [1,2,3,4]; // I have an array here
for(var i=0; i < array.length; i++) { // & also a loop over this array // we are just looping over the array
    setTimeout(function(){ // & we are running setTimeout // so we are calling that web API // & we have a callback function right here
        console.log('I am at index' + i) // that will be called in three seconds
        // that will console log I am at index of i
    }, 3000)
}

// if I click run here
// whats going to happen?

const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
    setTimeout(function(){
        console.log('I am at index' + i)
    }, 3000)
}

//

Timeout {
    _idleTimeout: 3000,
    _idlePrev: [TimersList],
    _idleNext: [Timeout],
    _idleStart: 127,
    _onTimeout: [Function],
    _timerArgs: undefined,
    _repeat: null,
    _destroyed: false,
    [Symbol(refed)]: true,
    [Symbol(asyncId)]: 5,
    [Symbol(triggerId)]: 1
  }
  Hint: hit control+c anytime to enter REPL.
  I am at index4
  I am at index4
  I am at index4
  I am at index4
   
  

// when I click run
// I am waiting for setTimeout
// & its back
// I am at index 4 ,4, 4

// if it wasnt look at the function carefuly
// & see if you can fix it
// so that i logs to 1, 2, 3, 4

// I see you in the solutioin video

/////////////////////////////////////////// 14. Solution Closures 3

// alright lets solve this brain buster

// now, the easiest way to actually solve this 
// is to change the 'var' keyword to 'let'

for(var i=0; i < array.length; i++) {}

//

for(let i=0; i < array.length; i++) {}

//

const array = [1,2,3,4];
for(let i=0; i < array.length; i++) {
    setTimeout(function(){
        console.log('I am at index' + i)
    }, 3000)
}

// because if I run this & we wait
// look at that I have:

Timeout {
    _idleTimeout: 3000,
    _idlePrev: [TimersList],
    _idleNext: [Timeout],
    _idleStart: 265,
    _onTimeout: [Function],
    _timerArgs: undefined,
    _repeat: null,
    _destroyed: false,
    [Symbol(refed)]: true,
    [Symbol(asyncId)]: 5,
    [Symbol(triggerId)]: 1
  }
  Hint: hit control+c anytime to enter REPL.
  I am at index0
  I am at index1
  I am at index2
  I am at index3
   

// I have 0,1,2,3
// I guess we are not loggin the  actual value here I am loggin the indexes
// if we want to log the actual values we go like this:

const array = [1,2,3,4];
for(let i=0; i < array.length; i++) {
    setTimeout(function(){
        console.log('I am at index' + array[i])
    }, 3000)
}

// if I run we wait three seconds & we sholud have everything set

const array = [1,2,3,4];
for(let i=0; i < array.length; i++) {
    setTimeout(function(){
        console.log('I am at index' + array[i])
    }, 3000)
}

//

Timeout {
    _idleTimeout: 3000,
    _idlePrev: [TimersList],
    _idleNext: [Timeout],
    _idleStart: 309,
    _onTimeout: [Function],
    _timerArgs: undefined,
    _repeat: null,
    _destroyed: false,
    [Symbol(refed)]: true,
    [Symbol(asyncId)]: 5,
    [Symbol(triggerId)]: 1
  }
  Hint: hit control+c anytime to enter REPL.
  I am at index1
  I am at index2
  I am at index3
  I am at index4
   

// 

// & hopefully ypu know why that works 
// let allows us to use block scoping 
// so that this block which is these curly brackets
// creattes a scope for each i
// so i is scoped within here

// because initially when we have variable i overher,
// it was part of global scope,
// because we didnt really have a function surrounding it
// so that this setTimeout we it finally returns
// by that time the for loop has already gone through everything 
// & has turn i to 4

const array = [1,2,3,4];
for(let i=0; i < array.length; i++) { // let allows us to use block scoping // so that this block which is these curly brackets
    // creattes a scope for each i
    // so i is scoped within here
    setTimeout(function(){
        console.log('I am at index' + array[i])
    }, 3000)
}

// alright but there is another we can solve this

// what if we cannot use the 'let' keyword?
// we can use closures here to actually do something interesting

// we can actually wrap this in a function
// so I can create a function an immediately invoked function 
// that warps this entire setTimeout
// & this function is going to wrap our little setTimeout

// now in here we can reference i
// as long as we reference i it wont be remove from the local scope
// or at least the reference to what i is 
// when the lopp comes through here
// I can do that by passing this immediately invoked function 
// a parameter of i that is we call this fuunction
// & this function gets parameter i 
// which everytime it loops over
// it will be
// 0,1,2,3,4

// & we receive that parameter
// right in here
// & just to keep the name separated we say closureI
// & now we can access closureI like this

const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
    (function() { // we can actually wrap this in a function
        // so I can create a function an immediately invoked function
        // that warps this entire setTimeout
        setTimeout(function(){ 
            console.log('I am at index' + array[i])
        }, 3000)
    }) // & this function is going to wrap our little setTimeouut
}

//

const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
    (function(closureI) { // now in here we can reference i
        // as long as we reference i it wont be remove from the local scope
        // or at least the reference to what i is 
        // when the lopp comes through here
        setTimeout(function(){ 
            console.log('I am at index' + array[closureI])
        }, 3000)
    })(i) 
    // I can do that by passing this immediately invoked function 
    // a parameter of i that is we call this function
    // & this function gets parameter i 
    // which everytime it loops over
    // it will be
    // 0,1,2,3,4
}

//

const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
    (function(closureI) { // & we receive that parameter
        // right in here
        // & just to keep the name separated we say closureI
        setTimeout(function(){ 
            console.log('I am at index' + array[closureI]) // & now we can access closureI like this
        }, 3000)
    })(i)
}

// lets see if that works:
// if I run this

const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
    (function(closureI) {
        setTimeout(function(){ 
            console.log('I am at index' + array[closureI])
        }, 3000)
    })(i)
}

// I wait three seconds & look at that is working

I am at index1
I am at index2
I am at index3
I am at index4

// I know its a tough one you might have look at this a little bit
// but all I did was

// I created a function
// that gave me access to the i variable
// this i variable I kept in closure
// by passing it as a parameter
// receiving it & using it inside this callback function

const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
    (function(closureI) { // 1 –  I created a function // 5 – receiving it
        // 2 – that gave me access to the i variable
        // 3 – this i variable I kept in closure
        setTimeout(function(){ 
            console.log('I am at index' + array[closureI]) // 6 – & using it inside this callback function
        }, 3000)
    })(i) // 4 – by passing it as a parameter
}

// I think that was a big one
// so lets take a brake
// see youu in the next video


///////////////////////////////////////////// 22. bind() & currying

// we learn how we can do function borrowing by apply() & call()
// & we also learn how we can use bind() to do the same thing 
// & also call a function later on when wew want to
// with a certain value to the 'this' keyword

// but there is one other useful trick when we use bind()
// & its called function currying
// something that we are gonna a lot more 
// in our functioinal programming section of the course

// you can do something interesting with the bind() method

lets say I have a function


// function currying
function multiply(a,b) { // is called multiply
    return a*b // it simply multiply two numbers,
    // so we just return 'a' times 'b'
} // curriying refers to only partially giving a function a parameter
// why would this be useful?

multiply(2) // multiply '2', be more useful than complete the entire parameter list

//

multiply(2,4) // the entire parameter list

//

// because we can do something like thiswe can have
// lets say a new variable:

let multiplyByTwo = multiply.bind(this) // this is going to use the multiply function 
// & I going to use the bind() method here
// thats going to bind to 'this'
// waht is 'this'?
// Well, is the window object
// we dont really care
// what we care about is giving the parameter 'multiplyByTwo' to the multiply
// this is just an unintended consecuence of using bind()
// we dont really care
// so we just, so we just keep it as 'this' the window object

//

function multiply(a,b) {
    return a*b
}

let multiplyByTwo = multiply.bind(this,
2)//but now if I give it '2' here
// & I hit enter
// now I can

console.log(multiplyByTwo)

// if I run this
// It says

[Function: bound multiply]

// is returning for us a function
// that we can use later on
// but it already has one of the parameters in it

'2)'

// so that if I run

console.log(multitplyByTwo(4))

multitplyByTwo(4)

// which it will be the second parameter
// & I run this I get 

8

// How cool is that!
// I created a new function called multitplyByTwo
// that multiplies anything by two 
// by giving it the first parameter 

function multiply(a,b) { // 'a' the first parameter
    return a*b // to be two '2' // return 2*b
}

let multiplyByTwo = multiply.bind(this,
2)

console.log(multiplyByTwo(4))

// so that I can keep doing this, right?
// I can create another functioin
// lets say multiply by ten

function multiply(a,b) { // 'a' the first parameter
    return a*b // to be two '2' // return 2*b
}

let multiplyByTen = multiply.bind(this,
10)

console.log(multiplyByTen(4))

// so that when i multiply by ten '10'
// I get 

40

// How cool is that!
// I was able to reuse
// a piece of cose 
// give it a partial parameter
// & create these function 
// that are extensible 
// that are more specific
// such as multiplyByTwo | multiplyByTen

//...//

// an interesting concept of bind()

// ! DO EXERCISE LEFT TO DO FILES ATTACHED

///////////////////////////////////////////// 23. Exerrcise this keyboard

// lets do a nice little exercise to solidify the knowledge of this keyword
// I have here three objects

var b = {
    name: 'jay',
    say() {console.log(this)}
}

var c = {
    name: 'jay',
    say() {return function() {console.log(this)}}
}
var d = {
    name: 'jay',
    say() {return () => console.log(this)}
}

// each one has a name & a say method slightly different
// What do you  think the this values?
// Waht do you think the  log would be?
// If we run it

var b = {
    name: 'jay',
    say() {console.log(this)}
}

var c = {
    name: 'jay',
    say() {return function() {console.log(this)}}
}
var d = {
    name: 'jay',
    say() {return () => console.log(this)}
}

b.say()

// the log returns

{ name: 'jay', say: [Function: say] }

// this should make sense. right?
// this is the object b

b = {
    name: 'jay',
    say() {console.log(this)}
}

// nice & easy
// what about 'c'
// this time arround we are returning a function
// so this may look a little bit confusing
// we are essentially saying the 'c' function
// is going to return another function
// so thats a function inside another function
// & thats goinf to return console.log(this)

var b = {
    name: 'jay',
    say() {console.log(this)}
}

var c = {
    name: 'jay',
    say() {return function() {console.log(this)}}
}
var d = {
    name: 'jay',
    say() {return () => console.log(this)}
}

c.say()

// if I ruun this I get a function
// that should make sense
// when we run say 
//it returns for us
// this function

[Function]

// so if I run this function again
// Whats going o happen?


var b = {
    name: 'jay',
    say() {console.log(this)}
}

var c = {
    name: 'jay',
    say() {return function() {console.log(this)}}
}
var d = {
    name: 'jay',
    say() {return () => console.log(this)}
}

c.say()()

// who calls this function
// this gets called first
// & this gets called

// Uppps
// I get an error
// again remember
// code sandboxes like this sometimes
// give us an error
// because this is an unexpected use of this

// so this part we have to copy & open it up in our console
// if I copy & paste it
// & I run this

// I get the window object

Window about:newtab

// remember a method 
// that has a function inside of it
// that 'this' gets bound to window
// an unintended consecuence of javascript
// of dynamically scope 'this'

// thats was the ticky one

// what about d
// object d
// that uses an arrow function instead of just a function
// so this will be lexically scope

var b = {
    name: 'jay',
    say() {console.log(this)}
}

var c = {
    name: 'jay',
    say() {return function() {console.log(this)}}
}
var d = {
    name: 'jay',
    say() {return () => console.log(this)}
}

d.say()

// if I run this
// I get a function

[Function]

// but if I call this function again 
// & I run this

var b = {
    name: 'jay',
    say() {console.log(this)}
}
var c = {
    name: 'jay',
    say() {return function() {console.log(this)}}
}
var d = {
    name: 'jay',
    say() {return () => console.log(this)}
}

d.say()()

// Hey look at that
// it fix our problem
// because the this keyword 
// is lexically scope inside 
// our arrow function
// it dosent care where it was called

{ name: 'jay', say: [Function: say] }

//

///////////////////////////////////////////// 25. Context vs Scope

// clarify a term
// that is context vs scope
// scope is fuunctioin based thing
// right?
// scope means what is the variable 
// access of a function 
// when it is invoked
// what is in the variable envionment

// context on the other hand 
// is more about object about
// context says
// whats the value of this keyword
// which is a reference that the object that owns
// that current executing code
// so, context & scope is something
// that people get confused between
// & specially when we start to talk about
// context execution aswell
// it gets a little bit confusing

// but, just keep his in mind
// is most often determined
// by how a functioin is invoked
// with the valuue of this keyword
// & scope refers to the visibility
// of variables

///////////////////////////////////////////// 26. Section Review

// Holly molly!
// finally done with the foundations
// we are gonna get to an exiciting parts
// but what have we learn so far
// well,
// we learnt 
// – how the javascript engine & the compliers
// – how the languaje is read & executed
// right? & then
// once a languaje like javascript is executed
// we learnt about
// – execution context
// how every function invokation
// creates an execution context
// we learnt about
// – lexical environment
// where we write ouur code is important
// we learnt about
// – scope chain
// a way for us to look for variables
// & see what we have access to
// we learnt about an interesting feature
// that is
// – hoisting
// how javascript does this weird thing 
// that hoist functions decleratioins
// & variable declarations
// we learnt about
// – function invokation
// & some of the interesting 
// properties when we create function
// such as getting the arguuments parameter
// or sometimes even modifying 'this' keyword
// we learnt about
// – function scope & block scope
// how in javascript originally
// we only have functioin scope
// but with the new let & cons keyword
// we can uuse some block scope
// we learnt about dynamic & lexical scope
// how javascript just have lexical scope
// except for this little thing called 'this' keyword
// that has dynamic scoping
// that is it gets determined what the value is when the fuunction invoked
// we also learn how to master the 'this' keyword
// the benefits of having the 'this' keyword
// how do you use call(), apply(), & bind()
// & we also learn about
// immediatly invoked function expression
// specially these two
// 'this' & the IIFE
// is something that are gionna talk about in the course

// so, we have just scratche dthe surface with these things

// but by now we should have the fundations
// with javascript done
// & we learnt some really complex topics
// that really make you a great programmer

// I hope you are having fun
// I know its a tought big sectioin
// but trust, things are gonna better & bettter
// as we progress throuhg the course are gonna see
// how the fundatioin that we have layed out
// are gonna help you expand, & learn & become better & better
// as we progress through the course
// so, dont give up jet
// because we have lots more to go through

//...//


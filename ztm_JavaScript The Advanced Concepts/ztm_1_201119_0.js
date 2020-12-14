///////////////////////////////////////////// TYPES IN JAVASCRIPT

///////////////////////////////////////////// 1. Section Overview

// Welcome back
// & well done to get this far in the course
// where in this part
// a tinny little part
// before we get into the two pilars of javascript
// a rreally really fun topic that I am excited about
// but first we have to get through this part

// all programming languuajes has types
// that is the building blocks
// that  allow us to write in that languaje
// we can have numbers strings
// booleans an many more

// & in programming there are  two types of languajes
// dynamically & stetically type languajesin
//  this short section
// we are gonna talk about typeof& the idea of type
// we are gonna define stetically vs dynamically type means
// we are gonna talk about primitive types
// pass by reference vs pass by value
// we are gonna talk about a very confusing topic in javascript
// type coercion
// & we also are gonna talk a little bit about
// Arrays, Functioins, Objects
// & how they relate in this entire ecosystem of types in javascript

// this is an important stteping stone 
// in order for us to master the languaje
// so lets dive in
// & gain some new knowledge

///////////////////////////////////////////// 2. Javascript Types

// welcome back,
// lets talk about the differrent types 
// that are in javascrript
// & luckly for  us there are not that many
// there are seven of them
// we have 

// nunbers 5
// booleans true
// strings 'To be or not to be'
// undefined
// null

// another special one which came with ES6 whicj is

// Symbol('just me')

// & finally we have 

// objects {}

5
true
'To be  or not  to be'
undefined
null
Symbol('just me')
{}

// seven types of type
// & you are looking at the list & you are thinking ...
// Andrei, I am thinking you miss a bunch of others
// where are arrays or functions

// before I get into that
// luckly for us
// javascript has an operator
// called typeof
// typeof
// that tells us
// the type of item

typeof 5

number

//

typeof true

boolean

//

typeof 'To be or not to be'

string

//

typeof undefined

undefined // a special value in javascript undefined

//

typeof null

object

// what just happen here
// null is an object? what?
// this is something that we are gonna talk about 
// a little bit more
// when we are gonna enter in the 
// object oriented programming part
// of the course
// this is actually a mistake
// I am not making this up its true
// even the creator of the languaje
// Brendan Eich who created javascript
// acknoledges it
// remember no programming languaje is perfect
// we all write programs that can never be bug free
// this is one of those cases ummm this should be 'null' right
// it is an actual type in javascript
// its what we call a primitive type
// but when we run the typeof null operator we get object
// there is actually a proposal to fix this
// because there is so much legacy code 
// that depens on this type of null being object
// Well, they couldnt really change it
// because itll break a lot of problems
// so, for now, we stuck with that
// & trust me there is a lot of more 
// weird things like this in javascript

// so lets get over to the next one

typeof Symbol('just me')

// it ran it is a symbol

symbol

// a symbol, like I sayed is new in ES6
// it creates something uniquue for us
// that is a simple value
// in this case
// that is 'just me'
// is useful for identifying an object
// so symbols are usually used for object properties
// so that the object property is unique

// we are no gonna to concern ourself to much with this
// we you can read upon it if you want
// but it is a new type that we have that 
// allow us to do intersting thing object properties

// lets look at the next one

// undefined & null
// what are the differences between the two

// Well, undefined is the absecnce of a definition
// is used as the default when the javascriipt 
// engine initializes our variables
// right?
// remember when we talk abuot hoisting
// we use undefined for anything like that
// or even cases lets say function
// return undefined
// where they is no return keyword in a function
// or there is missing properties of an obbject
// undefined simply means
// there is a variable there but there is nothing there

// null on the other hand is the abscence of value
// it means there is no value there

// I know the distinction is a little bit hard to get
// remeber undefined is the absence of definition
// null is the sbasence of value
// there is no vallue there
// & this is something we will get into 
// a little bit later on in the course

// back to objects

typeof  {}

// if I run this it the sandbox renders an object

object

// where are the arrays
// if I do:

typeof []

// thats an object

// what about function

typeof function(){}

// if I run its a function

function

// uo uo uo Andrei 
// did you teach us something completely wrong
// there is clearly a type of function in javascript
// right?
// Well, technically no

// I need you to trust me on something

// I need you to truust me that this diagram makes sense

// diagram video

// Arrays & Functions are objects
// that is something we are gonna get back 
// into later on in the course
// & we are really going to define what it means

// for now just remeber functions & arrays are objects
// & even though type of function
// give us a function
// underneath the hood a function in 
// javascript is just an object

function a() {
    return 5;
}

a.hi = 'hihihi'

// can I do something like this?
// can add a property to a function?
// just like I can with an object
// if what I told you is correct
// that functions are just siimply objects
// this should make sense
// right?
// this should work

function a() {
    return 5;
}

a.hi = 'hihihi'

console.log(a.hi)

// if I run this;
// is working

hihihi

// this is something we will come back to
// for now at least 80% of you are convinced 
// that functions are objects
// lets get back to what we were talking about

// we have the typeof operator here
// that tell us what type somthing is
// & in javascript we have two distinctions
// we have the primitive types
// which are right over here
// & then we have the non primitive types
// whats the difference between the two
// in javascript all types other than the object types
// are all primitives
// what is a primitive type?
// its a data that only represents a single value
// so that means this primitive '5'
// Well, in memory the valuue is 5
// in memory the valuue is 'true'
// in memory is this 'piece of string'
// 'undefined'
// 'null'
// 'symbol'
// there is no ambiguity about it
// a variable of a primitive type
// directly contains the value
// of that type
// think of it this way
// they are kind of like atoms
// that cannot really be broken down into smaller parts
// 5 is just 5 in memory
// null is just null in memory
// symbol('just me') is just a symbol that has 'just me' in memory
// a non primitive type does not content the actual value directly
// what does it mean?
// WebGLUniformLocation, if I do something like:

const obj1 = { // an object that has property 'a' that equals to 'Tom'
    a: 'Tom' // this object doesnt actually contain the value here directly
}

// this object doesnt actually contain the value here directly
// instead it has a reference similar to a pointer to somewhere 
// in memory that the memory is held
// now I know that still hard to grasp
// we are gonna have a video comming up
// in pass by reference vs pass by value
// where we discuss the difference here a little bit more

// but, before we get into that video
// I want to finish up with one more thing
// that is the idea of javascript buildt in object

// & you can see some of the built in objects here

// url video

// when I say built in objects I dont mean global objects
// that we saw when we added things to the window object
// standar built in object come with the languaje
// is part of the languaje

// if I scroll through here we see some familiar ones like:

– Infinity

– NaN (not a number)

– undefined

// /.../

// keep scrolling we see

– Error

– Symbol

– Number

– Math

– Date

// I link this ?MBM page
// SourceBuffer, youu can take a look for youurself
// these are built objects that come with javascript
// you may be asking yourself 
// why do we have things? like:

– Boolean

// whay dont we have things like number?
// why do have things like string?

// Didnt we just say that those are primitives
// those arent objects
// well, you may have heard the term 
// everything in javascript is an object
// bear with me here
// this gets a little bit tricky
// many things that we interact with directly in javascript
// such as string number & boolean
// which are primitive && not objects
// get a little bit complicated by the fact that these primitives
// have object wrappers
// like string

String()

// or number

Number()

// or boolean

Boolean()

// let me demostrate for you what these do

// if I run

true.toString()

// I get

true

// in string form
// 'true'
// why is that?
// this is a primitive type
// why is acting like an object
// by using dot notation & using toString()

true.toString()

// you see this is when javascript gets a little sneaky
// it silently creates a wrapper object arround this true

// like this:

Boolean(true).toString()

// when we try an attempt to acces a property on a primitive
// so behind the scenes is almost is wrapping this in Boolean
// it has access to toString()
// & then finally returns 'true'
// superconfusing I know
// so, keep in mind that things like:

Boolean()

// or

String()

String(true).toString()

// exists in order for us to be able
// to use some methods on these primitive values
// not everything in javascrript is an object
// but there are a lot of objects,
// or built in objects that we can use
// if we do:

typeof Math

// for example
// thats an object
// if we do 

typeof Infinity

// in javascript
// thats a number

// like I sayed
// types in javascript gets a lilttle bit tricky
// & most of the type you dont need to concern 
// yourself with the inner workings of these things
// try not to confuse yourself too much with  it
// GamepadButton, I think we still need to work
// this idea objects
// primitive types are simple types
// like Number, Strings, & Booleans

// but objects those are still a bit confusing
// SourceBuffer, in  the next video,
// lets work a little bit more of this

 
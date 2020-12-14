///////////////////////////////////////////// 10. JTS Dynamic vs Static Typing

// /.../

// the main point is this,
// static types usually prevents bugs
// & help keep errors to happen
// dynamic typing allow you to be more flexible
// & allow to write software faster

// Typescript allows us to make javascript 
// to behave like a statically type language
// it adds types to javascript
// so, it makes javascript extrasave

// /.../

///////////////////////////////////////////// 11. JTS Weakly vs Strongly Typed

// /.../

// how can we add typescript to make javascript type save

///////////////////////////////////////////// 12. JTS Static Typing In JavaScript

// /.../


// typescript is what we call
// a superset of javascript
// that is it adds functioinality ontop of javascript
// javascript is typescript
// typescript simply adds a few extra features ontop of javascript
// but also has its on compiler
// we write typescript code
// which, then, it gets ran into the compiler,
// remeber a compiler, is simply a machine that takes an input,
// a piece of code, and outputs a different piece of code
// & it converts from typescript to javascript that our browsers can understand

// /.../

// typescript tries to mimic javascript
// & grows with javascrript
// like I say is a suurperset

// /.../

// Angular is built with typescript
// & use typescript
// if you are an angular developer
// you are already using typescript
// pretty much by default
// however a lot of the react community
// is also start to use typescript 
// the general javascript community 
// is starting to get more & more used to using this

// /.../

// as developers we must understand
// we put things in ouut projects
// we dont want just follow the trend
// becuase everybody is using typescript
// & juust jump on the lattest ?jamvagon
// as senior developers 
// we must decide for ourselves what work 
// for our project in our team
// something, here is my outline of when do you
// use static type cheking like typescript
// your project grows lagrger & largger
// you already have text written
// as more developers join the team
// you want the code to be self documented
// & also avoid bugs as new people test your code
// you also has the budget within the company 
// to train the employees to learn this new languaje

// /.../


///////////////////////////////////////////// 
///////////////////////////////////////////// 
///////////////////////////////////////////// 5. The 2 Pillars Closures and Prototypal Inheritance

///////////////////////////////////////////// 1. Section Overview

// we finally made another important 
// section in this course
// the two pilars

// we are gonna to talk about 
// what I think what are 
// the two most important concepts in javascript
// & also the most powerful

// these two powers that we are gonna learn are quuite unique
// & not available in  all languges
// but is also why it makes javascripit so powerful
// if you  understand these two topics tghat we are gonna talk about
// you trully are gonna evolve  as aprogrammer
// if you wanna be considered a Senior Javascript developer
// you have to know inside enoguht
// so what are the special skills

// Closures

// &

// Prototypal Inheritance

// if you work for javascript before
// for sure you have heard about these terms
// but they are pretty advanced
// specially if you want to deeply uunderstand it
// but, before we dive into these two pilars
// we are gonna quuckly talk abbouut some of the topics:

// Higher Order Functions

// &

// Fuunctions vs  Objects

// in order to trully uunderstand these concepts
// & once  we have all in place

// we are gonna talk about the birth of javascript
// how scheme & java were inspirtational
// to Brendan Eich
// when he create it
// what we are gonna learn Headers& the two pilars
// are gonna to allow us
// to really move onto 

// – object oriented programming

// – functioinal programming

// to really start using what we learnt
// to make ourselves a better programmer

///////////////////////////////////////////// 2. Functions are Objects

// lets starrt off talking about functions
// functioins in javascript are also objects
// throughout the next couple of videos 
// we are goning to explore that

// but, lets review what we have learnt about function so far:

// when we invoke a function get two parameters automatically

– this keyworrd

// &

– arguments kenyword

// & we learnt that arguments is an array like object
// that has some weird behaviours for looping & iteration
// so, we wanna avoid using it &
// instead use something like the spread operator

// we also learnt that because of 
// the arguments object we can technically
// not have any parameters defined for a function
// & when call that function
// if we add parameters to it
// we can still grab them if we use the arguments keyword

// we also learnt taht when we define our functions 
// & the complier reads our code lexically
// it determines what variable are available for us
// in our variable environment & also our scope changes
// we have a few ways to invoking & creating functions

// the first method we are very familiar with it:
// this function one is going to return one
// we define a function


function one() {
    return 1
}

// & we can invoke it like this

one()

// something, thats the first way of invoking a function
// another way to invoke a function is as a method
// that is a method is function inside of an object
// so, if I do something like:

const obj = {
    two: function() {
        return 2;
    }
}

// we call this method of the object as:

obj.two()

// & run the function

// we can also simply this
// with the new ECMAScript 6:

const obj = {
    two() {
        return 2;
    }
}

// we can just do that,
// so, we are calling the function as a method
// we know that because object 'obj'
// is the one calling 'two'

obj.two()

// the 'this' keyword will also be updated to object 'obj'
// instead of window

// thats our second one

// another we learnt to use functions is using the:

call() & apply()

// If I do:

function three() {
    return 3;
}

three.call()

// those are three ways that we can define & invoke functions

// but, there is actually one more way
// & this one you are not gonna see very often
// it may look confusing to you at first

const four = new Function('return 4')

four()

// this is called a function constructor

// remember our built in javascript objects
// that are the javascript language itself comes with
// well that what it is
// it creates functions for us
// & 'new' keyword is something 
// that we are gonna talk about
// in our object oriented programming section of the course
// but all we do is the first parameter 
// is whatever we want the function text to be which is to return 4
('return 4')
// & I can also add parameters
// so, if I give it lets say
// parameter 'num'

const four = new Function('num','return num')

// if I call number four with 4 here

four (4)

// I still get 

4

// it accepts parameters
'num' 
// & whatever is in the last parameter of the function 'new Function'
'return 4'
// will be the actual called body

// but rememebr what I sayed before
// functions are objects
// is something thats is not very common in other languages
// in javascriipt I can do something like:

function wooohooo() {
    console.log('wooohooo')
}

// but this function I can say:

wooohooo.yell

// & add properties to it like 'ahhhhhh'

wooohooo.yell = 'ahhhhhh'

// & underneath the hoood
// what javascript does is well 
// it creates a special type of object called a 'Coadlble object'
// that is the special object
// lets to show you some sudo code here 
// is not exactly what is doing underneath the hood
// but your illustration purposes

const specialObj = {
    yell: 'ahhhhhh'
    name: 'wooohooo'
    (): console.log('wooohooo')
}

// what we have done here
// is that we have a

yell: 

// property that is //

'ahhhhhh'


// we also have a 

name: 

// property that comes with this function

function wooohooo() {
    console.log('wooohooo')
}

// which is the name of the function itself
// so the name of the function is 

name: 'wooohooo'

// & is also a codable object
// that is it can be invoked
// remember these brackets 

();

// well is almost as if we can use this notation
// & whenever we run the function
// is a codabble function we 

console.log('wooohooo')

// if we want to run this code
// if I want actually to run 
// this code it actually wouldnt Work
// I want just to show how it work underneath the hood

const specialObj = {
    yell: 'ahhhhhh'
    name: 'wooohooo'
    (): console.log('wooohooo')
}

// if you have:

somefunc()

// well it will be an object
// think  of this orange box 
// as an objec with some properties

// one 
// it has a piece of code
// that we can invoke with this brackets &
// when we invoke with these brakets
// it reads whatever the code is 
// inside of that function & execute it

// another thing it has
// it has a name proprety 
// that is optional
// because remember we can have anonimous functions
// if this function is called 

somefunc()

// the name will be somefunc()

// but if we lets say use use function expressions
// assigned to a variable
// but the function itself is anonimous
// name wouldnt exist because optional

// another thing we get is
// we get properties
// automatically in a function
// & we have seen them before
// we have properties like:

.call()

.apply()

.bind()

// & allow us to act upon that function

// if go back to:

wooohooo.

// I can do:

.call()

wooohooo.call()

// & we have this method available for us
// (metabox pointer text editor)
// look at this purple box
// these are methods that we have
// & we also have properties
// like arguments, lenght, name...

// so if I run this

function wooohooo() {
    console.log('wooohooo')
}

wooohooo.name

// I have

wooohooo

// what about objects,
// if I create an object:
// Have I those properties on it?
// lets see:

const obj = {

}

obj.call

// I dont have call

obj.bind

// I dont have bind

obj.arguments

// I dont have arguments

// no I dont have that what I sayed
// functions are objects
// & there is a special type of object 
// that is a codable object
// with the bracket notation
// for invoking the function 
// contains the code
// it has name
// it also has properties
// like:

call(), apply(), bind()

// why do we care?
// why is that really important?

// because functioin are just objets in javascript
// that means we can pass them arround
// like objects
// like things that contains data
// besides just doing things for us
// & performing actions in our code
// we can also store them as data
// move them arround
// & have some really interesting applicattions

// & thats we are gonna explore over the next couple of videos
// lets dive in




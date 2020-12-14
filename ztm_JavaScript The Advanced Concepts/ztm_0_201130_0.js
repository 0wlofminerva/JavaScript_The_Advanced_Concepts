// /////////////////////////////////////////// 6. OOP3 Constructor Functions

// Welcome back

// I am about to show you 
// what we had from the very begnning 
// in the javascript language
// we didnt have Object dot create

// Object.crete

// so we did something different than what you see here
// & this approach is even closer to Object Oriented Programming
// let me show you what we can do

// instead of using object dot create

// Object.create

// we are gonna use something called
// constructor functions

// Constructor Functions
const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}
function createElf(name, weapon) {
    let newElf = Object.create(elfFunctions)
    console.log(newElf.__proto__)
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('Peter', 'stones')
console.log(peter.attack())
const sam = createElf('Sam', 'fire')
console.log(sam.attack())

// let see how that will look
// with a constructor function
// lets remove this for now

const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}

// It will still be a function

// Constructor Functions
function createElf(name, weapon) {
    let newElf = Object.create(elfFunctions)
    console.log(newElf.__proto__)
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('Peter', 'stones')
console.log(peter.attack())
const sam = createElf('Sam', 'fire')
console.log(sam.attack())

// except we are gonna create an elf function
// that takes a name & weapon

// Constructor Functions
function elf(name, weapon) {
    let newElf = Object.create(elfFunctions)
    console.log(newElf.__proto__)
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('Peter', 'stones')
console.log(peter.attack())
const sam = createElf('Sam', 'fire')
console.log(sam.attack())

// & then we are gonna remove all this line of code

let newElf = Object.create(elfFunctions)
console.log(newElf.__proto__)
newElf.name = name;
newElf.weapon = weapon;
return newElf;

// Constructor Functions
function elf(name, weapon) {

}

const peter = createElf('Peter', 'stones')
console.log(peter.attack())
const sam = createElf('Sam', 'fire')
console.log(sam.attack())

// & instead use 
// this dot name equals to name 
// & this dot weapon equal to weapon

// Constructor Functions
function elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

const peter = createElf('Peter', 'stones')
console.log(peter.attack())
const sam = createElf('Sam', 'fire')
console.log(sam.attack())

// now here is the interesting part
// & I am not returning anything here
// I am using 'this' & thats it
// we are constructing an elf
// but how does it work?
// well if in here I change this to elf

const sam = elf('Sam', 'fire')

// & say elf
// & for now lets comment these console logs

// Constructor Functions
function elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

const peter = elf('Peter', 'stones')
// console.log(peter.attack())
const sam = elf('Sam', 'fire')
// console.log(sam.attack())

// & I run this
// I dont get ?anyers

// ?

Hint: hit control+c anytime to enter REPL.
 

// if I do sam dot name
// &  if I run this

// Constructor Functions
function elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

const peter = elf('Peter', 'stones')
// console.log(peter.attack())
const sam = elf('Sam', 'fire')
sam.name
// console.log(sam.attack())

// I get a type error

TypeError: Cannot read property 'name' of undefined

// that because constructor functions are like this:

                        {
    this.name = name,
    this.weapon = weapon;
}

// & in order to use a constructor function
// you need to use the 'new' keyword in javascript
// so in here I would add new

const peter = new elf('Peter', 'stones')

// & by adding new lets see what happens

// Constructor Functions
function elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

const peter = new elf('Peter', 'stones')
// console.log(peter.attack())
const sam = new elf('Sam', 'fire')
sam.name
// console.log(sam.attack())

// look at that that magically work

Sam

// why is that?
// thats because the 'new' kyeword in javascript
// which, by the way a lot of people dont like it
// but it is how the things Work
// so we have to get used to
// the 'new' keyword 
// automatically retuns the object for us
// that we have here

function elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

// & it creates the elf constructor
// that is it runs this code

    this.name = name,
    this.weapon = weapon;

// constructs the elf function for us
// & now we have access to:

const peter = new elf('Peter', 'stones')
const sam = new elf('Sam', 'fire')
sam.name

peter

// &

sam

// & any function taht is invoked using the 'new' keyword
// is called a constructor function
// & as a matter of fact we have seen constructor functions before
// rememeber when we talk about things like:
// Number or even Object, or Function

Number()

//

// Constructor Functions
function elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

new Number()
const peter = new elf('Peter', 'stones')
// console.log(peter.attack())
const sam = new elf('Sam', 'fire')
sam.name
// console.log(sam.attack())

Object()

//

// Constructor Functions
function elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

new Object()
const peter = new elf('Peter', 'stones')
// console.log(peter.attack())
const sam = new elf('Sam', 'fire')
sam.name
// console.log(sam.attack())

Function()

//

// Constructor Functions
function elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

new Function()
const peter = new elf('Peter', 'stones')
// console.log(peter.attack())
const sam = new elf('Sam', 'fire')
sam.name
// console.log(sam.attack())

// capital letter but they were all functions
// those were all constructor functions
// you invoke them by using the 'new' keyword

// Constructor Functions
function elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

new Function()
const peter = new elf('Peter', 'stones')
// console.log(peter.attack())
const sam = new elf('Sam', 'fire')
sam.name
// console.log(sam.attack())

// so as a rule 
// even though you dont need to
// you wont get a syntax error
// all constructor functions should start with a capital letter

Elf

// Constructor Functions
function Elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

const peter = new Elf('Peter', 'stones')
// console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
sam.name
// console.log(sam.attack())

// to let other programmers that you need 
// to call this function using the 'new' keyword

// lets show how to create an elf
// using the constructor function that comes natively in javascript
// that is the Function constructor:

Function

// using the function constructor
// & this is something that we have seen before 
// in the fundamentals part of the course

// where I can say
// lets say const elf1 is equal 
// to new function so that we call this keyword constructor

const elf1 = new Function()

// & this function constructor will have parameters
// name & weapon 

const elf1 = new Function('name', 'weapon')

// & then the last parameter 
// is whats the function is actually going to be doing
// now I am going to use template strings here

const elf1 = new Function('name', 'weapon', ``)

// & I am going to copy & paste this piece of code

const elf1 = new Function('name', 'weapon', `this.name = name,
this.weapon = weapon;`)

// & now if I do const sarah equals new elf1
// lets make sure that we use capital letters here because again
// to indicate that we wanna use the new keyword

const Elf1 = new Function('name', 'weapon', `this.name = name,
this.weapon = weapon;`)

const sarah = new Elf1

// & I just say sarah 

const Elf1 = new Function('name', 'weapon', `this.name = name,
this.weapon = weapon;`)

const sarah = new Elf1('Sarah', )

// & sarah´s weapon is going to be lets say fireworks

const Elf1 = new Function('name', 'weapon', `this.name = name,
this.weapon = weapon;`)

const sarah = new Elf1('Sarah', 'fireworks')

// now if I do sarah

const Elf1 = new Function('name', 'weapon', 
`this.name = name,
this.weapon = weapon;`)

const sarah = new Elf1('Sarah', 'fireworks')
sarah

//

// Constructor Functions
function Elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

const peter = new Elf('Peter', 'stones')
// console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
sam.name
// console.log(sam.attack())

const Elf1 = new Function('name', 'weapon', 
`this.name = name,
this.weapon = weapon;`)

const sarah = new Elf1('Sarah', 'fireworks')
sarah

// & look at that I have name sarah, weapon

anonymous { name: 'Sarah', weapon: 'fireworks' }

// a function constructor or constrructor functions 
// are simply that they allow us 
// to use the 'new' keyword & crerate this object for us

// in the next video we are gonna dive a little bit deeper
// in waht the new 'new' keyword does 
// & how the constructor functions are used in javascript
// but before I do that lets make sure we implement the attack function on here
// because we now use the 'new' keyword

const peter = new Elf('Peter', 'stones')

// & the new keyword automatically returns an elf object for us

                {
    this.name = name,
    this.weapon = weapon;
}

// & it creates this elf constructor

function Elf() {}

// we have created a new object
// & because this function is called

function Elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

// a new execution context is created
// & because of that, because this is a function
// that we are running

function Elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

const peter = new Elf('Peter', 'stones')

// & a new execution context is created
// that means that we automatically gets the 'this' variable attached to it

this.

// rememeber every function that we call
// gets the 'this' & the 'arguments' parameters
// we rememeber this. right?
// 'this' & 'arguments'

// the interesting thing though is that when we use the 'new' keyword
// instead of 'this' pointing to the window object like it usually does
// the 'new' keyword changes what 'this' is pointing to 
// when a new execution context is created

// instead the 'new' keyword will say

const peter = new Elf('Peter', 'stones')

// Hey! I want you to point 'this'

    this.name = name,
    this.weapon = weapon;

// to the object that we have just created

const peter = new Elf('Peter', 'stones')

// so that 'this' becomes peter or sam

const peter = new Elf('Peter', 'stones')
const sam = new Elf('Sam', 'fire')

// & this is what happens when we remove 'new'
// if we remove new & I click run

// Constructor Functions
function Elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

const peter = new Elf('Peter', 'stones')
// console.log(peter.attack())
const sam = Elf('Sam', 'fire')
sam.name
// console.log(sam.attack())

// I cannot read properly name or undefined

TypeError: Cannot read property 'name' of undefined

// & thats because without the 'new' keyword
// we are nor creating this object

                        {
    this.name = name,
    this.weapon = weapon;
}

// we are not returning an object
// & we are also not assigned 'this'

    this.name = name,
    this.weapon = weapon;

// to the object that calls us

const peter = Elf('Peter', 'stones')

// so the 'new' keyword does a ton a for us behind the scenes
// in order for it to work

const peter = new Elf('Peter', 'stones')

// so its very important to use the 'new' keyword
// which is why we want to use the capital letters
// to indicate to other programmers
// we need to use the 'new' keyword otherwise its not going to work
// & why is this so powerful
// its because this is a function

function Elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

// remember every function in javascript
// gets automatically a prototype property
// rememeber this

(diagram video)

// functions are special types of objects in javascript
// its a codable object that has code that can be invoked
// & optional name that have a bunch of properties that
// if we wanna give we have access to
// but we also gets this prototype
// that gets created with any new function
// mow this prototype property is absolutelly useless with any regular function but
// when we have constructor functions
// rememeber the ones with capital letters
// that we can invoke with 'new'
// well this prototype finally becomes useful
// & native constructor functions like Function()
// comes with things like
// call(), apply(), bind()
// arrays come with things like
// map, reduce, for each
// because they are build out of the array constructor function
// in our case we can add our own to the prototype

// so that now we can add Elf dot prototype

// Constructor Functions
function Elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

Elf.prototype

const peter = new Elf('Peter', 'stones')
// console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
sam.name
// console.log(sam.attack())

// wich we have acces to 
// & say attack

// Constructor Functions
function Elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

Elf.prototype.attack

const peter = new Elf('Peter', 'stones')
// console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
sam.name
// console.log(sam.attack())

// so we are adding atttack method on to the prototype 
// if I do function return attack with this dot weapon

// Constructor Functions
function Elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
} 

const peter = new Elf('Peter', 'stones')
// console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
sam.name
// console.log(sam.attack())

// rememeber 'this' will be the calling object

                                {
    return 'attack with ' + this.weapon
}

// remeber what is going to call us,
// well whatever is on the left of the dot

sam.name

//

sam.

// so that if I do run here

// Constructor Functions
function Elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
} 

const peter = new Elf('Peter', 'stones')
// console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
sam.name
// console.log(sam.attack())

// I get sam, 

Sam

// but if I do attack

// Constructor Functions
function Elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
} 

const peter = new Elf('Peter', 'stones')
// console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
sam.attack()
// console.log(sam.attack())

// & I run. 

attack with fire

// look at that attack with fire
// How awesome is that
// lets make sure both of these work
// click run 

// Constructor Functions
function Elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
} 

const peter = new Elf('Peter', 'stones')
console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// look at that

attack with stones
attack with fire

// peter & sam will finally attack with stones & fire

// & we are able to use the prototype to add functionality to both elfs

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
} 

// so to review we are able to use constructors functions
// instead of something like object dot create
// to create this magical function 

function Elf(name, weapon) {
    this.name = name,
    this.weapon = weapon;
}

// that creates a new object, returns a new object
// & also modifies what 'this' means 

                         {
    this.name = name,
    this.weapon = weapon;
}

// to whatever object calls us

const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// so instead of the global object
// 'this' is not going to point to the calling object peter & sam

// but because this is a constructor function
// we also have this prototype property 

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
} 

// that can attach things to it
// when peter dot attack gets called

console.log(peter.attack())

// peter doesn have attack as its own method 
// but it is going to go up the prortotype chain
// rememeber __proto__ is going to point to prototype

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
} 

// & this prototype is going to have the attack
// & now both peter & sam are able to use attack

console.log(peter.attack())

console.log(sam.attack())

// from the same location in memory
// instead of us copying attack in multiple places 
// & multiple locations in memory
// we just have it writen once in memory

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
} 

// & both of these elfs are going to point to atack 
// which is in the same memory space
// & the beauty is that I can just keep adding functionality here. right?
// if the game evolves & all of a sudden
// I say well elf can now also use build

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.tool = tool;
}

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
} 

Elf.prototype.build = function() {
    return 'built with ' + this.tool
} 

const peter = new Elf('Peter', 'stones')
console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// well now we have a new function
// that allow us to add functionality
// to all the elfs that we created
// & now they can build as well
// one other thing
// what do you think it happens if I change this into an arrow function?

Elf.prototype.attack = () => {
    return 'attack with ' + this.weapon
} 

//

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = () => {
    return 'attack with ' + this.weapon
} 

const peter = new Elf('Peter', 'stones')
console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// if I click run

attack with undefined
attack with undefined

// I get undefined
// & we have seen this before. right?
// why do we get undefined?
// well, because arrow functions are lexically scoped
// that is they define 'this' based on where they are written &

this

//

Elf.prototype.attack = () => {
    return 'attack with ' + this.weapon
} 

// 'this' in this case is the global object
// because who is calling attack right now?
// there is no objects surrounding it other than the global object

// but by using the regular function
// which is dynamically scoped
// that is it doesnt matter where is written
// is whoever calls it
// well because its dynamically scoped
// this is going to change based on who calls it

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
} 

const peter = new Elf('Peter', 'stones')
console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// so that is the one ?gottcha
// where you dont always use arrow functions
// because somethimes you dont want to lexically scope this
// alright, lets take a break & talk a little bit more this
// & think about of some of the improvements pros & cons that we have in this
// see you in the next one bye bye

// /////////////////////////////////////////// 7. More Constructor Functions

// welcome back

// I am going to spend a little more time with 
// this construuctors functions 
// because they are a little bit tricky
// there is a lit of magic happening here 
// so lets make sure that we fully get it

// lets play arround with this functionality

// if I console dot log here 'this'

// Constructor Functions
function Elf(name, weapon) {
    console.log('this', this)
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
} 

const peter = new Elf('Peter', 'stones')
console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// & see waht this is
// & I run
// I see that this is the elf objbect 

this Elf {}

// that we are creating
// but there are not properties here because we havent added anything
// it just created an empty object

// however if I bring 'this' down here
// & I do console log

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    console.log('this', this)
}

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
} 

const peter = new Elf('Peter', 'stones')
console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// I see that after we construct this Elf 
// & add properties to it
// have them accesibke to us

this Elf { name: 'Peter', weapon: 'stones' }
attack with stones
this Elf { name: 'Sam', weapon: 'fire' }
attack with fire

// now the interesting thing here is that 
// if I do something like variable a equals five
// I click run here

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    var a =5;
    console.log('this', this)
}

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
} 

const peter = new Elf('Peter', 'stones')
console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// it is not going to add this to our Elf object
// with the constructor function
// the only way we we can add properties
// is to use the 'this' keyword

// alright
// & then we also talk about the constructor functions
// automatically create that prototype chain for us
// so lets test that out

// if in here instead of peter dot attack
// I am going to say peter underscore underscore proto

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    var a =5;
    console.log('this', this)
}

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
} 

const peter = new Elf('Peter', 'stones')
console.log(peter.__proto__)
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// lets see what I get
// I get Elf attack function

this Elf { name: 'Peter', weapon: 'stones' }
Elf { attack: [Function], build: [Function] }
this Elf { name: 'Sam', weapon: 'fire' }
attack with fire

// lets comment that out for a second
// just that we can see it without the prototype

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

// Elf.prototype.attack = function() {
//     return 'attack with ' + this.weapon
// } 

const peter = new Elf('Peter', 'stones')
console.log(peter.__proto__)
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// alright!
// we see that we have Elf
// as our prototype

Elf {}

// so rememeber  __proto__ points to the portotype of Elf

console.log(peter.__proto__)

//

function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

// so it points to Elf dot prototype

function Elf.prototype(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

// & Elf dot prototype was created for us because of this 'new' keyword

new

//

const peter = new Elf('Peter', 'stones')

// so that when we finally add onto the prototype an item than attack
// well I now have __proto__ pointing to Elf.prototype
// which contains the attack method

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
} 

const peter = new Elf('Peter', 'stones')
console.log(peter.__proto__)
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

//

Elf { attack: [Function] }
attack with fire

// so if I do Elf.protype

console.log(Elf.prototype)

//

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
} 

const peter = new Elf('Peter', 'stones')
console.log(Elf.prototype)
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// & if I run this
// you see that thats the same thing
// that we have the attack function inside of this prortotype

Elf { attack: [Function] }
attack with fire

// if I console log this before we add the prototype

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
console.log(Elf.prototype)
Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
} 

const peter = new Elf('Peter', 'stones')

const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// well is an Empty object

Elf {}
attack with fire

// & remember every function that we create gets this prototype property
// but only constructor functions has this prototype object

// now just to finalize our understanding
// What happens if I do console dot log Elf or peter dot prototype?

console.log(peter.prototype)

// what do you think tihs result in?

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
} 

const peter = new Elf('Peter', 'stones')
console.log(peter.prototype)
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// if I run
// I get undefined

undefined
attack with fire

// well because peter is not a function
// peter is an object

console.log(peter.prototype)

// & only functions have access the prototype

// by the way one of the biggest gotchas of this
// is if we add something let say build

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
}
Elf.prototype.build = function() {
    return 'house'
} 
const peter = new Elf('Peter', 'stones')
console.log(peter.prototype)
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// & build is simply going to return house
// if I do peter build now

console.log(peter.build())

//

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
}
Elf.prototype.build = function() {
    return 'house'
} 
const peter = new Elf('Peter', 'stones')
console.log(peter.build())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// we see that peter has a house

house
attack with fire

// but  lets say that instead 
// lets say  that we ahve a function called building

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
}
Elf.prototype.build = function() {
    function building() {
    }
} 
const peter = new Elf('Peter', 'stones')
console.log(peter.build())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// & this function is going to return house
// & lets say in here it will be this dot name builds a house
// make sure we add the together here

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
}
Elf.prototype.build = function() {
    function building() {
        return this.name + ' builds a house';
    }
} 
const peter = new Elf('Peter', 'stones')
console.log(peter.build())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// & finally we just call building here

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
}
Elf.prototype.build = function() {
    function building() {
        return this.name + ' builds a house';
    }
    building()
} 
const peter = new Elf('Peter', 'stones')
console.log(peter.build())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// what do you think it happens if I build now?
// if I click run

undefined
attack with fire

// I get undefined
// & yes I am being repetitive here, but hopefully
// by showing you these things a few times you really internalize them
// Why do I get undefined?
// well this is one og the biggest gotchas when it comes to object oriented programming
// when we create objects like this

// functions inside of methods is well a function inside of a function

Elf.prototype.build = function() {
    function building() {
        return this.name + ' builds a house';
    }
    building()
}

// that means 'this' is not assigned to the object itself
// but actually to the window object
// & we have seen this before

// there is a few ways to solve that
// you can do bind 'this'

building().bind(this)

//

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
}
Elf.prototype.build = function() {
    function building() {
        return this.name + ' builds a house';
    }
    building().bind(this)
} 
const peter = new Elf('Peter', 'stones')
console.log(peter.build())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

//

// or remove the called function & just return the function

return building.bind(this)

//

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
}
Elf.prototype.build = function() {
    function building() {
        return this.name + ' builds a house';
    }
    return building.bind(this)
} 
const peter = new Elf('Peter', 'stones')
console.log(peter.build()())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// so now we can call it 

console.log(peter.build()())

//

Peter builds a house
attack with fire

// peter build a house

// or even easier if we go back 
// we can just have a reference such us self equals this

const self = this;

// & this can be turn into self

return self.name + ' builds a house';

// so that if I run this
// & we have to make sure that we return this 

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
}
Elf.prototype.build = function() {
    const self = this;
    function building() {
        return self.name + ' builds a house';
    }
    return building()
} 
const peter = new Elf('Peter', 'stones')
console.log(peter.build())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// get peter builds a house
// awesome

Peter builds a house
attack with fire

// alright! lets remove this
// & go back to what we have before
// lets remove that aswell

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
}

const peter = new Elf('Peter', 'stones')
console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// now that we have things cleaned

// what is the problem with this?
// are we there?
// are we at the object oriented programming nirvana?
// do we reached ouur end goal?
// well not really, the problem with this code is, 
// prototype is kind a weird,
// its a little hard to understand, isnt it?
// & I mean it looks kind of ugly
// this code is not very understandable
// unless you really now your prototypal inheritance
// & how javascripit works, which most people dont,
// this can get very confusing very fast
// as a matter of fact there is not that many people that like 
// this style of coding
// its kind of confusing although older code basics
// & you might see a lot of this specially 
// if you are doing object oriented programming
// but the problem is that object oriented programming 
// is all about the idea of classes
// this code well...
// there is no classes in here
// there is this weird thing where 
// we have to make sure to remember to have a capital letter

const peter = new Elf('Peter', 'stones')

// which is why Object dot create Object.create() was added to the language

Object.create()

// Constructor Functions
Object.create()
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
}

const peter = new Elf('Peter', 'stones')
console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// in order to avoid this headache 

const peter = new Elf('Peter', 'stones')
console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// & just use pure prototypal inheritance
// but the thing is this style of coding 
// this idea of 'this' & the 'new' keyword
// is very much programing oriented programming inspired
// specially when it comes to languages like Java
// if we wanna to get closer to object oriented programming
// well Object dot create Object.create 
// is technically less object oriented than something like this
// but like I sayed before this is not pretty

// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
}

const peter = new Elf('Peter', 'stones')
console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// so how can we improve this & we are gonna improve this a lot
// we are gonna finally get to the end to our goal of adding classes
// & doing true or as close as we can with javascript 
// object oriented programming
// lets find out what does look like in the next video

// /////////////////////////////////////////// 8. Funny Thing About JS...

// yes yes I know I told you that 
// we finally will get to classes in the next
// video but I do wanna show you one more thing quickly 
// just to solidfy our knowledge
// now that we underrstand construuctor functions
// this should make sense now
// if I do variable a equals new number five

var a = new Number(5)
a

// now we know that javascript is going to create number five for us

[Number: 5]

// but now you see here that a is actually a type of object

var a = new Number(5)
typeof a

//

object

// because we have used a constructor function
// so it is not the same as me saying
// variable a equals to five


var a = new Number(5)
typeof a
var b = 5
typeof b


// which is a number

number

// I know that is really confusing but if a equals b

var a = new Number(5)
typeof a
var b = 5
typeof b
a === b

// & I run this 

false

// I get false
// because there is two different ways of constructing these things in javascript

var a = new Number(5)
typeof a
var b = 5
typeof b
a == b

// if I just do two equals '==' I get true

true

// these types gets coherce
// something that we have learnt about
// so how does it work when I do b dot string?

b.toString

// you see I have all these methods available 

(metabox text editor)

// even though type of b is a number & as we saw
// numbers are primitive types

// well in javascript when we do something like this 
// when we assign a variable internally
// is going to construct the number
// that we added it so that we have access to all these methods
// & that is how we use things like toFixed, toString, or even onemptied,
// string values string primitives we can do things like this
// javascript sees that you want to use object methods 
// so it automatically assumes that you meant object
// instead of primitives
// it runs it internally
// & this is how things like new Date()

new Date().

// works as well
// you are creating objects & its useful because
// they have built in prototype methods
// so that on this dates we can run different sort of methods
// how cool is that
// yes technically in javascript everything is an object
// everrything has a constructor for it 
// I mean with the exceptional null & undefined
// we have constructor functions for everything so that 
// we have methods that we can use
// alright
// hopefully your brain doesnt hurrt to much after that
// lets get back to OOP

// /////////////////////////////////////////// 9. OOP4 ES6 Classes

// alright we have gotten closer & closer
// lets reach ultimate Object Oriented Programming in javascript
// we have our constructor functions that well were a little funny
// nobody really like the prototype way of adding methods so with ES6
// javascript finally got the class kyeword
// object oriented programming was created with the class idea in mind
// class being a bluprint of what we want created
// lets see how this works
// with the new ES6 classes
// we can now do this
// we have the Elf class that simply define like that
// & then we have a constructor
// & in the constructor something that gets run
// instantiate or use the new keyword on a class
// so this goes inside right here
// & we have taken the name & the parameter
// now the beauty with classes is that
// as object oriented programming suggets
// we wanna keep all that functionality inside of this box
// all the properties, all the state
// all the methods, all the actions together
// in a nice contained environment
// a class an object
// so instead of having this in a separate localtion
// I can now just simply add attack() in here as part of our class
// & this method can now act upon our state
// so I can just return right here
// & I can get rid off this ugly prototype
// how nice & easy was that
// lets see if this works if I click run
// look a that its all working
// how much cleaner is that!
// & if you are comming from 
// an object oriented programming language like Java or C++
// this is going to look really familiar to you
// & this is the true beauty of object orinted programming
// we are modeling real world escenarios
// we are creating an Elf class that is a blueprint
// what we want Elfs to be like
// Elfs have names they have weapons
// they can act upon these properties
// attack() or build()
// I we can just keep adding things here
// & we have in one location that hols this entire elf object
// & any time that we new to update something or change or add something
// we can just change it in here
// & all the instances of the elf
// well get that update
// now I keep saying this word 'instance'
// & this is a common term that you are gonna hear a lot
// when it comes to obbject oriented programming
// when we use classes
// & instance happens when we call this class 
// & create an object out of this class
// so for example peter is an instance of Elf
// for example if I do console dot log & do peter
// & luckily for us javascript has instanceof then do Elf
// if I click run here I get true
// peter is an instance of Elf
// but if I do Elf instance of peter
// I get false
// because it is the other way arround
// so instance of is this language that 
// we can use in object oriented programming to say
// we are creating an instance of a class
// this with  the new keyword is called instantiation
// we are instantiating a class
// if a remove the the new keyword from here
// & I run
// I see
// Class constructor Elf cannot be invoked without 'new'
// we even get a nice error
// saying hey hey hey
// we need new here dont forget new
// which is really really nice
// alright everybody cheers get up throw your chairs throw your laptops
// dont throw your laptop 
// but we finally classes
// we finally have object oriented programming in javascript. right?
// well not really you see
// this what we call syntatic sugar
// underneath the hood in javascrip 
// we still using prototypal inheritance
// we are not using classes like classses working in another languages
// this is the closets that javascript is going to get to classes
// underneath the hood we still using prototypal inheritance
// we are not using classes like classes working in another langueges
// this is the closets that javascript is going to get to classes
// underneath the hood we still using the 'new' keyword with the prototype
// you are thinking to yourself
// why dont we all this trouble ...?
// why dont we just create classes from the beginning in javascript
// would it just make everything easier?
// now as we found out
// classes arent necesarily the answer to everything
// as we will see when we to functional programming
// but also therre is an interesting story or quote
// in why javascript doesnt have classses
// this is a famous qute from the creator Brendan Eich
// "If I had done classes in javascript back in May 1995, 
// I would have been told that it was too much 
// like Java or Javascript was competing with Java ...
// I was under marketing orders to make it look like Java 
// but not make it too big for its britches ...
// [it] needed to be a silly little brother language." – Brendan Eich
// so the interesting thing was that Brendan Eich was tasked 
// with creating a language that would attract Java developers
// that were really uesd to classes & object oriented programming concepts
// but at the same time they wanted to create a competing language
// & for marketing popurses the couldnt make it the exact same
// so he had to be creative
// he used prototypal inheritance
// which is quite different from how calsses work
// & languages like Java & C++
// in other languges classes are an actual thing
// in javascript classes are just still objects
// everything in javascript is an object
// in an interview if you get asked
// Hey does javascript have classses?
// well yes they do as sintactic sugar
// class keyword still just prototypal inheritance
// & some people call this sudo classical inheritance
// because its not real calssical inheritance
// looking at this I hope youu see how we have gone with repetitive code
// that was harder & harder to mantain
// to something that it is a little bit more organize
// we have created this grouping  of fuunctionality
// so that it is easy to maintain & extend
// you maybe asking yourself
// why dont we just add attack to the constructor
// why dont we put it outside
// & this is actuallya very interesting question
// that you might get in an interview
// you see everytime we get the new keyword
// & create or instantiate a class
// the constructor function gets ran
// because this constructor function
// needs to get run because each elf
// has a unique name & perhaps a unique weapon
// but attack is shared by all instances of the class
// if we move attack to the constructor
// thats gonna take memory space. right?
// instead of creating an attack function for each object
// is what we would do if we add to the constructor
// something that we are trying to avoid
// instead we just have one
// one function in one location
// all these instances can access
// so there you have it
// I hope you start to see the beauty & efficienty
// lets take a break & talk a little bit more about this in the next video
// I will see you in that one

// /////////////////////////////////////////// 10. Object.create() vs Class

// welcome back there is a big debate in the javascript commuunity
// people that love classses & people that never want to use them,
// never want to see this 'new' keyword
// & they wanna just avoid  using 'this' keyword too much
// because they say it casuses too much confusion
// & this is just personal preference
// highly respected programmers love classes
// other highly respected programmers hate classes
// & there is no right or wrong here
// but I do wanna add a note
// what you see here can be acomplished with 
// Object dot create Object.create
// as we have seen in the previous videos
// & with object dot create we have actually have everything we need with
// what someone says none of the mess
// we are able to create these prototype chains
// without pretending like we have classes
// some people call using object dot create
// pure prototypal inheritance
// then thats the pure way of doing it
// instead of pretending that they were something else
// why you use is up to you
// however most of the javascript community 
// doesnt use object dot create Object.create as much as the class syntax
// so in most code basics specially the newer code basics 
// that use object orieneted programming principles will use class
// but the beauty of javascript is that is multiparadigm
// it allows us to have a lot of options
// to code the way that we wanted based on the problem we have
// & based on what type of team dynamic youu have with other programmers
// so at the end of the day is up to you 
// I will see you in the next one bye bye

// /////////////////////////////////////////// 11. this - 4 Ways

// welcome back if you have been folowing along 
// each video one by one & you are finally here
// I hope that the 'this' keyword is something not scarying anymore
// you understand it you have a good idea of this
// & want to take the oporrtunity to review the ways that we have learnt
// can manipulate the this keyword
// the most recent one that we have learnt was this idea of the new binding

// new binding this
function

// & this new binding was used with constructed functions

// new binding this
function Person

// where we have things like a person

// new binding this
function Person() {}

// & you can use this dot name equals name
// this dot age equals age

// new binding this
function Person() {
    this.name = name;
    this.age = age;
}

// & as soon as we call this
// const new person one equals new person 

// new binding this
function Person() {
    this.name = name;
    this.age = age;
}

const person1 = new Person()

// & we give it lets say xavier & 55

// new binding this
function Person() {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Xavier', 55)

// well now we have person one
// with the proper 'this' updated

// new binding this
function Person() {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Xavier', 55)
person1

// the new binding allows us to assign 'this' to the object that we instantiate
// so person1 

person1

// will be the this keyword

    this.name = name;
    this.age = age;

// one way that we can manipulate the 'this' keyword

// the other way is called implicit binding

// implicit binding

// & with implicit binding is when we use something like this

// implicit binding
const person = {
    name: 'Karen',
    age: 40,
    hi() {
        console.log('hi' + this.name)
    }
}

// where it was just implied
// we didnt have to do anything
// it is just how the language works
// we created an object

// implicit binding
                {
    name: 'Karen',
    age: 40,
    hi() {
        console.log('hi' + this.name)
    }
}

// & inside of that object
// the 'this' keyword 

console.log('hi' + this.name)

// will refer to person

const person = {}

// thats implicing binding its the most common one

// but then it also learn about explicit binding

// explicit binding

// & thats when we dictate exactly what the 'this' keyword so refer to
// for exampe if we have person3 here

// explicit binding
const person3 = {
    name: 'Karen',
    age: 40,
    hi: fuunction() {
        console.log('hi' + this.setTimeout)
    }.bind(window)
}

// with name, age, & again the same function the hi function
// but that function has lets say setTimeout it wants to call

console.log('hi' + this.setTimeout)

// but in this case this 'this 

console.log('hi' + this.setTimeout)

// is going to refer to person3

const person3 = {}

// just like we saw above
// but lets say that we wanna call the setTimeout method
// & I mean we can just do window & just not use anything to do setTimeout
// if we want this to refer to the window object
// & explicitely tell it to bind it
// & we say bind to window
// so that if I do person3 dot hi
// person3.hi
// this works, I get the setTimeout functionality from the window
// explicit binding is using bind(), call() or apply()
// to explicitely tell the program Hey this is what I want this to be window
// & then fianlly we have learnt about arrow functions
// & with arrow functions
// we learnt that unlike all the other times where this is dynamically scoped
// that is it gets determined whenever it gets called
// with the arrow functions we can do lexical scoping
// that is whatever we write the function that waht this bonds to
// so that if we do something like person4
// & we have the high function but inside that function we have another function
// rememeber a method with a function inside of it is the biggest gotcha when it comes to this
// well if we run inner here, & we run it
// everything is working because we are using arrow function
// if we didnt use an arrow function & just we use a regular function
// in this case 'this' would be the window function
// which we usually never want
// I hope this is for you easier to understand
// arrow functions explicit binding & implicit binding
// allow us to harness the power of this
// I see you in the next one bye bye


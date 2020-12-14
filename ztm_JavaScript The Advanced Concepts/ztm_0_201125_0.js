/////////////////////////////////////////// 15. Closures Review

// we learn the first important pilar of javascript Closures
// we learnt that a closure is a combination of a function 
// & the lexical environment in which it was declared

// Function + Lexical Scope

// & we are able to do this because functions are first class citizens
// & we have lexical scope in javascript
// &  now the statement that I made at the beginning this closure section
// should make sense
// closures allow function to access variables from an enclosing scope or
// out our scope environment even after it leaves the scope in which it was declared
// because all that matterrs in jvascript is where the function was written

// the interesting thing in closures is that
// javascriipt really popularize this idea
// is now all over programming languages
// specially functional programming languages

// & the closure concept is now adopted & added
// to different languages 
// like python & ruby 
// after javascript popularize
// & show how powerful it is
// I think c ?sharp & c++ even are also adding closures to their language

// so its a very very powerful tool
// I hope you have fun this section
// & we have  one more pilar to go

// I see you in the next video

// Closures & Prototypes

/////////////////////////////////////////// 16. Prototypal Inheritance

// welcome back,
// now I told you there are two  pilars in javascript
// & they are really really important & powerful

// One was closures
// we covered that

// Now its time to learn about Prototypes
// specifically, prototypal inheritance

// lets see if you find this as fascinating as closures
// I have to give you a bit of a warming
// this part is going to be really tough
// it may seem convoluted at times

// you may have to revisit the videos a few times
// but keep in mind what we  are gonna learn here
// will help us understand object oriented programming
// comming up in the next section

// so hang in there because some of this is going to overflow the next section
// where you are gonna learn more & more

// are you ready I hope I did not scare you up

// rememebr this diagram

// (diagram video)

// object – array
// object – function

// I told you that Arrays & Functions
// are just Objects in javascript

// lets dive a little deeper into this
// you see javascriipt use something called Prototypal Inheritance

// (diagram video)

// you say these chains inhere
// the Prototypal Inheritance
// & waht does it mean?
// well inheritance
// is an object getting access to the properties & methods of another object

// so what I am saying is that an Array Object
// again remember everything is an object
// the Array object gets access to the properties & methods of the object in javascript
// & the same with functions
// through this chain that we call Prototypal Inheritance
// functions get access to the methods & properties of objects

// lets demostrate this in code

// there is a special way that we can actually see this chain 
// this Prototypal Inheritance in javascript

// if I create an Array here

(console browser)

// lets say,

const array = []

undefined

// an empty array
// I do 

array.__proto__

// __proto__ for Prototypal Inheritance & hit enter
// I get this thing

Array []

// & if I open it up

array.__proto__
[]
​
concat: function concat()
​
constructor: function Array()
​
copyWithin: function copyWithin()
​
entries: function entries()
​
every: function every()
​
fill: function fill()
​
filter: function filter()
​
find: function find()
​
findIndex: function findIndex()
​
flat: function flat()
​
flatMap: function flatMap()
​
forEach: function forEach()
​
includes: function includes()
​
indexOf: function indexOf()
​
join: function join()
​
keys: function keys()
​
lastIndexOf: function lastIndexOf()
​
length: 0
​
map: function map()
​
pop: function pop()
​
push: function push()
​
reduce: function reduce()
​
reduceRight: function reduceRight()
​
reverse: function reverse()
​
shift: function shift()
​
slice: function slice()
​
some: function some()
​
sort: function sort()
​
splice: function splice()
​
toLocaleString: function toLocaleString()
​
toString: function toString()
​
unshift: function unshift()
​
values: function values()
​
Symbol(Symbol.iterator): function values()
​
Symbol(Symbol.unscopables): Object { copyWithin: true, entries: true, fill: true, … }
​
<prototype>: {…


//

// yeah it looks like an array I have all these 

reduce: function reduce()

pop: function pop()
​
push: function push()

map: function map()

{}

// methods that arrays get
// what happen here?
// well I created a new array
// & this new array was created 
// from this big array box overhere 
// what we call a constructor

// this array creted our array variable
// that contain an empty array
// & did 

.__proto__ 

// to go up the prototype chain
// & get into this array
// so by that theory if I go up the prototype chain 
// I should get an object lets have a look

if I go back & I do

array.__proto__

// & then go up the prototype chain again

array.__proto__.__proto__

// I get the object
// or what we call
// the base object

array.__proto__.__proto__
Object { … }

// opened

{…}
​
__defineGetter__: function __defineGetter__()
​
__defineSetter__: function __defineSetter__()
​
__lookupGetter__: function __lookupGetter__()
​
__lookupSetter__: function __lookupSetter__()
​
__proto__: 
​
constructor: function Object()
​
hasOwnProperty: function hasOwnProperty()
​
isPrototypeOf: function isPrototypeOf()
​
propertyIsEnumerable: function propertyIsEnumerable()
​
toLocaleString: function toLocaleString()
​
toString: function toString()
​
valueOf: function valueOf()
​
<get __proto__()>: function __proto__()
​
<set __proto__()>: function __proto__()

{}
// this is the object in javascript gets created from
// including functions & including arrays
// & we see that we have some properties here
// for example we have:

toString: function toString()

{}
// the toString method overhere
// which means that anything 
// that is a descendent of an objbect 
// will get the toString method
// that means that an array
// such as our array overhere

array.toString()
""

// has the toString method on it
// look at that
// because of this prototype chain

// remember what I sayed initially
// an object get access to 
// the properties & methods 
// of another object through the Prototype Chain

// lets further this example
// this time arround 
// lets create a function

function a() {}
undefined

// & this function a is empty
// once again
// if I go up the prototype chain
// what do you think I will get?

a.__proto__

// I get this f () overhere, a native function
// this is our base function
// where all functions are created from

function ()

{}
// opened

()
​
apply: function apply()
​
arguments: 
​
bind: function bind()
​
call: function call()
​
caller: 
​
constructor: function Function()
​
length: 0
​
name: ""
​
toString: function toString()
​
Symbol(Symbol.hasInstance): function Symbol.hasInstance()
​
<get arguments()>: function arguments()
​
<set arguments()>: function arguments()
​
<get caller()>: function caller()
​
<set caller()>: function caller()
​
<prototype>: Object { … }

​{}
// so that if I go up the prototype chain again
// what do you think I will get?

a.__proto__.__proto__

// yes we go back to that object

a.__proto__.__proto__
Object { … }

// opened

a.__proto__.__proto__
{…}
​
__defineGetter__: function __defineGetter__()
​
__defineSetter__: function __defineSetter__()
​
__lookupGetter__: function __lookupGetter__()
​
__lookupSetter__: function __lookupSetter__()
​
__proto__: 
​
constructor: function Object()
​
hasOwnProperty: function hasOwnProperty()
​
isPrototypeOf: function isPrototypeOf()
​
propertyIsEnumerable: function propertyIsEnumerable()
​
toLocaleString: function toLocaleString()
​
toString: function toString()
​
valueOf: function valueOf()
​
<get __proto__()>: function __proto__()
​
<set __proto__()>: function __proto__()

​

{}
// that base object, that all objects come from

// ok, one last example
// lets say I create an object

const obj1 = {}

// this is going to be an emty object

// now if I do:

obj1.__proto__

// what do you think waht will happen?

obj1.__proto__
Object { … }

// well we get the base object again
// opened

obj1.__proto__
{…}
​
__defineGetter__: function __defineGetter__()
​
__defineSetter__: function __defineSetter__()
​
__lookupGetter__: function __lookupGetter__()
​
__lookupSetter__: function __lookupSetter__()
​
__proto__: 
​
constructor: function Object()
​
hasOwnProperty: function hasOwnProperty()
​
isPrototypeOf: function isPrototypeOf()
​
propertyIsEnumerable: function propertyIsEnumerable()
​
toLocaleString: function toLocaleString()
​
toString: function toString()
​
valueOf: function valueOf()
​
<get __proto__()>: function __proto__()
​
<set __proto__()>: function __proto__()

​

{}
// this base object is this one overhere 

(diagram video)

// I created from this object
// my own object variable
// & thats inherits as a Prototype Chain up to this base object

(diagram video)

// & this is what Prototypal Inheritance is
// is a concept that over the next couple of videos
// we are going to understand why is so useful to us
// as a matter of fact this feature is actually quite uniquue
// & not that common on other popular languages like C ?sharp or Java
// they use something called Classical Inheritance
// Javascript uses Prototypal Inheritance
// now, even though in Javascript
// we do have the class keyword
// & its something that 
// we are gonna talk about in our 
// Object Oriented Programming section of the course
// in Javascript this what we call syntatic sugar
// there is actually no classes in javascript
// we only have Prototypal inheritance
// so what is this whole Prototypal Chain?
// why is it useful?
// we just started here
// so lets dive a little bit deeper in the next video

/////////////////////////////////////////// 17. Prototypal Inheritance 2

// welcome back
// lets do a fun little demostration of the Prototype Chain

// I am going to create a dragon
// & this dragon will have name as the property
// lets call that dragon Tanya,
// fire, well its a firebreathing dragon
// obviously set to true
// & the dragon can also fight
// so this fighting dragon
// will return lets say damage of 5
// its a pretty strong dragon
// & you know what just to make it more fun
// we are gonna to add a sing() method
// to this object
// & it will say it returns
// lets do template strings
// `Ì am ${this.name}, the breather of fire`
// I am Tanya the breather of fire
// now, if we do dragon.sing()
// 'I am Tanya the breather of fire'
// nice
// now, if I do fire() here
// I get 5
// perfect

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `Ì am ${this.name}, the breather of fire`
        }
    }
}

dragon.sing()

// I get

Ì am Tanya, the breather of fire

//

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `Ì am ${this.name}, the breather of fire`
        }
    }
}

dragon.fight()

// I get

5

// </prototype></prototype> (previous default code closing tag not included in video)

// now, lets say we have another object now
// & this object is a simple lizard
// & this lizard unfortunatelly doesnt have much powers
// it has a name of kiki
// & then maybe it can also fight
// but definately not as strong as the dragon
// so its going to get a damage of 1
// ummm, not a very strong lizard
// now lets say if we wanna borrow a method form the dragon object
// we have learnt how to do that before
// remember bind
// can just do something
// const singLizard & this const lizard will have the dragon dot sing dot bind
// & borrow that method the lizard object
// so lets console dot log (singLizard())

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `Ì am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

const singLizard = dragon.sing.bind
(lizard)
console.log(singLizard())

// & if we run this function
// lets see what happens
// I run

Ì am Kiki, the breather of fire

// & I get I am kiki the breather of fire
// nice, very cool

// but lets say this object gets a little bit more complicated
// lets say that the dragon
// this time arround
// in order for us to breathe fire
// we have to make sure that we have the fire property set to true
// so that we can perhaps do
// this dot fire
// if that is true
// that is when we return our battle cry 'breather of fire'
// if I run this now I get

// undefined

// unfortunately the lizard
// doesnt have fire set to true
// & even though we borrow the method
// because we dont have the fire hability
// its never going to sing
// 'Kiki the breather of fire '

// so what can we do here?
// in manually add the property
// but you can see now how it get more & more complicated here right
// if we have a big Object
// & we want to borrow more than one method
// we wanna perhaps inherit
// a bunch of these properties
// for the lizard aswell
// to make it all powerful

// & this is when Prototypal Inheritance comes in
// what if we create a Prototype Chain
// that says:
// Hey! I want lizard to inherit
// all this properties & methods from dragon
// How can we do this?
// well we can go like this
// & say lizard dot underscore underscore proto underrscore underscore
// that is we created that chain from lizard all the way up to dragon
// all right lets see if it works
// if I do lizard dot sing now

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `Ì am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

lizard.__proto__ = dragon; // that is we created that chain from lizard all the way up to dragon
lizard.sing()

// & if I run

// check that out
// 'I am Kiki, the brether of fire'

Ì am Kiki, the breather of fire

// what about the property fire
// that means we have fire aswell

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `Ì am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

lizard.__proto__ = dragon;
lizard.fire

// set to true
// how awesome is that

true

// what about fight

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `Ì am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

lizard.__proto__ = dragon;
lizard.fight()

// if I do fight & I run this

1

// my power is still 1 because I have fight alrready defined in my lizard object
// so what we are able to do here
// is we are able to inherit through this prototype chain 
// all the properties & methods of the dragon
// & overwrite anything that we have declared in our own object
// so that name & fight stay with us
// buut as soon as we say something like sing()
// the javascript engine is going to say lizard dot sing()
// Hey lizard lets sing
// & its going to look through the properties & say ummm I dont see sing() here
// I am going to go up the prototype chain
// because we have created that protoype chain up to dragon
// & say Hey do you have sing
// & if dragon have sing()
// then is going to run using this code

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `Ì am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

lizard.__proto__ = dragon;
lizard.sing()

//

Ì am Kiki, the breather of fire

// what happens if call something other than sing()
// maybe dance()

// if we run

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `Ì am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

lizard.__proto__ = dragon;
lizard.dance()

// I get lizard.dance is not a function

TypeError: lizard.dance is not a function

// because we go up the prototype chain
// Does dragon have dance()?
// no, & then what do we do next?
// we go up the prototype chain of dragon
// whats the prototype chain of dragon?
// well we talk about this. right?

// the prototype chain of dragon is the original base object
// that hipothetically I can use whatever method this object has
// if you remember the base object
// so if I go const object
// or const dragon equals for now an empty object 

const dragon = {}
undefined

// if I do dragon dot underscore underscor proto underscore underscore
// I get this base object

dragon.__proto__
Object { … }

// opened

dragon.__proto__
{…}
​
__defineGetter__: function __defineGetter__()
​
__defineSetter__: function __defineSetter__()
​
__lookupGetter__: function __lookupGetter__()
​
__lookupSetter__: function __lookupSetter__()
​
__proto__: 
​
constructor: function Object()
​
hasOwnProperty: function hasOwnProperty()
​
isPrototypeOf: function isPrototypeOf()
​
propertyIsEnumerable: function propertyIsEnumerable()
​
toLocaleString: function toLocaleString()
​
toString: function toString()
​
valueOf: function valueOf()
​
<get __proto__()>: function __proto__()
​
<set __proto__()>: function __proto__()

​

{}

// & I have a few properties here
// if I do lets say 

isPrototypeOf: function isPrototypeOf()

{}

// which looks like comes with the base object
// I should be able to use this. right?
// if I do dragon dot is prototype of

dragon.isPrototypeOf()

// & in here I say Hey another object whos prototype chain is to be check
// so is dragon a pototype of lets say lizard?

dragon.isPrototypeOf(lizard)

// if I check this

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `Ì am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

lizard.__proto__ = dragon;
// lizard.dance()
dragon.isPrototypeOf(lizard)

// yes dragon is a prototype of lizard
// what happens underneath the hood
// we tell the javascript engine
// Hey dragon run this method
// its going to look 
// & the dragon object says 
// ummm I dont see any method called isPrototypeOf here
// I go up the prototype chain
// to the base object
// that all objects are created in javascript from
// including functions & arrays
// & its going to say hey
// do you have isPrototypeOf?
// the javascript engine is going to say 
// yep I have isPrototypeOf lets give you that functionality
// & for us this functionality
// does exactly what it asked to
// it asked:
// is dragon a prototype of lizard?
// that is, does lizard inherit from dragon?
// yep it does, so we get true
// if I change this arround to

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `Ì am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

lizard.__proto__ = dragon;
// lizard.dance()
lizard.isPrototypeOf(dragon)

// I get false, because lizard istn the  prototype of dragon

false

// is the other way arround
// you may have notice something interesting here
// lets take a break & I will see you in the next video to discuss this further bye bye

/////////////////////////////////////////// 18. Prototypal Inheritance 3

// welcome back lets see if I can do something interesting here
// I am going to remove this line

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `Ì am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

// remeber we just have dragon & lizard
// we are going once again inherit
// or create a protoype chain up to dragon

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `Ì am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

lizard.__proto__= dragon;

// lets check something
// I am going to do the for in loop
// lets say let property in lizard
// that is loop through the properties lizard 
// & let just simply say console log prop

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `Ì am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

lizard.__proto__= dragon;
for (let prop in lizard) {
    console.log(prop)
}

// if I run this I am just that lizard have properties:

name
fight
fire
sing

// because we created a prototype chain
// now the base obbject
// also give us another interesting method
// that we can use
// call has own property
// if I do lizard dot has own property & we give it a properrty name so lets just give it prop

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `Ì am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

lizard.__proto__= dragon;
for (let prop in lizard) {
    if (lizard.hasOwnProperty(prop))
    console.log(prop)
}

// which we are gonna loop over
// & say if lizard has own property
// then I gonna console log 
// what that does mean?
// we are saying  with this method 
// only log whenever lizard has its own property
// lets see what happens when I run this

// I only get 

name
fight

// because lizard only have name & fight
// the other properties are inherited 
// from up the prototype chain how cool is that
// so we are not actually copying 
// this properties from the dragon as I sayed before
// if the javascript engine doesnt find 
// the property on that object it goes up the prototype chain
// for example the hasOwnProperty is not part of lizard 
// so it goes up the prototype chain to dragon 
// & up to the base object & find its own property
// & we are able to use it
// & the beauty is that javascript 
// looks for you through the prototype chain automatically
// we dont have to do any weird 
// dot underscore underscore proto dot underscore underscore proto
// to find its own property
// it does it automatically
// I want to remind you
// this isnt the same thong thing as the scope chain that we talked about

// remember these are the prototype chains

(diagram video)

// & these are the scope chains

(diagram video)

// different color chains. right?
// so keep in mind they work in similar fashion 
// but they are two different chains

// before I tell you why this is so useful
// if you havent already figure it out
// I do want to warm you
// I just have shown you
// well you shouldnt really attend

// you may be asking yourself
// Hey I come I havent seen __proto__ before?
// it seems pretty useful
// why dont see it everywhere?
// this __proto__ although we can use it here
// you shouldnt really use it
// actually you shuoldnt never use it
// its bad for performance
// & there is different ways that we want to inherit
// when it comes to Prototypal Inherit
// something that we are going to dive deep into when we will talk about Object Oriented Programming
// so we never wanna manually assign the Prototype Chain
// & create that chain ourselves
// its going to well mess up the javascript compiler really bad
// but I want to show you just how it works
// & when we start talking abut Object Oriented Programming
// we will learn proper ways of doing it
// now lets talk about why this prototypal inheritance is useful
// lets think about this
// maybe pause the video
// think abouut it
// why is this useful
// the fact that objets can share prototypes
// means that you can have objects with properties 
// that are pointing to tha same place in memory thats being more efficient
// imagine that we have a ton of lizards 
// & we just copy all this functionality of the dragon onto the lizard
// into a different pace in memory
// that can get overwhelming fairly soon
// instead with prototypal inheritance
// instead of just copying all this functionality 
// into different places in memory we have it in one just place
// anything that inherits from dragon
// just use this one instance of this method 
// because the javascript engine is just going to look the prototype chain
// which makes things really intresting
// for example this hasOwnProperty lives on the base object
// only leaves in memeory in one location
// because well we just use the prototype chain to look for it
// & everything that inherits from the base object get access to 
// this how cool is that we are being efficient
// we are not repeating ourselfs & we are saving ourselfs memory
// & by the way whenever we get undefined on something
// lets say in here I go lizard dot ahha

// & if I run this

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `Ì am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

lizard.__proto__= dragon;
for (let prop in lizard) {
    if (lizard.hasOwnProperty(prop))
    console.log(prop)
}

lizard.ahha()

// I get a type error

ReferenceError: dragon is not defined
    at /home/runner/DryAlienatedIntroductory/index.js:8:20
    at Script.runInContext (vm.j
name
fight
TypeError: lizard.ahha is not a function
    at /home/runner/DryAlienatedIntroductory/index.js:27:8
    at Script.runInContext (vm.js:130:18)
    at Object.<anonymous> (/run_dir/interp.js:209:20)
    at Module._compile (internal/modules/cjs/loader.js:1137:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1157:10)
    at Module.load (internal/modules/cjs/loader.js:985:32)
    at Function.Module._load (internal/modules/cjs/loader.js:878:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47Hint: hit control+c anytime to enter REPL.
 

// or if I go as a property 

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `Ì am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

lizard.__proto__= dragon;
for (let prop in lizard) {
    if (lizard.hasOwnProperty(prop))
    console.log(prop)
}

lizard.ahha

// I get undefined

ReferenceError: dragon is not defined
    at /home/runner/DryAlienatedIntroductory/index.js:8:20
    at Script.runInContext (vm.j
name
fight
Hint: hit control+c anytime to enter REPL.
 

// whenever the javascripit engine doesnt find anything up the Prototype Chain
// we get these errors or undefined because it goes all the way up to the base object 
// & what happens after we get to the base object
// lets find out
// if I clear this

(console browser)

// & say I have an object
// & say that we have an object that we will create
// its gonna be an emty object

const obj = {}

//

const obj = {}
undefined

// & if we do object dot proto

obj.__proto__

//

obj.__proto__
Object { … }

//

// well I get the base object
// where all object are created from

obj.__proto__
{…}
​
__defineGetter__: function __defineGetter__()
​
__defineSetter__: function __defineSetter__()
​
__lookupGetter__: function __lookupGetter__()
​
__lookupSetter__: function __lookupSetter__()
​
__proto__: 
​
constructor: function Object()
​
hasOwnProperty: function hasOwnProperty()
​
isPrototypeOf: function isPrototypeOf()
​
propertyIsEnumerable: function propertyIsEnumerable()
​
toLocaleString: function toLocaleString()
​
toString: function toString()
​
valueOf: function valueOf()
​
<get __proto__()>: function __proto__()
​
<set __proto__()>: function __proto__()

​

{}

// let me ask this 
// where if I do ?

obj.__proto__.__proto__

//

// even higher up than this base object
// waht do you think it will happen?
// we get null

obj.__proto__.__proto__
null

// thats surprise you?
// null means there is nothing there
// & when javascript was created as a language
// undefined was used for
// well we dont have that variable
// we dont have something defined
// null meant there is absolutelly nothing there
// because of this Prototypal Inheritance nature
// we needed some way to say Hey pass the base object 
// there is nothing there there is null
// someone calls this null pointer
// pointing to null. its the end of the chain
// sorry I have nothing for you there thrown an error throw undefined 
// something is wrong we dont have that

// all right lets take a break & get into more Prototypal Inheritance in the next video

/////////////////////////////////////////// 19. Prototypal Inheritance 4

// wellcome back
// lets try a few more things to test out our assumptions
// lets say I create once again another object & this object has a name of Sally

const obj = {name: 'Sally' }

//

const obj = {name: 'Sally' }
undefined

// now if I do object has own property

obj.hasOwnProperty()

// & I do:

obj.hasOwnProperty('Sally')

// or

obj.hasOwnProperty('name')

// I get

obj.hasOwnProperty('name')
true

// because we have  it as our own property
// that makes sense

// but if I do something like

obj.hasOwnProperty('hasOwnProperty')

// I get

obj.hasOwnProperty('hasOwnProperty')
false

// because object itself doesnt have this as its own property
// it has this as a property up the prototype chain
// what about function & this gets interesting
// lets say we have a function
// called a, & its an empty function

function a() {}

// remember what I sayed all functions have call, apply & bind
// if I do

a.hasOwnProperty('call')

// I get 

false

// if I do

a.hasOwnProperty('bind')

// I get

false

// if I do lets say apply

a.hasOwnProperty('apply') 

// I get

false

// what about name?
// remember when I say name, optional field, or a function

a.hasOwnProperty('name') 

// well remember function are objects & 'a' has a name. right?

a.hasOwnProperty('name')
true

// a dot name

a.name

// is:

a.name
"a"

// well the name of the function is itself
// our call & apply
// are not part of the property
// you see this diagram that I show you initially where

(diagram video)

// a function is a special object
// is a codable object
// where we have code that can be invoked
// we have an optional name field
// as we just saw
// & we have properties we can add to the function because well is an object
// I told you that we have call(), apply() & bind() as properties
// technically this wasnt 100% correct
// because these properties
// are exactly in the multiplyBy5() function
// instead what do you think it is?
// well its up here

(diagram video)

// its up the property chain
// & dont worry
// I will explain this diagram a little bit better
// lets try this

// lets create a function
// multiply by five that takes a number
// & this number return num times 5 

function multiplyBy5(num) {
    return num*5
}

//

function multiplyBy5(num) {
    return num*5
}
undefined

//

// so multiply by five if I go up the prrototype chain
// we will have ourr function

multiplyBy5.__proto__

//

multiplyBy5.__proto__
function ()

{}

//


multiplyBy5.__proto__
()
​
apply: function apply()
​
arguments: 
​
bind: function bind()
​
call: function call()
​
caller: 
​
constructor: function Function()
​
length: 0
​
name: ""
​
toString: function toString()
​
Symbol(Symbol.hasInstance): function Symbol.hasInstance()
​
<get arguments()>: function arguments()
​
<set arguments()>: function arguments()
​
<get caller()>: function caller()
​
<set caller()>: function caller()
​
<prototype>: Object { … }

​

{}

// </prototype>

// our base function that all functioins get created from
// rememeber we ceated a function from this base function overhere

(diagram video)

// & now this base function
// I can capture it by right clicking I say
// store as global variable
// as temp1

temp0

function ()

{}

// if I do
// temp1 dot properties

remp1.(metabox properties in console browser)

//

temp0.

// all this properties that comes with a function
// I have apply, bind, call, I have lenght, I have name
// because, rememeber, the name is an empty name
// is the base function with no name

temp0.name
""
// but I have all this properties & methods on it
// & in the proptype chain you can see objbect overher
// I also have hasOwnProperty, isPrototypeOf, propertyIsEnumerable,
// just like we have up there in our diagram
// so thats actually whats happening

(diagram video)

// when we do multiplyBy5
// we have our __proto__ property
// that links up to the function
// & this function overhere has the call, apply & bind
// now, you may notice overhere, 
// there is something called prototype here 
// (pointing multiplyBy5 function)
// that __proto__ links to
// & once again __proto__ links to prototype
// & then this __proto__ links to a null
// this is the base object &
// eventually we link to null
// we point to null
// you see a pattern here
// you see a pattern like this

(diagram video)

// where __proto__ links to prototype: {...}
// very confusing
// so lets break this down

// multiplyBy5()
// which is a codable object
// that has code that is invokable
// it has name that is optional
// it can have some properties
// it also has this __proto__
// as well as the prototype: {} property
// & that __proto__ links up to this function
// which once again is a codable object
// a special type of object
// that has its own code
// it has properties
// but it also has this property called 
// prototype: {
//     call, apply, bind }
// that the __proto__ links to
// & thats where call, apply & bind live
// & as a matter of fact this yellow arrow here
// __proto__ actually lives inside of this object
// prototype: {
//     call, apply, bind }
// I just didnt included here because I run off space

// so does youur brain hurts yet?

// lets test out our assumption
// lets go back to this diagram
// & test what I just told you

multiplyBy5.__proto__

// should point to that base function

// which is a pointer, which points to the function.prototype
// so I get this native function

multiplyBy5.__proto__

function ()

{}

// so the native function is:

function.prototype

// this is the same
// because 

multiplyBy5.__proto__

// actualy points to the prototype 

function.prototype

// still confused, lets try this
// what if I do:

Object.prototype

// well I get this base object 
// we kept seen everywhere 
// it is the prototype property of the object

Object.prototype
Object { … }

// opened

Object.prototype
{…}
​
__defineGetter__: function __defineGetter__()
​
__defineSetter__: function __defineSetter__()
​
__lookupGetter__: function __lookupGetter__()
​
__lookupSetter__: function __lookupSetter__()
​
__proto__: 
​
constructor: function Object()
​
hasOwnProperty: function hasOwnProperty()
​
isPrototypeOf: function isPrototypeOf()
​
propertyIsEnumerable: function propertyIsEnumerable()
​
toLocaleString: function toLocaleString()
​
toString: function toString()
​
valueOf: function valueOf()
​
<get __proto__()>: function __proto__()
​
<set __proto__()>: function __proto__()

​

{}

// if we go back to the diagram we see object 
// that has prototype whith hasOwnProperty & other functions
// & that prototype also includes __proto__ 
// as one of its properties that point to null

// let test that

Object.prototype.__proto__

// points to null

Object.prototype.__proto__
null

// again, I dont think javascript did a good job 
// naming these things because it is confusing
// but rememeber this diagram

(diagram video)

__proto__

// is simply a reference or a pointer to up the chain prototype object

// lets test this out with an array
// if I create an array
// that is an empty array

const array = []

//

const array = []
undefined

// & this array dot hasOwnProperty

[].hasOwnProperty()

//

// well does this array has own property map?

[].hasOwnProperty('map')
false

// no it doesnt
// rememeber we are being efficient with our memory
// map function should live only in one location 
// up the prototype chain with the base array
// so, instead
// we here lets do:

array.hasOwnProperty('map')

// it will be the same thing

// Does that have own property map?

array.__proto__.hasOwnProperty('map')
true

// & if we do:

Array.prototype

//

Array.prototype
[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

// well we get the base array

array.__proto__
[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

// so array dot proto is pointing the father array dot prototype

// to review
// arrays & functions are objects
// multiply by 5 is a special object
// that is a codable object
// that instead of having call, apply & bind directely as a properties
// uses Prototypal Inheritance
// to actually inherit form the base function
// & the key here is that  __proto__ points to the prototype up the chain
// & keep in mind that this __proto__ property actualy lives on the prototype

// I know I know very extremly confusing but this way
// we are able to be efficient with our memory
// we are able to use the map function
// our the for each functions on the array
// just write them once
// instead of juust copying the same methdods
// & properties all over the place

// al right lets take a break & explore some more in the next video

// I see you in the next one bye bye

/////////////////////////////////////////// 20. Prototypal Inheritance 5

// welcome back lets explore how we can create our own prototypes
// because I told you that __proto__
// is something that we shouldnt use
// we shouldnt use
// __proto__= some type of an object
// because we should never use this 
// __proto__=
// for performance reasons in javascript
// so what is a save way to do this

// well lets create a human

let human = {}

// & this human will have a property
// that is mortal

let human = {
    mortal: true
}

// a human is mortal,
// it should be true
// & lets say out of a human we create socrates

let human = {
    mortal: true
}

let socrates =

// & socrates should also be a human
// it should inherit from this human
// & we can do that with object dot create

let human = {
    mortal: true
}

let socrates = Object.create

// now there are many ways of doing that something 
// that we will explore in the upcomming sections
// but this is one of the ways that we can inherit from human

let human = {
    mortal: true
}

let socrates = Object.create(human)

// so I created object dot create human & thats it is going to equal socrates

let human = {
    mortal: true
}

let socrates = Object.create(human)

// so that if I do console dot log socrates+

let human = {
    mortal: true
}

let socrates = Object.create(human)
console.log(socrates)

// & if I run
// well I get an empty object

{}

// lets add a property on socrates
// lets say socrates has age of 45
// if I run this 

let human = {
    mortal: true
}

let socrates = Object.create(human)
socrates.age = 45
console.log(socrates)

// I have

{ age: 45 }

// but can I do socrates dot mortal?

let human = {
    mortal: true
}

let socrates = Object.create(human)
socrates.age = 45
console.log(socrates.mortal)

// I have it socrates is mortal

true

// because we have created used object dot create 
// a prototype chain up to human

let socrates = Object.create(human)

// so if I do human

let human = {
    mortal: true
}

let socrates = Object.create(human)
socrates.age = 45
console.log(human.isPrototypeOf
    (socrates))

// we get true

true

// human is a prototype of socrates 
// we inherit from human, not bad at all

// this is something 
// we are gonna explore a little bit more like a sayed before,
// but for now at least now you now how to do this without using that evil __proto__
// as a matter of fact the name it this way so that nobody accidentaly messes with prototype chain

// I see you in the next one

/////////////////////////////////////////// 21. Prototypal Inheritance 6

// welcome back
// I have  one more piece of information that are going to blow your mind
// & after this you can relax asying ok no more surprises the hardest part is over
// its gonna become easier & easier as we learn as we use prototypal inherance

// this statement is true:

// Only functions have the prototype property

// what does that mean?
// Rememeber this,
// how __proto__ points to the prototype object
// well the thing that contains this prototype object
// is always a function
// if we go back to our muultiplyBy5 example

// (diagram video)

// we ask ourselves is multiplyBy5 a function?
// yes it is
// is a special type of object,
// it has an invokable piece of code,
// it has an optional name property,
// it can have its onwproperties
// & we can use __proto__
// to link up to the prototype
// but, multiplyBy5 itself
// because I just say it in that statement
// every function has a prototype property, 
// it has __proto__

// lets run that function again

function multiplyBy5(num) {
    return num*5
}

//

function multiplyBy5(num) {
    return num*5
}   
undefined

//

& if I do

multiplyBy5.prototype

//

multiplyBy5.prototype
{constructor: ƒ}

// opened

multiplyBy5.prototype
{constructor: ƒ}
constructor: ƒ multiplyBy5(num)
__proto__: Object

// opened constructor

multiplyBy5.prototype
{constructor: ƒ}
constructor: ƒ multiplyBy5(num)
arguments: null
caller: null
length: 1
name: "multiplyBy5"
prototype: {constructor: ƒ}
__proto__: ƒ ()
[[FunctionLocation]]: VM180:1
[[Scopes]]: Scopes[2]
__proto__: Object

//

// look at that I have a prototype
// this prortotype itself is pretty empty
// when we create a function like this
// multitply.prototype
// this prototype
// we dont really use
// it just gets created
// but we never really make use of it
// because prototype although are a property of all functions
// the only time we only use prototypes
// is using what we called constructor functions

// constructor functions
// they usually start with a capital letter
// & they contain the actual blue print or prototype that we use

(diagram video)

// so for example if I do

multiplyBy5.__proto__

//

multiplyBy5.__proto__
ƒ () { [native code] }

// which links to that prototype
// we already know that 

Function.prototype

// is going to equal exactly that

Function.prototype
ƒ () { [native code] }

// if I do 

multiplyBy5.__proto__.__proto__

//

multiplyBy5.__proto__.__proto__
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// & up the chain again
// it will be the object constructor
// well if I do

Object.prototype

//

Object.prototype
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// I get the same thing
// but now you are asking yourself
// wuo wuo wuo you just told me that
// prototype properties
// only exist in functions
// & this is where it gets a little bit tricky
// because this 

Object

// is something that we talked about before
// is the base Object

// becuase if I do:

multiplyBy5.__proto__.__proto__.__proto__

// we get null

multiplyBy5.__proto__.__proto__.__proto__
null

// because we passed this base object

Object.prototype
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// if I do:

typeof Object

// I get function

typeof Object
"function"

// What?
// I know I know super confusing
// typeof Object is a function
// because well it has the prototype property

// rememeber when I talked about standar built in objects in javascript
// & we have all this things like:

Fundamental objects:

Object

Function

Boolean

Numbers and dates:

like:

Number

Math

Date

Text processing:

String

// /.../

// all with capital letters
// well if I click on 

Object 

// over here
// we see that this object
// is the Object constructtor that creates an object wrapper

// remember in order for us to performance 
// an action in a program we have to have a function. right?
// Thats what a program does it stores data 
// & we use functions to manipulate that data
// so when we use something like:

const obj = {}

//

const obj = {}
undefined

// underneath the hood 
// javascript has to create that object
// & in order to create that object
// it uses this 

// Object constructor

Object.prototype
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// just to prove to you that thats the case

if I do type of an empty object now

typeof {}

//

typeof {}
"object"

// look at that I get object
// because this is now an actual object 
// that we have created from the object constructor

// now, I am going to warm you
// & I know I am bugging you with this
// this can get pretty hairy & complicated & hard to map your header up
// if there is one thing that you take away from this video
// is that:

// Every function has a prototype property
// & it references to an object used 
// to attach properties that will be inherited by objects 
// further down the prototype chain
// the last object in the chain is this built in object dot prototype

typeof Object.prototype

//

typeof Object.prototype
"object"

// rememebr that difference
// object is a function because it has a prototype
// now the object dot prototype is we call the base object
// thats the very last piece, or the very last object
// that we can look for properties on, before we point to null

// I told youu that your brain was going to burn after this one

// one last thing
// if I created 
// lets say an object equals to an empty object

const obj = {}

// will I be able to acces to obbject dot prototype?

obj.prototype

//

const obj = {}
undefined

// no its uundefined
// its not a function
// if I do lets say an array

const arr = []

//

const arr = []
undefined

// if I do array dot prototype

arr.prototype

// is that available?
// not is not a function

arr.prototype
undefined

// what if I do a string dot prototype?

'string'.prototype

// is that available?

'string'.prototype
undefined

// no we dont have prototype

// because that is just a primary type
// functions have a prototype
// & you may notice here that we have

Functions

Booleans

Numbers

Strings

// /.../

// so if I do something like:
// String dot prototype

String.prototype

//

String.prototype
String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}

// yep, we have that

String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
anchor: ƒ anchor()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
__proto__: Object
[[PrimitiveValue]]: ""

// & strings have all these methods
// from the string constructor
// that we can inherit from
// even though I did

// 'string'.prototype here

'string'.prototype

//

'string'.prototype
undefined

// underneath the hood when I try & access a method 
// on the string javascripit is going to convert it
// into a string object & look up the protoype chain for these methods
// that way we can perform all these actions on string type

// to review
// everything in javascript is an object
// an arrays an functions in javascript are objects
// they are inherit through the prototype chain from the base object
// you can go up the prototype chain
// looking for properties on this prototype property
// this prototype property also has the __proto__ property inside of it
// that links higher up to the next prototype chain
// __proto__ always pointas to prototype
// & we also rememeber that:

// Only functions have the prototype property

// & at the end of the day tthis is useful for us
// because we are using prototypes
// we avoid repeating ourselfes
// we avoid adding the same code 
// over & over & over being inefficient with our memory
// but we also start creating some interesting programming paradigms now & practices
// using what we have learnt both
// Prototypes & Closures
// to write some really powerful programs

// we are almost ready to get into the next section
// I see youu in the next video
// bye bye

/////////////////////////////////////////// 22. Exercise Prototypal Inheritance

// welcome back
// lets do another exercise

// now we learnt all about prototypal inheritance
// so based on what you now & all the things that we have learn in the pass like
// the 'this' keyword
// using all that knowledege
// I have two questions here that
// I am going to warm you
// you have to google arround & search arround
// remember there is no such a thing like a perfect programmer we cant know everything
// so you google if you need to
// & specially the last one it is pretty tough
// so you can always came back to
// give it a go

// in the next video I will show you how we solve these problems
// the first question is I want youu  to create using the date object 
// that we have in javascript righthere

new Date('1900–10–10').lastYear()
// '1899'

// that simply give us a date

// I want you to add a new method onto 
// this constructor this Date constructor
// that is called lastYear()

// javascript doesnt have this

lastYear()

// if I run this code I get
// lastYear is not defined
// because well thats not a thing

TypeError: (intermediate value).lastYear is not a function
    at /home/runner/DryAlienatedIntroductory/index.js:1:24
    at Script.runInContext (vm.js:130:18)
    at Object.<anonymous> (/run_dir/interp.js:209:20)
    at Module._compile (internal/modules/cjs/loader.js:1137:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1157:10)
    at Module.load (internal/modules/cjs/loader.js:985:32)
    at Function.Module._load (internal/modules/cjs/loader.js:878:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47Hint: hit control+c anytime to enter REPL.
 

// if I do getYear() or getFullYear()
// we see that types of methods that we have with a Date object

new Date('1900–10–10').getYear()

// but unfortunatelly 

lastYear()

// well we dont have that
// we wanna going to create it ourself
// so how do you go about doing this
// if I give it lets say a string like this

'1900–10–10'

// if I do lastYear() it will give the year before in the 'YYYY' format
// so the answer to this would be 1899
// if this was just say new date with nothing inhere which give us the current date

new Date().getYear()

// this should give us well last year
// so how do you do that
// & in the second part
// & this is the second part
// how can we modify the map method
// we have in arrays if you print an actual map emoji at the end of each item

// #Bonus
// Modify .map() to print '🗺️' at the end of each item.
// console.log([1,2,3].map())
// 1🗺️, 2🗺️, 3🗺️

// so that if I do lets say console.log & give it an array 1, 2, 3
// & I do dot map() not giving anything
// I will actually print out
// 1, 2, 3
// but  with the maps next to it
// how we do that?
// can we modify what these built in methods by javascript do?
// give it a go & in the next video I will give you the answers

// good luck

/////////////////////////////////////////// 23. Solution Prototypal Inheritance

// welcome back
// lets start with the first one
// adding a lastYear method to our Date object

new Date('1900–10–10').lastYear()
// 1899

// this one we can simply do Date dot prototype

Date.prototype
new Date('1900–10–10').lastYear()
// 1899

// so these are the properties that this Date object will have access to

Date.prototype.lastYear
new Date('1900–10–10').lastYear()
// 1899

// & we will say well we wann to add last year to it
// it doesnt exist yet but I am going to define it right here

Date.prototype.lastYear = function() {}
new Date('1900–10–10').lastYear()
// 1899

// this is going to be a function that it should return the year. right?

Date.prototype.lastYear = function() {
    return
}
new Date('1900–10–10').lastYear()
// 1899

// now, this is where it maight have beena little bit tricky
// how can we refer to this part of the data

new Date('1900–10–10')

// that is we want to add last year as a method here 

new Date('1900–10–10').lastYear()

// to whatever calls us
// remember that keyword that I talked about
// that asked who called me, that refers to the object that called the method

Date.prototype.lastYear = function() {
    return this.
}
new Date('1900–10–10').lastYear()
// 1899

// if you guuessed 'this' you are correct
// 'this' will refer to whatever gets called,
// whatever is to the left of the dot

new Date('1900–10–10')

// so that if I do 'this' & udonese getFullYear() 

Date.prototype.lastYear = function() {
    return this.getFullYear()
}
new Date('1900–10–10').lastYear()
// 1899

// choose an actual method that we get on the Date, 
// & simply do -1 minus one, to get lastYear 

Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
}
new Date('1900-10-10').lastYear()
// 1899

// that should work
// lets hit run & see what happens
// & look at that 1899

1899

// note of my: set minus symbol to determine hyphen, not alt + minus key
// otherwise you get NaN

// if we just do today´s date & run

Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
}
new Date().lastYear()

//

// 2018 there you go, now you know what year this is recorded

//

2019

// if I go back & just for fun do:
// 1988

Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
}
new Date('1988-10-10').lastYear()

//

1987

// last year was 1987
// not bad
// now if I change this to an arrrow function if I do arrow function here

Date.prototype.lastYear = () => {
    return this.getFullYear() - 1;
}
new Date('1988-10-10').lastYear()

// & if I run this, I get an Error

TypeError: this.getFullYear is not a function
    at Date.lastYear (/home/runner/DryAlienatedIntroductory/index.js:2:17)
    at /home/runner/DryAlienatedIntroductory/index.js:4:24
    at Script.runInContext (vm.js:130:18)
    at Object.<anonymous> (/run_dir/interp.js:209:20)
    at Module._compile (internal/modules/cjs/loader.js:1137:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1157:10)
    at Module.load (internal/modules/cjs/loader.js:985:32)
    at Function.Module._load (internal/modules/cjs/loader.js:878:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47Hint: hit control+c anytime to enter REPL.
 

// this may have got a few of you
// rememeber with the arrow function
// we have this lexically scoped
// that is if I console dot log this

Date.prototype.lastYear = () => {
    console.log(this)
    return this.getFullYear() - 1;
}
new Date('1988-10-10').lastYear()

// & I run, well repl wontt let me do it
// so lets do it in our console

Date.prototype.lastYear = () => {
    console.log(this)
    return this.getFullYear() - 1;
}
() => {
    console.log(this)
    return this.getFullYear() - 1;
}

// this is refering to the actual Date Object that called us

() => {
    console.log(this)
    return this.getFullYear() - 1;
}

// because we are lexically scoped

// so this is one of those rare cases 
// that we want the 'this' to be determined at call time
// when we actually run this function
// rememeber the dynamic scope nature of 'this' keyword
// in this case we wanna keep that
// I told youu that this was a little tricky

// what about the next one
// well the nxt one is, if youu got the previous one
// you might have gotten this on aswell
// its a little tricky

// #Bonus
// Modify .map() to print '🗺️' at the end of each item.
// console.log([1,2,3].map())
// 1🗺️, 2🗺️, 3🗺️

// lets figure out this
// in here I wanna to ruun this method map()
// on 1, 2, 3

// #Bonus
Modify .map() to print '🗺️' at the end of each item.
console.log([1,2,3].map())
1🗺️, 2🗺️, 3🗺️

// so we can modify it on the array prototype

// #Bonus
// Modify .map() to print '🗺️' at the end of each item.
console.log([1,2,3].map())
// 1🗺️, 2🗺️, 3🗺️

// the constructor array
// I can just say
// Array.prototype.map()

// #Bonus
// Modify .map() to print '🗺️' at the end of each item.
Array.prototype.map
console.log([1,2,3].map())
// 1🗺️, 2🗺️, 3🗺️

// which is an existing methods but
// & I am going to modify & actually overwrite the map function

// #Bonus
// Modify .map() to print '🗺️' at the end of each item.
Array.prototype.map = function() {}
console.log([1,2,3].map())
// 1🗺️, 2🗺️, 3🗺️

// & this map() function wont receive any parameters
// I mean if I want to change any of the functionality we can definetely do it
// but for now we can do this

// #Bonus
// Modify .map() to print '🗺️' at the end of each item.
Array.prototype.map = function() {}
console.log([1,2,3].map())
// 1🗺️, 2🗺️, 3🗺️

// we create an Array

Array.prototype.map = function() {
    let arr = [];
}
console.log([1,2,3].map())
// 1🗺️, 2🗺️, 3🗺️

// & we do a loop over the array that we give it
// we dont wanna loop over the array we just created

Array.prototype.map = function() {
    let arr = [];
}

// we wanna loop over whatever we get

console.log([1,2,3].map())
// 1🗺️, 2🗺️, 3🗺️

// & rememebr to the left of the dot thats 'this'

console.log([1,2,3].

// so whatever calls us thats what we wanna loop over
// in this case, because if I just do a map function

Array.prototype.map = function() {
    let arr = [];
    map
}

// well we are overwritting the map function
// so we cant really use that
// just do a basic for loop

Array.prototype.map = function() {
    let arr = [];
    for()
}

// you can do let i = 0

Array.prototype.map = function() {
    let arr = [];
    for( let i = 0; i )
}

// & we are gonna keep going until i is less than
// what should it be?
// this dot lenght

Array.prototype.map = function() {
    let arr = [];
    for( let i = 0; i < this.length)
}

// that is the lenght of whatever calls us

[1,2,3].

// & then we just do i++

Array.prototype.map = function() {
    let arr = [];
    for( let i = 0; i < this.length; i++) {
    }
}
console.log([1,2,3].map())
// 1🗺️, 2🗺️, 3🗺️

// & in here we just array dot push 

Array.prototype.map = function() {
    let arr = [];
    for( let i = 0; i < this.length; i++) {
        arr.push(this[i])
    }
}
console.log([1,2,3].map())
// 1🗺️, 2🗺️, 3🗺️

// to this new arrray that we have created the this i
// so that is whatever this is at the index of i
// so the first time arround will be 
// index of 0 which is 1
// index of 1 which is 2
// index of 2 which is 3

console.log([1,2,3].map())

// & we are simply going to add to this the map over here

Array.prototype.map = function() {
    let arr = [];
    for( let i = 0; i < this.length; i++) {
        arr.push(this[i] + '🗺️')
    }
}
console.log([1,2,3].map())
// 1🗺️, 2🗺️, 3🗺️

// so we are just concatenating string

this[i] + '🗺️'

// because of type coercion in javascript this is going 
// to be turned into a string for us

this[i] + '🗺️'

// & because this is an expression
// we are going to do this in curly brackets

(this[i] + '🗺️')

//

Array.prototype.map = function() {
    let arr = [];
    for( let i = 0; i < this.length; i++) {
        arr.push((this[i] + '🗺️'))
    }
}
console.log([1,2,3].map())
// 1🗺️, 2🗺️, 3🗺️

// so it evaluates thhis before it console log it
// so that if I run this now
// well I get undefined
// we dont return anything from here
// so lets return the array that we have created

Array.prototype.map = function() {
    let arr = [];
    for( let i = 0; i < this.length; i++) {
        arr.push((this[i] + '🗺️'))
    }
    return arr
}
console.log([1,2,3].map())
// 1🗺️, 2🗺️, 3🗺️

// if I run this

[ '1🗺️', '2🗺️', '3🗺️' ]

// Hey! look at that
// its working
// & it is important to rememeber that map()
// if you go & look at how map is implemented
// it returns a new array like this

return arr

// we dont modify the exiting array
// well we create a new one



// & then we have it
// we have 1, 2, 3

[ '1🗺️', '2🗺️', '3🗺️' ]

// literally map
// very very cool

// now whats an issue with doing things like this

// as you can imagine thats pretty dangerous. right?
// what if somebody just mofifies the actual functionality of map
// & all the code in our project that uses map is now well destroyed
// does something weird like actually throwing a map next to the item
// so you wanna be really careful with this 
// & you should really never modify the existing methods that we have

// but you must be asking youurself,
// Andrei, I havent really seen this anymore?
// Do we even use this?
// How come I never seen prototype been used?
// as we will find out in the object oriented part of the course
// this array dot prototype dot map way of creating methods & doing inheritance
// its a little bit old school
// therre is a newer cleaner way of doing this using things like the 'class' keyword
// which we are gonna get into
// & all these headaches that I was bothering you with the prototyping
// __prototype & all of that difficult stuff its going to become really really simple
// if you gotten this far
// trust me things are gonna get much much simpler
// but I hope I show you some of the power of prototyping inheritance
// because in the next part we are gonna clean all this stuff
// so for now take a break & I see youu in the next part

/////////////////////////////////////////// 25. Section Review

// welcome back, 
// we finally finish the two pilars of javascript 
// concepts that not all the programming languages have
// that are quite complex 
// that are very powerful if you understand them
// we now have the tools on top of our fundations
// with these two pilars
// to really push our habilities
// & start talikng about progrramming paradigms
// these paradigms allow us to create programs
// they are not simple basic ones
// complex heavy application
// using good practices
// closures & prototypes
// are going to be something that we are going to talk over & over & over
// when we talk about functional programming & object oriented programming
// to very important paradigms when it comes to becoming a great programming
// now to finish out this section
// I wanna to talk to you about
// Scheme & Java
// you see originally, when Brendan Eich in 1995 released javscript
// he was inspiring by these two programming languages
// Scheme was a programming language that was created at MIT in the 70s
// it was a very unique programming language
// & I believe the first language to have closures in the program
// & then Java, at the time that javascript was created was the trendiest language
// everybody was using it, everybody was talking about,
// companies wanted to hire Java developers
// now Brendan Eich want to create a programming language 
// while he was working at nextscape 
// that was very easy to use on the web
// but also use the popularity of Java
// which is javascript kind derive from
// but there was an issue here
// Scheme & Java are quite different
// you see Brendan Eich really like the functional side of Scheme
// this idea of closures & functions as first class citizens
// but at the same time he also had pressure form the Java community
// where classes & classical inheritance was really important
// this idea of Object Oriented Programming
// where objects were the key to building beatiful programs
// versus Scheme where functions were the key to build beautyful programs
// now, I am simplfying a little bit here
// but as we move into the next part of the course
// I want you to realize that
// based on the roots of javascript
// which were inspired on Scheme & Java
// we have this multi parradigm language
// unlike a lot of languages you can mix & match paradigms
// & you can really say that javascriipt is an oriented object programming language
// or a functional language
// youu can do whatever you want
// which in my opinion is actually the beauty of javascript
// you can use multiparadigms to build your application
// based on your needs
// based on what you think will create the best outcome
// the most maintainable the most predictable
// & that poer of javascript we are going to explore in the next section
// now that we have these two pilars
// of closures & prototypal inheritance
// two key pieces for us to really dive deep
// into object oriented programming, 
// functional programming & how they allow us
// to create large scale programs
// I see you in the next section
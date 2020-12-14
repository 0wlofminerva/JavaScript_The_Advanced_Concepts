/////////////////////////////////////////// 2. OOP and FP

// In all programs there are two primary components
// the data that is the stack that we keep in our memory
// & the behaviuor, the things that the programs can do, the functions

// & in oreder for us to deal with that
// to organize things like that
// well we initially had languages like Java like Scheme
// that had different ideas of what we can do

// & we have learnt that Java & Scheme were the inspiration of javascript
// we also learnt that there is things like functions & objects
// in javascriipt that are really really inportant
// we learnt all about prototypal inheritance
// about functions & there is useful tools like closures
// & that idea that functions are first class citizens
// objects allow us to do prototypal inheritance
// & from that idea we also had:
// functional programming & object oriented programming

// Object Oriented Programming 
// says that bringing together the data 
// & its behaviour in a single location called an object
// & containing that in a box
// makes it easier to understand how our program work

// functional programming says that data & behaviour
// are distinctly different things & should be kept separate for clarity
// so perhaps instead of having one giant box to describe everything
// we have multiple boxes, the way that I like to think about it is
// object oriented programming is like building a robot
// we have a head component, an arm component, maybe a chest component, legs component, antena components,
// & we build those together
// well functional programming says just give a data & I data act upon that data through functions
// & I will return something new from the data that you gave me
// now, if you still confused dont worry, we are going to dive into this topic

// but the goal of these two sectioin comming up 
// is not to show that fuunctional programming vs object oriented programming
// yes I know thats the title of section
// but my goal at the end of this section is to convince you that
// these are actually complementary
// is not one over the other
// instead is about using both paradigms in unison to make beautifuul programs
// you see the beauty of javascript is that it is multy paradigm
// we can uus eboth of these techniques to make our code easy to reason about 
// to make it clear to make it more understandable
// easy to extend more efficient
// & we can use each of these paradigms
// based on our problems & use the techniques 
// in each to pick the right paradigm
// for the specific problem
// & you see we already started in journey of functional programming or object oriented programming

// do you remember the two pilars?
// the two pilars finally allow us to learn about these topics

// closures werre a big part of function &
// without closures we wouldnt be able 
// to do the things that I am going to show
// for functional programming
// & without prototypes we are not going 
// to be able to do the things we are gonna 
// to do in object oriented programming

// so we have our stepping stone ready

// now the obly thing that we have left to do
// is to start, so I see you in the next video

// /////////////////////////////////////////// 3. OOP Introduction

// lets get into object oriented programming

// we are gonna be talikng aboout something that actually we already covered
// but we are gonna dive deep this time
// this like:

// the 'this' keyword

// prototypal inheritance

// the 'new' keyword

// the new ES6 classes

// the idea of inheritance

// Object.create()

// these all are important things
// we also are going to talk about private & public fields
// the idea of class based inheritance that we maight see things like Java
// & we are gonna cover the four principles of obbject oriented programming

// now object oriented programming has been arround since the 70s
// & is a style of programming that is very common in languages like 
// C sharp, Python, Ruby, & obviously Java

// in OOP an object is a box containing information
// & operation that are supossed refered to the same concept
// it is like modeling real world objects
// & we have seen this before. right?

// rememeber when we have the dragon object

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

// we actually had some OOP principles over here
// we had data about the dragon such as name or hability to fire

let dragon = {
    name: 'Tanya',
    fire: true,
}

// & we also methods, actioins that the dragon can take

fight() {}

sing() {}

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

//

// in OOP this data:

let dragon = {
    name: 'Tanya',
    fire: true,
}

// can also be called state
// & we have wrap this dragon
// in an object model real world dragon 
// that contains some sort of data aboout the dragon
// & also the actions that the dragon can take
// these attributes or properties,
// allow us to keep track of the state of object

name: 'Tanya',
fire: true,

// & these methods allow us to manipulate the state of the object

fight() {}

sing() {}

// so we model the real world
// & thats what we wanna do with object oriented programming
// we wanna look at the world & organize our code 
// & the things that we wanna do into the small little object boxes

        = {
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

// that interact with each other
// so that we keep everything divided & organized
// & when it comes to object oriented programming
// there is two main types
// class based programming languages
// & prototype programming languages
// & as we know with javascript
// we have prototypal inheritance
// by the end of the OOP part
// I want you to be conforable with the idea
// why it allows us to have code that we can reason about
// & to gett started with this section
// start learning with the object oriented programming principles
// I have a little nice cartoon here
// maybe you wont get enough
// but by the end of this section
// hopefully this cartoon is hilariouus to you

// object oriented programming is all about modeling real world projects & relationships
// I see youu in the next one
// bye bye

// /////////////////////////////////////////// 4. OOP1 Factory Functions

// welcome back 
// lets finally get into the object oriented programming

// & our goal thrroughout the next couole of videos
// is to show youu an example
// how we can go from procedural code
// from code that we reapet ourselves
// that isnt really well organized code
// to  code that goes all the way to objbect oriented programming
// we start from the very basics
// %¡& each time improved little by little
// until we get to the end
// now we need a good example for this
// so what should we do

// I have an idea
// how about create a game or start to create a game
// where lets say its a fairy tale game
// all these characters that interact with each other
// maybe fight one another or communicate with one another
// so using this lets create a program
// that has object oriented principles in mind
// to organize our code

// how should we start?
// well definetelly have elfs overhere in this game
// so I think the best way for us to start is create well elfs

// lets go ahead & do that
// a very first naive approach is well to create an elf object. right?

const elf = {
    
}

// & our elf object will keep everything basic for now
// we definately have a name for our elf
// lets create a name called Orwell 6 this elf will have a weapon
// waht do elfs usually have?
// lets say a bow as the weapon

const elf = {
    name: 'Orwell',
    weapon: 'bow',
}

// & we can attack with this weapon using return attack with
// & then we can do + elf dot weapon

const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon
    }
}

// so that now if I do elf dot name
// if I run this 

const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon
    }
}

elf.name

// I get Orwell

Orwell

// if I do elf dot attack

const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon
    }
}

elf.attack()

// attack with bow

attack with bow

// there is our elf
// in this game we dont have just one elf
// we arre gonna have multiple elfs with different names different weapons
// maybe different methods
// what should we do if we wanna add another elf?
// well we copy & paste this code & create elf2

const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon
    }
}

const elf2 = {
    name: 'Sally',
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon
    }
}

elf.attack()
elf2.attack()

// maybe the name is Sally, weapon is bow,
// & once again if we wanna create Sally
// I do elf2 attack
// & there you go we have Sally attacking with a bow aswell

attack with bow

// now whats the benefit of we just done
// & at least move us to object oriented programming
// well we have something called encapsulation here
// we have grouped functionality together
// we have state that is data within the object

const elf = {
    name: 'Orwell',
    weapon: 'bow',
}

// & functions or methods acting on that state

const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon
    }

// so these methods can well interact with the state
// such us read it, they can even modify it
// we can have a method called change method,
// that changes weapon lets say from bow to sword
// thats our first step in object oriented programming
// is we have encapsulated functionality
// that can be contained to model real world
// such us elfs, into these containers,

        {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon
    }

// thats good, but,
// whats the problem with this?
// well the clear problem is when we need more elfs
// which in this game we are gonna have a tons of elfs
// shoot!
// we have to copy & paste the same code over & over
// even though all the elfs have the same attack method
// we have to copy & paste copy & paste
// & most likely we have a way more code thatn this that elfs can do
// a way more properties a more methods
// & we are not keeping our code very dry
// we are constanly repeating ourselfs
// so lets move to the next level

// that is to step two of object oriented programming
// lets go with factory functions
// & factory functions as the name suggests
// are functions that act like like factories
// they create objects for us
// so lets do that

// Factory Functions

// I am going to create a function create elf
// so lets programmatically create elfs

function createElf(name, weapon) {

}

// & this create elf its gonna have a name & weapon
// & its gonna just return a new elf everytime we run this function
// so return an object & inside this object we have name,we have weapon, & we have attack

function createElf(name, weapon) {
    return {
        name: name,
        weapon: weapon,
        attack() {

        }
    }
}

// & once again the attack its gonna return for us attack with the weapon that we have

function createElf(name, weapon) {
    return {
        name: name,
        weapon: weapon,
        attack() {
            return 'attack with ' + weapon
            
        }
    }
}

// so now here lets say I do const Peter & I create elf,

function createElf(name, weapon) {
    return {
        name: name,
        weapon: weapon,
        attack() {
            return 'attack with ' + weapon
            
        }
    }
}

const peter =  createElf()

// & this elf´s name is lets say Peter & the weapon will be stones
// a very primitive weapon if I click run

function createElf(name, weapon) {
    return {
        name: name,
        weapon: weapon,
        attack() {
            return 'attack with ' + weapon
            
        }
    }
}

const peter =  createElf('Peter', 'stones')

// & lets run peter dot attack

function createElf(name, weapon) {
    return {
        name: name,
        weapon: weapon,
        attack() {
            return 'attack with ' + weapon
            
        }
    }
}

const peter = createElf('Peter', 'stones')
peter.attack()

// if I click run

attack with stones

// I get attack with stones
// so that works we have created a factory function
// that is a function that creates objects for us

// & we can even simplify this a little bit using with ES6 syntax
// where if property & value are the same
// you can just keep it like this inside of an object

function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return 'attack with ' + weapon
            
        }
    }
}

const peter = createElf('Peter', 'stones')
peter.attack()

// so this stills runs
// the beauty with factory functions its now
// if I wanna create another elf
// all I do I do lets say Sam
// & Sam´s weapon is fire
// if I do Sam attack

function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return 'attack with ' + weapon
        }
    }
}

const peter = createElf('Peter', 'stones')
peter.attack()
const sam = createElf('Sam', 'fire')
sam.attack()

// I have attack with fire from Sam

attack with fire

// & instead of me copying & pasting code
// & now just have these functions that just creates elfs for us

sam.attack()

// we move up the step towards object oriented program
// we avoided repetitive code
// but there still a problem here factory function are great
// but can you notice something that we can improve here
// what if we have a thousand elfs?, & those thousand elfs,
// they require space in our memory, to store the same data?,
// & things like name & weapon, well they are going to be different,
// so we need to store that data in memory for each elf,

const peter = createElf('Peter', 'stones')
const sam = createElf('Sam', 'fire')

// but methods such as attack that are pretty generic

attack() {
    return 'attack with ' + weapon
}

// & they are the same thing, that is going to be copyed onto memory in a different location for each one of these elfs 
// so if we have a thousand elfs, a thousand attack functions in different palces in memory for each elf, 

// ummm, that is not the best. is it?
// luckly for us javascript has this interesting thing. right?
// we learnt about it in the last section, when we talk about prototypal inheritance
// we can use that to our advantage to maybe improve this, so we share functionality across different objects
// lets get to that in the next video


// /////////////////////////////////////////// 5. OOP2 Object.create()

// welcome back
// so we learnt about prototypal inheritance in javascript
// & we can use it to our advantage
// to move a little bit closer to object oriented programming

// we wanna solve this issue
// of having same functionality on multiple objects
// how can we solve that?

// before we get to prototypal inheritance
// there is one way of just doing this manually
// I can simply take out this function

function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return 'attack with ' + weapon
        }
    }
}

const peter = createElf('Peter', 'stones')
peter.attack()
const sam = createElf('Sam', 'fire')
sam.attack()

// & this function at the top
// can be place in some sort of a store
// that we have common functionality
// for example I can do const elFunctions 

const elfFunctions = {
    attack() {
        return 'attack with ' + weapon
    }
}
function createElf(name, weapon) {
    return {
        name,
        weapon,
    }
}

const peter = createElf('Peter', 'stones')
peter.attack()
const sam = createElf('Sam', 'fire')
sam.attack()

// & I can even call this elf function stores or store
// & in here I can just simply have attack
// & do something like this
// so that I have a simple object
// that has attack method on it

const elfFunctions = {
    attack() {
        return 'attack with ' + weapon
    }
}

// & all I need to do now to give the attack hability
// is to add a line in here that says
// peter dot attack
// is going to equal elFunctions dot attack

const elfFunctions = {
    attack() {
        return 'attack with ' + weapon
    }
}
function createElf(name, weapon) {
    return {
        name,
        weapon,
    }
}

const peter = createElf('Peter', 'stones')
peter.attack = elfFunctions.attack
peter.attack()
const sam = createElf('Sam', 'fire')
sam.attack = elfFunctions.attack
sam.attack()

// & the same with sam we will do the same thing
// & will say sam dot attack
// so we are adding a new property to sam
// & that property is going to equal attack
// now if I run this
// I get an Error
// Reference error weapon is not defined

ReferenceError: weapon is not defined
    at Object.attack (/home/runner/DryAlienatedIntroductory/index.js:3:33)
    at /home/runner/DryAlienatedIntroductory/index.js:15:7
    at Script.runInContext (vm.js:130:18)
    at Object.<anonymous> (/run_dir/interp.js:209:20)
    at Module._compile (internal/modules/cjs/loader.js:1137:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1157:10)
    at Module.load (internal/modules/cjs/loader.js:985:32)
    at Function.Module._load (internal/modules/cjs/loader.js:878:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47Hint: hit control+c anytime to enter REPL.
 

// well this elf functions object
// has no idea what weapon is

const elfFunctions = {
    attack() {
        return 'attack with ' + weapon
    }
}

// so how can we refer to the object thats calling us 
// rememebr, who is calling us?

// function createElf(name, weapon) {
//     return {
//         name,
        weapon,
//     }
// }

// well, the object to the left of the dot, right

sam.

// so in this case is will be 'this' dot weapon

this.weapon

//

const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}

// who is calling us? sam is calling us or peter is calling us

peter.

sam.

// if I run this. 

const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}
function createElf(name, weapon) {
    return {
        name,
        weapon,
    }
}

const peter = createElf('Peter', 'stones')
peter.attack = elfFunctions.attack
peter.attack()
const sam = createElf('Sam', 'fire')
sam.attack = elfFunctions.attack
sam.attack()

// alright, everything is working
// sam can now attack with fire

attack with fire

// & that is not to bad, right?
// we have shared functionality here

// but it still a lot of manual work
// javascript give us a nice little tool for us 
// to make this a lot easier for ourselves

// we can do something called
// object dot create which we seen in the previous sections
// with object dot create I can clean this up a bit
// instead of manually attach these methods onto each elf
// remember, if had a thousand elfs we have a lot of work to do

sam.attack = elfFunctions.attack

// instead, I am going to remove, these lines of code

const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}
function createElf(name, weapon) {
    return {
        name,
        weapon,
    }
}

const peter = createElf('Peter', 'stones')
peter.attack()
const sam = createElf('Sam', 'fire')
sam.attack()

// & use object dot create to create that link that prototype chain
// between these two parts of the code
// & the way we can do that is fairly simple

// we can say newElf is going to equal object dot create

newElf = Object.create()

//

const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}
function createElf(name, weapon) {
    newElf = Object.create()
    return {
        name,
        weapon,
    }
}

const peter = createElf('Peter', 'stones')
peter.attack()
const sam = createElf('Sam', 'fire')
sam.attack()

// & object create is going to take well
// what do we want tto creatte an object from
// we wanna create an object from this elfFunction store

const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}

// which is an object, this could probably be named a little be better,
// because it is confusing, it is an object 
// even though I call it elfFunctions
// so maybe you can say store here

const elfFunctionsStore = {
    attack() {
        return 'attack with ' + this.weapon
    }
}

// but for now lets leave the way it is
// elfFunctions,
// so I am going to create an object from the elf function

newElf = Object.create(elfFunctions)

//

const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}
function createElf(name, weapon) {
    newElf = Object.create(elfFunctions)
    return {
        name,
        weapon,
    }
}

const peter = createElf('Peter', 'stones')
peter.attack()
const sam = createElf('Sam', 'fire')
sam.attack()

// & I am going to assign that to a new elf
// so lets say let new elf

let newElf = Object.create(elfFunctions)

//

const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}
function createElf(name, weapon) {
    let newElf = Object.create(elfFunctions)
    return {
        name,
        weapon,
    }
}

const peter = createElf('Peter', 'stones')
peter.attack()
const sam = createElf('Sam', 'fire')
sam.attack()

// from here this new elf we are gonna attach
// the name & weapon property 

// so lets do new elf dot name,
// its going to equal the parameter name that we receive,

function createElf(name, weapon) {
    let newElf = Object.create(elfFunctions)
        nweElf.name = name;
        weapon,

}

// & new elf dot weapon is going to equal weapon parameter that we receive

function createElf(name, weapon) {
    let newElf = Object.create(elfFunctions)
        newElf.name = name;
        newElf.weapon = weapon;
        return newElf;

}

// & then finally we wanna return the new elf here
// lets see if that works, if I run this 

const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}
function createElf(name, weapon) {
    let newElf = Object.create(elfFunctions)
        newElf.name = name;
        newElf.weapon = weapon;
        return newElf;
}

const peter = createElf('Peter', 'stones')
peter.attack()
const sam = createElf('Sam', 'fire')
sam.attack()

// look at that it is working

attack with fire

// lets console log this, so just we can see both of these in action

const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}
function createElf(name, weapon) {
    let newElf = Object.create(elfFunctions)
        newElf.name = name;
        newElf.weapon = weapon;
        return newElf;
}

const peter = createElf('Peter', 'stones')
console.log(peter.attack())
const sam = createElf('Sam', 'fire')
console.log(sam.attack())

// if I run this, 

attack with stones
attack with fire

// look at that attack with stone attack with fire
// both peter & sam have the attack method
// & why were we able to do that,
// because we use object dot create

Object.create()

//

let newElf = Object.create(elfFunctions)

// what object dot create does?
// it creates a link between an elf functions 

(elfFunctions)

// & a new elf that we just have created

let newElf

// we are doing prototypal inheritance here
// if I console log a new elf here

const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}
function createElf(name, weapon) {
    let newElf = Object.create(elfFunctions)
    console.log(newElf)
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('Peter', 'stones')
console.log(peter.attack())
const sam = createElf('Sam', 'fire')
console.log(sam.attack())

// & I run this, 

// you see that it creates an empty object for me

{}
attack with stones
{}
attack with fire

// but where is this attack
// rememeber this is an object

newElf

// if I do __proto__ to see what is up the prototype chain 

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

// I get attack

{ attack: [Function: attack] }
attack with stones
{ attack: [Function: attack] }
attack with fire

// so object dot create, 

let newElf = Object.create(elfFunctions)

// creates this prototype chain for us

newElf.__proto__

// all the way up, that we can use attack, very very cool

attack() {
    return 'attack with ' + this.weapon
}

// alright, so object dot create solves all of our problems
// everything is working now we are done
// here is a thing, what we are doing with object dot create 
// is true prototypal inheritance
// is meant to be used like this
// the code is a little bit cleaner now, 
// we have less lines of code
// & I personally really like this, however
// you wont see this out in most code basics
// I wouldnt say this is very standar 
// or accepted by the javascript communitity as a whole
// I dont wanna get into a philosophical debate here
// but our goal in the section 
// is to get closer & closer to the object oriented programming
// the thing is what we are doing here
// isnt necesary object oriented programming yet
// you will see why in a second
// I am going to show you in the next video
// is actually something that we had before object dot create
// that programmers used before that we had this hability
// because some people dont really like the look of waht I am about to show you next
// so keep this in mind & in the next video
// I we will see how to get closer in the object oriented programming 
// & not use object dot create
// & dont worry we will come back of this on some of the props & cons
// I see you you in the next one bye bye



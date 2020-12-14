///////////////////////////////////////////// Exercise Dynamic Scope vs Lexical Scope

const a = function() {
    console.log(this)
    const b = function() {
        console.log(this)
        const c = {
            hi: function() {
                console.log(this)
            }}
            c.hi()
    }
    b()
}

a()

// lets do a bit  of an exercise
// I have a piece of code here
// I have variable 'a' that is a function
// & inside of that function 
// we have another variable const 'b'
// that is also a function
// that we ran at the end of the function
// & inside of that we have a 'c' function
// but this  time arround 'c' is an object
// tthat  has property 'hi' whiuch is a function
// & the end we are calling 'c.hi()'

// just to clear this up

const a = function() {
    console.log('a', this)
    const b = function() {
        console.log('b', this)
        const c = {
            hi: function() {
                console.log('c', this)
            }}
            c.hi()
    }
    b()
}

a()

//...//

// remember when I told you about 'lexical scope'
// 'lexical environment' how the compiler knew
// right away without write any piece of code
// what variables, functions has access to
// it is almost like 'lexical scope' dosent work with 'this'
// it doesnt really matter where we write in the piece of code
// all that matters is how it gets called
// during invokation
// who calls it?
// it mattters how the function was called

// let me show another interesting example

const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this);
        var anotherFunc = function()
        {
            console.log('b', this)
        }
        anotherFunc()
    }
}

// in javascript ur lexical scope
// (available data + variable where the function was defined)
// determines our available variables.
// Not where thefunction is called (dynamic scope)

// but there is actually a little foot note to the statement
// because everything in javascript is actually lexical scope
// how you write determines what we have available
// execpt for  the this keyword
// the 'this' keyword is actually dynamically scope
// that is it doesnt matter where is written
// it matters how the function is call

// how do we fix this problem
// how can we avoid this pitfall
// a lot of people have had in the pass

// Well, there is two ways to do this

const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this);
        var anotherFunc = () => {
            console.log('b', this)
        }
        anotherFunc()
    }
}

// I can solve this issue
// using what we have in ES6
// arrow functions
// you may have heard the term 
// arrow functions are lexically bound
// that is, arrow functions have a lexicall this behaviour
// unlike normal functions

//...//

arrow function is going to lexically bind this
var anotherFunc = () => {
    console.log('b', this)
}
// Hey!, what object surrounding 'this'
// Well, the main object is

    obj = {
    name: 'Billy',
    sing() {
        console.log('a', this);
        var anotherFunc = () => {
            console.log('b', this)
        }
        anotherFunc()
    }
}

// if I run this
// saying

obj.sing()
a 
Object { name: "Billy", sing: sing() }
debugger eval code:4:17
b 
Object { name: "Billy", sing: sing() }

// problem solved
// not too bad right

// thats  whats arrow functioin gave us
// which is amazing
// it prevents a lot of this confusion

// this is something we are gonna to talk  more about
// in  the object oriented programming session

// but what did we do before ES6 and arrow function
// another way we are able to do this before we have arrow functions

const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this);
        var anotherFunc = function()
        {
            console.log('b', this)
        }
        return anotherFunc.bind(this)
    }
}

// was to do something like this
// where I return another function
// & I bind (this)

return anotherFunc.bind(this)

// which because I was doing 
// this line of codeoutside of this function
// this is gonna to refer to the object

const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this);
        var anotherFunc = function()…
undefined

// if I do

obj.sing()
a 
Object { name: "Billy", sing: sing() }
debugger eval code:4:17
function anotherFunc()

obj.sing() actuually returns anotherFunc()

// So, if I do obj.sing() call the function
// & call the fuunction again ()

obj.sing()()
a 
Object { name: "Billy", sing: sing() }
debugger eval code:4:17
b 
Object { name: "Billy", sing: sing() }

// I get both this keywords are now part of the object

//...//

// but was does bind really do
// WebGLUniformLocation, in  the next video ...

// I just remember there is one more way to solve this issue
// the issue of this keyword in here inside oof another function
// being window object
// this is something that you may have seen a lot specially
// if you worked a lot in the pass with jQuery
// or the first version of Angular

// in order for us to capture the this value
// & in order to have to referencing the object
// what we would do is outside of the function itself
// create a reference
// for example

const obj = {
    name: 'Billy',
    sing: function() {
        console.log(this);

        var self = this; // for example

        var anotherFunc = function()
        {
            console.log(this)
        }
        return anotherFunc
    }
}

obj.sing()()

// & because at the time this line is ran

var self = this;

// 'this' is still inside of the object

obj = {
    name: 'Billy',
    sing: function() {
        console.log(this);

        var self = this; // for example

        var anotherFunc = function()
        {
            console.log(this)
        }
        return anotherFunc
    }
}

// we are gonna to maintain that reference to the object
// so that here we can use self

var self = this; // for example

// inside of another function

var anotherFunc = function()
        {
            console.log(this)
        }

//

{
    console.log(self)
}

//

const obj = {
    name: 'Billy',
    sing: function() {
        console.log(this);

        var self = this; // for example

        var anotherFunc = function()
        {
            console.log(self)
        }
        return anotherFunc
    }
}

obj.sing()()

//

// if I run this function
// both the sing() function
// have a reference to 'this' which is the object
obj = {
    name: 'Billy',
    sing: function() {
        console.log(this);

        var self = this; // for example

        var anotherFunc = function()
        {
            console.log(self)
        }
        return anotherFunc
    }
}
// and also anotherFunc
var anotherFunc = function()
        {
            console.log(self)
        }
// has a reference to the object having the (self) variable

obj.sing()()
Object { name: "Billy", sing: sing() }
debugger eval code:4:17
Object { name: "Billy", sing: sing() }

///////////////////////////////////////////// 20. call(), apply(), bind()

// in order for us to manipulate the 'this' keyword
// there are thrree really important methods
// you see a lot specially for senior javascriot developerr interviews
// that is :

call()
apply()
bind()

// we saw bind in the previous video,
// lets talk about them & see how can be use
// the first thing we gonna talk about is actually are:
// call() & apply()
// they look more intimidating than they really are
// because untherneath the hood
// all functions use call when invoking a function

// let me showe you what I mean

function a() {
    console.log('hi')
}

a.call()

// when I run this
// I get

//

hi

// underneath the hood in javascript when I do 'a' 'bracket, backet'
// to invoke the function

a()

// all function when invoked has this property called call()

a.call()

// that allows us to call the function

// so this is a shorthand

a()

// we can use, How cool is that!

// what if I do apply() here
// if  I run this same thing

// a.apply()

// the same thing,
// call(), &  apply() do the same thhing
// for now at least
// lets see how call() & apply()
// can be useful besides just calling function

lets say we are creating a game

const wizard = {
    name: 'Merlin',
    health: 100,
    heal() {
        return this.health = 100;
    }
}

wizard.heal()

// if his health goes to 50
// as long as we heal

const wizard = {
    name: 'Merlin',
    health: 50,
    heal() {
        return this.health = 100;
    }
}

wizard.heal()

// we are good still gonna be 100

100

// in the game we need more than just one character
// lets add another Character
// and this time arround
// I am gonna add an archer
// name is Robin Hood
// & health for Robin Hood is only 30

const archer = {
    name: 'Robin Hood',
    health: 30
}

wizard.heal()

// I know he is not doing to well
// he needs some healing power

// we have just created this piece of code
// & Robin Hood doesnt do much
// has a name & health

// wouldnt it be nice
// if we were able to borrow
// a functioin
// from the wizard
// an hheal archer

// I know I am using a silly example here
// specially for an advanced course
// I hope you can see
// the power of being able to borrow methods
// of other objects
// so that we keep our code dry
// we dont repeat ourselfs
// we dont add to memory
// we have one place
// where the method is
// & a place where we can change
// this is going to create a lot less bugs in our code
// how can we borrow the heal method for the archer?
// is not part of the same object o that we cannot use
// this.heal
// because this object doent have

const archer = {
    name: 'Robin Hood',
    health: 30
    this.heal() // we cannot add this.heal
}

wizard.heal()

// we cannot copy and paste the code
// instead we can borrow it
// & we can use call() & apply() 
// to borrow methods

// lets see how can we do that

// I can simply say

// wizard.heal()

// so that is the method I want to use
// & instead of calling it
// like we have before
// I use :

// wizard.heal.call()

// which I run this
// I just get wizard´s health
// but in here I gonna use call()
// & the first parameter of call()
// what this should be bound to

// wizard.heal.call(archer)

// essentially is saying,
// Hey! call heal
// instead of using wizard to call heal
// use archer to call heal
// we are just gonna borrow this heal from the wizard

if I run this 

const wizard = {
    name: 'Merlin',
    health: 50,
    heal() {
        return this.health = 100;
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30
}

console.log('1', archer)
wizard.heal.call(archer)
console.log('2', archer)

//

1 { name: 'Robin Hood', health: 30 }
2 { name: 'Robin Hood', health: 100 }

//

// at the beginnig my archer only have health of 30
// but after we use wizard healing power
// & use it on archer
// our health went back up to 100
// How cool is that!

// & call() actually has other parameters
// that it can receive
// it can receive arguments
// so that we can get archer or the heal method parameters
// for example
// lets say the heal method took num1, & num2

const wizard = {
    name: 'Merlin',
    health: 50,
    heal(num1, num2) { // added
        return this.health += num1 + num2;
    } // added
}

const archer = {
    name: 'Robin Hood',
    health: 30
}

// so whatever two numbers we get
// it adds to our currrentt health

// I can now call archer with the parameters
// so what are the parameters going to be?

console.log('1', archer)
wizard.heal.call(archer, 50, 30)
console.log('2', archer)

// so if I run this :

const wizard = {
    name: 'Merlin',
    health: 50,
    heal(num1, num2) { // added
        return this.health += num1 + num2;
    } // added
}

const archer = {
    name: 'Robin Hood',
    health: 30
}

console.log('1', archer)
wizard.heal.call(archer, 50, 30)
console.log('2', archer)

//

// I have 110 now

1 { name: 'Robin Hood', health: 30 }
2 { name: 'Robin Hood', health: 110 }

// 

// because to my current 30 health I added 50,
// which is 80, & then 30
// which is 110

// look at that 110 health thats pretty good

// thats what call() is really useful
// I mean it is quite usefull
// isnt it?
// when it comes to apply()
// like I sayed
// It does the same thing
// the only different between call() & apply()
// is that
// instead of call()
// that just takes parameters
// parameters, parameters,
// with  apply() it takes an array of parameters

// wizard.heal.call(archer, [50, 30])

// so that if I do this :

const wizard = {
    name: 'Merlin',
    health: 50,
    heal(num1, num2) { // added
        return this.health += num1 + num2;
    } // added
}

const archer = {
    name: 'Robin Hood',
    health: 30
}

console.log('1', archer)
wizard.heal.apply(archer, [50, 30])
console.log('2', archer)

// it still going to Work

1 { name: 'Robin Hood', health: 30 }
2 { name: 'Robin Hood', health: 110 }

//...//

// choosing which one to use call() or apply()
// just dependes on which one is easier to pass the arguments in
// just decide what is easier to pass
// array of parameters or
// separated list of arguments

// SourceBuffer, next time youu are thinking
// ummm, I am really jealous of that object method
// that that object has
// wouldnt it be nice if I just copied it?
// Does taht function includes the 'this' keyword so it can be dynamic
// Cool!
// then, you can use call() or apply() on it, thats your test

//enought for call() & apply()

// What happens if I use bind()?
// similar to call() & apply()
// bind() allows to use waht we have here
// bind() unlike call() & apply()
// that immediatelly runs
// bind() returns a new function
// with a certain context & parameters
// & it is usually used when we want a function
// to be called later on
// with certain type of context
// or certain type of 'this' keyword
// lets see how that would work

// in order to use bind()
// we do:

wizard.heal.bind(archer, 50, 30)

// bind accepts parameters
// but if I run this now :

const wizard = {
    name: 'Merlin',
    health: 50,
    heal(num1, num2) { // added
        return this.health += num1 + num2;
    } // added
}

const archer = {
    name: 'Robin Hood',
    health: 30
}

console.log('1', archer)
wizard.heal.bind(archer, 50, 30)
console.log('2', archer)

//

1 { name: 'Robin Hood', health: 30 }
2 { name: 'Robin Hood', health: 30 }

// uummm, it doesnt work
// my archer Robin Hood did not get heal
// & thats because unlike call() & apply()
// it doesnt run the function
// it returns the function

// so that if I add it to the variable :
// lets say healArcher
// so that we can use this function later on

const healArcher = wizard.heal.bind(archer, 50, 30)

// we can now run 

healArcher()

console.log('1', archer)
const healArcher = wizard.heal.bind(archer, 50, 30)
healArcher()
console.log('2', archer)

//

const wizard = {
    name: 'Merlin',
    health: 50,
    heal(num1, num2) { // added
        return this.health += num1 + num2;
    } // added
}

const archer = {
    name: 'Robin Hood',
    health: 30
}

console.log('1', archer)
const healArcher = wizard.heal.bind(archer, 50, 30)
healArcher()
console.log('2', archer)

//

// & if we click run

// look at that our archer is heal

1 { name: 'Robin Hood', health: 30 }
2 { name: 'Robin Hood', health: 110 }

// so that bind() allows us to store 'this' keyword

'archer'

(archer, 50, 30)

// or this function borrowing for later use

wizard.heal.bind(archer, 50, 30)

// & you might have noticed something here
// bind() is like a bandit to fix this idea of
// dynamically scope 'this' keyword
// that ruins our entire lexical scoping
// discusion that we have

// remember in the previoius video
// how we talk about this solution
// when we didnt have the arrow function
// we can use bind
// I hope that makes sense now 

const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this);
        var anotherFunc = function()
        {
            console.log('b', this)
        }
        return anotherFunc.bind(this)
    }
}

// we are able to store the value of 'this'
// which was object
// we can use it later
// another function instead of giving us this weird dynamically
// scope this keywordwe are able to bind another function to use this keyword
// that is the object

// to review
// call() & apply()
// when are them useful
// well, call() & apply() 
// are useful for borrowing methods from an obbject
// while bind() is useful to call for us functions
// later on with certain context
// or certain 'this' keyword

// by the way there is one more interesting use of bind()
// lets explain in the next video





















we keep our code dry
we dont repeat ourselves
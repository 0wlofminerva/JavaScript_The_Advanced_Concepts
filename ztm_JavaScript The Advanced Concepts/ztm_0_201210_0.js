// /////////////////////////////////////////// 14. MCI Memoization 1

// in order to understand how dynamic programming works
// we need to understand what Caching means
// Caching is a way to store values
// so we can use them later on
// ieally you can think of Cashing
// as a backpack that you can take to school
// instead of going all the way home
// when you need something like a pencil
// you have a small box on your back
// that you holds items that you need
// so that when you go to school
// you can reuse fast over & over
// now thats a bit of a silly example
// Caching is a way to speed up programs
// & hold some piece of data in an easily accesible box
// & Memoization is a special way of Caching
// that we are gonna be talking about
// because we use it a lot in dynamic programming
// but instead of just talk about it
// lets actually demostrate it in code
// the way we Cach things
// well lets imagine we call a function
// as we wanna addTo80()
// & this function takes a number
// function addTo80(n) {}
// & all it does is return a value of 'n'
// that is a parameter we give in & adds 80 to it

function addTo80(n) {
    return n + 80;
}

// so that when we run a function addTo80

function addTo80(n) {
    return n + 80;
}

addTo80()

// & we put in five 5

function addTo80(n) {
    return n + 80;
}

addTo80(5)

// we get 85

85

// nice & simple. right?
// but if I run this function again


function addTo80(n) {
    return n + 80;
}

addTo80(5)
addTo80(5)

// I have go through this step again
// return n + 80;
// & add 80 to the answer
// & if I do this again
// do the same thing


function addTo80(n) {
    return n + 80;
}

addTo80(5)
addTo80(5)
addTo80(5)

// I have ran the calculation three times

// but what if this operation took a really rerally long time?
// what if I have a console log here

function addTo80(n) {
    console.log('long time')
    return n + 80;
}

addTo80(5)
addTo80(5)
addTo80(5)

// imagine this operation takes multiple seconds
// every time we run this function 
// we will have to run time three times
// & go thorough the step one by one
// even though we do the exact same calculation three times

// is there any that we can optimize?
// & this is where we can use Cashing & Memoization
// lets improve the avobe function by doing something different
// I am going to create a new object called 'cache' 
// that its going to hold an empty object

let cache = {};

// we are also going to have a function 
// that is now going to be called memoize
// not memorize, memoize add to 80
// memoizeAddTo80 that takes a number

let cache = {};
function memoizedAddTo80(n) {}

// & inside here we are gonna to do something 
// a little bit different than the above
// we still going to add to 80 memoizedAddTo80 
// but we are gonna do it in a special way
// I am going to say
// if (n in cache) this a way to check if your property exist
// in an object in javascript

let cache = {};
function memoizedAddTo80(n) {
    if (n in cache)
}

// its similar to me doing cache dot n if(cache.n)
// to check for the property
// this one it reads beter I so I am gonna keep it like that
// so if n exist in cache
// so if we cahe it before

let cache = {};
function memoizedAddTo80(n) {
    if (n in cache) {}
}

// then simply return cache dot n cache.n
// or cache n return cache[n];
// so it returns the cache value

let cache = {};
function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    }
}

// but obviously its empty the first time arround
// so this is not going to work
// if there is nothing in the casche 
// which is the case the first time arround
// well we have an else statement

let cache = {};
function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {}
}

// & in here we are gonna have our cache
// & 'n' which doesnt exit yet
// & essign n plus 80
// cache[n] = n + 80;
// so that after this
// if we do something like
// memoized add to number 5
// memoizedAddTo80(5)

let cache = {};
function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        cache[n] = 5 + 80;
    }
}

// its going to say five plus eighty
// so in here we are going to cache
// the property five to have a value of eighty–five

let cache = {
    5: 85
};

// which is what we are doing here

    else {
        cache[n] = 5 + 80;
    }


// so that the next time arround
// we are doing something like this

memoizedAddTo80(5)
memoizedAddTo80(5)

//

function addTo80(n) {
    console.log('long time')
    return n + 80;
}

let cache = {
    5: 85
};
function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        cache[n] = 5 + 80;
    }
}

// we go to the if statement

    if (n in cache)

// find the fact that
// we already calculate five

let cache = {
    5: 85
};

// & do simply property access

        return cache[n];

// which as we know is all one time
// is super fast with the ?hash table like this

            {
    5: 85
};

// lets complete this example to show you how it works
// I am simply going to return cache 'n'

return cache[n]

// since we just filled it out here

cache[n] = 5 + 80;

// & lets just have a console log here that does long time
// to see that we are doing the calculation that takes a long time

console.log('long time');

// the first time I run this function

function addTo80(n) {
    console.log('long time')
    return n + 80;
}

let cache = {
    5: 85
};
function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log('long time');
        cache[n] = 5 + 80;
        return cache[n];

    }
}

memoizedAddTo80(5)
// memoizedAddTo80(5)

// I get 85

85

// & uppps I have a cache prefilled

let cache = {
    5: 85
};

//

let cache = {};

// so it didnt calculate the long time
// lets try it again

function addTo80(n) {
    console.log('long time')
    return n + 80;
}

let cache = {};
function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log('long time');
        cache[n] = 5 + 80;
        return cache[n];

    }
}

memoizedAddTo80(5)
// memoizedAddTo80(5)

// lets run
// long time

long time
85

// the first pass through
// it went through here

        else {
    console.log('long time');
    cache[n] = 5 + 80;
    return cache[n];

}

// & did this calculation that is hypothetically 
// its going to take a really long time

    cache[n] = 5 + 80;

// again we are using a nice easy example here
// but you can imagine that is a calculation
// that takes a long time many seconds

// what if I do this again?
// we can console dot log here
// to make sure that we capture this values

console.log(memoizedAddTo80(5))
console.log(memoizedAddTo80(5))

// & we label them one & two

console.log('1', memoizedAddTo80(5))
console.log('2', memoizedAddTo80(5))

// just so we can distinguish them
// so the first call & the second call

function addTo80(n) {
    console.log('long time')
    return n + 80;
}

let cache = {};
function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log('long time');
        cache[n] = 5 + 80;
        return cache[n];

    }
}

console.log('1', memoizedAddTo80(5))
console.log('2', memoizedAddTo80(5))

// if I hit run

long time
1 85
2 85

// look at that first time arround 
// we call long time & we calculate eighty–five

long time
1 85

// but, the second time arround 
// because this value 

return cache[n];

// was in the cache

let cache = {};

// we didnt have to do this long calculation

cache[n] = 5 + 80;

// & we just return it immediately

return cache[n];

// so what is memoization exactly?
// well memoization is a specific form of caching
// that involves caching the return value of a function
// that is the return value of this function

memoizedAddTo80(5))

// based on its parameters
// & if the parameter of this function doesnt change
// like it is here

console.log('1', memoizedAddTo80(5))
console.log('2', memoizedAddTo80(5))

//

                memoizedAddTo80(5))
                memoizedAddTo80(5))

// like it is here

                memoizedAddTo80(5))

// its memoize that is
// that is it uses the cache because 
// it is calculated the same thing before

                memoizedAddTo80(5))
                memoizedAddTo80(5))

// with the same parameter & 

                                (5))
                                (5))

// it will return a cached version of the function is memoized

let cache = {};

// if the parameter changes

function addTo80(n) {
    console.log('long time')
    return n + 80;
}

let cache = {};
function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log('long time');
        cache[n] = 5 + 80;
        return cache[n];

    }
}

console.log('1', memoizedAddTo80(5))
console.log('2', memoizedAddTo80(6))

// well is a different parameter that its never seen before
// so its going to calculate both times

long time
1 85
long time
2 85

// different things
// & I just notice that it shouldnt be five it should be 'n' dynamic

cache[n] = n + 80;

// there you go thats better

function addTo80(n) {
    console.log('long time')
    return n + 80;
}

let cache = {};
function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log('long time');
        cache[n] = n + 80;
        return cache[n];

    }
}

console.log('1', memoizedAddTo80(5))
console.log('2', memoizedAddTo80(6))

//

long time
1 85
long time
2 86

// so remember this memoizatioin is simply a way 
// to remember a solution to a solved problem
// so you dont have to calculate it again

// /////////////////////////////////////////// 15. MCI Memoization 2

// welcome back

// I wanna improve this function just a little bit

function addTo80(n) {
    console.log('long time')
    return n + 80;
}

let cache = {};
function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log('long time');
        cache[n] = n + 80;
        return cache[n];

    }
}

console.log('1', memoizedAddTo80(5))
console.log('2', memoizedAddTo80(6))

// you see ideally we dont wanna fill the cache
// in what we call the global scope
// that is to be living outside of this function

function addTo80(n) {}

let cache = {};
function memoizedAddTo80(n) {}

// ideally is good practice
// to have memory or in this cache to live inside of the function
// & not polluting the global scope
// & there is many ways to do this based on the language
// in javascript we can use something call closures
// this is what it looks will look like
// & I am showing you this becasue 
// when it comes to dynamic programming
// you are gonna see this pattern a lot
// luckely for dynamic programming
// the pattern is always the same
// so when you learn this it becomes easier & easier
// so the way we bring this inside of a function
// its to bring it like that

function addTo80(n) {
    console.log('long time')
    return n + 80;
}

function memoizedAddTo80(n) {
    let cache = {};
    if (n in cache) {
        return cache[n];
    } else {
        console.log('long time');
        cache[n] = n + 80;
        return cache[n];

    }
}

console.log('1', memoizedAddTo80(5))
console.log('2', memoizedAddTo80(6))

// but the problem is now that everytime we run this

long time
1 85
long time
2 86

// we get long time, because the cache gets reset
// everytime the function gets called
// so cache become an emty object
// to get arround this we have closures in javascriipt
// &  we can return another function
// so a function that return another function

function memoizedAddTo80(n) {
    let cache = {};
    return function() {}
    if (n in cache) {
        return cache[n];
    } else {
        console.log('long time');
        cache[n] = n + 80;
        return cache[n];

    }
}

// & in here we pass the parameter 'n'

return function(n)  {}

// & we will have the logic inside of this function

function memoizedAddTo80(n) {
    let cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
    
        }

    }
}

// thats it
// & because of something called closure
// we are able to access this cache 

let cache = {};

// inside of this chunck function

if (n in cache) {
    return cache[n];
} else {
    console.log('long time');
    cache[n] = n + 80;
    return cache[n];

// now this isnt a course about javascript
// so you can read on closures on your on
// this is just a way for us to avoid that global scope
// so that this time arround we can do something like this
// we can simply says const memoize equals memoized add to eighty

function memoizedAddTo80(n) {
    let cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
    
        }

    }
}
const memoized = memoizedAddTo80();

// & we will run this function,
// & we can actuually remove the parameter from here

function memoizedAddTo80(n) {}

//

function memoizedAddTo80() {}

// so that we have flexibility
// we have the memoize here
// so that now this function because I run it

const memoized = memoizedAddTo80();

// its going to return for me this function 

            function(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log('long time');
        cache[n] = n + 80;
        return cache[n];

    }

}

// memoize equals this function
// thats literalily what memoize add to eighty
// & I have access to this cache variable
// so that in here I can just say memoize five
// & memoize six

console.log('1', memoized(5))
console.log('2', memoized(6))

// If I hit run

function memoizedAddTo80(n) {
    let cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
    
        }

    }
}
const memoized = memoizedAddTo80();

console.log('1', memoized(5))
console.log('2', memoized(6))

//

long time
1 85
long time
2 86

// still get the same thing
// but if I do five & five
// & I hit run

function memoizedAddTo80(n) {
    let cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
    
        }

    }
}
const memoized = memoizedAddTo80();

console.log('1', memoized(5))
console.log('2', memoized(5))

// look at that its memoized

long time
1 85
2 85
Hint:

// this function

const memoized = memoizedAddTo80();

// remembers that the parameter has not change
// its the same parameter
// its going to check the cache 

        let cache = {};

// & say um um I dont need to do all the silly calculation
// I alrready have it
// here you go
// just uusing a ?hash table

return cache[n];

// here it is
// what we just learnt here is really powerful
// because it allows to be very efficient with our code
// something that we know into viewers log
// companies log
// & dynamic programming allows us to use 
// what we know now about memoization
// to optimize our code
// lets find out more in the next video

// /////////////////////////////////////////// 16. Compose and Pipe

// welcome back this is a big one
// & one of my favourites
// this really show the power of functioinal programing
// which up until now has been a little bit confusing
// its been a lot of functions a lot of oure function
// but it is hard the see in what we have learnt
// we just learnt a bunch of terminoloogy
// but it hasnt made us a better programmer
// starting this video
// we are gonna start to uncover some of these pieces
// so that when we work in our final exercise
// we understand how powerful this can be
// & compose is definetely the most powerful concept
// in my opinion
// composing or composition
// is the idea that any sort of data transformation that we do
// should be obvious
// its kind like a conveyor belt. right?
// in a factory we have data that gets process 
// by a function that outputs some sort of data
// & that data get process by another function
// that outputs that data
// a new form & so long $ so for

data --> fn --> data --> fn -->

// composability is a system design principle that
// deals with this relationship of components
// how can we compose different components
// of a factory
// that work on lets say ?converiable one
// & a highly composable system
// provides components that can be selected in a symbol in various combinations
// just like an assembly line
// we are moving this machine here this machine here
// its easy to move pieces arround to get the desired output
// based on the user specific requirements
// lets try some code to show what I mean

// & I am giving you a bit of a warming
// this gets a little complicated at first
// you may need a few minutes on your own after this video
// to code this along & to code this along 
// & figure out exactly what happens
// but trust me initially its gonna look hard
// with time this will become easier & easier

// let say I wanna do something lets say functional progamming
// so we wanna keep all our functions
// & we wanna do something interesting
// we wanna do two things at a time
// we want to have a number like
// minus fifty that well gets multiply by three

-50 * 3 -

// & then we also want to take the absolute ?of 
// that means we want a number that its always positive
// so we also make sure that we remove any negative sign from it
// we wanna do two things two functions
// how can we compose them together
// like an assembly line
// well I want to have a function that I am going to call
// multiply by three 
// & absolute

const multiplyBy3AndAbsolute

// alright. not the best name in the world but at least 
// that shows that we are doing multiple things 
// & I am going to do that operation that I told you
// but in order for you to do that I need to compose this two pieces of functiionality
// how can we do that?

// well in functional programmiong you can do something called composed

const multiplyBy3AndAbsolute = compose()

// now compose doesnt exit in javascript
// however ther is so common
// that there are a ton of libraries
// that actually lets you to use compose

// for example one of the best libraries
// when it comes to javascript & functional programming is 'Ramda'
// & Ramda as you can see comes with compose
// & we can use compose like this
// 'R' dot compose & we can pass it in functions
// just like an assembly line to operate on data
// by for now I dont want to use any library 
// I want to build my own
// I want to build a compose function

const multiplyBy3AndAbsolute = compose()

// that allows us to multiply by three

const multiplyBy3AndAbsolute = compose(multiplyBy3)

// so lets say take absolute 

const multiplyBy3AndAbsolute = compose(multiplyBy3, takeAbsolute)

// which means take that absolute number
// & make sure that there is no side ?effects at all
// or you know what lets say make positive
// because thats what you want

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

// so I want a compose function
// that when given a number is going 
// to multiply by three & make positive

// how can we do this?
// well lets define our compose function

const compose = ()
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

// & this compose function is going 
// to take well two functions
// so lets call it & this is f & g

const compose = (f, g)
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

// & f & g is going to return another function

const compose = (f, g) => ()
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

// & this function is going to receive the data

const compose = (f, g) => (data)
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

// so whatever we want to multiply by three 
// & absolute that number
// lets say in our example
// we are able to multiply by three & absoolute minus fifty

const compose = (f, g) => (data)
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50)

// so minus fifty is going to be the data

(-50)

//

(data)

// now in here the compose is going to accept f & g
// which multiply by three & make positive
// which is going to return a function
// right here. that takes data

const compose = (f, g) => (data) => data
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50)

// & this data
// well what do we want to do with it?
// first I want to take this data
// data overhere which is minus fifty
// & I wanna first apply the make positive
// so I am going to say g is going to call data

const compose = (f, g) => (data) => g(data)
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50)

// & after that gets evaluated
// I wanna multiply by three
// again fuunctions are first class citizens
// & this when that gets done
// I want you to call f

const compose = (f, g) => (data) => f(g(data))
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50)

// which in our case is multiply by three
// I hope that makes sense if not
// play back this video & see if you follow step by stepç

// now if I run this

const compose = (f, g) => (data) => f(g(data))
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50)

//

ReferenceError: multiplyBy3 is not defined

// I get an error because
// multiply by three & make positive
// is not really a thing
// so lets make those aswell
// lets make multiply by three

const compose = (f, g) => (data) => f(g(data))
const multiplyBy3 =
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50)

// & you see here that I am creating pure function here
// multiply by three is going to take a number

const compose = (f, g) => (data) => f(g(data))
const multiplyBy3 = (num)
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50)

// & is going to multiply that by three

const compose = (f, g) => (data) => f(g(data))
const multiplyBy3 = (num) => num*3;
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50)

// nice & simple
// & then make positive is going to take once again a number

const compose = (f, g) => (data) => f(g(data))
const multiplyBy3 = (num) => num*3;
const makePositive = (num)
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50)

// & we are going to use the built in math dot abs

const compose = (f, g) => (data) => f(g(data))
const multiplyBy3 = (num) => num*3;
const makePositive = (num) => Math.abs
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50)

// which thats exactly that
// turns a number into the absolute number
// which again that means removing the minus

const compose = (f, g) => (data) => f(g(data))
const multiplyBy3 = (num) => num*3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50)

// now if I run this

150

// I get a hundred & fifty
// because fifty multiply by three is a hunfred & fifty
// & we make that an absolute number
// which turns into well remove the negative
// how cool is that

// using compose we have created our little assembly line
// where we can compose different functions together
// & thats what compose is

// remember the definition
// composability is a system design principle 
// that deals with the relationship between components
// these are the components

multiplyBy3, makePositive

// that can be selected & assambled in various combinations
// I can move this arround so that multiply is here & make positive is here
// so that the order of operation changes
// just like moving little machinery
// arround an assembly line
// I hope you see the power of compose here
// because now we can compose functions
// build them together to add extra functionality
// create that data flow where we take
// a piece of data we take it through all these functions
// & then we finally have some sort of data that gets output
// because all those functions are pure
// & all those functions well are composable

// now when it comes to compose
// thats one of the most common functions 
// that you are gonna see in a programming language
// or a programming paradigm
// like I sayed 'Ramda' well it definatelly has compose
// & most of the time if you are using functional programming concepts
// well you are definately using compose
// but there is also another thing called pipe
// which is actually not that dificult

// pipe is essentially the same thing
// except instead going from right to left
// it goes left to right
// let me show you what I mean
// if instead of compose we wanna create pipe
// well pipe is simply the order will be different
// so instead of 'g' overhere
// we just swap these arround

const compose = (f, g) => (data) => f(g(data))
const pipe = (f, g) => (data) => g(f(data))
const multiplyBy3 = (num) => num*3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50)

// so that now with pipe
// the operation are different
// 'f' gets run first over data

f(data))

// so that is the first parameter that we give in compose

const compose = (f, g)

// so that means multiply by three
// gets run first

multiplyBy3

// & then 'g' gets run over that data

g(f(data))

// so make positive gets run last

makePositive

// now a better way for me to demostrate this to you
// is like this
// imagine if we have a function one

fn1()

// that take as a parameter a function
// & function is function two

fn1(fn2)

// that itself takes a function
// which is function three

fn1(fn2(fn3()))

// & that by itself takes fifty

fn1(fn2(fn3(50)));

// now I know thats confusing
// but with composing pipe this is what we can do
// we can do compose function one

compose(fn1)

// then function two

compose(fn1, fn2)

// then function three

compose(fn1, fn2, fn3)

// & then finally we give it the fifty data

compose(fn1, fn2, fn3)(50)

// so with compose what we can do is
// say hey I want you to evaluate this right to left
// that is take the data 

(50)

// & apply function three to it

fn3)(50)

// whatever comes out of that apply function two to it

fn2, fn3)(50)

// whatever comes out of that apply function one to it

(fn1, fn2, fn3)(50)

// pipe is just the opposite
// says do function three first 

pipe(fn3)

// then function two

pipe(fn3, fn2)

// then function one

pipe(fn3, fn2, fn1)

// so if I do fifty

pipe(fn3, fn2, fn1)(50)

// these two functions are gonna to have the exact same output
// because the order is actually the same
// the only difference is that pipe is going to wrap fifty
// & start off with function three
// just like compose start off with function three
// & then do function two & then function one
// so it goes left to right

// now I am only mentioning this here becasue
// we will see these changes interchangable
// & you can use whichever one you prefer
// for your redeabitability
// & you are also going to use this technique in our final exercise
// to compose our shoping cart

// alright hopefully this doesnt hurt your brain too much
// but I also hope that you see some of the power that comes with it
// we have just created this tinny little fuunctions

const compose = (f, g) => (data) => f(g(data))
const pipe = (f, g) => (data) => g(f(data))
const multiplyBy3 = (num) => num*3;

// that as you can see can be easily tested
// are pure
// but we are able to composed them together
// to do something more complex
// like muultiply by three & the absolute

// lets take a break & I see you in the next one

// /////////////////////////////////////////// 17. Arity

// welcome back
// this is juust a quick video on our last term
// that you might here a lot in functioonal programming
// & that is airity
// & airity it simply means the number of arguments a function takes
// thats it

// if we look at compose functioin well it has an airity of two

const compose = (f, g) => (data) => f(g(data))

//

(f, g)

// if we muultiply by three it has an airity of one

const multiplyBy3 = (num) => num*3;

//

(num)

// nothing to difficult. right?

// but why am I teaching you this?
// because in functional programming although this isnt a solid rule
// usually is a good practice & a good idea that a fewer number of parameters
// there are in a function
// the easier it is to use a function

// why is that?
// well because you can do more interesting things & make functions more flexible
// we can use things like currying
// or we can use functions in something like compose & pipe
// & compose these functions together

const compose = (f, g) => (data) => f(g(data))
const pipe = (f, g) => (data) => g(f(data))

//

                                 f(g(data))
                                 g(f(data))

// the more parameter a function has
// the harder it is to rerally compose it
// with other function
// it doesnt mean it is imposible
// but it does become a little bit more difficult
// so when it comes to airity
// there is no ?hard right or wrong
// however as a personal preference
// I like to stick to one or two parameters
// when it comes to functions
// because if you are using a functional programming paradigm
// it does help make your function more reusable
// al right nice & short one for airity
// I see you in the next one bye bye

// /////////////////////////////////////////// 18. Is FP The Answer To Everything

// why is functional programming so great 
// we have just learnt a bunch of terms
// everything kind looks like ?map
// but why are people so exiceted about it?

// in the next video we are gonna go into the amaxon exercise
// hopefully what we have learnt up untill now
// all come together
// the idea of functional programming
// is this idea of separation
// the idea of data & functions
// or data Effects that happen on that data
// kind a like this pipe
// we have a piece of data
// that we put through this pipe
// & whatever happens to the pipe this transformation
// something gets output
// if you try to perform effects & logic
// at the same time
// the problem is that you might create hidden side effects
// which cause a lot of bugs
// is multiple things in your program handle some piece of data at the same time
// well that gets really complicated
// & you can cause many problems
// so the idea in functional programming in keeping functions
// small & pure & composable
// doing one thing at a time
// & doing it well
// the idea of immutability
// the idea of function that takes inputs & return outputs
// so that it can be uused in another functions
// it allows us to have a predictable prrogram
// where it minimizes bugs
// everything is so simple
// & as long as we are able to combine this small little functions together
// we are able to create really complex programs
// tthe small little pieces that eventually build something like a piramid
// something great
// it doesnt mean that functional programming is the answer to everything
// yes, because of its nature it works really well with distributive system that have
// little machines all over the world working with each other
// or paralelism, where multiple things have to happen
// in parallel, but because these functions are pure it doesnt cost strange bugs
// but at the same time it all depends on the problem that you have
// there are times where object oriented programming might be better
// you are building a fairy tale game
// & you have clear objects characters in the game
// that have some sort of state
// that can interact with that state
// & others can interact with them aswell
// or yoou have something like an amazon shopping cart
// where there is clear data
// that needs to get process
// so using everything that we have learnt up until now

// lets go back to the exercise 
// that I show you at the very beginning of this section
// & see if we can apply some of this principles
// to ouor answer
// ready?

// lets get started

// /////////////////////////////////////////// 19. Solution Amazon

// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

purchaseItem()

//

// Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% taxt to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart


//

// welcome back its time 
// to implement all that we have learnt
// in the previous videos
// & make a functional programming paradigm amazon shoping cart
// so lets think about this
// we wanna implement a cart feature
// that is we wanna add items to cart

// 1. Add items to cart.

// add a three percent tax to the item in the cart

// 2. Add 3% taxt to item in cart

// & well we wanna buy an item which means
// move in whatever is in the cart to the purchases of the user 

// 3. Buy item: cart --> purchases

// & then finaly
// we wanna emty that cart

// 4. Empty cart

// so it looks like all of these are functions
// that we are gonna need to do
// what are these functions?

// lets just list them out list them out
// so we have a good plan in place
// we wanna obviously purchase item
// which is going to do all of that for us

purchaseItem()

// the first thing is I wanna have a function purchase item

function purchaseItem() {}

// well we wanna add items to cart
// so I am gonna create another function
// function item to cart

function purchaseItem() {}

function itemToCart() {}

// lets keep it in a single line now because we dont have anything 
// what else?
// we wanna going to add tax
// so I am going to create another function
// called apply tax to items

function purchaseItem() {}

function itemToCart() {}

function applyTaxToItems(){}


// we have function buy item
// which physically move the cart to purchases

function purchaseItem() {}

function itemToCart() {}

function applyTaxToItems(){}

function buyItem(){}

// & then we finally do the empty cart
// so function emty cart

function purchaseItem() {}

function itemToCart() {}

function applyTaxToItems(){}

function buyItem(){}

function emptyCart() {}

// alright, so we have a function that its gonna affect
// the data that we have that is the user
// now based on what I have learnt about functional programming
// I want to keep this pure
// But it also looks like 
// that I am applying a lot of steps 
// to the same data
// maybe we can use something like compose
// to compose all these steps
// so that purchase item
// does well all these things overhere
// so the first thing I want to do
// is ... just to test out that it is working
// lets just create the naive approach
// where we return from the purchase item

function purchaseItem() {
    return
}

function itemToCart() {}

function applyTaxToItems(){}

function buyItem(){}

function emptyCart() {}

// lets say we receive the user & the item in here

// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

function purchaseItem(user, item) {
    return
}

function itemToCart() {}

function applyTaxToItems(){}

function buyItem(){}

function emptyCart() {}

// so that we are going to receive this user & the item

const user = {}

// & I am going to return the user with the new item
// lets say we wanna return
// we know that we want to keep things immutable
// we dont wanna modify the user
// so I am going to return a new object 
// I am going to use object dot assign here

// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

function purchaseItem(user, item) {
    return Object.assign()
}

function itemToCart() {}

function applyTaxToItems(){}

function buyItem(){}

function emptyCart() {}

// & object dot assign we can create a new object
// using an emty object 
// that we are ceating as a first parameter

return Object.assign({}, )

// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

function purchaseItem(user, item) {
    return Object.assign({}, )
}

function itemToCart() {}

function applyTaxToItems(){}

function buyItem(){}

function emptyCart() {}

// then the actual object that we are coping over

return Object.assign({}, user,)

// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

function purchaseItem(user, item) {
    return Object.assign({}, user,)
}

function itemToCart() {}

function applyTaxToItems(){}

function buyItem(){}

function emptyCart() {}

// & we are going to add any updates to the object as a third parameter

return Object.assign({}, user, {})

//

// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

function purchaseItem(user, item) {
    return Object.assign({}, user, {})
}

function itemToCart() {}

function applyTaxToItems(){}

function buyItem(){}

function emptyCart() {}

// so I am going to say that the third parameter
// is going to be the fact that
// well I want the purchases to be added to the item
// so I am going to say purchases
// is going to include the item

return Object.assign({}, user, {purchases: item})

//

// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

function purchaseItem(user, item) {
    return Object.assign({}, user, {purchases: item})
}

function itemToCart() {}

function applyTaxToItems(){}

function buyItem(){}

function emptyCart() {}

// so nice & easy naive approach
// so that if I call purchases item here

// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
purchaseItem()

function purchaseItem(user, item) {
    return Object.assign({}, user, {purchases: item})
}

function itemToCart() {}

function applyTaxToItems(){}

function buyItem(){}

function emptyCart() {}

// or purchase item
// & I give it lets say name is laptop

// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
purchaseItem({name: 'laptop'})

function purchaseItem(user, item) {
    return Object.assign({}, user, {purchases: item})
}

function itemToCart() {}

function applyTaxToItems(){}

function buyItem(){}

function emptyCart() {}

// & the price is threehundred & fourty–four
// a cheap laptop

// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
purchaseItem({name: 'laptop', price: 344})

function purchaseItem(user, item) {
    return Object.assign({}, user, {purchases: item})
} 

function itemToCart() {}

function applyTaxToItems(){}

function buyItem(){}

function emptyCart() {}

// If I run this
// I get object assing is not a function
// because is not espelled correct
// assign, thats better
// run this

{ name: 'laptop', price: 344, purchases: undefined }

// Hey look at that
// I get something bad but umm something is not working
// thats because remember I have two parameters here

// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
purchaseItem(user, {name: 'laptop', price: 344})

function purchaseItem(user, item) {
    return Object.assign({}, user, {purchases: item})
} 

function itemToCart() {}

function applyTaxToItems(){}

function buyItem(){}

function emptyCart() {}

// & I need to pass the user into purchased items
// so lets add the user in here
// & hit run
// & there you go
// Kim which is an active user, now has purchased 
// a laptop that cost threehundred & fourty–four
// & its in the purchases history

{
    name: 'Kim',
    active: true,
    cart: [],
    purchases: { name: 'laptop', price: 344 }
  }

// thats great
// but thats not all we needed to do
// we have to do all these things 

//

// Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% taxt to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

// because people can just buy things
// because people cant just buy things
// they have to add things to their cart
// they have to apply the taxes
// we need a record of what happens
// & we dont know what can they do
// maybe she wants to remove something from the cart
// this is to simplistic
// & looking at this
// I am thinking we need compose
// we need to compose these function together

// I change I dont wanna do this anymore

purchaseItem(user, {name: 'laptop', price: 344})

// this is to simplistic
// what I want to do instead is something like this

purchaseItem()

// I want to be able to compose purchase item
// I want to be able to add item to cart

purchaseItem(
    addItemToCart
)

// & you know lets remane this to add item to cart

function addItemToCart() {}

// because it makes more sense
// I want to add the item to cart initially
// & them because we are using compose
// where are gonna go from left or right to left
// so we want to add item to cart
// then we wanna apply tax to the items in the cart

purchaseItem(

    applyTaxToItems
    addItemToCart
)

// & we also want to buy the item

purchaseItem(

    buyItem
    applyTaxToItems
    addItemToCart
)

// & then finally when once we have done all of that
// then we can emty the cart

purchaseItem(
    emptyCart
    buyItem
    applyTaxToItems
    addItemToCart
)

// alright, lets add a coma here 
// I dont get a syntax error

purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)

// & I want to be able to do this 
// I have a factory called purchased item 
// that takes data which will be user & the item

purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {})

// so that is the name that is the laptop

purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: 'laptop'})

// with the price of laptop just went up on price

purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: 'laptop'}, price: 3887)

// its way more expensive
// actually you know what lets keep it cheap two hundred

purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: 'laptop'}, price: 200)

// & I want to be able to do this
// I wanna give this data 

(user, {name: 'laptop'}, price: 200)

// to this function, 

addItemToCart

// then this function, 

applyTaxToItems,

// then this function, 

buyItem,

// then this function

emptyCart,

// & I want all of these to hapen for me

{
    name: 'Kim',
    active: true,
    cart: [],
    purchases: { name: 'laptop', price: 344 }
  }

// so it looks like we need compose

// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: 'laptop'}, price: 200)

function purchaseItem(user, item) {
    return Object.assign({}, user, {purchases: item})
} 

function itemToCart() {}

function applyTaxToItems(){}

function buyItem(){}

function emptyCart() {}

// so lets compose these function together
// the very first thing is well lets create a compose function
// I am going to say const compose 

const compose =

// thats going to receive a function f & g

const compose = (f,g)

// so thats the two first parameters

const compose = (f,g) =>

// umm we have a problem here. right?
// because we now have more than two functions
// that we wanna go through

purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)

// what can we do here?
// this is part of the reason that you use a libray 'Ramda' or 'Lodash.js'
// to use compose, because you dont need to implement it yourself

// I am going to show the way of doing but keep in mind
// that it does look a little confusing
// I prefer to using the library version usually
// because well it has a way a lot of complexity
// but in this case we have way more arguments
// so I am going to use the spread aperator 

const compose = (f,g) => (...args)

// to get all of the other arguments
// & then in here I am going to call f over g

const compose = (f,g) => (...args) => f(g)

// & inside just spread the arguments

const compose = (f,g) => (...args) => f(g(...args));

// so I have compose now
// I also want to define purchase item
// & this purchase item, actually we have it over here
// so lets come down here

function purchaseItem(user, item) {
    return Object.assign({}, user, {purchases: item})
} 


// this purchase item
// we want to change the things up a bit overhere

function purchaseItem() {}

// the purchase item is gooing to receive what
// well is going to receive a bunch of functions

purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)

// & we dont necessarily know how many
// I am going to just spread these options

function purchaseItem(...fns)


{} // & these spreads functions
// are going to well return what
// I wanna use these functions
// & I want to be able to compose them

function purchaseItem(...fns) => fns

{} // so what I am going to do is I am going to use reduce
// & if you are not sure what reduce is
// make sure that you check out the video 
// that I linked to with advanced arrays. see Apendix

function purchaseItem(...fns) => fns.reduce()

{} // & in reduce I am going to pass a callback function
// that will take a previous value & the current value
// or an acumulator & the next value (metabox VSC)
// so if I pass compose here

function purchaseItem(...fns) => fns.reduce(compose)

{} // the reduce function which is in itself a higher order function

reduce

// is going to run this for me

compose

// which is going to take f & g

const compose = (f,g)

// but it is also to iterate through
// empty cart, buy item, apply tax to item, add item to cart

purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)

// & actually return one by one & run this function
// like I sayed this can be a little overwhelming at first
// you might have to spend a few minutes figuring out
// what exactly you are doing

// but essentially we have built our own composed function
// that allows us to enter any number of parameters that we want

emptyCart,
buyItem,
applyTaxToItems,
addItemToCart

// into the purchase item

purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)

// so that we can compose these function

function purchaseItem(...fns) => fns.reduce(compose)

{} // & act over the data that we receive
// alright. so lets go step by step now
// & see what we can do
// the first thing that we wanna do is add item to the cart

function addItemToCart() {}

// so with add item to cart
// is going to receive a user & the item

function addItemToCart(user, item) {}

// & in here we are going just to create a simple function

function addItemToCart(user, item) {

}

// we want to add updated cart

function addItemToCart(user, item) {
    const updateCart =
}

// & this updated cart
// well we wanna add the user´s cart
// but we dont know what the user has previously
// we what to make sure that we dont mutate some of the previous arrays
// we wanna return what we currently have
// lets do this instead
// user dot cart dot concat () which will add a new array

function addItemToCart(user, item) {
    const updateCart = user.cart.concat([])
}

// that is completely different & copyed from the previous array
// or the original array
// & in here I am going to pass the item that we are buying

function itemToCart(user, item) {
    const updateCart = user.cart.concat(item)
}

// so that we can finally return object dot assign

function addItemToCart(user, item) {
    const updateCart = user.cart.concat(item)
    return Object.assign()
}

// & in here we return a new object once again

function addItemToCart(user, item) {
    const updateCart = user.cart.concat(item)
    return Object.assign({}, )
}

// user with a new cart item

function addItemToCart(user, item) {
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updateCart })
}

// alright. in order to see that this works
// lets from all the other functions
// you see I am returning a new user state
// so in all these fuunctions I am going to have a user

function applyTaxToItems(user){}

// & its going to ...
// lets just return user

function applyTaxToItems(user){
    return user
}

// for each of these functions
// so as the data funnels through
// we can see the output

function applyTaxToItems(user){
    return user
}

function buyItem(user){
    return user
}

function emptyCart(user) {
    return user
}

// so we are not doing anything in these functions
// other than passing the data through
// see if I made any typos here

// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

const compose = (f,g) => (...args) => f(g(...args));
purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: 'laptop', price: 200})

function purchaseItem(...fns) => fns.reduce(compose)

function addItemToCart(user, item) {
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updateCart })
}

function applyTaxToItems(user){
    return user
}

function buyItem(user){
    return user
}

function emptyCart(user) {
    return user
}

// if I run this purchase items 
// outerHeight, & this is not an arrow function
// this is a function declaration

function purchaseItem(...fns) => fns.reduce(compose)

{} // so I have to make sure that I have returned in here this property

function purchaseItem(...fns) {
 return fns.reduce(compose)
} 

// if I run this

// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

const compose = (f,g) => (...args) => f(g(...args));
purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: 'laptop', price: 200})

function purchaseItem(...fns) {
    return fns.reduce(compose)
   } 

function addItemToCart(user, item) {
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updateCart })
}

function applyTaxToItems(user){
    return user
}

function buyItem(user){
    return user
}

function emptyCart(user) {
    return user
}

// Hey look at that

{
    name: 'Kim',
    active: true,
    cart: [ { name: 'laptop', price: 200 } ],
    purchases: []
  }

// Kim now has an item in her cart
// how cool is that
// I was able to purchase items 
// well I was able to do the first thing
// add item to cart
// & I passed on the data to the next functions
// that were componsing but 
// they just received the user & just passed all the way out like a factory
// how coll is that!
// alright. now that we have created this
// this is a pure function
// just takes in something & returns something
// no matter how many times we call it
// its always to be the same
// lets apply all the functionality to these ones aswell

// the first is to apply tax

function applyTaxToItems(user){
    return user
}

// I am going to say const

function applyTaxToItems(user){
    const
}

// & lets use destructuring here

function applyTaxToItems(user){
    const {cart}
}

// so we dont to use user dot cart all the time
// lets say user

function applyTaxToItems(user){
    const {cart} = user;
}

// & in here lets say that the structuring is one point three
// did I sat three or thirty percent?
// three percent. ok
// so lets create const tax rate

function applyTaxToItems(user){
    const {cart} = user;
    const taxRate = 
}

// & this tax rate would be one point zero three

function applyTaxToItems(user){
    const {cart} = user;
    const taxRate = 1.3;
}

// now lets do thirty percent
// just because we can see the different a lot more better that way
// so thirty percent tax
// thats a big tax
// & we are gonna to say updated cart

function applyTaxToItems(user){
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart =
}


// is going to equal cart dot map

function applyTaxToItems(user){
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map()
}

// remember cart is an array 
// we are gonna map over this
// & we are gonna map over each item

function applyTaxToItems(user){
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {

    })
}

// & we are going to return a new object

function applyTaxToItems(user){
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {}
    })
}

// that contains well the name that is item dot name

function applyTaxToItems(user){
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
        }
    })
}

// so nothing has changed there but the price
// is going to be different item dot price
// multiply by the tax rate

function applyTaxToItems(user){
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*taxRate
        }
    })
}

// so finally at the end of them all
// we can just return object dot assign

function applyTaxToItems(user){
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*taxRate
        }
    })
    return Object.assign({})
}

// rememeber we wanna return return the user
// but a new copy of the user
// with the updated information that has the cart updated cart

function applyTaxToItems(user){
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*taxRate
        }
    })
    return Object.assign({}, user, { cart: updatedCart })
}

// so if I run this

// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

const compose = (f,g) => (...args) => f(g(...args));
purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: 'laptop', price: 200})

function purchaseItem(...fns) {
    return fns.reduce(compose)
   } 

function addItemToCart(user, item) {
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updateCart })
}

function applyTaxToItems(user){
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*taxRate
        }
    })
    return Object.assign({}, user, { cart: updatedCart })
}

function buyItem(user){
    return user
}

function emptyCart(user) {
    return user
}

// Hey look at that the price of the laptop went up

{
    name: 'Kim',
    active: true,
    cart: [ { name: 'laptop', price: 260 } ],
    purchases: []
  }

// because we apply the tax rate
// from two hundred to two hundred & sixty
// oh boy this tax is really killing us
// alright lets keep going with buy item
// so in here we wanna move the cart item to the purchases

function buyItem(user){
    return user
}

// again using our functional approach
// this should be an easy one
// all we need to do object dot assign

function buyItem(user){
    return Object.assign()
}

// & in here we have an empty object 

function buyItem(user){
    return Object.assign({}, )
}

// the user that we receive 

function buyItem(user){
    return Object.assign({}, user, )
}

// & all we do is well we have the purchases

function buyItem(user){
    return Object.assign({}, user, { purchases:  })
}

// & we update that with the items in the so it will be user dot cart

function buyItem(user){
    return Object.assign({}, user, { purchases: user.cart })
}

// if I run this

// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

const compose = (f,g) => (...args) => f(g(...args));
purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: 'laptop', price: 200})

function purchaseItem(...fns) {
    return fns.reduce(compose)
   } 

function addItemToCart(user, item) {
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updateCart })
}

function applyTaxToItems(user){
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*taxRate
        }
    })
    return Object.assign({}, user, { cart: updatedCart })
}

function buyItem(user){
    return Object.assign({}, user, { purchases: user.cart })
}

function emptyCart(user) {
    return user
}

// oh once again I mispelling object dot assign
// lets try that again

{
    name: 'Kim',
    active: true,
    cart: [ { name: 'laptop', price: 260 } ],
    purchases: [ { name: 'laptop', price: 260 } ]
  }

// Hey look at that we have our purchases
// but we need to remove this from the actual cart
// because now Kim have purchased her laptop
// so the last option, to finish things off
// lets do the last piece

function emptyCart(user) {
    return user
}

// object dot assign

function emptyCart(user) {
    return Object.assign()
}

// we have an empty object 

function emptyCart(user) {
    return Object.assign({})
}

// that we attach the user to

function emptyCart(user) {
    return Object.assign({}, user)
}

// & then we update the cart to be what? just an empty array

function emptyCart(user) {
    return Object.assign({}, user, {cart: []})
}

// if I run this

// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

const compose = (f,g) => (...args) => f(g(...args));
purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: 'laptop', price: 200})

function purchaseItem(...fns) {
    return fns.reduce(compose)
   } 

function addItemToCart(user, item) {
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updateCart })
}

function applyTaxToItems(user){
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*taxRate
        }
    })
    return Object.assign({}, user, { cart: updatedCart })
}

function buyItem(user){
    return Object.assign({}, user, { purchases: user.cart })
}

function emptyCart(user) {
    return Object.assign({}, user, {cart: []})
}

// Holy Molly

{
    name: 'Kim',
    active: true,
    cart: [],
    purchases: [ { name: 'laptop', price: 260 } ]
  }

// Kim has just purchased her first laptop
// it was twohundred & sixty bucks because of the big tax
// but now hey she all the coding that she wants
// how nice was that!

// I mean it was a little bit complicated at first,
// because we have to create this compose function
// but now that we have this compose in place
// purchase item works really nice
// exactly like a factory
// we add item to cart
// apply cart to item
// buy iitem
// empty cart
// if new functionality such as update Kim status to not active
// if we need it to add new functionality
// the rest of the code doesnt really care about that
// we can just create a new function
// & just add it in here
// thats the beauty of functional programming
// this idea of we are building this small composable functions
// that are each worried about their own world
// so that whentever bugs happen
// well as long as they are tested well
// its likely not them
// its most likely inplace in where we might have state
// or you might be mutating state
// but we know hey these functions are ok
// because they are prior
// now here is the really really interesting part
// why I think functional programming & the concepts arround it are so interesting
// because now if we wanna say create another function
// like refund item

function refundItem() {}

// well again thats easy to do
// we have to remove things from purchases
// or even from the cart
// but the more interesting thing
// is the idea of now being able to play back history
// because lets be honest
// if you are amazon you wanna keep track of your data
// you wanna know what users did
// maybe Kim complins that 
// Hey I purchased my latop but
// it is not in my purchases I didnt receive it
// & amazon needs a way to go back in time 
// & figure out what happen
// they need logs of what the user might have done 
// that might have resulted in an error on their site
// inadvertently using our functioinal programming paradigm
// we have an hability to travel back & forth through time
// let me show you
// if for example we have a data base
// you say const data base
// or you lnow what lets do history
// lets do amazon history

const amazonHistory

// & this well actually initially its an empty array

let amazonHistory = []

// & everytime we do something
// we wanna add to this history
// for example in the add item to cart at the beginning
// I can just say amazon dot history dot push the current user state

function addItemToCart(user, item) {
    amazonHistory.push(user)
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updateCart })
}

// & then maybe I wanna make sure that
// I capture the state of the user 
// before we apply the taxes

function applyTaxToItems(user){
    amazonHistory.push(user)
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*taxRate
        }
    })
    return Object.assign({}, user, { cart: updatedCart })
}

// maybe here when we buy the item

function buyItem(user){
    amazonHistory.push(user)
    return Object.assign({}, user, { purchases: user.cart })
}

// an emty cart

function emptyCart(user) {
    amazonHistory.push(user)
    return Object.assign({}, user, {cart: []})
}

// I am just pushing this user data on amazon history
// so that when I run amazon history

amazonHistory

//

// & I click run

// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
let amazonHistory = []
const compose = (f,g) => (...args) => f(g(...args));
purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: 'laptop', price: 200})

function purchaseItem(...fns) {
    return fns.reduce(compose)
   } 

function addItemToCart(user, item) {
    amazonHistory.push(user)
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updateCart })
}

function applyTaxToItems(user){
    amazonHistory.push(user)
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*taxRate
        }
    })
    return Object.assign({}, user, { cart: updatedCart })
}

function buyItem(user){
    amazonHistory.push(user)
    return Object.assign({}, user, { purchases: user.cart })
}

function emptyCart(user) {
    amazonHistory.push(user)
    return Object.assign({}, user, {cart: []})
}

amazonHistory

// check that out

[
    { name: 'Kim', active: true, cart: [], purchases: [] },
    { name: 'Kim', active: true, cart: [ [Object] ], purchases: [] },
    { name: 'Kim', active: true, cart: [ [Object] ], purchases: [] },
    {
      name: 'Kim',
      active: true,
      cart: [ [Object] ],
      purchases: [ [Object] ]
    }
  ]

// I have the entire history of Kim & what she did
// now, this doesnt look very pretty right now
// but I hope you can see that we have Kim initialy
// no purchases, nothing in the cart 
// & all untill the end where she has purchases
// & right now she has still things in the cart
// because we havent capture history after we empty cart
// but we can go back in time now
// as an amazon employee I can go back in time
// & say where Kim made her purchases
// when she added things to the cart
// when we added taxes to the items
// now behind the scenes maybe 
// amazon can create new functions like user state

function getUserState() {}

{} // or function that is go back in history

function goBack() 

{}  // or go fordward
// how cool is that!

// another thing that you maybe asking yourself is wuuowuo
// how can we were doing push in amazon history
// isnt that state?
// arent we modifying state?
// & rememeber we cant have just purely have pure functions
// in order for us to do anything with the program
// at some point we do have to do mutate data
// the idea of functional programming is to minimize those mutations
// alrigth. this video is getting long
// I wanna finish off with the idea of pipe
// remember compose is we go from right to left
// how do we fix this with pipe
// well if you prefer reading left to right
// we just change this compose to pipe
// & just change g into f & f into g
// we have to change the orders of these arround into the opposite direction
// thats it, you can choose pipe or compose based on what you like
// alright. thats enuoght talking for me I hope that was exciting for you
// we are able to use all what we hve learnt 
// in the previous videos to implement something quite clean
// its obviously a simple example
// but I hope youu now see the power of functioinal programming
// I see you in the next one
// bye bye

































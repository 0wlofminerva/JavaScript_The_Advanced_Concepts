// From now on only follow code & not to transcript to save Time
// Reiterate to internalize
// further transcription to do

const { Button } = require("react-native");

// /////////////////////////////////////////// 5. Pure Functions 2

const array = [1,2,3]
function mutateArray(arr) {
    arr.pop()
} 
function mutateArray2(arr) {
    arr.forEach(item =>{
        arr.push(1)
    })
}
mutateArray(array);
mutateArray2(array);
console.log(array)

// how can we make this code not have any side effects, not change whatever the array is?
// well we can create the array
// lets do that, lets change it
// so that the mutate array

const array = [1,2,3]
function removeLastItem(arr) { // will now be called removeLastItem
    const newArray = [].concat(arr);// & in here we are gonna create a new array
    // it will copy using the concat method
    // that comes with arrays 
} 
function mutateArray2(arr) {
    arr.forEach(item =>{
        arr.push(1)
    })
}
mutateArray(array);
mutateArray2(array);
console.log(array)

// will now be called removeLastItem
// & in here we are gonna create a new array
// it will copy using the concat method
// that comes with arrays
// & now this newArray 
// will be the exact same thing
// as an array [1,2,3]
// but because we use the concat method

const newArray = [].concat(arr);

// instead of just doing the equals array

const newArray = (arr);

// which would have copy the array 
// the reference to the array
// because object arre passed by reference in javascript
// instead of them pointing to the same location
// this way we have a new copy of the array
// & now we can just do array dot pop() 
// & return newArray

const array = [1,2,3]
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop() // & now we can just do array dot pop() 
    return newArray // & return newArray
} 
function mutateArray2(arr) {
    arr.forEach(item =>{ 
        arr.push(1)
    })
}
mutateArray(array);
mutateArray2(array);
console.log(array)

//

// lets see if that works
// if I comment this out
// & just run the mutated array
// make sure we rename that
// if I run this

//

const array = [1,2,3]
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop()
    return newArray
} 
// function mutateArray2(arr) { // if I comment this out
//     arr.forEach(item =>{ 
//         arr.push(1)
//     })
// }
removeLastItem(array); // & just run the mutated array // make sure we rename that
// mutateArray2(array);
console.log(array)

// I see my original array

[ 1, 2, 3 ]

// I still have that
// but If I look ata the console.log of removeLastItem
// I see that array
// there is a new one just with 1 & 2 in it

const array = [1,2,3]
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop()
    return newArray
} 
// function mutateArray2(arr) {
//     arr.forEach(item =>{
//         arr.push(1)
//     })
// }
console.log(removeLastItem(array));
// mutateArray2(array);
console.log(array)

//

[ 1, 2 ] // I see that array // there is a new one just with 1 & 2 in it
[ 1, 2, 3 ]

//

// & although we create a new state 
// or a new data inside of this function
// its a local variable

const array = [1,2,3]
function removeLastItem(arr) {
    const newArray = [].concat(arr); // or a new data inside of this function newArray // its a local variable
    newArray.pop()
    return newArray
} 
// function mutateArray2(arr) {
//     arr.forEach(item =>{
//         arr.push(1)
//     })
// }
console.log(removeLastItem(array));
// mutateArray2(array);
console.log(array)

//

// & we are not modifying anything outside of our scope world here

const newArray = [].concat(arr);
newArray.pop()
return newArray

// although we are doing pop() here it doesnt matter

const array = [1,2,3]
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop() // although we are doing pop() here it doesnt matter
    return newArray
} 
// function mutateArray2(arr) {
//     arr.forEach(item =>{
//         arr.push(1)
//     })
// }
console.log(removeLastItem(array));
// mutateArray2(array);
console.log(array)

// we are not affecting the outside world
// & thats the beauty with no side effects
// because it doesnt effect the outside world
// we know what to expect from it

// if we go back to this code
// of adding 1 to the end of this array

const array = [1,2,3]
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop()
    return newArray
} 
function mutateArray2(arr) {
    arr.forEach(item =>{
        arr.push(1) // of adding 1 to the end of this array
    })
}
console.log(removeLastItem(array));
// mutateArray2(array);
console.log(array)

// & once again copy the cade that we have above

const array = [1,2,3]
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop()
    return newArray
} 
function mutateArray2(arr) {
    const newArray = [].concat(arr); // & once again copy the cade that we have above
}
console.log(removeLastItem(array));
// mutateArray2(array);
console.log(array)

// & lets say that we want to multiply the array by 2, so we just lets say multiplyBy2
// we get an array
// & this time we are gonna use
// we return a new array using the math method
// which automatically returns us a new array
// saying array.map()
// item & then item multiply by 2 array.map(item => item*2)
// so if I run multiplyBy2 here

const array = [1,2,3]
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop()
    return newArray
} 
function multiplyBy2(arr) { // & lets say that we want to multiply the array by 2, so we just lets say multiplyBy2
    return arr.map(item => item*2) // we return a new array using the math method // which automatically returns us a new array
    // saying array.map()
    // item & then item multiply by 2 array.map(item => item*2)
}
console.log(removeLastItem(array));
multiplyBy2(array); // so if I run multiplyBy2 here
console.log(array)

// & I click run
// none of my arrays arre change
// here from my console.log()

//

[ 1, 2 ]
[ 1, 2, 3 ]

//

// but if I do console.log() multiplyBy2
// & I click run

const array = [1,2,3]
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop()
    return newArray
} 
function multiplyBy2(arr) {
    return arr.map(item => item*2)
}
console.log(removeLastItem(array));
console.log(multiplyBy2(array)); // but if I do console.log() multiplyBy2
console.log(array)

// look at taht I have 3 distinct arrays
// & all of these functions have no side effects
// it doesnt affect anything in the outside world

//

[ 1, 2 ]
[ 2, 4, 6 ]
[ 1, 2, 3 ]

//

// just to confirm this I am going to ay array2 equals removeLastItem
// & them I do const arrray3 equals multiplyBy2
// & then in the console.log() I am going to say array2, array3

const array = [1,2,3]
function removeLastItem(arr) { // & all of these functions have no side effects
    const newArray = [].concat(arr);
    newArray.pop()
    return newArray
} 
function multiplyBy2(arr) { // & all of these functions have no side effects
    return arr.map(item => item*2)
}
const array2 = removeLastItem(array); // just to confirm this I am going to ay array2 equals removeLastItem
const array3 = multiplyBy2(array); // & them I do const arrray3 equals multiplyBy2
console.log(array, array2, array3)// & then in the console.log() I am going to say array2, array3

// if I click run

//

[ 1, 2, 3 ] [ 1, 2 ] [ 2, 4, 6 ]

//

// look at that
// different arrays living on their own
// no side effects

// but when it comes to no side effects 
// I have a few questions for you

// what happens if I have a function a()
// & this function says console.log('hi')?

// is that a pure function?
// no its not, it is a tricky one,
// console.log() is window specific
// we are using the browser to log something to the browser
// so its actually affecting the outside world
// is logging something to the output of the browser
// its modifying something outside of itself
// but when we call this, we are outputting something out here
// so that function has side effects

function a() {
    console.log('hi') // console.log() is window specific
    // we are using the browser to log something to the browser
}

a() // but when we call this

// we are outputting something out here

hi

// ok lets go for the next one
// the input should always result in the same output
// does the function always return the same output, giving the same input?

// if I click run here
// well I can click this many times
// & the function is always going to return the same thing
// thats great!

function a() {
    console.log('hi')
}

a()

//

hi

// what if I do 'a' num1 & num2
// if I do return num1 + num2
// I have to give some parameters, so lets do 3 & 4

// Referential Transparrency

function a(num1, num2) { // what if I do 'a' num1 & num2
    return num1 + num2 // if I do return num1 + num2
}

a(3, 4) // I have to give some parameters, so lets do 3 & 4

// & I click many many times
// & its always 7

//

7

//

// & this is what we call referential transparenty
// Referential Transparency simply means
// if I completely change the function to the number 7
// will it affect any part of my program?

function a(num1, num2) {
    return num1 + num2
}

7 // if I completely change the function to the number 7
// will it affect any part of my program?



// for example if I have function b here
// & function b ttakes a number
// & it multiplies this number by 2

function a(num1, num2) {
    return num1 + num2
}

a(3, 4)

function b(num) {
    return num*2
}

b(a(3, 4)) // if I do b()
// & because functions are first class citizens in javascript
// I can say a(3,4), b(a(3,4))
// so I am calling the inner function here
// & then calling b() lets see what happens

//

// if I do b()
// & because functions are first class citizens in javascript
// I can say a(3,4), b(a(3,4))
// so I am calling the inner function here
// & then calling b() lets see what happens

14

// I get 14
// Referential Transparency says
// if I change this b(a(3,4)) to 7
// will it have any effect in the program?

function a(num1, num2) {
    return num1 + num2
}

function b(num) {
    return num*2
}

b(7) // Referential Transparency says
// if I change this b(a(3,4)) to 7
// will it have any effect in the program?

//

14

//

// & no it does not
// because of this rule, no matter what my input
// if the they are the same
// its always going to give me the same output

// no side effect
// input --> output

// & as a matter of fact
// these function also have no side effects
// they are not touching any of the outside world
// they are only touching their own parameters
// & parameterrs if you rememeber they are local variables

function a(num1, num2) { // & as a matter of fact
    // these function also have no side effects
    // they are not touching any of the outside world
    // they are only touching their own parameters
    // & parameterrs if you rememeber they are local variables
    return num1 + num2
}

function b(num) {
    return num*2
}

b(7)

// to review the biggest thing in functional programming
// & we will find out why this is such a big deal later on aswell
// the idea of pure functions
// is that it makes functions very easy to test
// very easy to compose
// & it avoids a lot of bugs
// because
// we have no mutations
// no shared state
// we have this predictable functioin
// thats minimized the bugs in the code

function a(num1, num2) { // we have this predictable functioin
    // thats minimized the bugs in the code
    return num1 + num2
}

function b(num) {
    return num*2
}

b(7)

// But, it is possible to have pure functions everywhere?
// can you have 100% pure functions
// think about that & lets answer it in the next video
// bye bye

//

// /////////////////////////////////////////// 6. Can Everything Be Pure

// welcome back
// we just learnt this pilar about functional Programming
// the idea of pure function
// where we have no side effects
// & the same input, no matter how many times we call it
// give us the same output
// but I post the fuunction for you
// whether we can do anyhting without sideffect
// because as I sayed console.log()
// well thats a side effect
// as a matter of fact input --> output is a side effect
// that is communicating with the outside world
// in any way which is what input --> output is
// that is not pure, 
// & the interesting thing is that
// with just pure fuunctioins, 
// which are just functions, do something in the inside
// outside world know nothing about it
// is philosohophically, it doesnt do anything
// because a program cannot exist without side effects
// we can  run this piece of code 
// without having any side effect of interacting with the browsing
// we cant have websites without just pure functions
// can we?
// browsers have to make fetch calls, http calls to the outside world
// we have to interact with the DOM
// & manipulatte whats on the website
// so the goal of functional programming is not do anything pure functions
// the goal is to minimize side effects
// the idea is to organize your code
// whether there is a specific part
// that has side effects,
// but when you have a bug you know right away to go to that spot
// thats where the side effect are happening
// the rest of your code,
// well those are just pure functions
// because they are pure
// you dont have to worry for them as much
// purity is more of a confidence level
// it cannot be 100% 
// so if there is one thing that you can take away from this
// is that side effects & impurity is not necessarily bad
// but the goal is to organize your code in a way
// so that you isolate this effects
// data base calls, API calls
// input --> output
// to a certain locatioin in your program in your code
// so that your code becomes predictable
// & its easier to bug
// because at the end of the day 
// we do have to have some sort of global state
// to describe our application
// thats unavoidable
// this is just the tip of the iceberg
// when it comes to terminology & functional programming
// it gets really complicated
// & there is really large words like
// Referential Transparency
// but I sayed before
// at its core the essence of functional programming
// is very simple
// we want to build programs that are built with a bunch of very small
// very reusable, predictable pure functions
// how do we build the perfect function
// we are gonna explore that over the next couple of videos
// but this is a quick reference
// a perfect function should do one task
// & one task only
// we dont want a massive function
// a simple function that we can test
// that does one thing really well
// that function  should have a return statement
// every fuunction should return something from it
// because when we give it an input we expect an output
// every function should be pure
// which we have talked about
// & that also means have no shared state with other functions, 
// & immutable state where we can modify some of the sate in our functions,
// but we always return whatever we get
// such as an input, we always returrn a new copy of that output
// we never just modify the global state.
// functions are also going to be composable
// something that we are really going to dive into later on
// & most importantly we wanna make functions predictable,
// if we understand with 100% certainty what our functions do,
// it makes our code predictable.
// Functional Progrramming at the end of the day
// it is just aboout making your code predictable
// lets dive in some key concepts
// & key words when it comes to functioinal proogramming

// /////////////////////////////////////////// 7. Idempotent

// welcome back
// lets talk about our first big word
// when it comes to functional programming
// its called idempotence
// a hard one to say
// but what does it mean
// well let me show you an example

// if I have a function called not good
// & this not good functioin is going to return
// Mayh dot random
// if I call this function

// Idempotence

function notGood() { // if I have a function called not good
    return Math.random() // & this not good functioin is going to return // Mayh dot random
}

notGood() // if I call this function

// & I click run

//

0.20915451000590068

//

// well I get a random number between zero & one

// & what imdepotence means that given the same inputs
// in this case we have no inputs
// or you know what lets add a number & a number in here
// & click run

function notGood(num) { // or you know what lets add a number 
    return Math.random(num) // & a number in here
}

notGood()

// everytime we get something different

//

0.7501284074048455

//

0.9411575625413946

//

0.5229879346594091

//


// if I do 5

function notGood(num) {
    return Math.random(num)
}

notGood(5)

// no mattter what
// I still something different

//

0.3723432111907432

//

0.6791760725291092

//

// the idea of idempotence is a function 
// that always returns or does what we expect it to do
// now, thats sounds familiar with 
// what we just talked about about pure functions
// but its a little different
// becauuse if I do
// console dot five here
// or just num here

function notGood(num) {
    console.log(num) // console dot five here // or just num here
}

notGood(5)

// & I cick run
// no matter how many times 
// I click run I always get five

//

5

//


// this function that console.log(5) to the outside world

function notGood(num) {
    console.log(num) 
}

notGood(5)

// still idempotence because multyple calls 
// still going to display the same task
// even thouugh is not pure
// because it comuniicates with the outside world

// another thing that can be idempotence
// for example is deleting a user for a data base
// when we delete a user from the data base
// I can delete that person once
// but if I keep the  calling the function
// to delete that user
// well it is going to return the same result
// it is going to return me the emty field
// where there is no more user
// you cant delete the user multiple times

// & things like idempotence
// you see a lot in APIs like http get request
// if I do a API call
// I expect that the API call
// given some sort of parameter
// is going to return the same results
// even though we are communicating with the outside world

// now why do I teach this?
// why can we say everything should be pure?
// why do we care about idempotence
// well, becauuse this idea of being able 
// to call something a thousand times
// & always give you the same result
// its extremely valuable when it comes 
// to things like parallel & distributing computation
// because it makes our code predictable

// by the way another interesting feature of idempotence
// is this idea of being able to call yourself
// over & over & over, inside of yourself
// & you still get the same result

// for example the math dot aps Math.aps() or aboslute
// if I do minus 50 Math.abs(-50)

Math.abs(-50)

// I will get a positive number everytime

//

50

//

// if in  here I call math dot absolute Math.abs again

Math.abs(Math.abs(-50))

// I get 50 again

50

// so no matter wht calling this functioin over & over
// inside of itself, always returns the same thing

// this is pretty amazing
// & with that in mind we have these garanties
// of code being predictible
// alright idempotence
// we got that right
// so lets move on to the next work

// /////////////////////////////////////////// 8. Imperative vs Declarative

// welcome back lets talk about 
// the idea about imperitave vs declarative
// what does it mean?

// well, imperative code is code 
// that tells the machine what to do & how to do it

// the declarative code
// tells it what to do & what should happen
// it doesnt tell the computer
// it doesnt tell the computer how to do things
// still confused?

// well, think of it this way
// a computer is better at being imperative
// that is it needs to know how to do things
// we on the other hand as humans are more declarative
// if I tell my friend hey, can you pass me the jug of watter
// well I dont need to tell my friend 
// hey can you walk overthere 
// with your right hand pick up the jug
// come towards me give it to me
// & then release the jug into my hand
// I dont have to tell it
// humans are declarative

// & if you rememebr when we talk about javascript engine
// you can see this example too
// machine code is very imperative
// we say, put the variable in the memory space
// & then take it out here & modify here
// is very descriptive on how to do this
// versus as we go higher & higher up the chain
// to something like a higher level language 
// that becomes more declarative
// we dont have something to say
// hey this is what you should store the memory
// we just declare a varaible with some sort of data
// & we say what we need to get done but not how to do it
// the computer does take care for us

// another great example of imperative versus declarative
// is the idea of for loops
// where we have for let i
// lets say equals to zero
// & then we say i is less than thousand
// increment i
// & in here console dot log i

for (let i =0; i < 1000; i++) {
    console.log(i)
}

// would you say that is imperative or declarative?

// I mean its all on spectrum, but
// this is pretty imperative. right?
// we say declarative varaible zero

let i =0;

// & then loop for a thousand times

i < 1000;

// & then also increment i

i++

// & console log i

console.log(i)

// there is a lot of instruction here

// how can we make it more declarative?
// well I can simply say
// lets say we have an array of a thuosand items

[]

// & I say for each item in the array

[].forEach(item)

// just console dot log the item

[1,2,3].forEach(item => console.log(item))

// so that if I do something like this

1
2
3

// I get one, two, three
// you see this is a lot more declarative
// I dont tell the program what to do or how to do it
// simply here is an array
// for each array, for each item
// console log the item

// I dont tell it increment the i by one
// & to loop through things
// this is more declarative than this one

// another classic example of this is jquery
// jquery is a lot more imperative than 
// what we have now in the front end frameworks like
// react angular or vue
// because with jquery we told our website exactly what to do

// hey if the user clicks on the html then wrap the drop donw menu & then hide it
// hey if something happens with the drop down menu
// well look at the sibiling & then hide that
// we tell it exactly what to do but also how to do it

// versus if you look at something like react

// & this a project that we work on on another of my projects
// if I go to components & we look at card component for example 
// react is fairily imperative
// we have a function here
// that takes in some parameters & then returns a piece of html
// we dont tell what to display 
// & how to do it
// just simply hey this is the data
// can you just disply this?
// even if we go into something like app.js
// if you have never seen react before dont get scared
// this is not important
// I just wanna show you the idea behind it
// you see I have a is pending isPending & a loading
// & I am simply saying hey if isPending is to true
// just lets do a loading screen
// otherwise just load up the card list
// I dont tell react how to do things
// I just tell this is what I want
// this is more declarative

// why am I teaching you this?
// functional programming helps us be more declarative
// by using functions & what we have learnt eventually
// which is composing functions
// we tell our programs what to do instead of how to do it

// I know that, that still hard to understand
// & we will keep on the understanding throughout the next copuple of videos
// but it is important here to remember that
// when we talk about declarative & imperative
// declarative code its always to end up either compilling down
// or being process by something imperative like machine code. right?

// at the end of the day we cant just avoid side effects & data manipulation. right?
// at the end of the day something has to manipulate the DOM on a webpage, or talk to a database
// in the case of something like react
// yes it abstracts away a lot of this complexity
// so that we as programmers dont have to do it 
// but the react library itself
// & even functional languages like lisp or haskell 
// eventually have to compile & do imperative things
// but the idea is for us to go a step higher 
// a level higher into declarative code
// so that its easy to read
// & we can be more productive
// that is imperrative versus declarative
// lets move on into another important concept

// Imperative vs Declarative
for (let i =0; i < 1000; i++) {
    console.log(i)
}

[1,2,3].forEach(item => console.log(item))

// /////////////////////////////////////////// 9. Immutability

// welcome back
// lets talk about another important concept
// immutability
// immutability means not changing the data
// not changing the state
// remember how in object oriented programming
// we have classes that
// well you can change the name property, 
// the weapons of the characters that we are building

// well in functional programming the idea is immutability
// that is not changing state, but instead making copies of the state
// & returning a new state everytime

const obj = {name: 'Andrei'}
function clone(obj) {
    return {...obj}; // this is pure.
}
obj.name = 'Nana'

// for example we have an object here
// with the name of Andrei
// If I create a function that clones an object
// & I ma using here a function that is pure
// we are not doing anything here except cloning the object
// so no matter how many times I call this function
// it is going to clone it is a pure function 
// but afterwards I go ahead & do object dot name in my program & I update the name to 'Nana'

const obj = {name: 'Andrei'} // for example we have an object here // with the name of Andrei
function clone(obj) { // If I create a function that clones an object
    return {...obj}; // this is pure. // & I ma using here a function that is pure
    // we are not doing anything here except cloning the object
}
obj.name = 'Nana'

//

const obj = {name: 'Andrei'}
function clone(obj) { // so no matter how many times I call this function it is going to clone  
    return {...obj};  // it is a pure function
}
obj.name = 'Nana' // but afterwards I go ahead & do object dot name in my program & I update the name to 'Nana'

//

const obj = {name: 'Andrei'}
function clone(obj) {
    return {...obj};
}
obj.name = 'Nana' // & as you can see here as soon as I do that
// the name gets change to 'Nana'

//

Nana

//

const obj = {name: 'Andrei'}
function clone(obj) {
    return {...obj};
}
obj.name

//

Andrei

// & this, well this is mutating the state
// we are mutating data in our program

// in functional programming the idea of immutability
// is very important, we can change things inside of our function
// but we dont wanna affect the outside world in our programs
// & although this function is pure

const obj = {name: 'Andrei'}
function clone(obj) {
    return {...obj}; // & although this function is pure
}
obj.name = 'Nana'

// well our program has a lot of mutation to it
// idealy if we want to change the name
// we will crerate a function saying
// lets do updateName()

const obj = {name: 'Andrei'}
function clone(obj) {
    return {...obj}; // this is pure.
}
function updateName() {

}  
updateName(obj)
console.log(obj)

// that receives an object updateName(obj)

const obj = {name: 'Andrei'}
function clone(obj) {
    return {...obj}; // this is pure.
}
function updateName(obj) {

}  
updateName(obj)
console.log(obj)

// & in here we will have we will have a new object lets say object2 obj2

const obj = {name: 'Andrei'}
function clone(obj) {
    return {...obj}; // this is pure.
}
function updateName(obj) {
    const obj2

}  
updateName(obj)
console.log(obj)

// that we clone the initial object from that we receive, 

const obj = {name: 'Andrei'}
function clone(obj) {
    return {...obj}; // this is pure.
}
function updateName(obj) {
    const obj2 = clone(obj);
}  
const updateObj = updateName(obj)
console.log(obj, updateObj)

// & in here we can do obj2 dot name equals 'Nana'

const obj = {name: 'Andrei'}
function clone(obj) {
    return {...obj}; // this is pure.
}
function updateName(obj) {
    const obj2 = clone(obj);
    obj2.name = 'Nana'
}  
const updateObj = updateName(obj)
console.log(obj, updateObj)

// & then finly just return object two obj2

const obj = {name: 'Andrei'}
function clone(obj) {
    return {...obj}; // this is pure.
}
function updateName(obj) {
    const obj2 = clone(obj);
    obj2.name = 'Nana'
    return obj2
}  

// lets see that in action
// if I console log the original object here

const obj = {name: 'Andrei'}
function clone(obj) {
    return {...obj}; // this is pure.
}
function updateName(obj) {
    const obj2 = clone(obj);
    obj2.name = 'Nana'
    return obj2
}  

console.log(obj)

// & uphere I will do update name
// & give it the initial object

const obj = {name: 'Andrei'}
function clone(obj) {
    return {...obj}; // this is pure.
}
function updateName(obj) {
    const obj2 = clone(obj);
    obj2.name = 'Nana'
    return obj2
}  
updateName(obj)
console.log(obj)

// & I click run here
// you see that, my original object which is Andrei

console.log(obj)

// is still there,

{ name: 'Andrei' }


// if I create a new variable here
// saying updated object updatedObj
// & I console log the updated object aswell

const obj = {name: 'Andrei'}
function clone(obj) {
    return {...obj}; // this is pure.
}
function updateName(obj) {
    const obj2 = clone(obj);
    obj2.name = 'Nana'
    return obj2
}  
const updateObj = updateName(obj)
console.log(obj, updateObj)

// I see that there is two different things now

{ name: 'Andrei' } { name: 'Nana' }

// I have maintained immutability
// not changing the state
// just returning copies or new things
// everytime a change is made
// now you may be asking yourself
// this doesnt seem very memory efficient
// I mean this is a silly example but
// we are just coying things over & over
// evrytime we want to make a change
// doesnt that just fill up our memory?

// now this is a little bit beyond of the scope of this course
// but there is something called
// structural sharing 
// that when it comes to functional programming
// a lot of places implement
// & it looks something like this

https://commons.wikimedia.org/wiki/File:Purely_functional_tree_after.svg

// the idea behind it is that
// when a new object or lets say an array 
// or any sort of data structure
// is created, we dont actually copy everything
// if it is a massive object of an arrray
// you can see that being very expensive

// instead we are storing the entire copy
// underneath the hood
// what happens is that only the changes 
// that we made to this state will be copyed
// but the things that dont change
// in memory are still there
// & this is called structural sharing
// this combined with the fact that
// in this ?xeich memory is fairly cheap
// it makes sense for some cases
// in functional programming where we have immutability
// by having immutability we can do some really interesting things
// that we are gonna see when we finish our coding challenges for the beginning of this section
// we are simply saying
// hey this data is not mine
// any data that I receive its not mine
// I am just going to borrow it
// & I am only going to copy & make a new copy of this data
// so other people can still use this
// its like kinder garden right?
// if you play with a toy
// well you shouldnt destroy it
// you shouldnt change it
// you should play with it
// & then return it back to the school
// so that other kids can play with it too
// lets take a break & I will see you in the next video

// /////////////////////////////////////////// 10. Higher Order Functions and Closures

// Welcome back
// I wanna reviset a few terms 
// that we have seen before
// & we should be familiar with
// that is in javascript functioins are first class citizens

// which means we can have higher order functions & we can also have closures

// lets start off with higher order function
// & review what they are
// Higher Order Function
// both in mathematics aswell in computer science
// simply means, its a function that does one of two things
// it either takes one or more functions arguments
// or returns a function as a result
// often called a callback
// so we can write a fairly simple Higher Order Function
// such as

const hof =

// & this higher order function will be a function 

const hof = ()

// that returns in another function

const hof = () => () => return 5;

// this is a higher order function
// because when I do hof()

const hof = () => () => 5;
hof()


// for higher order function
// I dont need a return here
// because with an arrow function it is in the same line the return is impliyed

const hof = () => () => 5;

// you see that I get a function

[Function]

// so its a function that returns a function
// so if I call this again

const hof = () => () => 5;
hof()()

// there you go it is a five

5

// so thats a higher order function

const hof = () => fn();

// another function can be a function
// receives as a parameter
// so here I can juust called function five

const hof = (fn) => fn(5);

// so that if I do hof()

const hof = (fn) => fn(5);
hof()

// & give it a function, like function a()

const hof = (fn) => fn(5);
hof(function a(){})

// in our case I return x which is our parameter

const hof = (fn) => fn(5);
hof(function a(x){ return x})

// if we do this & run
// there you go we have five

5

// this is a function 
// the parameter of hof() takes a function

hof(function a(x){ return x})

// so thats a higher order function aswell

// & the interesting thing of higher order function is the fact
// is that function are first class citizens in javascript
// means we can do closures. right?
// & we have a whole sectioin on closures
// so you should be familiar by now

// lets just review
// like objects closures in javascrript are a mechanism 
// for containing some sort of state
// & in javascript we create a closure
// whenecer a function accesses a variable 
// defined outside of immediate functioin scope
// that is the  scope of the parent
// & its fairly easy to create a closure. right?
// we simply  define a fuunction inside of another function
// & expose the inner function,
// either by return it,
// or passing it to another function
// so that we can use that variable

// lets have a look to an example
// I can say variable 
// or lets do const adds a closure function

const closure = function() {}

// & this closure function will have a variable
// lets call it let count which for now will equal zero

const closure = function() {
    let count = 0;
}

// & its going to return another function
// that will say increment

const closure = function() {
    let count = 0;
    return function incerment() {}
}

// & increment will simply increase the account
// or we can just do ++

const closure = function() {
    let count = 0;
    return function incerment() {
        count++
    }
}

// so that when we run the closure function

const closure = function() {
    let count = 0;
    return function incerment() {
        count++
    }
}

closure()

// I click run

[Function: incerment]

// I get increment function
// & if I run this again, or if I assign it to a variable
// & call it const increment function

const closure = function() {
    let count = 0;
    return function incerment() {
        count++
    }
}

const incrementFn = closure();

// I can now call the incerment function whenever I want

const closure = function() {
    let count = 0;
    return function incerment() {
        count++
    }
}

const incrementFn = closure();
incrermentFn()

// lets see

ReferenceError: incrermentFn is not defined

// I get undefined, because 
// its not returning anything for the actual increment
// so just lets return count

const closure = function() {
    let count = 0;
    return function incerment() {
        count++
        return count;
    }
}

const incrementFn = closure();
incrementFn()

// to see what we get

1

// we get one
// if I call this again

const closure = function() {
    let count = 0;
    return function incerment() {
        count++
        return count;
    }
}

const incrementFn = closure();
incrementFn()
incrementFn()

// there you go

2

// you get two
// & then once again
// for good measure 

const closure = function() {
    let count = 0;
    return function incerment() {
        count++
        return count;
    }
}

const incrementFn = closure();
incrementFn()
incrementFn()
incrementFn()

// we get three

3

// now even though the initial closure was called
// & we are done with that
// because of closure this increment function remebers the variable

                    incerment() {
    count++
    return count;
}

// used by or declared in the outter scope
// so the variable used by
// the inner function will be available to it
// even after the outter function has finished running

// & you might notice two things 
// if you have been following along with
// with the functional programming concept
// one is that we are modifying the state
// outside of our function
// arent we?

incerment() {
    count++
    return count;
}

// this increment function is touching state or data
// that belongs to another function

const closure = function() {
    let count = 0;

}

// the closure function
// when it comes to functional programming
// it doesnt mean we cant use closures
// we can definetelly still use closures 
// & they are very powerful
// but we have to be careful
// that closures only make a function impure
// if we modify the cloused of our variable
// if instead our increment
// is just a get counter for example
// that returns the counter
// & lets say the counter is fifty five 55
// & we will change the name of this to get counter getCounter
// I run this

const closure = function() {
    let count = 55;
    return function getCounter() {
       return count;
    }
}

const getCounter = closure();
getCounter()
getCounter()
getCounter()

// I get fifty–five 55

55

// we are using closures here
// & althought we are not modifying the state
// like we have before
// we still have access to data outside of ourselfs

const closure = function() {
    let count = 55;
}

// as long as we dont modify it & mutate the data
// we still following the functional programming paradigm 
// something that is nice with this is that
// we have just created private variables
// we are able to use closures to create data privacy
// which is very very cool
// because now as a user
// I cant really modify the count
// maybe this is a super important dont touch variable
// because we are using closures
// we are able to still have access to that variable
// & make sure that others dont modify it
// which is a very very knifty tool
// & closures get used a lot in functional programming for specific reason
// you have to be careful not to modify the state

// so now, that we have just gone over higher order functions & closures
// we can keep going with our functional programming terminology

// I see you in the next one bye bye

// Closure

// /////////////////////////////////////////// 11. Currying

// curriying

// lets talk about currying
// now currying is the technique of translating the evaluation
// of a function that takes multiple arguments
// into evaluating a secuence of functions
// each with a single argument
// that sounds pretty confusing. doesnt it?
// well you can think at currying like this
// you can take a function that can take multiple parameters
// & instead using currying modifying to a function 
// that takes one parameter at a time 

// lets have a look at an example
// I can crerate a function multiply

const multiply

// & this multiply takes a & b as parameters

const multiply = (a,b)

// & we are going to just multiply a & b

const multiply = (a,b) => a*b;

// if I do multiply three times four

const multiply = (a,b) => a*b;
multiply(3,4)

// I should get twelve, nice & easy

12

// how can we use currying here?
// well remember we wanna change the function
// taking multiple parameters to
// taking a parameter at a time
// we can do something like this
// I can say const curriedMultiply

const multiply = (a,b) => a*b;
const curriedMultiply

// & we are going to take a parameter 
// which is going to return another function 
// that takes another parameter

const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b);

// & that is going to multiply a times b

const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;

// because of closures we have access 
// inside of the b function to the a variable
// now, how can we use this
// well, I can now say currying multiply for five times three

const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(5,3)

// if I run this

[Function]

// know that doesnt work rememeber because this is currying 
// it takes a parameter at a time,
// so instead I am going to do currying five
// which is going to give the first variable

const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(5)

// & the way I like to  look at arrow functions is that
// I can mimic how the way the function is writen in the way that I call the function
// so I see two brackets here with a & b
// so I can call it a & b
// so if I do three here & run

const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(5)(3)

// there you go I get fiveteen
// I am giving the function one parameter at a time

15

// but why is this usefull?
// I can now create multiple utility functions out of this
// for example I can say
// const curriedMultiplyBy5 which is going to equal this
// curriedMultipy with the parameter of five (5)

const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
const curriedMultiplyBy5 = curriedMultiply(5);

// so that now I call this function once & this function
// for the rest of the time
// or at least this function is going to remember
// this piece of data five well forever
// until we finish running the program

const curriedMultiplyBy5 = curriedMultiply(5);

// look at that lest say ten years for now
// we finally remember
// outerHeight, we have this curriedMultiplyBy5 function  
// I can use the multiplyBy5 function & multiply anything that we want by five
// lets say four

const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
const curriedMultiplyBy5 = curriedMultiply(5);

//10 years
curriedMultiplyBy5(4)

// if I run this

20

// I get twenty
// & instead of running this function over & over
// I run it once 
// & now this curriedMultiplyBy5 is there for us to use
// so if it a function that gets call many many times

const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
const curriedMultiplyBy5 = curriedMultiply(5);

//10 years
curriedMultiplyBy5(4)
curriedMultiplyBy5(4)
curriedMultiplyBy5(4)

// we only run this part of the function once

                                (b) => a*b;

// which is really really cool

// currying almost reminds you of those methods on prototypes
// that are shared amongt objects
// they are trying to save on memory
// or at least amongst our computer has to work

// now that we have seen currying
// lets go to the next topic that gets often confused with currying
// I will see you in the next one
// bye bye










20 PROJECTS UDEMY SITE TRANSCRIPTIONS OPTION INTERFACE


























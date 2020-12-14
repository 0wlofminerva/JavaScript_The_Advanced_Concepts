// /////////////////////////////////////////// 4. Pure Functions

// welcome back
// to start off our section
// to really understand functional programming
// we need to start from the core concept
// that is the pilar
// the pure functions pilar
// we are gonna start step by step
// with this idea of pure functions
// & I am going to introduce you to 
// this idea of different functional programming terms
// that sound a lot of more complicated than they are
// and finally after learning all this terms
// we are going to implement our functional programming style
// to our amazon shoping cart
// so what are pure functions
// when it comes to pure functions
// there is to main thing
// a function has to always return the same output
// given the same input
// & the function cannot modify anything outside of itself
// no side effects
// let me show you with an example
// so what I sayed was function that has no side effects
// so no side effects
// a function that has no side effects
// & then finally a function that given the same input
// returns the same output 
// no matter how many times we call it

// no side effects
// inpuut --> output

// so lets starrt off with the first one
// the idea of no side effects
// lets say that I have an array

const array = 

// & tthis array is a simple one
// one, two, thrree

const array = [1,2,3]

// if I create a function here calling it function a

const array = [1,2,3]
function a() {}

// & this function a rerceives some sort of array

const array = [1,2,3]
function a(arr) {}

// & it does the pop method on an array

const array = [1,2,3]
function a(arr) {
    arr.pop()
}

// so if I call a array, 

const array = [1,2,3]
function a(arr) {
    arr.pop()
}
a(array);

// I run this
// well I get undefined
// because I am not returning anything from this function
// but the interesting thing happens here
// if I just console log dot array, console.log(array)

const array = [1,2,3]
function a(arr) {
    arr.pop()
}
a(array);
console.log(array)

// I only have one & two left in here

[ 1, 2 ]

// this function have what we call side effects
// & side effects arrer well, 
// does the function mosify something outside of it self
// & it does, outside this function
// this a function or lets just call it now
// mutateArray, 

const array = [1,2,3]
function mutateArray(arr) {
    arr.pop()
}
a(array);
console.log(array)

// mutates & modify this array
// that lives outside of itself in the global object
// & this is called a side effect, we dont know ehat might happen to the array
// because, anybody can call it & it can change things
// so that if I call a lets say again
// & I have to make sure that I update again

const array = [1,2,3]
function mutateArray(arr) {
    arr.pop()
}
mutateArray(array);
mutateArray(array);
console.log(array)

// my array is modified once again

[ 1 ]

// or lets say I also have a foreach function
// array.forEach, or actually lets crrerate a new array new,
// that lets say array.forEach(item => )

const array = [1,2,3]
function mutateArray(arr) {
    arr.pop()
}
function mutateArray(arr) {

}
mutateArray(array);
mutateArray(array);
console.log(array)

// we will just push one
// array.push(1)

const array = [1,2,3]
function mutateArray(arr) {
    arr.pop()
}
function mutateArray(arr) {
    arr.push(1)
}
mutateArray(array);
mutateArray(array);
console.log(array)

// the end of the array
// so if I click run

[ 1, 2, 3, 1, 1 ]

// well look at that
// & make sure that we have different names for this
// lets do mutateArray2(array)

const array = [1,2,3]
function mutateArray(arr) {
    arr.pop()
}
function mutateArray2(arr) {
    arr.push(1)
}
mutateArray(array);
mutateArray2(array);
console.log(array)

// click run 

[ 1, 2, 1 ]

// I have one two one
// now this is pretty confusing I am not really sure whats happening here
// I have to go one by one, to figure out how these function are modifying
// the data global state
// & thats one of the problems of having side effects
// is that we are using shared state

const array = [1,2,3]

// something like a global variable
// that can interact with anything
// & the order of the function calls matter
// & that can cause a lot of bugs
// so can we write something that has no side effects

// /////////////////////////////////////////// 5. Pure Functions 2

// how can we make this code not have any side effects
// not change whatever the array is
// well we can create a new array
// lets do that lets change it
// so that the mutate array will no be called removeLastItem(arr)

const array = [1,2,3]
function removeLastItem(arr) {
    const newArray = []
}
function mutateArray2(arr) {
    arr.push(1)
}
mutateArray(array);
mutateArray2(array);
console.log(array)

// & in here lets create a new array 
// & this new array will copy using the concat method
// that comes with arrays
// now this new array will be the exact thing as an array
// but because we use the concat method
// instead of just doing the equals array
// which wuold have cpoyed the array but the reference to the array,
// remeber because objects are passed by reference in javascript
// instead of them pointing to the same locatioin
// we have a new copy of the array
// & now we can just do newArrray.pop()
// & return newArray
// lets see if that works
// if I comment this out
// & just run the mutated array
// & lets sure make sure we rename that
// if I run this, I see my original array
// alright I still have that
// & just have the mutateArray
// lets make sure that we rename that
// if I run this I see my original array
// alright I still have that
// but if I look at console log of rermve last item
// & I click run here I see that array
// there is a new one
// one & dtwo in there
// & although I created a new state 
// or a new data inside of this function
// its a local variable. right?
// & we are not modifying anything outside of our scoped world here
// although we are doing pop here
// it doesnt matter because we are not affecting the outside world
// & thats the beauty with no side effects
// because it soesnt effect the outside world
// we know what to expect from it
// if we go back to this code
// of adding one to the end of this array
// we can just except a new array
// & once again copy the code that above
// & lets say that we wanna multiply
// the array by two
// & just let say multiplyBy2
// we get an array, & this time
// we just use lets say a return a new array using the map method
// which automatically returns us a new array
// saying array.map(item => item*2) 
// so that if I run array multiply by two here
// & I click run
// none ofmy arrays are change
// as you see here from the console log
// but if I do console log multiplyBy2
// & if I run
// look at that
// I have three distinct arrrays
// & all this functions has no side effects
// it doesnt effect anything in the outside world
// just to confirm this I am going to say
// array2 = rermoveLastItem(array)
// & then I we will do const array 3 = equals multiplyBy2
// & here in the console log I will just say array2, & array3
// if I run 
// look at that different arrays living on their own
// no side effects
// so when it comes to no sides effects
// I have a few questions for you
// what happens if I have a function & this funtion a says console.log('hi')
// is that a pure function?
// no is not
// its a tricky one
// console.log is window specific we are using the browser to log something to
// so its really affecting the outside world right
// its logging something to the output of the browser
// its modifying something outside of itself
// when we call this we are outputting something out here
// so that function has side effects
// ok lets go to the next one
// the inout should always result in the same output
// does the function always return the same ouutput than the same input
// if I click run here
// well I can click this many times 
// & the function is always to rerturn the same thing
// thats great
// what if I do function a(num1, num2) {}
// if I do return num1 + num2
// if I click run
// NaN
// I have to give it some parameters so lets do 3 & 4
// click run & I click many many times
// & it is always seven
// & this is what we call Referentail Transparency
// & Referential Transparenty simply means
// if I completely change this function to the number seven
// will it affect any part of my program
// for example if I have function b() {} here
// & function b() {} takes a number 
// & it multiplies this number by two
// if I do b() & because functions are first class citizens in javascript
// I can say b(a(3,4)) so 

// !Not finished 201203
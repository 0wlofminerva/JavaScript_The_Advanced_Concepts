// /////////////////////////////////////////// 12. Partial Application

// welcome back
// lets talk about something similar
// yet slightly different to currying
// its called partial application
// & partial application is a way
// for us well partially apply a function

// its a process of producing a function
// with a smaller number of parameters
// what does that mean?
// well it means taking a function
// applying some of its arguments into the function
// so it rememeber those parameters
// & then it uses closures to later on be called with all the rest of the arguments
// ok so lets see how does look in code & compare it to with currying
// with partial application we can say that code below is a users partial application

// but what if we have 'a' 'b' & 'c'

const multiply = (a, b, c) => a*b*c;
const curriedMultiply = (a) => (b) => a*b;
const curriedMultiplyBy5 = curriedMultiply(5);

//10 years
curriedMultiplyBy5(4)
curriedMultiplyBy5(4)
curriedMultiplyBy5(4)

// that we are using that we wanna multiply
// so we have three numbers now three arguments
// partial application says I wanna apply 
// lets say a portion of the parameters for example 'a'
// & then the next time I call that function
// I wanna apply the rest, of the arguments
// so let me show you the curried version first
// the curried version will simply have another arrow function in here

const multiply = (a, b, c) => a*b*c;
const curriedMultiply = (a) => (b) => (c) => a*b*c;
const curriedMultiplyBy5 = curriedMultiply(5);

//10 years
curriedMultiplyBy5(4)
curriedMultiplyBy5(4)
curriedMultiplyBy5(4)

// that will be 'c'
// & then I will do 'a*b*c'
// & then finally we can remove all of this

const multiply = (a, b, c) => a*b*c;
const curriedMultiply = (a) => (b) => (c) => a*b*c;

// & simply say curriedMultiply() three TimeRanges, four times, ten
// curriedMultiply(3,4,10)
// which is ohh
// & remember instead of brakets this is currying
// so I call it three times
// three times fourr times ten
// curriedMultiply(3)(4)(10)

const multiply = (a, b, c) => a*b*c;
const curriedMultiply = (a) => (b) => (c) => a*b*c;
curriedMultiply(3)(4)(10)

// I click run
// I get a hundred & twenty 120

120

// partial application says no no no
// what I want you to do is I want you
// call the function once & then apply the rest of the arguments to it
// so that means, on the second call
// I expect all the arguments
// so how do we do that?

// well we can do partialMultiplyBy5 & we can just simply say

const multiply = (a, b, c) => a*b*c;
const partialMultiplyBy5 = 
curriedMultiply(3)(4)(10)

// we wanna use the multiply function & we wanna bind

const multiply = (a, b, c) => a*b*c;
const partialMultiplyBy5 = multiply.bind
curriedMultiply(3)(4)(10)

// which rememeber give us anotther function
// but we dont really care about this
// there is no such a thing as 'this' here
// so I am going just to give it null because I dont care

const multiply = (a, b, c) => a*b*c;
const partialMultiplyBy5 = multiply.bind(null, )
curriedMultiply(3)(4)(10)

// but I wanna use bind as a way to pass a parameter
// or an argument in partialMultiplyBy5
// in which case that will be five 5

const multiply = (a, b, c) => a*b*c;
const partialMultiplyBy5 = multiply.bind(null, 5)
curriedMultiply(3)(4)(10)

// so that if I do partialMultiplyBy5 
// well we have that,
// we have multiplyBy function with the five applied right overhere
// so that if I do partialMultiplyBy5 
// & I remove & I call just four lets say ten

const multiply = (a, b, c) => a*b*c;
const partialMultiplyBy5 = multiply.bind(null, 5)
partialMultiplyBy5(4, 10)

// & I run this
// look at that
// I get two hundred

200

// because I partially applyed a parameter the 'a' parameter
// I get to call the rest of the parameters 'b' & 'c' like this

// so thats the main difference between currying & partial application
// partial application is in the second call I expect all the arguments
// currying says I expect one argument at a time

// now, I know what you are thinking
// what are you showing me this?
// I see no much application of this
// dont worry hang in there
// we are almost done with all this terms
// & we start to use them in our exercise to see how they may benefit us
// so hang in there promise its gonna get better
// see you in the next one
// bye bye


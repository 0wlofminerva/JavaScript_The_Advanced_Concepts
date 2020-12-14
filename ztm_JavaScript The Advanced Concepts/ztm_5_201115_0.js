//Function Expression
// Dont get hoisted
// Function defined at runtime, when we actually run the function
var canada =  function() {
    console.log('cold')
}

//Function Expression Alternative Syntax
// Dont get hoisted
var canada = () => {
    console.log('cold')
}

//Function Declaration
// get hoisted
// gets defined at parse time,
//that is when the compiler 
//initially looks at the code 
//and starts hoisting && allocating memory
function india() {
    console.log('warm')
}

//Above assigned a variable

// Function Invocation/Call/Execution
// Runing the functioin with brackets
// Create an execution context
canada()
india()

// 18:24

function marry(person1, person2)
{
    console.log('arguments', arguments) // when we invoke this functions we pass an arguments object
    return `${person1} is now married to ${person2}` //template string
}

marry('Tim', 'Tina')

// Ran code below

arguments [Arguments] { '0': 'Tim', '1': 'Tina' } // arguments keyword give us a special object
// the first index, or in this case, the first key is Tim and the second key is Tina, a special object.
Tim is now married to Tina

// we have the arguments  

// we dont have arguments in the global object

// arguments is only available to us,
//when we create a new execution context
//with a functioin

// 18:48

// Array method in arguments. Bellow

function marry(person1, person2)
{
    console.log('arguments', arguments)
    console.log(Array.from // we create an array from whatever we give it
    (arguments))
    return `${person1} is now married to ${person2}`
}

marry('Tim', 'Tina')

// 18:49

// Rest Parameters

function marry2(...args) {
    console.log('arguments', args)
    console.log(Array.from
    (arguments))
    return `${args[0]} is now 
    married to ${args[1]}`
}

marry2('Tim', 'Tina')

// 18:56

var canada =  function() {
    console.log('cold')
}

function india() {
    console.log(arguments)
    console.log('warm')
}

// canada()
india()
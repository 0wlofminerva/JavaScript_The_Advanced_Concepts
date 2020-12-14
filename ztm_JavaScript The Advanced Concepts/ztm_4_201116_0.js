//15. Exercise block scope

function loop() { // function
    for(var i = 0; i < 5; i++) {  // inside the loop, we have a 'for loop'. Has var i = 0, i should be less than five, as long is less than five, we keep incrementing
        console.log(i) // loop // console.log(i)
    }
    console.log('final', i) // after loop, within this function // console.log('final'i) // added 'final' text
}

loop() // invoke the function

// we declare a variable
// made it 0
// loop through everything
// once we are done with the loop // we finished everything
// 'i' becomes 5
// we do for(var i = 5; 5 < 5; i++) // is 5 less than 5?
// we ignore the loop once finished
// skip over the block
// go to console.log('final', i)
// because 'i' is 5
// ouur final value is '5'


// ran code below

0
1
2
3
4
final 5
Hint: hit control+c anytime to enter REPL.
 

//19:57 echanged var by let

function loop() {
    for(let i = 0; i < 5; i++) { // the 1variable itself 'let i' still in memory // the engine wont allow you to access it unlike if you use var
        console.log(i)
    }
    console.log('final', i) // because we are trying to use 'i' outside of its enviroment
                                // out its block scope
}

loop()

// ran code below

0
1
2
3
4
ReferenceError: i is not defined

// if I set 'let' instead of 'var'
// I get a reference error
// ReferenceError: i is not defined
// because we are trying to use 'i' outside of its enviroment
// out its block scope
// the environment that is in, is iinside those cuurly brackets
// I cannot access outside these curly brackets

// this may have unintended consecuences
// maybe you do want to print this properly

// there are cases where the variable keyword still useful
// we have a way to have block scope whenever we needed

// block scoping means declarring a variable
// not just inside a function
// but arround any curly brackets
// ie if statements, loops

// the 1variable itself 'let i' still in memory // the engine wont allow you to access it unlike if you use var

// this way we get to keep our mental framework of execution context & variable environmet
// but also have the 'let & const' that give us some of the power that give us scoping

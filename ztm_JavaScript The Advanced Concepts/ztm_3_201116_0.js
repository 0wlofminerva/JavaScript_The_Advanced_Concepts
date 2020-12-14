// function scope
// vs
// block scope

// fuunctioin scope & block scope, important terms in any programming languaje
// Scope means what varriables we have access to

// javascrript have function scope
// everutime we create a fuunction, we create a new execution context
// which has its own variable environment

// most other programming languajes have 'global scope'

// Whats the difference?

// it means with a functiion scope if I created an if staetement
// if 5 is greatter than 4, which it is
// I create a variable within if, called secret, 
// & I have a super secret password
// because javascript is function scope
// I can actually access the password like this1

// because this variable is functionally scope
// that is we only create a new scope a new environmet 
// when there is a function

if (5 > 4) {
    var secret = '12345';
}

secret; // this1

//18:55

// if there were a function
// with function scope
// we cannot access the sec ret

function a() {
    var secret = '12345';
}

secret;

// in most other programming languajes they use block scope
// block scope is
// anytime I see a block of code that is these curly brackets
// I am going to create a new world

// in other programing languajes
// if I do secret here,
// I would not be able to access it like I can in javascript

// javascript does block scoping too
// with IE6 they introduced the 'let' & 'const' keywords
// the keywords allow us to use block scoping

// const

if (5 > 4) {
    const secret = '12345';
}

secret;

// let

if (5 > 4) {
    let secret = '12345'; // you can only access it inside the block scope!
}

secret;

// I cannott access
// variables declared inside a block scope
// such a 'if statement' or 'for loop'
// can be access from the outside of the opening & closing curly brackets,
// when we use function scope
// when we use 'var'

// with the introduction of let & const
// we cannot access
// which can give us a little bit of more power

// that doesnt mean that you should never use var
// most of the time you probrably use let | const
// but let and const are alternatives for variable declaration



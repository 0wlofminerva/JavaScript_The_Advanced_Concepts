///////////////////////////////////////////// 3. Array.isArray()

// welcome back
// lets do a quick video on arrays
// remember what I sayed
// arrays are objects of javascript

// because underneath the hood I do lets say an array
// that contains 1,2,3

// var array = [1,2,3];

// in javascript is almost saying 
// variable object or in this case array
// equuals index of 0 contains 1
// index of 1 contains 2
// & index of 2 contains 3

var array = [1,2,3];

var array = {
    0: 1,
    1: 2,
    2: 3
}

// if I change these to strings
// that would be the same thing as this

var array = ['1','2','3'];

var array = {
    0: '1',
    1: '2',
    2: '3'
}

// that is why when we do 

typeof []

// I get an object

object

// how would we everr test to see 
// if something we create is an array
// lets say we create a variable somewhere

var something;

// & we want to find out what this variable is
// does it contain an array an object

// how can we figuure out if typeof
// is the same thing of typeof object

// well, in the new version of javascript
// we have something called:

Array.isArray

// & this array as you can see is an object
// array  constrructor
// which we are gonna talk about 
// a little bit later in the course
// & we use the dot '.'  notation
// to access a new property
// or method on it 'isArray'

Array.isArray()

// & in here 

()

// we can give it something
// to see if something is an array
// if I give it an array

Array.isArray([1,2,3])

// Its going to give me:

true

// If I give it let say an object

Array.isArray({})

// is going to give:

false

// thats how we check for arrays in javascript
// otherwise it would be really hard 
// to determine if something is an array in javascript
// because once again
// arrays in javascript are objects

// I will see you in the next onemptied, bye bye

// ///////////////////////////////////////////// 4. Pass By Value vs Pass By Reference

// welcome back
// lets ttalk about
// pass by reference vs pass by value
// to finish ouur discussion about javascript types
// now, in the previous video I sayed
// primitive types are immutable
// what does it mean?
// It means that we cannot really change them
// in order to change them we need 
// to completely remove the primitive type
// & lets say if variable 'a' equals '5'

var a = 5;

// well, in order for me to change 
// what that '5' value is
// I have to literalily move it from memory
// & create something new like
// 'a' equals '10'
// I cannot really modified it
// just something new is created
// & primitive types are exactly like that
// when I assign variable 'a' to '5'
// somewhere in memory
// variable 'a' is going to contain a reference value '5'
// if I do variable 'b' equals lets say '10'
// again, same thing
// they dont really know of each other existence
// thats is what we callee 'pass by value'

// objects on the other hand are what we called pass by reference
// lets write some code to figure out what this really means

// if I do variable 'a'

var a = 5;
var b = 10;

// well, 'a' now has an address on 
// where this primitive value '5' sits in memory
// & same with 'b'
// 'b' has an address on where the primitive value '10' sits on memory
// what if I do variable 'b' equals 'a'

var b = a;

// what happens then?
// remember primitives types pass by value
// when we do pass by value?
// what if I do something like ...?

b++;

// if I 

var a = 5;
var b = a;

b++;

console.log(a)

// I have:

5

// if I:

var a = 5;
var b = a;

b++;

console.log(a)
console.log(b)

// I have:

5
6

// & this is because pass of value
// all the javascript engine did
// was copy the primitive type value 5 

var b = a;

// as if I was doing

var b = 5;

// so, that 'b' has a reference to the value primitive type '5'
// all we did is copy the value
// so, looking at this diagram should make sense

// anytime eventhough we did 'b' equals to 'a' 
// we simply copyed the value
// & put it into a new memeory space in our machine
// remember our memory heap or our stack
// where we store information
// we just simply make a copy
// they dont really have any conexion whatsoever
// & thats what pass by value means
// pass by value simply means copy the value
// & we create that value somewhere else in memory

// now lets see how objects are different:

// unlike what we have before
// if I create an object
// lets say object 1

let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy'

console.log(obj1)
console.log(obj2)

//

{ name: 'Yao', password: 'easypeasy' }
{ name: 'Yao', password: 'easypeasy' }

// window, what just happen?
// password has been changed
// object 1's password & object 2's password
// updating by doing this &
// this is due to pass by reference

// you see, objects in javascript are stored 
// in memory and passed by reference
// which means we dont copy the values
// like we did with primitive types
// we simply,
// when we assigned object 1 to object 2
// we simply sayed
// hey! this is where the object is in memory
// if we go back to the code
// object 1 & object 2
// are both pointing somewhere in memory
// we dont know where
// somewhere in the memory heap
// to a shelve that contains this information

{name: 'Yao', password: '123'};

// all I did by saying 

obj1 = obj2 

// is:
// hey! this is the 

let obj1 = obj2;

//

let obj1 = 'address in memory';

// hey! this is the address in memory 

{name: 'Yao', password: '123'};

// of whatever this is located
// so that, what that means  is
// when I change object password like this

obj2.password = 'easypeasy'

// I am saying:
// change 

password

// on this object memory
// that also objbect 1 is pointing to
// is referencing
// thats what pass by reference come from

{name: 'Yao', password: '123'};

// what do  you thing is a good idea?
// why is this good?
// is kind of nice, right?
// by just having one object here
// we are saving space & memory here
// we are not copying && cloning the object
// ceating multiple version
// we can simply save memory
// reference just one locatiion
// instead of loading up our memory heap

// but, why this may also be bad
// because, unlike a primitive type
// we might have this issue
// where by mistake somebody changes 
// a property on a reference object

// this is something that we need to be careful

// lets do another example
// just to prove that arrays are simply object
// lets try this with an array
// if I  do:

var c = [1,2,3,4,5];
var d = c;
d.push(187628761)
console.log(d)

// if I run this

[ 1, 2, 3, 4, 5, 187628761 ]

// yea I modify the array
// but, because the arrays are objects
// ther are passed by reference
// 'c' should also has change

// if I console log 'c'

var c = [1,2,3,4,5];
var d = c;
d.push(187628761)
console.log(c)

// 'c' has also change aswell

[ 1, 2, 3, 4, 5, 187628761 ]

// we know something here, right?
// this is good
// we are saving memory
// we are constanly copying things
// imagine that 'c' was a massive object
// if we were copying to differentes part of the code every time
// this would create a lot of memory
// but, then, there are times where maybe
// we do wanna clone an object ,copy it
// so we dont modify it, like this
// how can we do that?

// with something like an array
// there is different ways of doing it
// but, I can simply do an empty array,
// & then do a concat method,
// which pushes whatever I have in 'c' in this empty array,

// var d = [].concat(c);

// to the empty array
// a concat method

var c = [1,2,3,4,5];
var d = [].concat(c);
d.push(187628761)
console.log(c)

if I run here 

[ 1, 2, 3, 4, 5 ]

// you see 'c' is still the same
// but if I go to 'b'

var c = [1,2,3,4,5];
var d = [].concat(c);
d.push(187628761)
console.log(d)

// I have a new array
// its cloned an array

[ 1, 2, 3, 4, 5, 187628761 ]

// objects are a little bit difficult
// lets say we have an object that equals ...

let obj = {a: 'a', b: 'b', c: 'c'};

// & this object
// I wanna copy
// I wanna have this piece of code, 
// this object in different location in memory
// how can  we do that?
// well, I can do another object like this,
// because is simply going to pass by reference

let obj = {a: 'a', b: 'b', c: 'c'};
let obj2 = objb

// and its going to be referencing the same object

{a: 'a', b: 'b', c: 'c'}

// instead we can clone an object
// by doing something like this

let clone = Object.assign();

in here ()

// the first parrameter is the object to copy to
// which is the empty object

let clone = Object.assign({},);

// & then wht whate is the source
// which is from where to copy the properties
// in this case will be the object

let clone = Object.assign({}, obj);

//

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);

// if I change lets say object 'c' equal '5'
// if I console.log()

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);

obj.c = 5;
console.log(clone)

// if I run this:

{ a: 'a', b: 'b', c: 'c' }

// look at that the cloned object was not affected at all
// even though we change 'c' to the '5'

// remember if we didnt do this,
// if we didnt clone it
// & we just do:

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = obj

obj.c = 5;
console.log(clone)

// that would have been pass by reference
// & we would see a change 
// that we saw in the original object
// but, becaue of 

Object.assign()

// we were able to clone the object
// very cool

{ a: 'a', b: 'b', c: 5 }

// there is also another way of doing this
// & that is using the spread operator
// I can use

let clone2 = {...obj}

//

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c = 5;
console.log(clone)

// nice & clean
// thats a new feature that we got in javascript languaje
// which is really really nice
// & once again when we run this code

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c = 5;
console.log(clone)

// I see that clone hasnt been modified

{ a: 'a', b: 'b', c: 'c' }

// & if I do clone2

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c = 5;
console.log(clone)
console.log(clone2)

// that hasnt been modified either

{ a: 'a', b: 'b', c: 'c' }
{ a: 'a', b: 'b', c: 'c' }

// just for Reference
// I add the original refrence aswell

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c = 5;
console.log(obj)
console.log(clone)
console.log(clone2)

// to see that indeed 
// is different that we have before

{ a: 'a', b: 'b', c: 5 }
{ a: 'a', b: 'b', c: 'c' }
{ a: 'a', b: 'b', c: 'c' }

// so cloning is great
// but let me ask you this
// what do you think it will happen 
// with code that we have 
// if we have an object inside an object
// for example, if 'c' instead of being a String
// is another pass by reference object {}
// lets say has 'deep' as a property
// & this deep is going to equal 'try and copy me'
// I hope that makes sense
// let me adjust the inventation here

//

let obj = {
    a: 'a',
    b: 'b',
    c: {
          deep: 'try and copy me'
      }
    };
let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c = 5;
console.log(obj)
console.log(clone)
console.log(clone2)

//

// what happens here
// we have an object, that is referecing somewhere in memory
// & inside the object there is, again another pointer 
// to another place in memory that is referencing this object

{
    deep: 'try and copy me'
}

// lets run this code

{ a: 'a', b: 'b', c: 5 }
{ a: 'a', b: 'b', c: { deep: 'try and copy me' } }
{ a: 'a', b: 'b', c: { deep: 'try and copy me' } }

// nothing has changed 
// right?
// I mean 'c' has obviously changed
// thats something that we already saw before
// what if I change 'd' this time arround
// instead of 'c'
// what if I do?

let obj = {
    a: 'a',
    b: 'b',
    c: {
          deep: 'try and copy me'
      }
    };
let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c.deep = 'hahaha';
console.log(obj)
console.log(clone)
console.log(clone2)

// I ran this code

{ a: 'a', b: 'b', c: { deep: 'hahaha' } }
{ a: 'a', b: 'b', c: { deep: 'hahaha' } }
{ a: 'a', b: 'b', c: { deep: 'hahaha' } }

// oh, no we have just cloned everything
// but, got overwritten
// I cloned everything
// it had overwritten
// what happened here?
// remember each object get passed by reference
// so, although we cloned the object,
// the initial object
// this is what we called a swallow clone
// it clones the first level
// so, that is the memory address in the fist object

{
    a: 'a',
    b: 'b',
    c: {
          deep: 'try and copy me'
      }
    };

// but within this object 
// there was another address to another object
// so, remember this is just another address
// that we have some place in memory
// and this address it nevers changes
// it always references this object

{
    deep: 'try and copy me'
}

// this is swallow cloning
// where we only clone the first layer

{
    a: 'a',
    b: 'b',
    c: {
          deep: 'try and copy me'
      }
    };

// thats a big problem
// how can we do the deep cloning
// the way we can do this is, well a little funky
// we use json

// we use:
// we are gonna use the json dot parse method 

let superClone = JSON.parse()

// this is beyond the scope of the course
// you can read up on what JSON.parse does
// but this json object
// is going to say (JSON.stringify(obj))
// we are gonna to stringify
// that is turn everything into here

{
    a: 'a',
    b: 'b',
    c: {
          deep: 'try and copy me'
      }
    };

// into a string
// & when is everything into a string
// we are gonna parse it & turn that string back it into an object

let superClone = JSON.parse(JSON.stringify(obj))

// so that if I do superclone now

let obj = {
    a: 'a',
    b: 'b',
    c: {
          deep: 'try and copy me'
      }
    };
let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahaha';
console.log(obj)
console.log(clone)
console.log(clone2)
console.log(superClone)

// if I run this

{ a: 'a', b: 'b', c: { deep: 'hahaha' } }
{ a: 'a', b: 'b', c: { deep: 'hahaha' } }
{ a: 'a', b: 'b', c: { deep: 'hahaha' } }
{ a: 'a', b: 'b', c: { deep: 'try and copy me' } }

// look at that 'try and copy me'
// superClone version did a deep clone of the object
// very very cool

// before i end this video
// I hope pass by reference & pass by value makes sense to you now 
// I am gonna give you a bit of a warming however
// if you are doing a deep clone

let superClone = JSON.parse(JSON.stringify(obj))

// well, you should be careful
// because this can have some performance implications
// if this object was extremely deep
// a massive object

{
    a: 'a',
    b: 'b',
    c: {
          deep: 'try and copy me'
      }
    };

// its gonna take a long time to clone everything
// you wont see out in the wild too much
// if you are clonning objects
// there are most likely other ways that should be  doing things
// but I want to show you the idea of pass by reference

// the idea of swallow cloning
// deep cloning
// & some of the ways that we can use objects
// to get the desire up

// all right I hope that was fun
// I see youu in the next video, bye bye

///////////////////////////////////////////// 7. Type Coercion

// 201121

// Ah, type coercion

// if there is one thing that is gonna make you pull out all your hair out of frustration
// if you google type coercion & look some of the post
// you are gonna see some of the people angry at some of the funky things that javascript does
// & we are gonna talk about that
// I am gonna give youu a brief overview here
// it gets a little convoluted, complex,
// something that youu should understand and know what it is
// buut you dont have to know every single detail
// because most of the tricky parts 
// you shouldnt be using it in youur code because its confusing
// something, what is type coercion
// is something like this

// 1 == '1'

// one equals to string one
// & one equals to true

// you see
// type coercion means 
// when operance that is the thing to the left
// & to the right of the operator
// are diferent types
// one of them will be converted to an equivalent value
// at  the javascrript engine
// something, the javascriipt engine
// is gonna say
// one equals to string one
// ummm I think you mean number one
// something, its gonna do this for us:

// 1 == 1

// & compare numbber one to number one

// now based on  that definition
// type coercion means the languaje converting
// a certain type to another type

// let me asked youu a question

// Do all languages have type coercion?
// What do you think?
// yes they do

// Because we always have to convert types
// between programs to do things
// in  memory different types 
// look completely different then when we type
// the number of type in actual physical memory on my computer
// is represented in ones and cero
// & all languajes do this
// it just happens that javascript 
// has an specially
// heavy type coercion nature to it
// because is dynamically type
// which is why it does this
// lets go back to the example

// in javascript type coercion happens
// when you use the double equal
// the double equal sign 
// simply means compare the two values
// & if they  have different types
// try to coerce one into the same type

// if we go back into a string here

1 == '1'

// & I do 3 equals

1 === '1'

// & I run

false

// because three equals in javascsript
// means compare two values
// but, dont try & coerce the values
// be explicit with your comparation
// do exactly what I tell you

// so, is there ever a time you should use two equals ?
// instead of three equals ?

// umm, I say that no there isnt
// some people may argue that 
// double equal can actually
// have some interesting applicatioin
// where we coerce somthing
// & we type some sort of checking
// very quickly,

// but is not predictible code, right?
// it can be confusing
// it can really be  a ?gutcher & trick some people

// so, always use thre equals === instea of two,
// type coercion doesnt happen just equal sign

// you can also do an if statement

if (1) {
    console.log(5)
}

// if I run this

5

// five is log
// because javascript coerces (1) to equal to true
// what id I do 0

if (0) {
    console.log(5)
}

//

No

//

// Javascrript coerces this (0)
// & says I want a boolean
// so I am going to coerce a 0 & turn it into a false

if (false) {
    console.log(5)
}

// this sort of type coercion
// there is a lot of interesting specifics into it
// as a matter of fact
// there is a nice little website
// that shows you some of the comparisons
// that javascript does
// with three equals
// ===
// that is with no type coercion
// thing make sense
// ie
// false === false
// ie
// string false only triple equals & returns true with string false again
// 'false' ===  'false'

// if we do double equals
// oh boy that is a mess
// isnt it?
// ie
// string 1 is the same as true
// '1' == true
// /.../

// if you want to play arround with this, go for it ...
// but, I will stick whit triple equals
// you can see some of the statements
// & some of the if cases that it can be tricky
// now, if we go to the ?nbm page
// which I will link to in this video
// we see that we have the double equals,
// the triple equals
// but, then, also something called 'object.is'

// thats fairly new to javascript
// this an interesting one that you most likely wont see very often
// but, I think its interesting
// something, we are gonna talk about it

// you see
// in javascript
// there is a concept of 
// negative cero -0 & plus cero +0
// strange I know
// something, if I do, negative cero triple equals plus cero & run

-0 === +0

// I get 

true

// but, there technically different things of javascript
// I can actually do:

Object.is(-0,+0) // give it the two parameters & run

// I get 

false

// why is this useful?

// if go back to this page you see that Object.is
// works pretty much the same as the triple equals,
// except for a few cases that is the plus & negative cero
// & if we scroll all the way down in this funky little NaN
// Not a Number

NaN

// we can do a hole couurse of how weird Not a Number is
// if I did 

NaN

// which represents Not a Number in javascript
// & I do  triple equals Not a Number

NaN === NaN

// I get 

false

// but, why is that if this should be equal
// right?

// so, if we use Object.is it truns into true
// most likely, in your day to day programing life
// you never gonna encounter this problem
// but, I want to demostrate to you how confusing type coercion can be

// & if you  are the type of person that lovers type coercion
// // & want to read all about it & understand all this intrincancies
// // I link to the actual ?spec (?page) 
// that talks about on how the quality comparison algorithm works
// for me if I read this
// it would be a good bed time reading for make me fall sleep
// if you are interested in it
// youu  can have a look

// the main take away from here is that
// well,
// you should use triple equals
// because
// type coercion in javascript
// can be  really tricky

// /.../

// bugs in the code are inevitable
// even the mighty netflix
// every once in a while has an issue somewhere



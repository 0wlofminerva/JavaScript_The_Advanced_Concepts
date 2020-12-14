// /////////////////////////////////////////// 8. OOP vs FP

// /////////////////////////////////////////// 1. Composition vs Inheritance

// welcome back before we were able to talk about 
// functional programming & object oriented programming
// & close this entirre section out
// we have to talk about composition versus inheritance first
// what ae those two things
// & by now we should understand their meaning. right?

// inheritance well is a superclass like a character overhere
// & rememember we have seen this code before with our elf & ogre classes
// inheritance is a superclass that is extended to smaller pieces
// that add or overwrite things, like here
// we have elf or ogre that extend the functionality of the character
// we use inheritance using class extends

// composition is smaller pieces that create something bigger
// we have seen that befote with compose. right?
// we compose functions to give a function like purchase item
// different habilities compose functions to act upon data differently
// smaller pieces that are combined to create something bigger

// the debate of composition versus inheritance is a pretty heavy one
// & alot of people prefer compsition over inheritance
// so I want to talk to you about some of the problems
// that might come with inheritance & how composition might solve some of those problems
// now what I am about to talk about doesnt specifically mean tha they opbject oriented programming
// is only inheritance & functional programming is only composition
// no you can do both things in both paradigms
// however one tends to focus more in composition like functional programming
// & one over inheritance
// so in the next discussion that we are gonna have here
// I am generalizing & simplifying things
// to demostrate what I mean
// the goal is to demostrate some of the drawbacks 
// that might come when using composition or inheritance
// so lets gett started

// the first thing that we wanna keep in mind when we talk about inheritance
// are structure & the structure our code is arround
// what it is
// that is what is the character class
// what is the elf class
// we are structuring our classes about what things are
// they have data as well as methods & actions & functions
// that act upon that data

// with composition on the othe other hand
// we focus & structure our code arround what it has
// or what it does to data
// so we are focusing on what the habilities are
// & what it is

// now I know that is not superclear
// but lets go over this

// when we define something as what it is
// we are saying
// hey character is going to have these properties & methods
// elf is goiing to have these properties & methods
// & ogre is going to have these properties & methods
// but what if things change?
// when we define things as what they are
// we are sayiing this is what is going to happen
// but as humans we are notoriously bad at predicting the future
// & we are assuming no change
// so lets play out this sceneraio
// lets say that we now find out that we need to update our game
// & the character
// well the character needs to have a sleep method added to it
// I mean thats fine, not a big deal
// all my classes that will extend form character
// will have this sleep method
// which is good but there lies a problem
// called the ?tied ?coupling problem
// you see the ?coupling between a child class & its parent
// is a very tied from ?coupling
// & what does it mean well is the opposite
// of reusable modular code
// because making a small change to a class
// or even if we change something in the attack method
// we have these rippling effects
// to all these subclasses
// so maybe we made a small change like adding sleep
// or we made a small change like the attack method does something different
// down the road maybe the ogre class did something different to attack
// than now breaks things, because
// some developer change the parent class
// & this idea of ?tiedly ?coupled inheritance
// where you can change things in one place 
// & it will have rippling effects to the other
// can be a benefit where you dont have to keep your code dry
// but can also cause a lot of problems
// so you have all these dependencies
// where if you change something in a class
// well you have to make sure that it doesnt break anything with it subclasses
// & remember the subclasses are using inheritance
// & this leads to the other problem
// & let me write it down just so we can remind it
// we have the thight cuopling problem
// which leads to the fragile base class problem with inheritance
// where because the base class in the case the character class
// changes all subclasses, this can be very fragile because of 
// ?tied coupling it can break our code down the path
// another problem that we might encouunter
// with inheritance is the hierarchy problem
// we only have a simple set up here
// with character & elf & ogre
// but what if we have two different kinds of elfs
// we have a boss elf & a junior elf
// & the boss elf or the junior elf inherits from the boss elf
// the problem with this with this hierarchy is that well
// what if it changes?
// what if the junior elf for some reason in the game
// is higher up in the hierarchy than the boss elf
// & I hope you start to see a trend with this problem
// on the idea of what it is?
// because with inheritance we can start getting into a situation
// where we design the game with lets say a user in mind
// then a character in mind that is a subclass
// & then we have the elf & the ogre
// but then all of a sudden they gain changes or we need to make an update
// so we also add a watcher class
// & so on & so forth
// & the problem starts to rise now
// where we wanna start sharing methods
// but lets say I have a junior elf overhere
// junior elf class
// & the junior elf
// cant really do anything
// maybe just sleep
// so we create the junior elf but the problem is now
// because junior elf is inheriting
// all these superclasses
// is going to inherit all the methods
// that well it doesnt really need
// & thiis the classic gorila banana problem
// when it comes to inheritance
// where it says, hey I just want a banana
// give me a banana, but instead
// you get a gorilla holding banana &
// the entire jungle underneath it
// in this case the jungle being the user,
// the gorilla being the character
// & all that you wanna is the sleep method
// & then on top of that
// you are just assuming that this is what it is
// that is user is going to have these methods
// watcher & Character is going to have the same thing
// & this structure or what we might call taxonomy
// is that we are predicting that 
// this is how its going to be future even in the future
// but as soon as we start updating the game
// or changing small things
// or adding new classes with sutile differences
// maybe changing what inherits from what
// the fact that all of this is so tiedly coupled
// & that we inherit everything form our class
// & we have to make sure that we structure our program
// in a way where inheritance makes sense
// & as soon as something changes 
// we are maybe the watcher, & has to move a class well
// evertything just becomes to tiedly cloupled
// where eventually as the program gets bigger & bigger
// it creates more & more issues
// & then you start to refactor the code
// & all of a sudden you start to violating the dry principle of
// to not repeat yourself
// if we know that some of this inheritance prrinciples are bad
// how can we fix it with compsition?
// well the first thing we can do is to
// remove all the methods
// what I mean by that?
// lets demostrate with an example
// lets create a function that creates an elf
// & this elf will have name weapon & type
// & in here we just have the elf that we created
// & this elf will have the name
// & we can just go like this
// with the new ES6 syntax
// & there you go we have an elf just like we had here in our constructor
// but without necessarily worrying about the character & the elf in the inheritance model
// but lets say that the elf can also attack
// assuming that in this class we have the attack method
// or we dont need to because well it have inherits it
// with composition how can we do that?
// if we are not going to do inheritance
// well the idea of composition is all about what it has
// the habilities that it has
// so the code structure of what does to the data instead of what the elf is
// so the elf can attack
// in that case why not just create a function called attack
// that takes in the user
// or in this case lets say the character
// & in here we can just return object dot assign
// which we have seen before
// & just return a new object
// with the attack function attached to it
// so maybe we can name this to get atttack hability
// which allows our character to be added 
// or have the elf character at the attack function
// which can be anything I just leave it blank for now
// so now we can now just get attack
// & will return from this function
// & this get attack will receive the elf
// & this get attack will add the attack function 
// that will add in here to the elf
// we are composing, instead of just inheriting
// we are saying hey, these are the habilities that the elf has
// here the best ?bearest elf character possible
// & if we want we can keep adding habilities to the elf
// so using this method I can say that I can keep adding things
// I can say that the elf can attack
// it can also sleep
// what aboout an ogre?
// an ogre can attack it can make forts but it can also definitely sleep
// now this is sudo code obviously but 
// I hope you understand where I am trying to get up
// we turn this inheritance model
// form what the elf is
// which we have here what the elf is to what the elf does
// we have the base elf,
// but we get the elf habilities through things like get attack
// which just uses functions to add to the character object
// different habilities
// so that we can compose these samll little pieces
// of functioinality to describe our character
// & the beauty here is that state is not really created internaly
// get attack simply accepts the state & returns it
// the same with elf
// we have a function that internally creates the elf 
// but spits out a new elf object with
// the functionality that we need

// to review inheritance,
// is a super class that is extended to smaller pieces 
// that add or overwrite things
// thats inheritance, & although you can be careful with it
// making sure that the base class is very very general
// so that we dont overload our subclasses
// it can easily get out of hand
// as we go deeper & deeper
// down the inheritance chain
// & once we need to change something
// it becomes really difficult
// & on the other hand
// composition is about smaller pieces
// that are combined to create somthing bigger
// we combine the boxes based on what we need
// to create out desired output
// & if we need to add something later on
// well we just add another puzzle
// like composing things together
// or we add another box & composing things
// or remove them if we dont need them anymore
// I argue & a lot of programmers argue
// that composition is a better solution long term than inheritance
// this doesnt mean that inheritance is always bad
// there ways that you can still write great code with inheritance
// but the problems might come up in the future
// specially with so many unknowns & human unable to predict the future
// & all the changes that we might need to do to a program
// it becomes really difficult
// so compsitiion is a good tool for you to use
// to keep in mind when creating software because
// this is going to help us create code 
// that is more stable as well as easier to change in the future
// & see you in the next one
// bye bye

// /////////////////////////////////////////// 1. Composition vs Inheritance

// there we have it
// object oriented programming & functional programming
// they are both paradigms
// & a progrramming parradigm is writting code compliant with a specific set of rules
// for example organizing the code in units 
// will be called object oriented programming
// avoiding side effects & writting pure functions
// will be called functional programming
// in object oriented programming
// an object is a box containing information
// & operations that are suppossed to refere to the same concept
// or grouping it as an object
// these pieces of informatioin inside of this object
// are called atributes or state
// & the operations that can happen on the state
// are known as methods
// in functional programming the code is essentially
// a combination of functions
// & data is immutable
// at least to writting programs wiith no side effects & pure functions
// because in a functioin programming paradigm
// that function cannot change the outside world
// & the output value of a function simply depends on the given arguments
// this allows functional programming to really have control over a program flow
// now over the last ouple of sections
// we have learnt aboout these two paradigms
// & we even coded some examples with it
// so what have we learnt?
// we have learnt that functional programming is based on different concepts, right?
// we have higher order fuunctions, pure functions, referential transparency & functional programming
// in object oriented programming objects are first class citizens
// & we have learnt about the pilars of each of these paradigms
// in object oriented programming we have abstractions, we have encaptulation,
// where it allows us to encapsulate ideas that are related together & objects
// it helps hide irrelevant data from the user
// we have learnt about inheritance
// & then we have learnt about polymorphism
// in fuunctional programming we have learnt that
// its all about the idea of pure functions
// & composing fuunctioins that act uupon that data
// now, object oriented programming has being arround for a long time
// since the seventies, & functional programming as well,
// even earlier
// object oriented programming is very common in languages
// like ? c sharp, phyton, java
// & then functional programming is very common in languages like closure & haskell
// but at the end of the day there is no better than the other
// all of them are good in their own ways
// there are simply different approaches
// to the same problem
// how do we write clear, easy to extends, easy to maintain, effiecient, dry code?
// Clear + Understandable
// Easy to Extend
// Easy  to Maintain
// Memory Efficient
// Dry
// in our functional style
// functions manipulate data structures like tree & arrays & objects
// & things like composition
// are used a lot more than loops & iterations
// & if else staments
// although some languages prefer one over the other 
// in terms of programming languages
// languages like javascript allows youu to do both
// which in my opinion is extremly wonderful you can pick the solution to your own problem
// although the language that you use does have an effect on which typew of paradigm you write
// even pure functions like haskell
// you can write procedural coding
// you can write object oriented style
// in procedural languajes like C
// the thing is that the benefits are in the application of these ideas
// to be clear the advantage of each paradigm
// is simply in the modeling of the algorithm & the data structure
// the choice of what you use is simply what makes more sense in your project
// & the language that you are using

// /////////////////////////////////////////// 3. OOP vs FP 2

// ok ok I sayed that they are both equal
// you didnt tell aboout the pros & cons of each 
// lets go over the key differences between these two
// to finalize everything we have talked about

// functional programming is all about performing 
// many different operatioins for which the data is fixed
// thats many operrations

// object orented programming
// is about few operations
// on common data

// in a functional program we have the idea of stateless
// that is we dont modify state
// state is immuutable

// versus

// object oriiented programming
// is very stateful
// we are modifying state

// a feature of objbect is that a object procedure can access 
// & modify the data fields of the obbjct right
// we have the idea of 'this' itself in objects
// & we can modify them in classes

// in functional programming our functions are pure
// there are no side effects
// it means that the functions 
// that we write dont make an impact of the code 
// that is running outside of that function

// on object oriented programming there are definitely side effects
// methods manipulate our internal state
// now the interrsting thing & why functional programming is becomming popular
// is because this idea of purity
// becauuse of this with the functions that have no side effects
// it means that we can start writing code in parallel on multiple processors
// that wont have effect in our program

// versus in object oriented programming where we can do 
// that because our functions have side effects
// functional progrramming is more declarative
// is about what we want to be doing
// versus an object oriented programming
// which is how we want it to be done
// which is more imperative

// so when should you use one over the other?

// well functional progrramming is quite good at processing large data for applications
// if you are analyzing data user data
// maybe uusing it for a machine learning model
// functional programming
// works really well for high performance & processors for example
// becasue you can run it in multiple processors

// if you have a few things that require a lot of operations
// a lot of little functions appliyed to it
// well then functional programming is usually a good idea

// if on the other hand
// you have many things
// like characters on a game
// not to many operations with few operations
// well then object oriented progrramming might be a better solution

// but as I sayed before you can use 
// the ideas of both of these to write your code

// for example in this react app
// a robot firneds app from my other course

// well here we see that react uses classes to extend component
// we have a constructor
// we are calling our super so that the component class
// is a class provider by the react library can be constructed
// so that we have the hability of the component class
// & then we also have methods that we create onto this class
// but at the same time there is also this idea of functional prrogramming
// if we go to our component that is the components on ourr website
// these little pieces of jsx
// which convert into html
// well they are just pure functions 
// the cart component just receives an input of properties
// & produces an output based on that input
// no matter how nany times I ran this
// the same input is going to return the same output
// its just  pure function without state 

// so rememebr in all programs are two primary components
// the data & the behaviours

// object oriented programming says hey
// bring togetherr the data & the behaviour 
// in a single location called object or class
// this is gonna alow us to understand our progrram easier & be more organized

// functional programming says 
// that data & behaviour are distinctly
// different things & should be kept separrate for clarity

// I hope these priinciples will be useful for you iin your future
// & I hope it help a lot

// I see you  in the next one
// bye bye































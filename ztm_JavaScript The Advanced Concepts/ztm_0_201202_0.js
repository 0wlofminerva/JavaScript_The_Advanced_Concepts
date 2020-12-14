// /////////////////////////////////////////// 13. Inheritance 2

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
        console.log(this)
    } 

}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongest fort in the world made'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
dolby.attack()
const shrek = new Ogre('Shrek', 'club', 'green')
shrek.makeFort()

// welcome back
// lets talk about a little bit more about inheritance
// when we have created makeFort() here 

makeFort() {
    return 'strongest fort in the world made'
}

// that is we have created our own method just for the Ogre class

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongest fort in the world made'
    }
}

// what we actually did underneath the hood
// was we extended the prototype. right?
// its like saying 

Ogre.prototype.makeFort = 

// & you can see overhere that is even showing me that I have makeFort (metabox code editor)
// underneath the hood javascript created this for us
// because we use 'class' keyword &
// I think it looks a lot nicer than having to use prototype
// we have done that before & it gets a little confusing
// now the cool part about beyond the fact that it looks a lot cleaner
// things just makes sense things & we are usiing really important
// objbect oriented principles classes & extending & creating subclasses
// & using the new keyword create instances
// we are also using underneath the hood prototypal inheritance of javascript
// to make this inheritance prototype chains between our objects
// to test that everything is linked properly

// lets do a few tests
// lets say that you want console.log 
// to have lets say Ogre is prototype of what is Ogre
// prototype of
// well if I do shrek here

console.log(Ogre.isPrototypeOf(shrek))

//

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
        console.log(this)
    } 

}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongest fort in the world made'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
dolby.attack()
const shrek = new Ogre('Shrek', 'club', 'green')
shrek.makeFort()

console.log(Ogre.isPrototypeOf(shrek))

// & I run
// false

Elf { name: 'Dolby', weapon: 'cloth', type: 'house' }
false

// because again this is a little tricky
// Ogre is a construction function
// if you wanna check Ogre.prototype
// which is the object that contains
// all the properties & methoods that we have available
// so if I du this & run 

console.log(Ogre.prototype.isPrototypeOf(shrek))

//

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
        console.log(this)
    } 

}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongest fort in the world made'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
dolby.attack()
const shrek = new Ogre('Shrek', 'club', 'green')
shrek.makeFort()

console.log(Ogre.prototype.isPrototypeOf(shrek))

// I get true

Elf { name: 'Dolby', weapon: 'cloth', type: 'house' }
true

// awesome
// what if I do something like this
// what if I do character.prototype
// is that a prototype of Ogre?

console.log(Character.prototype.isPrototypeOf(Ogre))

//

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
        console.log(this)
    } 

}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongest fort in the world made'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
dolby.attack()
const shrek = new Ogre('Shrek', 'club', 'green')
shrek.makeFort()

console.log(Ogre.prototype.isPrototypeOf(shrek))
console.log(Character.prototype.isPrototypeOf(Ogre))

// if I run this

Elf { name: 'Dolby', weapon: 'cloth', type: 'house' }
true
false

// I get false
// we have to rememeber Ogre.prototype

console.log(Character.prototype.isPrototypeOf(Ogre.prototype))

//

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
        console.log(this)
    } 

}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongest fort in the world made'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
dolby.attack()
const shrek = new Ogre('Shrek', 'club', 'green')
shrek.makeFort()

console.log(Ogre.prototype.isPrototypeOf(shrek))
console.log(Character.prototype.isPrototypeOf(Ogre.prototype))

// if I run

Elf { name: 'Dolby', weapon: 'cloth', type: 'house' }
true
true

// I get true
// alright
// all this prototype stuff is a little bit confusing
// there is a better way to check these conncetions
// using the 'instanceof' keyword
// so lets do that

// I can say
// dolby is that an instance of Elf?
// the Elf class

console.log(dolby instanceof Elf)

//

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
        console.log(this)
    } 

}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongest fort in the world made'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
dolby.attack()
const shrek = new Ogre('Shrek', 'club', 'green')
shrek.makeFort()

console.log(dolby instanceof Elf)

// yea its an instance of Elf class

Elf { name: 'Dolby', weapon: 'cloth', type: 'house' }
true

// thats great
// it is an instance of Ogre?

console.log(dolby instanceof Ogre)

//

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
        console.log(this)
    } 

}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongest fort in the world made'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
dolby.attack()
const shrek = new Ogre('Shrek', 'club', 'green')
shrek.makeFort()

console.log(dolby instanceof Ogre)

// no it is not an instance of Ogre

Elf { name: 'Dolby', weapon: 'cloth', type: 'house' }
false

// what about Character?
// is it an instance of Character?

console.log(dolby instanceof Character)

//

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
        console.log(this)
    } 

}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongest fort in the world made'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
dolby.attack()
const shrek = new Ogre('Shrek', 'club', 'green')
shrek.makeFort()

console.log(dolby instanceof Character)

// yes it is an instance of Character

Elf { name: 'Dolby', weapon: 'cloth', type: 'house' }
true

// because it extends all the way up to Character
// so rememeber that distinction
// instance is when we use the 'new' keyword
// from a class we create instance of class
// instance is actualy creating a version of the class
// inheritance which is what we do the keyword extends
// is inheriting something from a higher class
// inheritance in javascript doesnt actually copy our functionality
// it doesnt just simply copy whatever we have in Character
// instead it simply links up the prototype chain
// so we are not creating copies & maikng this inefficient
// instead whenever it doesnt find something
// lets say on the Ogre class
// its going to look up to the Ogre super class which is Character
// so is creating this efficient linking in javascript using prototypal inheritance
// & I want to remind you unlike other class based languages
// javascript is just objects
// objects inheritance form objects thats it
// there are not technicall classes
// in languages of classes like Java on the other hand
// they have classes that well are actual classes
// they are a thing & classes inherit from classes
// the interesting thing is that languages like Java & C++
// actually copy objects when we do something like extends
// although methods are still shared
// instead of what we do with javascript
// which is that we link
// & the objects are reference
// its actually a bit of a efficient there, in terms of a memory
// alright lets finish off
// wrap all of this up into what we have learnt about
// object oriented programming so far
// I see youu in the next video, bye bye

// /////////////////////////////////////////// 14. Public vs Private

// in many object oriented languages
// that have classes
// the idea of private &   fields
// are really important
// now in javascript we dont really have that
// & before what a lot of people did was
// anything that was private that shouldnt be access
// from lets say a class or even & object
// we would add an underscore

_attack()

//

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    _attack() {
        return 'attack with ' + this.weapon;
    }
}

// to let other programmers know
// Hey this is a private method you shouldnt call it
// because well it is super important
// that you dont mess with it
// or you change it
// unfortunately underscore doesnt mean anything
// if I do _attack() here
// & if I run
// & we cant call attack anymore because 
// because we have rename it
// let me remove that

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    _attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
        console.log(this)
    } 

}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongest fort in the world made'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');

const shrek = new Ogre('Shrek', 'club', 'green')
shrek._attack()

// _attack() I can still use

Elf { name: 'Dolby', weapon: 'cloth', type: 'house' }
attack with club

// & I can maybe by mistake reasigned to false

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    _attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
        console.log(this)
    } 

}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongest fort in the world made'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');

const shrek = new Ogre('Shrek', 'club', 'green')
shrek._attack = false

// so now if I call shrek._attack

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    _attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
        console.log(this)
    } 

}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongest fort in the world made'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');

const shrek = new Ogre('Shrek', 'club', 'green')
shrek._attack = false
shrek._attack

// I get false

Elf { name: 'Dolby', weapon: 'cloth', type: 'house' }
false

// & I overwritten everything
// thats not good is it
// well other languages like Java
// actually have keywords like private

private attack() {
    return 'attack with ' + this.weapon;
}

// that make things private for us
// & they are methods 
// that would only be able to be used inside of the class
// you can only solve this issue
// with something called weak ?naps
// but its a little hacky
// & well we dont wanna get into it
// because there is a proposal comming up
// & based on when you watch the video
// this might be already implemented in javascript
// or it might be a littel be different
// the ECMAScript proposal is in state ?switch
// so it is getting pretty close of being part of the language
// & it is for class field declaration
// there is a few changes that can might happen
// for example instead of having to call constructor 
// on state perhaps doesnt equire parameters
// we can do something like

age = 54

//

class Character {
    age = 54;
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    private attack() {
        return 'attack with ' + this.weapon;
    }
}

// & this will be part of the state that we can use in other areas
// so in my atttack I can say

this.age

//

class Character {
    age = 54;
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    private attack() {
        return 'attack with ' + this.age;
    }
}

// so we dont have to go through the constructor
// when we do have parameters

// but the other thing is we can make things private
// if we add the ?pound sign # like this

class Character {
    #age = 54;
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    private attack() {
        return 'attack with ' + this.age;
    }
}

// it says this is a private variable
// #age = 54;
// & if I try access age outside of this class
// maybe as part of the instances with shrek or dolby
// well it is not going to let me

// now for now
// we are most likely the closet to doing like this
// where we can have private state
// private data that can only be access inside of the class like this

class Character {
    #age = 54;
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    private attack() {
        return 'attack with ' + this.#age;
    }
}

// but private methods is something that we still working towards
// again depending on when you watch the video
// this feature might be implemeneted we wont use the ?pound sign # anymore
// & it will be something different
// but for now you can see the progress
// well not the fastest
// if I scroll all the way down we see that
// the proposal of private state started july 2016
// & still going through everything we have stage three
// there is now class fields & private methods that have been updated in stage three
// so keep an eye on this feature, be mindful that in javascript
// the idea of private,   is still in the worst
// the properties & methods are available
// & can not be private
// at least for now
// I see you in the next video bye bye

// /////////////////////////////////////////// 15. OOP in React.js

// welcome back wheter you know it or not
// you can know spot object oriented programming in the ?wild
// for example, if you ever used React as a front library
// you can see some sample here
// of how they used object oriented programming principles

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // Este enlace es necesario para hacer que `this` funcione en el callback    this.handleClick = this.handleClick.bind(this);  }
  
    handleClick() {    this.setState(state => ({      isToggleOn: !state.isToggleOn    }));  }
    render() {
      return (
        <button onClick={this.handleClick}>        {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );

// we can now look at the code & understand it a lot better
// for example we have a toggle class that we create
// that extends React.Component

class Toggle extends React.Component {}

// React.Component is something that comes from React team
// it build this class that has all these features for us

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // Este enlace es necesario para hacer que `this` funcione en el callback    this.handleClick = this.handleClick.bind(this);  }
  
    handleClick() {    this.setState(state => ({      isToggleOn: !state.isToggleOn    }));  }
    render() {
      return (
        <button onClick={this.handleClick}>        {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );

// so that we can use things like render that comes automatically for us

render() {}

// we can run code like this & still our applicatioin gets render
// we are using somebody else code
// & we are extending React.Component 

class Toggle extends React.Component {}

// & using the base functionality there
// to add our own little features
// we have constructor that well receive props

constructor(props) {}

// we have state which is the state of our Toggle class

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
    }
}

// as you can see we have an object which is isToggleOn: true

this.state = {isToggleOn: true};

// & then we create our own methods in this class
// such is handleing the click as handleClick 

handleClick() {    this.setState(state => ({      isToggleOn: !state.isToggleOn    }));  }
    render() {
      return (
        <button onClick={this.handleClick}>        {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }

// & at the end we return a button 
// that well is a toggle button

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );

// & we also see here how we have the bind here
// & we have talked about this. right?
// because this is what we called a call back function
// that is when we run handleClick this.setState
// the 'this' keyword to refere to the Toggle class
// & not the actual bind
// that we click in here
// we have to bind it
// that is I am telling Hey this.handleClick
// I want you to bind to the Toggle class
// so when I do this.handleClick
// a method on this property
// the this keyword is refering to the class
// & not the actual button clicked on
// & although this is just an example
// you can now understand & notice 
// when object oriented programming principles
// are used in
// libraries, frameworks, & any other code
// by somebody else
// trust me object oriented programming
// is everywhere
// now that you have the skills
// you are going to uunderstand it
// you are gonna notic it more & more in the ?wild
// so start exploring the library & framework ?created
// & see if you notice any patterns we have learnt so far
// I see in the next one
// bye bye

// /////////////////////////////////////////// 16. 4 Pillars of OOP

// welcome back
// we started with an idea
// & using this idea
// we started learn about object oriented programming
// & how we can use the programming paradigm
// to better our code to make it more organize
// & when it comes to OOP
// in advertently you have just learnt the four pilars of
// object oriente programming
// the first one was encapsulation
// before OOP we have procedural programming
// unlike procedural programming
// we have just functions modifying data with no real structure
// OOP push things in an object container in a container
// & organize these things into units
// that model real world applications
// this is encapsulation we wrap code into boxes
// that are related to one another
// so that these boxes can just interact with each other
// using the methods & properties
// that we make available
// this makes code easier to maintain
// & more reusable. right?
// we have all these nice little class packages
// that we can use whenever we want

// the next pilar is abstraction
// what is abstraction?
// abstraction means hidding the complexity from the user
// that is creating simpler interfaces
// such as Hey I take care of the class all you do is instantiate the class
// & there  you go you have an Elf
// with  all the properties & methods already in for you
// & the idea of abstraction says
// Hey here are the methods & the properties that you can use
// dont worry about everything else
// I will do all the calculations behind the scenes
// this reduces complexity
// because we can just see the methods & understand what this class can do
// now the idea of abstraction also helps 
// when we have private variables & private methods
// something that javascript is working towards

// the next one is a big one

// inheritance
// & we saw this already. right?
// by inheriting from other classes
// we avoid having to write the same code
// & we also save memory space by having shared methods
// inheritance is very very important
// & powerful concept
// & it is definitely my favouritive part of OOP

// & finaly this is a big one
// & a big word
// polymorphism
// what does it mean?
// the word itself means many forms
// poly – morphism
// the definitioin of polymorphism is actualy heavily debated
// there is many interpretation of what it means
// but the idead is the hability to call the same method in different objects 
// & object responding in different way
// polymorphiism
// for example in my Elf & Ogrre class
// lets say that they each have different ways of attack
// for example the Elf attacks with, lets call this cry

atack(cry) {}

// & it is going to return 'attack with ' + cry;

atack(cry) {
    return 'attack with ' + cry;
}

// & then lets say that the Ogre has attack,

attack() {}

// but the Ogre doesnt really accept a parameter
// it is just going to return 'arghhhhhh' like a parrot

attack() {
    return 'arghhhhhh'
}

// if I now go down
// & lets do dolby.attack()
// & we will give it the cry will be 'weee'
// if I run this

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
        console.log(this)
    }
    attack(cry) {
        return 'attack with ' + cry;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    attack() {
        return 'arghhhhhh'
    }
    makeFort() {
        return 'strongest fort in the world made'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');

const shrek = new Ogre('Shrek', 'club', 'green')
dolby.attack('weee')

// attack with weee

Elf { name: 'Dolby', weapon: 'cloth', type: 'house' }
attack with weee

// & with shrek if I do shrek without a parameter

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
        console.log(this)
    }
    attack(cry) {
        return 'attack with ' + cry;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    attack() {
        return 'arghhhhhh'
    }
    makeFort() {
        return 'strongest fort in the world made'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');

const shrek = new Ogre('Shrek', 'club', 'green')
dolby.attack('weee')
shrek.attack()


//

Elf { name: 'Dolby', weapon: 'cloth', type: 'house' }
arghhhhhh

// this is the basic explanation of what polymorphism means
// but the idea or hability to appear
// in multtyple forms
// that we are simply are doing method overwriting
// when the same method acts differently for each type of class

attack() {
    return 'attack with ' + this.weapon;
}

//

attack(cry) {
    super.attack()
        return 'attack with ' + cry;
    }

//

attack() {
    return 'arghhhhhh'
}

// or you can do method overloading

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
        console.log(this)
    }
    attack(cry) {
    super.attack() // you can also add this to this line
    // super.attack()
    // which calls the super class method, 
    // & combine it with the what we currently have on this line 
        return 'attack with ' + cry;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    attack() {
        return 'arghhhhhh'
    }
    makeFort() {
        return 'strongest fort in the world made'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');

const shrek = new Ogre('Shrek', 'club', 'green')
dolby.attack('weee')
shrek.attack()

// or we can do method overloading
// which is adding extra features
// or extra parameters to a method
// to add on what that method can do
// & the idea of polymorphism on object oreirnted programming
// is that it has the hability to process objects 
// differently depending on the data type or class
// now, because javascript is a dynamically type language
// it actually limits the amount of polymorphism  that we can have 
// but the idea still the same
// the hability to redefine methods for derived classes
// & allowing us to reuse some of the functionality 
// but also customize methods to their own objects & classes
// & polymorphism is useful because 
// we dont have to necessarily copy & paste code over & over
// we can reuse some of the functionality
// from a super class to adapt to our own specific needs

// & these are the four pilars of object oriented pogramming
// & behind the scenes although these are big word
// we have being using them all along
// because these four things in mind
// we acomplished the goal that 
// we have set out to do at the beginning of this section

// we created code that is clear & understandable
// we create code that it is easy to extend
// we definitely saw wtih the extend keyword
// it is easy to maintain well because 
// we dont have to worry about those prototype chains
// we dont have to keep the prototype property which got really confusing
// we have just used simple classes contain everything into its own parts
// everything inherits from a superclass
// if we have  to make a modification on a method
// we can juust modify it in one location
// we also learn how memory efficiency it is
// specially in javascripit where objects use references
// instead of cloning & copying each other
// & then finaly we are able to make our code dry
// we didnt keep repeating ourselfs & using the same method over & over
// for each object instead we have one place where we colud create functionality
// if you can see that congratulations
// you just learnt a programming paradigm 
// a way for youu now to think about code in a critical inteligent way
// to structure your code
// instead of just writing code one by one line by line
// you now have a base line
// to start thinking about the code
// how shouuld youu oirganize it?
// how should different things speak to one another?
// in order to create programs that have all these cuualities in mind
// I see you in the next one
// bye bye

// /////////////////////////////////////////// 18. Reviewing OOP

// there you go you did it
// you already finished the object oriented section of the course
// we can finaly jump into functional programming
// & then talking about composition vs inheritance
// & then finaly comparing object oriented programming with functional programing
// when to use what & some of the pros & cons
// but in this section we have learnt about really interesting things
// we lerant about the 'this' keyword
// the 'new' keyword
// you learnt about all about prototypes
// but also how we can simplfy things
// using ES6 classes
// we are about languuages that are class based
// Java & C++
// but we also learnt how javascript can become a language that works with classes
// although it uses prototypal inheritance still create classes & act
// like an object oriented paradigm
// we also learn Object.create, for those that want avpid using clsases
// there are ways arround it
// & we also learnt private vs public fields
// something that javascript is definetely working towards
// & will be important as the langiage grows
// & in order to solidify the object oriented principles
// speaking of principles
// we have covered four principles of object oriented progrmming
// encapsulation
// abstraction
// inheritance
// polymorphism
// & the end of they ?all
// we laernt how this programming paradigm allows us 
// to struucture our code beyond
// simple procedural code
// but code that is ?wealth that out
// well organized so that as it grows its easier & easier 
// to maintain to extend & to reason about
// hopefully now you feel like you have gained some superpowers

// Rememeber: we will be talking more about OOP & comparing it to FP later on!

// & you are finaly able to use OOP to become a better programmer
// I will see you in  the next one bye bye

// /////////////////////////////////////////// 7. Functional Programming
// /////////////////////////////////////////// 1. Section Overview

// welcome back it is time to get into functional programming
// the other mayor programming paradigm
// & in this section we are gonna be getting deep into functional programming
// turning a code into functional code
// & also talking about things such as 
// Currying
// Partial Applications
// Pure functions
// Referrential Transparency
// Composing
// Piping
// there is gonna be a lot of
// new terms that we will uncover in this section
// but dont worry I show you how they are gonna be
// how they are gonna make us better coders
// & we also are going to finish out the section
// by talking about composition vs inheritance
// what that means
// & also comparing functional programming vs object oriented programming
// what are the pros & cons when we use one overr the other
// hopefully by the end of them all
// youu are a better programmer
// because you understand these two paradigms
// & how you can use to improve your programms your code
// now, functional programming has existed for over sixty years
// Lisp which is a very popular programming language
// first developed in 1958 & the idea of programming language
// originates from mathematics form something called ?lenda calculus
// & sometimes it can get very confuusing
// howeverr in recent years the idea of popularity of functional programming
// has really ?search
// why is that?
// programming languages are build with functional programming in mind
// such as haskell , scala, closure,
// they work really really well when it comes to distributed computing
// where there is mutltyple machine interacting with data && also paralelism
// machines working on the same data at the same time
// & also in javascript libraries like redux
// & even react have really popularized the idea of functional programming among other things
// so all this talk abouut functional prgramming
// what it is actually?
// & how can we use it programmers?
// well by the end hopefully this cartoon is funny & you understand what functional programming is
// lets get started

// /////////////////////////////////////////// 2. Functional Programming Introduction

// what is functional programming?
// functional programming is all about separation of concerns
// which object oriented progrmming does as well
// its all about packaging aour code to separate chunks
// so that everything is organized & each part of our code concerns itself with the one thing is good at
// we remember in our object oriented programming section
// we have classes to divide properties & methods of
// lets say an Ogre ?from that of an Elf
// functioinal programming has thhis idea aswell
// of separating concerns
// but they also separate data functions that is
// a functioinal programmer views the world as well there is data
// & this data gets interacted with
// but we are not going to combine the data & functions as one piece
// or one object, now there is no correct definition
// for what is && isnt functioiinal
// but generally functional languages have an enphasis on simplicity
// where data & functions concern
// we separate them up
// & functional programming languages 
// dont have the concepts of classes & methods that belong to objects
// instead functions operates on well defined data structures
// like arrays & objects rather than actually belonging 
// that data structure like an object
// & the thing is the goal of functional programming
// is the exact same of object oriented programming
// iot is the idea of making our code
// clear & understandable
// easy to extend
// easy to maintain
// its going to allow us to not repeat ourselfs
// keeping our code dry 
// & keep it ouur memory efficient
// by having these reusable functions
// that act on data
// now when it comes to functional programming
// we have a very important pilar
// & unlike object oriented programming
// where we have those four pilars of
// encapsulation
// abstraction
// polymorphism &
// inheritance
// if youu wanna break things down in functional programming
// it all comes down to this answer
// of purre functions
// & this is something that we are going to explore
// in the next couple of videos
// the idea here is that there is a separation
// between the data of the programm
// & the behaviouur of the programm
// & all objects created on functional programming are immutable
// something that we will talk about a little bit more
// but what that means is 
// whats something is created it cannot be change
// we avoid things like shared state
// & we are here to this principle of pure functions
// & as you will find out functional programming has a lot of restring
// a lt of rules, things that you can do,
// but restrings like this are good in coding
// because we dont allow peple to just everything
// by having small options of things that we can do
// we can make sure that we have code that doesnt ?it out of hand
// & before we get into what exactly is pure function
// how to implement functional programming paradigm
// lets do a little exercise

// /////////////////////////////////////////// 3. Exercise Amazon

// welcome back when I first strated to learn about functional learning
// I learnt a lot of terrms & interesting ways or organize functions
// but I never realy understood the purpose of the of it
// it kind a felt to mappy, where I just was doing equations &
// doing alll these things, but just to be lever
// with no actual understandiong of the use case is
// so I have an exercise here
// that I hope I will show you why functional programming can
// make you a better programmer
// now this exercise you have been hired by amazon
// amazon a shopping feature
// for this exercise
// we have a user that has name is an active user
// it also has a cart array & a purchases array
// & I want you to implement which ever way you want this feature
// these fetaures one is that this user
// purchase an item
// lets say they can purchase an item that
// has a name property that will be a string oif some sort
// & then also a price property that
// will be a number of the price
// of whatever item it is that they are buying
// what I want you to do allow a user to purchase something
// purchase lets say item
// & a user is able to purchase an item
// what that means it allows you to add item to a cart
// so we add an item object into the cart
// it also has a three percent tax
// to  the item in the cart
// it allow you to buy the item
// that is move the item from cart to purchases
// & finally once everything has been purchased
// we empty the cart
// we return  to an empty array
// now with  these four things
// four functions I want uyou to create this functionality
// however you think ios best & do it now withut me giving the answer
// because we are gonna go through some functional programming concepts over the next
// couple of videos & at the end
// I am going to return to this example
// & show you how to implement all the
// things that we have learnt example
// & you can compare what you did versus what I did
// where you can improve where you can add
// functional programming concepts
// & hopefully at the end of them all show you we can make 
// this work really well with functional programming style
// by the way if you are really keen & you want to experiment
// well you can add bonus features like accepting refunds
// which allows youu t remove things from purchases
// or track user history
// anything that the user does
// well we can track their history
// so that perhaps you can look at user logs
// if they did anything wrong
// alright I know that this example is not exatly a hundred percent clear
// is not important you get a right a hundred percent
// remeber just try to ?device a program that does this
// it can be a simplistic or complicated ?responsible
// & we will revisit it at the end of the section I see you in the next section
// bye bye


// /////////////////////////////////////////// 12. Inheritance

// welcome back lets talk about inheritance
// a core aspect of object oriented programming is inheritance
// which means passing knowledge down

// rememeber at the start of this journey we decided that we wanna create this game
// this fairy tale game that have all these characters
// & we started with elfs, just a copule of elfs
// but as you can see our goal is have many things
// we ganna have maybe a dragon, a knight, a king & queen, 
// maybe some magitians, yes even dracula,

// so using object oriented programming principle of inheritance
// how we accomplish this with the work that we have already done
// lets have a look

// we have our elf class here
// yes we have seen it before
// it shouldnt be anything new

class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

const fiona = new Elf('Fiona', 'ninja starts');

// but lets say I wanna to have a new player
// & this player its actually an ogre called shrek
// so how I go about of creating this ogre

// the one thing I can do is to copy & paste this code
// & create an ogre class

class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

// I mean thats copy & pasting dry code that eventually we wanna avoid
// as we keep copying & pasting copying & pasting
// we just have repeated code which gets messy
// so one option we might have here is
// lets just copy the elf, & may be you can extend it

// so for example if I wanna copy Fiona
// lets say Fiona overhere

fiona

//

class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

const fiona = new Elf('Fiona', 'ninja starts');
fiona

// if I click run
// I have this elf class or elf instance

Elf { name: 'Fiona', weapon: 'ninja starts' }

// with all these properties
// now in order to copy what we have already have
// we can just do something like this
// we can say const ogre & ogre is going to equal

const ogre =

// well lets clone fiona
// & as I shown you before we can do dot dot dot spread operator
// I then just do fiona

const ogre = {...fiona}

//

class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

const fiona = new Elf('Fiona', 'ninja starts');
const ogre = {...fiona}

// if I do this
// & I look at what ogre is now

class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

const fiona = new Elf('Fiona', 'ninja starts');
const ogre = {...fiona}
ogre

// & I click run

{ name: 'Fiona', weapon: 'ninja starts' }

// look at that I copied fiona
// into the ogre variable
// & the interesting thing here is
// if I do ogre.__proto__

ogre.__proto__

//

class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

const fiona = new Elf('Fiona', 'ninja starts');
const ogre = {...fiona}
ogre.__proto__

// what do I get?
// I get an empty objbect

{}

// what if I do fiona?

fiona.__proto__

//

class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

const fiona = new Elf('Fiona', 'ninja starts');
const ogre = {...fiona}
fiona.__proto__

// I have Elf

Elf {}

// so if cloned the object but ogre no longer has Elf
// as the class, the base class

// so that if I do here 

console.log(fiona === ogre)

// if I click run

class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

const fiona = new Elf('Fiona', 'ninja starts');
const ogre = {...fiona}
console.log(fiona === ogre)

// I get false

false

// these objects are not referencing the same place in memory
// thet are completely different things

const ogre = {...fiona}

// but I also lost this chain 
// this prototypal inheritance chain
// I can even do 

ogre.attack()

//

class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

const fiona = new Elf('Fiona', 'ninja starts');
const ogre = {...fiona}
ogre.attack()

// No I dont have attack

TypeError: ogre.attack is not a function

// so thats a problem
// How can we extend this

class Elf {}

// this work that we have currently have
// & this is where inheritance comes in
// & it used to be be really difficult to do with 
// javascript before we have this class syntax

class Elf {}

// it involved a lot of ugly prototype code
// that luckyly for us is now a lot cleaner
// lets have a look
// to start off
// to make naming a lot better
// I am going to change the class here
// to character

class Character {}

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

const fiona = new Elf('Fiona', 'ninja starts');

// because all acharacters in this game 
// are going to have name, a weapon & they can attack
// thats great!
// & now form this character
// I am going to create a class Elf 
// that 'extends' which is a keyword
// this Character class

class Elf extends Character {}

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

}

const fiona = new Elf('Fiona', 'ninja starts');

// there is something called subclassing
// in object oriented programming
// that is we have a base class or a superclass 

Character

// & a subclass

Elf

// that is we wanna inherit from the character class

class Character {}

// all these properties & methods

                                {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}   

// & create something new out of it
// extended with Elf

class Elf extends Character {}

// lets have a look, if I just do this & I click run

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

}

const fiona = new Elf('Fiona', 'ninja starts');
fiona

// alright! I get undefined
// lets see what fiona is right now
// fiona & click run
// alright! look at that, everything is still working

Elf { name: 'Fiona', weapon: 'ninja starts' }

// I have Elf, name fiona, weapons ninja
// but you now what? lets make things a little bit more interesting
// lets say that the Elf characters in this game
// the also have an extra porprety that they can have
// maybe its a type property
// what type of Elf they are
// so lets build that out 
// how do we go about it?
// well in here lets add the type property
// if I do a constructor in here

class Elf extends Character {
    constructor() {

    } 

}

// & I do this.type = type

class Elf extends Character {
    constructor() {
        this.type = type
    } 

}

// we receive a type parameter in here

class Elf extends Character {
    constructor(type) {
        this.type = type
    } 

}

// uumm how is this going to work?
// we have to instantiate the Elf class
// & we give it the name & the weapon

const fiona = new Elf('Fiona', 'ninja starts');

// but we also wanna have the type
// so maybe we will do this
// we will say name & weapon
// & the third parameter will be type

class Elf extends Character {
    constructor(name, weapon, type) {
        this.type = type
    } 

}

// so I will say type of the cell
// I am going to change the name from fiona to dolby
// the name is going to be Dolby
// & the weapon is gonna be cloth
// & the type of Elf is going to be house Elf
// alright! if I do this
// lets see what happens
// I am going to click run

const dolby = new Elf('Dolby', 'cloth', 'house');

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
        this.type = type
    } 

}

const dolby = new Elf('Dolby', 'cloth', 'house');
dolby

// umm reference error

ReferenceError: Must call super constructor in derived class 
before accessing 'this' or returning from derived constructor

// is that makes sense
// umm not really right
// I mean thats a pretty confusing error message
// what is it saying?
// in order for us to have our constructor
// & be able to do this
// & now what this is referencing to
// which is Elf & not the character
// because remember we have name, weapon
// we have a special keyword

super

// for super class
// & this super class
// & this superclass we call like this

class Elf extends Character {
    constructor(name, weapon, type) {
        super();
        this.type = type
    } 

}

// & by doing inside of the constructor

constructor(name, weapon, type) {
    super();
    this.type = type
} 

// the super call, 
// it says Hey call the super class

super();

// what the superclass of Elf?
// well thats Caharacter, it extends Character

Character

// it goes uo & it calls the constructor
// so we create this.name & this.weapon

constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

// so inhere we have to pass in name & weapon

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
    } 

}

// now I know this is a little bit confusing
// this whole super thing
// it is just a standar
// specially with calssic class based language
// where super is refering to super class

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
    } 

}

const dolby = new Elf('Dolby', 'cloth', 'house');
dolby

// lets have a look here
// if I run

Elf { name: 'Dolby', weapon: 'cloth', type: 'house' }

// I get Elf that is Dolby, weapon is a cloth, & has a type of house of
// if I do

dolby.attack()

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
    } 

}

const dolby = new Elf('Dolby', 'cloth', 'house');
dolby.attack()

//

attack with cloth

// attack with cloth not very effective but is working
// now lets go over this one more time
// when we do 

class Elf extend Character {}

// it means Hey extend & set the prototype that is the __proto__
// to point to chatacter
//  so Elf now have a prototype chain 

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
    } 

}

// up to Character

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

// it saying Hey any time you run an instance of Elf like Dolby

const dolby = new Elf('Dolby', 'cloth', 'house');

// & it uses a property or a method I dont have

dolby.attack()

// well look up to Character
// & tell me if Cahracter has it
// the constructor is our own constructor just for the Elf class

constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type
} 

// this is something that only gets run with Elf not with Caharacter
// & in here we can leave as is

class Elf extends Character {
    constructor(name, weapon, type) {
        // super(name, weapon);
        // this.type = type
    } 

}

// but if we wanna set any sort of property
// that is the use the 'this' keyword
// we have to call super 

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
    } 

}

// & say Hey
// call the constructor of our super class & afterthat 
// I will know waht to do with the 'this' keyword

constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

// let me show you
// if I do console.log() here
// & do 'this' console.log(this)

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
        console.log(this)
        super(name, weapon);
        this.type = type
    } 

}

const dolby = new Elf('Dolby', 'cloth', 'house');
dolby.attack()

// & if I run 

ReferenceError: Must call super constructor in derived class 
before accessing 'this' or returning from derived constructor

// that give us an error
// because in order for us to use the 'this' keyword 
// inside of the constructor when we extend something
// we have to call super first
// so if I move the console.log(this)
// under the super call

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
        console.log(this)
        this.type = type
    } 

}

const dolby = new Elf('Dolby', 'cloth', 'house');
dolby.attack()

// & I run,

Elf { name: 'Dolby', weapon: 'cloth' }
attack with cloth

// look at that I have Elf, 
// that has name & weapon attached to it
// so 'this' because we call the super 
// runs the constructor
// we now have an instance of Character
// with this properties
// & then we can use the this.type to add type to it
// so that by the very end of our construction process of Elf

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

const dolby = new Elf('Dolby', 'cloth', 'house');
dolby.attack()

// we have all our properties set

Elf { name: 'Dolby', weapon: 'cloth', type: 'house' }
attack with cloth

// very very cool 

// & rememeber the 'this' keyword simply says who am I
// who is calling me, 

console.log(this)

// & in this case we use the 'new' keyword

const dolby = new Elf('Dolby', 'cloth', 'house');

// this is going to be set to Elf

class Elf extends Character {}

// alright but we started this video 
// with us wanted to create an ogre so lets do that
// lets continue on
// lets create another class
// thats is going to be an ogre class
// that Extend the Character

class Ogre extends Character {}

// we do the same thing now lets say
// that our ogre add a constructor

class Ogre extends Character {
    constructor()
}

// & we wanna pass in a few things
// such us name weapon

class Ogre extends Character {
    constructor(name, weapon)
}

// you know waht ogres have different colors
// so lets do that, lets add a color property

class Ogre extends Character {
    constructor(name, weapon, color)
}

// & what do we do here?

class Ogre extends Character {
    constructor(name, weapon, color) {

    }
}

// we are gonna call the super class which is Character 

class Ogre extends Character {
    constructor(name, weapon, color) {
        super()

    }
}

// with name & weapon

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);

    }
}

// so that now we can use the 'this' keyword to attach this properties to the ogre class

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.

    }
}

// I am going to add a color that equals what ever color we give it

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;

    }
}

// & you what ogres have special powers
// lets say that ogres also can make forts
// so we have a
// makeFort() {}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {

    }
}

// because you know they are very powerful obviouusly
// & they just return lets say
// strongest fort in the world made

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongest fort in the world made'
    }
}

// nice & easy, just like that
// lets see if this works 
// if I create lets say shrek
// & shrek is a new ogre
// with the name of Shrek
// weapon is going to be a club 
// & then finaly the color obviously green

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

// if I do shrek to see what we get

shrek

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
shrek

// look at that I have a new ogre

Elf { name: 'Dolby', weapon: 'cloth', type: 'house' }
Ogre { name: 'Shrek', weapon: 'club', color: 'green' }

// we just created for me
// how awesome is that
// & if I do makeFort() here & run this

shrek.makeFort()

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

// look at that I am able to makeFort function or method on shrek

Elf { name: 'Dolby', weapon: 'cloth', type: 'house' }
strongest fort in the world made

// but if I do makeFort to dolby

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
dolby.makeFort()
const shrek = new Ogre('Shrek', 'club', 'green')
shrek.makeFort()

// no dolby cant make fort

Elf { name: 'Dolby', weapon: 'cloth', type: 'house' }
TypeError: dolby.makeFort is not a function

// he is very very weak
// there is not much he can do
// it is just a house Elf
// so lets go back to attack here

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

// How cool was that
// we are able to keep our code 
// nice & organize
// extend our base class Character
// to create all these different characters in our game
// we have ogre, we can keep creating differentt things 
// like knight magitians princesses kings queens
// & we can reuse code that we have written before
// but also extend these classes to have their own individual uinque things
// properties like type
// even methods like makeFort()
// this is a simple example but you can imagine the power of this
// as we get more & more properties & methods
// in bigger & bigger objects
// now lets take a break here
// & revisit this code in the next video
// bye bye


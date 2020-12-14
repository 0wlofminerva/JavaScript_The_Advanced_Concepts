

// // /////////////////////////////////////////// 9. Asynchronous JavaScript

// // /////////////////////////////////////////// 1. Section Overview

// lets talk about asynchronous javascript
// in this section we are going to revisti what we spoke about
// in  the first part of the course in our fundations
// we talked about web APIs
// about the idea of callbacks
// the event loop
// & how we are able to do asynchronous web APIs
// to have rich applications
// & waht does asynch mean
// asynchronous simply means that we dont have it right now
// when we build modern websites
// we dont have all the data initially
// do we?
// we have our html page
// our css page 
// some javascript
// but as the pages being loaded
// we also have to make a request maybe to a data base
// maybe we need to make a request accross the web to fetch some party API
// all of this requuire asynchronous code because
// its information we dont have yet
// we need to get it
// we are simply saying to javascript
// hey can you go & find this out for me
// & when your are done with it
// give me that information
// because javascript has no idea
// how the world wide web or the internet is
// single threated is a progrramming language
// on the other hand the web browser
// or node js, allows us to have asynch o asynchronous code
// so we can interact things outside the world of javascript
// & that is the solution
// asynchromous functions are functions
// that we can execute later
// & in this section we are gonna finalize our
// understanding of asynchronous javascript
// & also revisti the problem that we saw
// in the first part of the course
// remember this piece of code
// we have the set time out
// that would console log one is the lonliest number
// with a delay of zero seconds
// a set time out that console logs two
// can be as bad as one in ten miliseconds
// a promise that automaticaly resolves with hi
// & then we console log that data which will be hide
// right over here
// & then we have console log three
// so that when we run this
// we have this weird output that we saw. right?
// we get three is a crowd
// & that makes sense. right?
// because this whole whole process begins with
// the javascript engine reading our code
// saying oh this I am calling a web API
// this I am calling a web API
// this, well I am not sure what I am fdoing but 
// this is asynchronus so we are gonna come back to it
// I we run this piece of code first
// rememeber this diagram
// (diagram video)
// once ouur javascript engine sees something 
// that is asynchronous or something like time out
// that is parrt of a web API
// we send it over to the web API
// then the web API is going to do something for us in the background
// when is done of whatever it is
// if it is timeout or five second
// it will add the callback function  
// that we need to invoke into the callback queu
// & then the event loop is going to check & see if the callstack is empty
// & our entire javascript file has being read once
// & then if it is empty it pops onto the or it pushes it onto callstack
// so the event loop simply monitors the callstack
// & the callback queu
// & we have talked about this before
// but them we have  this problem. right?
// where we expect three as a cloud
// to get printed
// but next part gets confusing
// for some reason the promise console log
// gets run first
// the program returns undefined
// this entire javascriipt file has been read
// & then only  then we get this set time out
// & then this set time log
// now we are gonna explore 
// that in a few other interesting things
// abouut javascript in  the  next couple of videos
// so hang in there
// we are gonna see it in the next one
// bye bye

// // /////////////////////////////////////////// 3. How JavaScript Works

// How does javascript actually work
// imagine get this question during an interview
// or how about this
// explain the difference between asynchronous & synchronousç
// in javascript
// or maybe the ask you to explain the statement
// javscript is a single threated language that can be non-blocking?
// oh boy in this video we are going to  help youu answer these questions
// this is a video you may need to visit a few times as you progress
// to get really get it
// so dont fell discouraged if you dont feel a hundred percent confident
// just keep waching it I you will get it
// now you dont need to know how javascript works internally
// to write a program
// but it is important to learn
// I have seen a lot of people 
// who have being developers for years
// & not nowing this
// is like being a pilot 
// & not knowing how an airplane can fly
// ok thats a little bit dramitic here
// you get my point
// so lets start
// first what is program?
// well a program has to do some simple things
// it has to allocate memory
// otherwise we wouldnt be able to have variables
// even have a file in our computer
// it also has to parse & execute scripts
// which means read & write commands. ok
// now we also know that form our previous discussion
// there is the javascripit engine
// that each browser implements in chrome is the V8
// & the V8 engine reads the javascript 
// that we write & changes it 
// into a machine executable instructions for the browser
// now the engine consist into  two parts a memory heap
// & a callstack, now the memory heap
// this is where  our memory allocation happens
// & dont worry we are going to talk about this
// the callstack this is where your code iis read & executed
// it tells you where you are in the program
// so lets simplify this & show what I mean
// I have sublime text over here
// & for us to allocate  memory & the memory heap
// well is as simple as doing
// const a equals to one which juust allocate a memory
// now when we assign this
// the javascript engine is going to remeber that
// oh yea, 'a' has a value of one
// we have just used the memory heap

// to transcript
// form now on code along no transcription to speed yp process





























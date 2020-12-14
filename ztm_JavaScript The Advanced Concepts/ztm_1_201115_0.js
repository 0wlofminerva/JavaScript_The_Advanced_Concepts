setTimeout (()=>{console.log('1','is the loneliest number')}, 0)
setTimeout(()=>{console.log('2','can be as bad as one')}, 10)
console.log('3','is a crowd')

//

setTimeout (()=>{console.log('1','is the loneliest number')}, 0)
Promise.resolve('hi').then(()=> console.log('2'));
console.log('3','is a crowd')

// 9:38

function printName() {
    return 'Andrei Neagoie'
}

function findName() {
    function a() {

    }
    return printName()
}

function sayMyName() {
    return findName()
}

sayMyName()
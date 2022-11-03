
console.log('hi bish');


console.log(global.luckyNum);

global.luckyNum = '23';

console.log(global.luckyNum);

console.log(process.platform);

console.log(process.env.USERNAME);

//Emitters
process.on('exit',function(){
    console.log('Exited Bish')
});


const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('phat cunt alert', ()=> {
    console.log('phatty boi')
});

eventEmitter.on('lunch', ()=> {
    console.log('eat up phat bish')
    eventEmitter.emit('phat cunt alert');
});

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

//FS file handling
const { readFile, readFileSync, read } = require('fs');

const txt = readFileSync('./hello.txt','utf8');
console.log(txt);
console.log('This this shit quicker boi');



//make file reading faster
callback

readFile('./hello.txt','utf8', (err, txt) => {
    console.log(txt);
});

console.log('This should be faster as non blocking boi');


//promise based

const { readFile } =  require('fs').promises;

async function hello(){
    const file = await readFile('./hello.txt', 'utf8');
}

hello();
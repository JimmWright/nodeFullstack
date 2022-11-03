// node js 


//const myModule = require('./my-module');
//const myModule = import('./my-module')

const express = require('express');
const { readFile, readFileSync, read } = require('fs').promises;
const app  = express();

///your site url - When the url is called 
app.get('/', async (request, response) => {

        response.send( await readFile('./home.html', 'utf8'));


});

app.listen(process.env.PORT || 3000, () => console.log(`App avaiable on http://localhost:3000`))








// node js 


//const myModule = require('./my-module');
//const myModule = import('./my-module')

const express = require('express');
const { readFile, readFileSync, read } = require('fs');
const app  = express();

///your site url - When the url is called 
app.get('/', (request, response) => {



    readFile('./home.html','utf8', (err, html)=> {

    if(err){
        console.log('Well this fucking sucks');
        response.status(500).send('Well this fucking sucks');
    }

        response.send(html);
    })

});

app.listen(process.env.PORT || 3000, () => console.log(`App avaiable on http://localhost:3000`))








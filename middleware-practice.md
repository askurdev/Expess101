<!-- const express = require('express');
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');



const app = express();

// This middaleware use any router work ( global middaleware)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(globalMiddleware);



app.get('/', (req, res) => { /** handaler request or controller request,response generator */
    fs.readFile('./pages/index.html',(err, data) => {
        if (err) {
            console.log('Error',err);
            res.send('<h1>Something went wrong</h1>');
        } else {
            res.write(data);
            res.end();
        }

    });
    
});

app.get('/about' , localMiddleware, (req, res) => { /** handaler request or controller request,response generator */
    res.send(
        
    `<h1>I am About Router</h1>`
    );
});

app.get('/help' , (req, res) => { /** handaler request or controller request,response generator */
    res.send(
        
    `<h1>I am Help Router</h1>`
    );
});

app.listen(4000, () => {
    console.log('Server is listening on PORT 4000');
});

// This is a middleware signature
// if everything seems ok controller will call response methods
// if everything seems ok middleware will call next
function handler(req, res, next) {
    // read request objects
    // process request
    // response back the result
}

function middlewareSignature(req,res,next) {

    next();
}

function globalMiddleware(req, res, next) {
    console.log(`${req.method} - ${req.url}`);
    console.log('I am a global middleware');

    if (req.query.bad) {
        return res.status(400).send('Bad Request')
    }


    next();
}

function localMiddleware(req, res, next) {
    console.log('I am a local middleware');
    next();
}




// GET,POST,PUT,PATCH,DELETE


// * responsibilities of a middleware
// * -handle common tasks
// *- request logs
// *-filter request
// * modify or reshape request -->
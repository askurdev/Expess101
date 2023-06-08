const fs = require('fs');


exports.homeController = (req, res) => {
    // const error = new Error('Bad request');
    // error.status = 400;
    // throw error;
    
    
    /** handaler request or controller request,response generator */
fs.readFile('./pages/index.html',(err, data) => {
    if (err) {
        console.log('Error',err);
        res.send('<h1>Something went wrong</h1>');
    } else {
        res.write(data);
        res.end();
    }

});
};

exports.aboutController = (req, res) => { /** handaler request or controller request,response generator */
res.send(`<h1>I am About Router</h1>`
);
};

exports.helpController =(req, res) => { /** handaler request or controller request,response generator */
res.send(
    
`<h1>I am Help Router</h1>`
);
};
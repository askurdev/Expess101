const router = require('express').Router();


const { homeController,
        aboutController,
        helpController, 
    } =require('./controller');


// const fs = require('fs');

// app. against router use 
router.get('/', homeController
// (req, res) => { /** handaler request or controller request,response generator */
//     fs.readFile('./pages/index.html',(err, data) => {
//         if (err) {
//             console.log('Error',err);
//             res.send('<h1>Something went wrong</h1>');
//         } else {
//             res.write(data);
//             res.end();
//         }

//     });
    
// }
);

router.get('/about' , aboutController
// (req, res) => { /** handaler request or controller request,response generator */
//     res.send(`<h1>I am About Router</h1>`
//     );
// }
);

router.get('/help' , helpController 
// (req, res) => { /** handaler request or controller request,response generator */
//     res.send(
        
//     `<h1>I am Help Router</h1>`
//     );
// }
);



module.exports = router;
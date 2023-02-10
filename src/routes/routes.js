const { Router } = require('express');
const router = Router();
const controller = require('../controller/product.controller.js')
// const requestListener = (req, res)=>{
//     console.log("Request is Incoming");
        
//     const responseData = {
//     message:"Hello, GFG Learner",
//     articleData:{
//         articleName:"How to send JSON response from NodeJS",
//         category:"NodeJS",
//         status:"published"
//     },
//     endingMessage:"Visit Geeksforgeeks.org for more"
//     }
      
//     const jsonContent = JSON.stringify(responseData);
//     res.end(jsonContent);

//   };


router.get('/search/', controller.readById);
// router.get('/search/:search', requestListener);



module.exports = router
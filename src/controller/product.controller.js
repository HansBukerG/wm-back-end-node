// const requestListener = (req, res)=>{

//   };

  const controller = {
    readById: (req, res) => {
      console.log("Request is Incoming");
      const responseData = {
          message:"Hello, GFG Learner",
        articleData:{
            articleName:"How to send JSON response from NodeJS",
            category:"NodeJS",
            status:"published"
        },
        endingMessage:"Visit Geeksforgeeks.org for more"
      }
        
      const jsonContent = JSON.stringify(responseData);
      res.end(jsonContent);
    },
  }

  module.export = controller
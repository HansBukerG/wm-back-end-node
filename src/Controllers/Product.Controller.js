const controller = {
  readById: async (request, response) => {
    try {
      console.log("Incoming request for readById()");
      const responseData = {
          message:"Hello, this is your test data, now fuck you :D",      
      }
      const jsonContent = JSON.stringify(responseData);
      response.setHeader("Content-Type", "application/json");
      response.status(202)
      response.send(jsonContent);
      next();
    } catch (error) {
    }
  },

  readByString: async (request, response) => {
    try {
      console.log(`Incoming request for readByString(${request.params.id})`);
      const responseData = {
          id: request.params.id       
      }
        
      const jsonContent = JSON.stringify(responseData);
      response.setHeader("Content-Type", "application/json");
      response.status(202)
      response.send(jsonContent);
      next();
    } catch (error) {
    }

  },

};

module.exports = controller
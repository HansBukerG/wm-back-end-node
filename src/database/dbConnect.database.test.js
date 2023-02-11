const client = require('./dbConnect.database')


describe('Should get a connection from the database', () =>{
    beforeAll(done => {
        done()
      })

    test('Should get a connection to MongoDB', async () => {

        try {
            await client.connect();

            // Establish and verify connection
            const result = await client.db("promotions").command({ ping: 1 });
            console.log(`result: ${result}`);
        } catch (error) {
            await client.close();
        }
    });

    afterAll(done => {
        // Closing the DB connection allows Jest to exit successfully.
        client.close()
        done()
      })
});
import  {dbClient} from './dbConnect.database';

describe('Should get a connection from the database', () =>{
    beforeAll(done => {
        done()
      })

    test('Should get a connection to MongoDB', async () => {

        try {
            await dbClient.connect();
            // Establish and verify connection
            const result = await dbClient.db("promotions").command({ ping: 1 });
            console.log(`result: ${result}`);
            await dbClient.close();
        } catch (error) {
            await dbClient.close();
        }
    });

    afterAll(done => {
        // Closing the DB connection allows Jest to exit successfully.
        dbClient.close()
        done()
      })
});
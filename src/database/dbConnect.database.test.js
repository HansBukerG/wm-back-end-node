import  {dbClient, listDatabases} from './dbConnect.database';

describe('Should get a connection from the database', () =>{
    // beforeAll(done => {
    //     done()
    //   })

    test('Should get a connection to MongoDB', async () => {

        try {
            await dbClient.connect();
            // Establish and verify connection
            const result = await dbClient.db("promotions").command({ ping: 1 });
            console.log(`result: ${result}`);
        } catch (error) {
            console.log(error);
        } finally {
            await dbClient.close(); 
        }
    });

    test('listDatabases(): Should return a list of databases', async ()=>{
        try {
            await dbClient.connect();
            await listDatabases(dbClient);
        } catch (error) {
            console.log(error);
        } finally {
            await dbClient.close();
        }
    })

    // afterAll(done => {
    //     // Closing the DB connection allows Jest to exit successfully.
    //     dbClient.close()
    //     done()
    //   })
});
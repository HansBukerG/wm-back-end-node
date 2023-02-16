"use strict";
import { MongoClient } from 'mongodb';

const schema = process.env.MONGO_CONNECTION_SCHEME
const host = process.env.MONGO_HOST
const usr = process.env.MONGO_USER
const pwd = process.env.MONGO_PASS
const database = process.env.MONGO_DATABASE

const uri = `${schema}://${usr}:${pwd}@${host}`

const dbClient = new MongoClient(uri)

//func for testing purposes
const listDatabases = async(client) => {
    const databasesList = await client.db().admin().listDatabases();
    // console.log("Databases");
    // databasesList.databases.forEach(db => {
    //     // console.log(`- ${db.name}`);
    // })
}

export {database, dbClient, listDatabases }
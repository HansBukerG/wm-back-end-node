const { MongoClient} = require('mongodb')
const schema = process.env.MONGO_CONNECTION_SCHEME
const host = process.env.MONGO_HOST
const usr = process.env.MONGO_USER
const pwd = process.env.MONGO_PASS
const database = process.env.MONGO_DATABASE

const uri = `${schema}://${usr}:${pwd}@${host}`

const client = new MongoClient(uri)

module.exports = client
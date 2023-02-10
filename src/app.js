const dotenv = require('dotenv/config');
const express = require('express');
const cors = require('cors');
const router = require('./routes/routes.js')

appInit = () => {
    const app = express()
    console.log('app init');
    app.use(cors())
    app.use(router)
    const port = process.env.PORT || 3001;
    app.listen(port, () => console.log(`Rest ready to listen in port: ${port}`))
}

module.exports = appInit



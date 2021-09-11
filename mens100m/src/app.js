const express = require("express")
require('./db/conn')
const app = express();
const port = process.env.PORT || 3000
const router = require('./routers/router')
app.use(express.json());
//adding data
app.use(router)
app.listen(port, ()=>{
    console.log(`connection is sucessful at ${port}`)
})
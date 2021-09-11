const express = require("express")
 require("./db/conn")
//Create new studennt 
const Student = require('./models/student')
const router = require("./routers/student")

const app = express();
const port = process.env.PORT || 8000;
 app.use(express.json());




 app.use(router)
// app.post('/students',(req,res)=>{   // since we have to add new user that's why we use post rather than get
//     console.log(req.body)
//     const user = new Student(req.body)
//this is using promises
//     user.save().then(()=>{
//         res.status(201).send(user)
//         console.log("data stored")
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
    
// })

//create a new router

// const router = new express.Router()

// need to define the router

// router.get("")


// register the router

// app.use(router)

app.listen(port,()=>{
    console.log(`connection is succesful at ${port}`);
})
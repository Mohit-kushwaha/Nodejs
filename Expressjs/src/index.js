// const express = require('express');
// const path = require('path')
// const app = express();

// // console.log(__dirname)
// // console.log(path.join(__dirname,'../public'));
// const staticpath = path.join(__dirname,'../public')
// //built in Middleware
// app.use(express.static(staticpath))

// app.get("/",(req,res)=>{
//      res.send("hello from the expres")
// })
// app.get('/about', (req,res)=>{
//     res.send("hello from about ")
// })
// // We create API  by express.js
// // Methods 
// // get- read
// // post- create
// // put - update
// // delete - delete

// app.listen(8000 , ()=>{
//     console.log("listening the port at 8000")
// })


const express = require('express')
const app = express();
const port = 8000
const requests = require('requests')

app.get('/',(req,res)=>{
res.send('hello from express server')
})
app.get('/about',(req,res)=>{
    requests(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}%20&appid=3d162782437b50f28b742ecd8b1337ce`
   )
        .on("data", (chunk) => {
          const objdata = JSON.parse(chunk);
          const arrData = [objdata];
           console.log(`${ arrData[0].main} ${arrData[0].main.temp}`);
    
          res.write(arrData[0].main);
          // console.log(realTimeData);
        })
        .on("end", (err) => {
          if (err) return console.log("connection closed due to errors", err);
          res.end();
        });
    
});

app.listen(port, ()=>{
    console.log(`listening to port ${port}`)

})


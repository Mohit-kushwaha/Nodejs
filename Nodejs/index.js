// console.log('welcome to my website 😻  ') 
// // fs is file system is a module
const fs= require("fs")
// //for sync

// //creating new file
// // fs.writeFileSync('read.txt','welcome to my website')
// // fs.mkdirSync('website')
// // fs.writeFileSync('website/read.txt','welcome to my websites')
// // fs.appendFileSync('website/read.txt',' I m the founder')

// // const buf_data=fs.readFileSync('website/read.txt',"utf8")
// // console.log(buf_data)
// // const org_data = buf_data.toString()
// // console.log(org_data)
// // console.log('after data')
// // fs.renameSync('website/read.txt','website/reading.txt')
// // fs.unlinkSync('website/reading.txt')
// // fs.rmdirSync('website')

// // For async
// fs.writeFile('sync.txt','today is awesome day',
//  (err)=>{
// console.log('file is created');
// console.log(err)
//  })
// fs.appendFile('sync.txt',' My website', 
//   (err)=>{
//     console.log('file is created');
//   console.log(err)
//   })

//  fs.readFile('sync.txt','utf8',(err,data)=>{
//     console.log('file is created');
//     console.log(err,data)
// })
// console.log('after data')

//OS MODULE
// const os = require('os')
// console.log(os.arch())
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.release())
// console.log(os.tmpdir())
// console.log(os.uptime()/60/60)
// console.log(os.type())

// const freemem = os.freemem()
// console.log(`${freemem/1024/1024/1024}`)


// const totalmem = os.totalmem()
// console.log(`${totalmem/1024/1024/1024}`)

// Path Module
// const path = require('path')

// console.log(path.dirname('D:/Nodejs/index.js'))
// console.log(path.extname('D:/Nodejs/index.js'))
// console.log(path.basename('D:/Nodejs/index.js'))
// console.log(path.parse('D:/Nodejs/index.js'))

// const chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));





// Wrapper function
// const name = 'mohit'
// console.log(name)

// creatinng own server
const http = require('http');
const server = http.createServer((req,res)=>{
  const data =  fs.readFileSync('./userAPI/userAPI.json','utf-8')
  const objData = JSON.parse(data)
    console.log(req.url)
    if(req.url == '/'){
    res.end('hello from home side')
    }
    else if(req.url == '/about' )
    {
        res.end('hello from abnout side')
    }
    else if(req.url == '/userapi' )
    {
        res.writeHead(200,{"content-type":"text/json"})
         res.end(objData[5].name)
        }
        
    
    else 
    {
        res.writeHead(404,{"content-type":"text/html"})
        res.end(' <h1> page doenit exist </h1>')
    }
});
server.listen(8000,'127.0.0.1',()=>{
    console.log('listening to port 8000')
})


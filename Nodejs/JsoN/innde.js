const fs = require('fs')
const bioData = {
    name : "mohit",
    age : 19,
    website : "NooBGeeks",

};
// console.log(bioData.name)
// 1: Convert to JSON
//object to json
const jsonData = JSON.stringify(bioData)
// console.log(jsonData)

// 2: DUSRE FILE ME ADD KRNA H

fs.writeFile('JSON1.json',jsonData, (err)=>{
console.log('done')
})
// 3: READ FILE
fs.readFile('JSON1.json',"utf8",(err,data)=>{
    // 4:AGAIN CONVERT JSON TO OBJECT
    const objData = JSON.parse(jsonData)
    // 5: CONSOLE.LOG()
console.log(objData)

console.log(data)

})

//JSON TO OBJECT
const objData = JSON.parse(jsonData)
console.log(objData)






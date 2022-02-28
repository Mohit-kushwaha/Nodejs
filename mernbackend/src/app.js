const express = require("express");
const path = require('path')
require("./db/conn");
const app = express();
const port = process.env.PORT || 3000
const hbs = require('hbs')



const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../views")
console.log(template_path)
const partials_path = path.join(__dirname, "../partials")
console.log(partials_path)
app.use(express.static(static_path))
app.set("view engine", "hbs")


app.set("views", template_path)
hbs.registerPartials(partials_path)


app.get("/", (req, res) =>
{
    res.render("index")
})

app.listen(port, () => { console.log(`connection Successful at ${ port }`) })
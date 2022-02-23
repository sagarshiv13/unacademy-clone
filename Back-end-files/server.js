const express = require('express');
const app = express()

app.set("view engine","ejs")
app.get("/", (req,res) =>{
    console.log(" network request  call is here")
    res.render("index" , {text:"Sarfaraz you are Pro Full Stack Developer"})
})

app.post("/", (req,res) =>{
    console.log(" post request going call is here")
    res.render("index" , {text:"Sarfaraz you are Pro Full Stack Developer"})
})




const userRouter = require('./routes/users');
app.use("/users", userRouter)


app.listen(3000)

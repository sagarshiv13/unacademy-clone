const express  = require('express')
const  router = express.Router()





router.get("/", (req,res) =>{
    console.log("here")
    res.render("User List")
})


router.get("/new", (req,res) =>{
    console.log("here")
    res.render("User New Form")
})
module.exports = router;


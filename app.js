const express=require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {coursemodel}=require("./models/course")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Jafna02:jafna9074@cluster0.icijy.mongodb.net/courseDb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input = req.body
    let course = new coursemodel(input)
    course.save()
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    coursemodel.find().then(
       (data)=>{
            res.json(data)
       }
    ).catch()
})


app.listen(8080,()=>{
    console.log("server started")
})


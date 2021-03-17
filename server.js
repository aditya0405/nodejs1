// import library yang di butuhkan , selalu seperti ini untuk memulai
const express = require("express")
const cors = require("cors")
const app = express()


//middleware
app.use(cors())
app.use(express.json())
app.use(express.static('public'))



//route
app.get('/', (req, res)=>{
    res.sendFile('index.html')
})

app.get('/api/users', (req, res)=>{
    res.json({
        "username" : "aditaher",
        "email" : "aher@gmail.com",
        "phone" : "087712345678"
    })
})

//script start bisa di ganti nama propertinya
//server listener
app.listen(3000, ()=>{console.log('server berjalan di port 3000')})
const express = require('express')
const app = express()
const cors = require('cors');
const Flights = require('./Flights.json')
const Notification = require('./Notification.json')

app.use(cors());
app.use(express.json());
app.get('/allFlightStatus',(req,res)=>{
    res.json(Flights)
})


app.get('/getallNotifications',(req,res)=>{
    res.json(Notification)
})

app.listen(4000,()=>{
    console.log(`server is listen on http:localhost:4000`)
})
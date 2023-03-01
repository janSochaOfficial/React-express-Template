const express = require("express")
const app = express()

const PORT = 3000;
const CLIENT_PORT = 5173

const path = require("path")
const bodyParser = require("body-parser")
const cors = require('cors')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'))
app.use(cors())

let serverData = {
    lastModified: Date.now(),
    serverText: "Im server!"
}



app.post("/api/fechAll", function(req, res){

    res.send(JSON.stringify(serverData, null, 4))
})


app.post("/api/setAll", function(req, res){

    serverData = req.body
    console.log(serverData)

    res.header("content-type", "application/json")
    res.send(JSON.stringify(serverData, null, 4))
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT )
})
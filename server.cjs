const express = require("express")
const app = express()
const PORT = 3000;

const path = require("path")
const bodyParser = require("body-parser")
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'))

let serverData = {
    lastModified: Date.now(),
    serverText: "Im server!"
}

app.get("/", function(req, res){
    res.sendFile(__dirname+"/dist/index.html")    
})

app.post("/api/fechAll", function(req, res){

    res.header("content-type", "application/json")
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
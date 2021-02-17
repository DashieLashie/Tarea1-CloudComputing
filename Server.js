const express = require('express');

const app = express();

app.get('/test',(req, res) => {
    res.json({
        prop1: "Hello",
        prop2: "World"
    })
})












app.listen(3000,() => {
    console.log("server running on port 3000")
})
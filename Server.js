const express = require('express');
const  morgan = require('morgan');
const axios = require('axios');

const app = express();

let port = process.env.PORT || 8080;

app.use(express.json());
app.use(morgan('dev'));
app.engine('htm', require('ejs').renderFile);

app.get('/',(req, res) => {
    res.send("<h1>Alex Server. Tarea 1 <h1>")
})

app.get('/poke/:name',(req, res) => {
    let URLcomp = `https://pokeapi.co/api/v2/pokemon/${req.params.name}`;

    axios.get(URLcomp).then((response) => {
        res.send(response.data)

    }).catch((error) => {
        res.send(error);
        console.error(error);
    })

})

app.get('/berry/:name',(req, res) => {
    let URLcomp = `https://pokeapi.co/api/v2/berry/${req.params.name}`;

    axios.get(URLcomp).then((response) => {
        res.send(response.data)

    }).catch((error) => {
        res.send(error);
        console.error(error);
    })

})

app.get('/item/:name',(req, res) => {
    let URLcomp = `https://pokeapi.co/api/v2/item/${req.params.name}`;

    axios.get(URLcomp).then((response) => {
        res.send(response.data)

    }).catch((error) => {
        res.send(error);
        console.error(error);
    })

})

app.get('/location/:name',(req, res) => {
    let URLcomp = `https://pokeapi.co/api/v2/location/${req.params.name}`;

    axios.get(URLcomp).then((response) => {
        res.send(response.data)

    }).catch((error) => {
        res.send(error);
        console.error(error);
    })

})

app.get('/move/:name',(req, res) => {
    let URLcomp = `https://pokeapi.co/api/v2/move/${req.params.name}`;

    axios.get(URLcomp).then((response) => {
        res.send(response.data)

    }).catch((error) => {
        res.send(error);
        console.error(error);
    })

})

app.post('/check-words',function (req, res) {
    var letters = req.body.letters
    
})










app.listen(3000,() => {
    console.log("server running on port 3000")
})
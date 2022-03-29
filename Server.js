const express = require('express');
const  morgan = require('morgan');
const axios = require('axios');

const app = express();

app.get("/ping", (req, res) => {
    res.send("pong");
});

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
    var word = req.body.text;
    var URL = `https://api.toys/api/find_words/` + word;

    axios.post(URL,{
        text : word,
    }).then((response) => {
        res.send(response.data)
    }).catch((error) => {
        res.send(error);
        console.error(error);
    })
    
})

app.post('/dice-roll',function (req, res) {
    var dice1 = req.body.sides;
    var URL = `https://api.toys/api/dice_roll/` + dice1;

    axios.post(URL,{
        sides : dice1,
    }).then((response) => {
        res.send(response.data)
    }).catch((error) => {
        res.send(error);
        console.error(error);
    })

})

app.post('/dictionary',function (req, res) {
    var word = req.body.text;
    var URL = `https://api.toys/api/check_dictionary/` + word;

    axios.post(URL,{
        text : word,
    }).then((response) => {
        res.send(response.data)
    }).catch((error) => {
        res.send(error);
        console.error(error);
    })

})

app.post('/guild-wars',function (req, res) {
    var spec = req.body.specie;
    var URL = `http://www.api.toys/api/gw2_character/` + spec;

    axios.post(URL,{
        specie : spec,
    }).then((response) => {
        res.send(response.data)
    }).catch((error) => {
        res.send(error);
        console.error(error);
    })

})

app.post('/time-zone',function (req, res) {
    var zone = req.body.time;
    var URL = `http://www.api.toys/api/timezone_offset/` + zone;

    axios.post(URL,{
        time : zone,
    }).then((response) => {
        res.send(response.data)
    }).catch((error) => {
        res.send(error);
        console.error(error);
    })

})




app.listen(port,() => {
    console.log('Running');
});
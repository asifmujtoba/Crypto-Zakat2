const express = require('express');
const path = require('path');

var con = require('./connection/db').mysql_pool;

con.getConnection(function(err,connection){
    if(err) throw err;
    else{
        console.log("Mysql Connected!");
    }
});

var app = express();
var session = require('express-session');

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.use(session({
    secret: "CryptoZakatSecretCode",
    resave: true,
    saveUninitialized:true
}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/auth', require('./routes/auth'));

//var rate = require('./controllers/exchange_rate');

//app.use(rate);

app.use('/', require('./routes/pages'));


app.post('/calculate-zakat', function(req, res){
    var crypto = req.body.crypto;
    var value = Number.parseFloat(req.body.value);
    var unit = Number.parseFloat(req.body.unit);
    var profit = Number.parseFloat(req.body.profit);
    var result = ((value * unit) + profit)*0.025;
    console.log(result);
    res.render('calculate', {result});
});

app.listen(3000);
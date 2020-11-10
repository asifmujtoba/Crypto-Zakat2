const express = require('express');
const path = require('path');
const ejs = require('ejs');
const authUser = require('../controllers/authUser');

const router = express.Router();

var msg = "";

router.get('/', (req,res) =>{
    console.log(req.session.rate);
    const logIn = req.session.loggedIn;
    res.render('index', {logIn});
});
router.get('/login', function (req, res) { 
    if(!req.session.loggedIn){
        res.render('login', {msg});
    }else{
        res.render('index');
    }
});
router.get('/calculate-zakat', function (req, res) {
    const logIn = req.session.loggedIn;
    res.render('calculate-zakat', {logIn});
});

router.get('/about-us', function(req, res){
    const logIn = req.session.loggedIn;
    res.render('about-us', {logIn});
});

router.get('/logout', function(req, res){
    req.session.loggedIn = false;
    var logIn = req.session.loggedIn;
    req.session.name = "";
    req.session.user_email = "";
    req.session.role = "";
    req.session.inv_data = "";
    res.render('index', {logIn});
});

router.use('/dashboard', require('./dashboard'));


module.exports = router;

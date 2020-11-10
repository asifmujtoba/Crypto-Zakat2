const express = require('express');
const authUser = require('../controllers/authUser');
const invoice = require('../controllers/invoice');
var ex_rate = require('../controllers/exchange_rate');
const wallet = require('../controllers/wallet');
const user =require('../controllers/user');
const session = require('express-session');

const router = express.Router();

router.get('/', authUser, wallet, ex_rate, invoice.invoice, invoice.invoice_database_user, (req,res) =>{
    var session = req.session;
    if(req.wallet_info){
       var wallet = req.wallet_info.wallet;
    }
    if(session.role == 'User'){
        var invoice = req.invoice;
        var success =[];
        for(var i =0; i<req.invoice_data.length; i++){
            for(var j =0; j<invoice.length; j++ ){
                if(req.invoice_data[i].id == invoice[j].id){
                    var id = invoice[j].id;
                    var url = invoice[j].url;
                    var price = invoice[j].price;
                    var rate = invoice[j].rate;
                    var time = invoice[j].invoicetime;
                    var btcPrice = invoice[j].btcPrice;
                    var status = invoice[j].status;
                    if(status == 'complete' || status == 'paid' || status == 'new' || status == 'confirmed'){
                        success.push({id, url, price, rate, time, btcPrice, status});
                    }
                }
            }
        }
    }

    rate = req.session.rate;
    res.render('dashboard', {wallet, session, rate, success});
});

router.get('/payzakat',authUser, function(req,res){
    const session = req.session;
    invId = null;
    if(session.role == 'User'){
        res.render('payzakat', {invId, session});
    }else{
        res.send(401);
    }
});

router.get('/invoices',authUser, invoice.invoice, function(req,res){
    var session = req.session;
    if(session.role == 'Admin'){
        var invoice = req.invoice;
        res.render('invoices', {invoice, session});
    }else{
        res.send(401);
    }
});

router.get('/my-zakat', authUser, invoice.invoice,  invoice.invoice_database_user, function(req, res){
    var session =req.session;
    if(session.role == 'User'){
        var invoice = req.invoice;
        var success =[];
        var unsuccess = [];
        var newInv = [];
        for(var i =0; i<req.invoice_data.length; i++){
            for(var j =0; j<invoice.length; j++ ){
                if(req.invoice_data[i].id == invoice[j].id){
                    var id = invoice[j].id;
                    var url = invoice[j].url;
                    var price = invoice[j].price;
                    var rate = invoice[j].rate;
                    var time = invoice[j].invoicetime;
                    var btcPrice = invoice[j].btcPrice;
                    var status = invoice[j].status;
                    if(status == 'complete' || status == 'paid'  || status == 'confirmed'){
                        success.push({id, url, price, rate, time, btcPrice, status});
                    }
                    else if(status == 'new'){
                        newInv.push({id, url, price, rate, time, btcPrice, status});
                    }else{
                        unsuccess.push({id, url, price, rate, time, btcPrice, status});
                    }
                }
            }
        }
        res.render('my-zakat', {session,invoice, rate, success, unsuccess, newInv});
    }else{
        res.send(401);
    }
});

router.get('/users', authUser,  invoice.user_info, function(req, res){
    var session = req.session;
    var users = req.users;
    if(session.role == 'Admin'){
        var all_user_data = req.all_user_data;
        res.render('users', {session, users , all_user_data});
    }
    else{
        res.send(401);
    }
})


router.get('/wallet',authUser, wallet, invoice.invoice, invoice.invoice_database, function(req,res){
    var session = req.session;
    var invoice = req.invoice;
    if(req.wallet_info){
        var wallet = req.wallet_info.wallet;
    }
    if(session.role == 'Admin'){
        
        var success =[];
        var unsuccess = [];
        for(var i =0; i<req.invoice_database.length; i++){
            for(var j =0; j<invoice.length; j++ ){
                if(req.invoice_database[i].id == invoice[j].id){
                    var id = invoice[j].id;
                    var url = invoice[j].url;
                    var price = invoice[j].price;
                    var rate = invoice[j].rate;
                    var time = invoice[j].invoicetime;
                    var btcPrice = invoice[j].btcPrice;
                    var status = invoice[j].status;
                    if(status == 'complete' || status == 'paid' || status == 'new' || status == 'confirmed'){
                        success.push({id, url, price, rate, time, btcPrice, status});
                    }
                    else{
                        unsuccess.push({id, url, price, rate, time, btcPrice, status});
                    }
                }
                
            }
        }
        res.render('wallet', {session, wallet, success});
    }else{
        res.send(401);
    }
});

router.get('/my-account', authUser, invoice.user_info, (req, res)=>{
    var session = req.session;

    if(session.role == 'User'){
        const user = req.user_data;
        res.render('my-account', {session, user});
    }
});

router.get('/exchange', authUser, wallet, (req, res)=>{
    var session = req.session;
    if(req.wallet_info){
        var wallet = req.wallet_info.wallet;
    }
    if(session.role == 'Admin'){
        var rate = session.rate;
        res.render('crypto-exchange', {session, rate, wallet});
    }
});

router.post('/update', user.update_user, (req,res)=>{
    var session = req.session;
    if(session.role == 'User'){
        res.redirect('/dashboard/my-account');
    }
});

module.exports = router;


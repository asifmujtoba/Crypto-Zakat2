var con = require('../connection/db').mysql_pool;

exports.inv = async function(req, res){
    const axios = require('axios');

    let BTCPAY_URL = 'https://testnet.demo.btcpayserver.org/';
    let BTC_AUTH = 'Basic Um83YjBPZHB5cklwRWtkZFZPRGJHNzdQa01MSTBFZGhHazdNR0IwUmhicg==';

    var amount = req.body.price;

    const axiosClient = axios.create({
        baseURL: BTCPAY_URL,
        timeout: 5000,
        responseType: 'json',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Basic Um83YjBPZHB5cklwRWtkZFZPRGJHNzdQa01MSTBFZGhHazdNR0IwUmhicg=="
        }
    });


    const invoiceCreation = {
        "price": amount,
        "currency": "USD"
    };

    const response = await axiosClient.post("/invoices", invoiceCreation);
    var invId = response.data.data.id;
    var session = req.session;
    var date = new Date(response.data.data.currentTime);
    

    con.getConnection(function(err,connection){
        if(err) throw err;
        else{
            connection.query('insert into invoice(id, username, amount, date) values(?, ?, ?, ?)',[invId, session.name, amount, date] ,(err, result)=>{
                if (err) throw err;
                else{
                    connection.release();
                    res.render('payzakat', {invId, session});
                }
            });
        };
    });
    
    
}
const session = require('express-session');

var con = require('../connection/db').mysql_pool;

async function invoice(req, res, next){
  const axios = require('axios');

  let resource_url = 'https://testnet.demo.btcpayserver.org/invoices';
  let token = '8t1NH8wGHUmkNuE2FZL1AXMsiNtYAVEqsS3KiGyxThZ9';

  //let dateStart = '2020-1-24';
  //let dateEnd = '2020-10-12';
  //let limit = '2';
  let offset = '0';
  let headers = {
  "x-accept-version": "2.0.0",
  "Content-Type": "application/json",
  "Authorization": "Basic Um83YjBPZHB5cklwRWtkZFZPRGJHNzdQa01MSTBFZGhHazdNR0IwUmhicg==",
  };

  let options = {
  url: resource_url +
      '?token=' + token +
      //'&dateStart=' + dateStart +
      //'&dateEnd=' + dateEnd +
      //'&limit=' + limit +
      '&offset=' + offset,
  method: 'GET',
  headers: headers,
  json: true
  };

  const getData = async options => {
      try {
        const body = await axios.request(options);
        var result = [];
        for (var i =0; i< body.data.data.length; i++){
          var url = body.data.data[i].url;
          var btcPrice= body.data.data[i].btcPrice;
          var price = body.data.data[i].price;
          var currency = body.data.data[i].currency;
          var id= body.data.data[i].id;
          var rate= body.data.data[i].rate;
          var invoicetime = new Date(body.data.data[i].invoiceTime);
          var btcPaid = body.data.data[i].btcPaid;
          var status = body.data.data[i].status;
          result.push({url,btcPrice, price, currency, id, rate, invoicetime, btcPaid, status });
      }
      req.invoice = result;
      next();
      } catch (error) {
        console.log(error);
        next();
      }
    };
    getData(options);
  
};

function invoice_database_user(req, res, next){
   var user = req.session.name;
    con.getConnection(function(err,connection){
      if(err) throw err;
        else{
            connection.query('select id, username, amount, date from invoice where username = ? ',[user]  ,(err, result)=>{
                if(err) throw err;
                else{
                  req.invoice_data = result;
                  connection.release();
                  next();
                }
            });
        }
    });
};

function invoice_database(req, res, next){
  
   con.getConnection(function(err,connection){
     if(err) throw err;
       else{
           connection.query('select * from invoice' ,(err, result)=>{
               if(err) throw err;
               else{
                 req.invoice_database = result;
                 connection.release();
                 next();
               }
           });
       }
   });
};


async function user_info(req, res, next) {
  var user = req.session.name;
  if(req.session.role == 'Admin'){
    con.getConnection(async function(err, connection){
      if(err) throw err;
      else{
        await connection.query('select * from `user-info`' ,(err, result)=>{
          if(err) throw err;
          else{
            req.all_user_data = result;
            connection.release();
            con.getConnection(async function(err, connection){
              if(err) throw err;
              else{
                await connection.query('select * from `users`', (err, result2)=>{
                  if(err) throw err;
                  else{
                    req.users = result2;
                    connection.release();
                    next();
                  }
                })
              }
            });
           
          }
        });
      }
    });
  }
  else{
    con.getConnection(function(err,connection){
      console.log('con..user_info');
      if(err) throw err;
      else{
        connection.query('select * from `user-info` where username = ?', [user], (err, result)=>{
        if(err) throw err;
        else{
          req.user_data = result;
          console.log(result);
          next();
        }
        });
      }
    });
  }

};

exports.invoice = invoice;
exports.invoice_database = invoice_database;
exports.invoice_database_user = invoice_database_user;
exports.user_info = user_info;
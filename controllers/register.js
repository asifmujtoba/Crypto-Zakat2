var con = require('../connection/db').mysql_pool;


exports.register = (function(req, res){

    var name = req.body.sname;
    var email = req.body.semail;
    var password = req.body.spassword;
    var role = "User";

    con.getConnection(function(err,connection){
        if(err) throw err;
        else{
            console.log("Mysql Connected!");
            connection.query('select email from users where email = ?',[email] ,(err, result)=>{
                if(err) throw err;
                else console.log(result);

                if(result.length > 0){
                    return res.render('login', {
                        msg: 'That email is already is registered'
                    })
                } else{
                    connection.query('insert into users(name, email, password, role) values (?, ?, ?, ?)', [name, email, password, role], (err, result)=>{
                        if(err) throw err;
                        else{
                            connection.release();
                            con.getConnection(function(err, connection){
                                if(err) throw (err);
                                else{
                                    connection.query('insert into user-info(username) values(?)', [name], (err, result)=>{
                                        if(err) throw(err);
                                        else{
                                            connection.release();
                                            return res.render('login', {
                                                msg : 'Sign up successful. You can now login.'
                                            });
                                        }
                                    })
                                }
                            });
                            
                        } 
                    })
                }

            });
        }
        
        
    });
    
});
var con = require('../connection/db').mysql_pool;


exports.login = (function(req, res){

    var user = req.body.luser;
    var password = req.body.lpassword;

    con.getConnection(function(err,connection){
        if(err) throw err;
        else{
            connection.query('select name, email, password, role from users where email = ? or name = ?',[user, user]  ,(err, result)=>{
                if(err) throw err;
                else{
                    if(result.length > 0){
                        if(result[0].password == password){
                            req.session.loggedIn = true;
                            const logIn = req.session.loggedIn;
                            req.session.name = result[0].name;
                            req.session.user_email = result[0].email;
                            req.session.role = result[0].role;
                            connection.release();
                            return res.redirect('/');
                        }
                        else{
                            return res.render('login', {
                                msg: 'Email or Password is incorrect!!!'
                            })
                        }
                    } 
                    else{
                        return res.render('login', {
                            msg: 'Email or username not found!!!'
                        })
                    }
                }

            });
        }
        
        
    });
    
});

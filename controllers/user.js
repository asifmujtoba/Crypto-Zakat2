var con = require('../connection/db').mysql_pool;

exports.update_user= async function(req, res, next){
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var street = req.body.street;
    var address = req.body.address;
    var country = req.body.country;
    var phone = req.body.phone;
    var user = req.session.name;

    if(req.body.firstname){
        console.log('Updating..');
        con.getConnection(async function(err, connection){
            if(err) throw err;
            else{
                await connection.query('UPDATE `user-info` SET firstname = ?, lastname = ?, street =?, address =?, country =? , phone = ? WHERE username = ? ', [firstname, lastname, street, address, country, phone, user], (err, result)=>{
                    if(err) throw err;
                    else{
                        connection.release();
                        next();
                    }
                });
            }
        });
    }
    next();
};

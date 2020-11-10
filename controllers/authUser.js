function authUser (req, res, next){
    if(!req.session.loggedIn){
        return res.render('login', ({msg: "You need to login!!!"}));
    }
    else{
        next();
    }
}

module.exports = authUser;
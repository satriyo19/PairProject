const {User, Post, ProfileUser, Tag} = require('../models')

class UserController{
    // LOGIN
    static renderLogin(req, res){
        res.render('auth/login')
    }

    static handlerLogin(req, res){
        let {username, password} = req.body
        
    }

    //REGISTER
    static renderRegister(req, res){
        res.render('auth/register')
    }

    static handlerRegister(req, res){
        let {username, password, role} = req.body

        User.create({username, password, email, role})
            .then(() => {
                res.redirect('/login')
            })
            .catch((err) => res.send(err))
    }
}

module.exports = UserController
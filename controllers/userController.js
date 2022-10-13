const {User, Post, ProfileUser, Tag} = require('../models')
const bcrypt = require('bcryptjs');
const e = require('express');

class UserController{
    // LOGIN
    static renderLogin(req, res){
        res.render('auth/login')
    }

    static handlerLogin(req, res){
        let {username, password} = req.body

        User.findAll({ where: { username }})
        .then((user) => {
            // console.log(password, user.password)
            if(user){
                const isValidPassword = bcrypt.compareSync(password, user[0].password);

                if(isValidPassword){
                    return res.send('login succes')
                } else {
                    const error = 'Invalid Password'
                    return res.redirect(`/login?errors=${error}`)
                }
            }else{
                const error = `'Username doesn't exists`
                return res.redirect(`/login?errors=${error}`)
            }
        })
        .catch((err) => console.log(err))
        
    }

    //REGISTER
    static renderRegister(req, res){
        let error = req.query.error 
        console.log(req.query)
        res.render('auth/register', {error})
    }

    static handlerRegister(req, res){
        let {username, password, role, email} = req.body
        // console.log(req.body)
        User.create({username, password, email, role})
            .then(() => {
                res.redirect('/login')
            })
            .catch((err) => res.redirect(`/register?error=${err.errors[0].message}`))
    }
}

module.exports = UserController
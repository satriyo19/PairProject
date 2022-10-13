const {User, Post, ProfileUser, Tag} = require('../models')
const bcrypt = require('bcryptjs');
const sendEmail = require('../helpers/sendMail')
const e = require('express');

class UserController{
    // LOGIN
    static renderLogin(req, res){
        let {error} = req.query
        // console.log(error)
        res.render('auth/login', {error})
    }

    static handlerLogin(req, res){
        let {username, password} = req.body

        User.findAll({ where: { username }})
        .then((user) => {
            // console.log(password, user.password)
            if(user){
                const isValidPassword = bcrypt.compareSync(password, user[0].password);

                if(isValidPassword){
                    req.session.userId = user[0].id
                    return res.redirect('/posts')
                } else {
                    const error = 'Invalid Password'
                    return res.redirect(`/login?error=${error}`)
                }
            }else{
                const error = `'Username doesn't exists`
                return res.redirect(`/login?error=${error}`)
            }
        })
        .catch((err) => console.log(err))
        
    }

    //REGISTER
    static renderRegister(req, res){
        let {error} = req.query
        // console.log(req.query)
        res.render('auth/register', {error, sendEmail})
    }

    static handlerRegister(req, res){
        let {username, password, role, email, firstName, lastName, location, contact} = req.body
        // console.log(req.body)
        User.create({username, password, email, role})
            .then((data) => {
                sendEmail(data.email)
            return ProfileUser.create({firstName,
                    lastName,
                    location,
                    contact,
                    UserId: data.id})
            })
            
            .then((data) => {
                // console.log(data)
                res.redirect('/login')
            })
            .catch((err) => res.redirect(`/register?error=${err.errors[0].message}`))
    }
}

module.exports = UserController
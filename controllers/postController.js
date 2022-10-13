const timeAgo = require('../helpers/timeAgo')
const { Post, Tag, ProfileUser, User } = require('../models/index')
const { Op } = require('sequelize')

class PostController{
    
    static renderPost(req, res) {
        Post.findAll({
            include: {
                model : User,
                attributes: ['username'],
                include: {
                    model: ProfileUser,
                    attributes: ['location']
                }
            }
        })
        .then((data)=> {
            // console.log(data)
            // res.send(data)
            res.render('rahmat/posts', {data, timeAgo})
        })
        .catch((err)=>{
            // console.log(err)
            res.send(err)
        })
    }

    static renderAddPost(req, res) {
        res.render('rahmat/addPosts')
    }

    static addPostHandler(req, res) {
        let {content, title, imgUrl, TagId, UserId} = req.body
        // console.log(req.body)
        Post.create({content, title, imgUrl, TagId, UserId})
        .then(() => {
            res.redirect('/posts')
        })
        .catch((err) => {
            // console.log(err)
            res.send(err)
        })
    }

    static deletePosts(req, res) {
        let id = req.params.id

        Post.destroy({
            where: {
                id: id
            }
        })
        .then((data) => {
            res.redirect(`/posts`)
        })
        .catch((err) => {
            res.send(err)
        })
    }
    
    static getLogout(req, res){
        // res.send('aa')
        req.session.destroy((err) => {
            if(err) res.send((err))
            else{
                res.redirect('/login')
            }
        })
    }
}

module.exports = PostController
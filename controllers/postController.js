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
            // res.send(data)
            res.render('rahmat/posts', {data, timeAgo})
        })
        .catch((err)=>{
            console.log(err)
            res.send(err)
        })
    }

    static renderAddPost(req, res) {
        res.render('rahmat/addPosts')
    }

    static addPostHandler(req, res) {
        let {content, title, imgUrl, TagId, UserId} = req.body
        console.log(req.body)
        Post.create({content, title, imgUrl, TagId, UserId})
        .then((data) => {
            res.redirect('/posts')
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static renderEditPosts(req, res) {
            let id = req.params.id
            Post.findByPk(id)
            .then((data) => {
                // res.send(data)
                res.render('rahmat/editPosts', {data} )
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static editPostsHandler(req, res) {
            let id = req.params.id
            let {content, title, imgUrl, TagId, UserId} = req.body
    
            Post.update({content, title, imgUrl, TagId, UserId}, {
                where: {
                    id: `${id}`
                }
            })
            .then((data) => {
                res.redirect(`/posts`)
            })
            .catch((err) => {
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

}

module.exports = PostController
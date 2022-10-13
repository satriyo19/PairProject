const timeAgo = require('../helpers/timeAgo')
const { Post, Tag, ProfileUser, User } = require('../models/index')
const { Op } = require('sequelize')

class PostController{
    
    static renderPost(req, res) {

        let option = {
            include: {
                where: {

                },
                model : User,
                attributes: ['username'],
                include: {
                    model: ProfileUser,
                    attributes: ['location']
                }
            },
        }

        let {username} = req.query

        if (username) {
            option.include.where.username = {
                [Op.iLike]: `%${username}%`
            }
        }

        Post.findAll(option)
        .then((data)=> {
            // res.send(data)
            res.render('homepage/posts', {data, timeAgo})
        })
        .catch((err)=>{
            // console.log(err)
            res.send(err)
        })
    }

    static renderAddPost(req, res) {
        res.render('homepage/addPosts')
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
                res.render('homepage/editPosts', {data} )
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
class Login{
    static renderLogin(req, res){
        res.render('login')
    }

    static handlerLogin(req, res){
        let {username, password} = req.body
    }
}

module.exports = Login
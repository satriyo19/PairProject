class UserController{

    // LOGIN
    static renderLogin(req, res){
        res.render('auth/login')
    }

    // static handlerLogin(req, res){
    //     let {username, password} = req.body
    // }

    //REGISTER
    static renderRegister(req, res){
        res.render('auth/register')
    }

    // static handlerRegister(req, res){

    // }
}

module.exports = UserController
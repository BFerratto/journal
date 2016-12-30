var db = require ("../config")
var login = function(req,res){
    var login = req.body.login
    var password = req.body.password
    if (!checkLoginExists(login)){
        res.send("Login não existe")
        return
    }
    if (!checkPassword (login,password)){
        res.send("Senha incorreta")
        return
    }
    res.send("Logado com sucesso")
}
var checkLoginExists = function (login){
    var validLogins = db.login
    var ret = validLogins.hasOwnProperty(login)
    return ret
}

var checkPassword = function (user,password){
    var passwordToCheck = db.login[user]
   return passwordToCheck===password
   

}
module.exports = login
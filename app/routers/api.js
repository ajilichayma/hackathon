const User = require('../models/user');
const config = require ('../../config');

const secretKey = config.secrectKey;
const jsonwebtoken = require('jsonwebtoken');

/*function creteToken(user){
    var token = jasonwebtoken.sign({
        _id: user._id,
        name : user.name,
        username : user.u {
        expirtesInMinute : 1440
    });
    return token;
}*/
module.exports = function (app, express) {
    const api = express.Router();

    api.post('/signup', function(req, res) {
        const user = new User({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        });
        user.save(function (err) {
            if (err) {
                res.json({'state':'no'+err});

            }

            else{res.json({'message': 'User has been created'})}
        });
    })
    api.get('/users', function(req, res){
        User.find({}, function (err, users) {
            if( err){
                res.send(err);
                return;
            }
            else{res.json(users)}


        });
    });

    /*api.post('/login', function (req, res) {
        User.findOne({
            username : req.body.username
        }).select('password').exec(function (err, user) {
            if (err) throw err;
            if(!user){
                req.send({message: "user does not exist! "})
            }else if (user){
                var validPassword = user.comparePassword(req.password);
                if(!validPassword){
                    req.send({message: "Invalid password!"});
                }else{
                    //token
                    var token = creteToken(user);
                    res.json({
                        success: true,
                        message: "successfully login ",
                        token: token ,
                    });
                }
            }

        });
    });*/
    return api



}
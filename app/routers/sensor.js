const Temperature = require('../models/TemperatureSensor');
const SensorModel=require('../models/sensor');
const Humid = require('../models/humiditySensor');
const Gaz = require('../models/gazSensor');
const Wind = require('../models/windSensor');
const Rain = require('../models/rainingSensor');


module.exports = function (app, express) {
    const api = express.Router();

    api.post('/createTemp', function(req, res) {
        const temp = new Temperature({
            name: req.body.name,
            description: req.body.description,
            TemperatureMesure: req.body.TemperatureMesure
        });
        temp.save(function (err) {
            if (err) {
                res.json({'state':'no'+err});

            }

            else{res.json({'message': 'User has been created'})}
        });
    })
    api.post('/createHumidity', function(req, res) {
        const humid = new Humid({
            name: req.body.name,
            description: req.body.description,
            HumidityMesure: req.body.HumidityMesure
        });
        humid.save(function (err) {
            if (err) {
                res.json({'state':'no'+err});

            }

            else{res.json({'message': 'it has been created successfully'})}
        });
    })
    api.post('/createGaz', function(req, res) {
        const gaz = new Gaz({
            name: req.body.name,
            description: req.body.description,
            GazMesure: req.body.GazMesure
        });
        gaz.save(function (err) {
            if (err) {
                res.json({'state':'no'+err});

            }

            else{res.json({'message': 'it has been created successfully'})}
        });
    })
    api.post('/createWind', function(req, res) {
        const wind = new Wind({
            name: req.body.name,
            description: req.body.description,
            WindMesure: req.body.WindMesure
        });
        wind.save(function (err) {
            if (err) {
                res.json({'state':'no'+err});

            }

            else{res.json({'message': 'it has been created successfully'})}
        });
    })
    api.post('/createRain', function(req, res) {
        const rain = new Rain({
            name: req.body.name,
            description: req.body.description,
            RainingMesure: req.body.RainingMesure
        });
        rain.save(function (err) {
            if (err) {
                res.json({'state':'no'+err});

            }

            else{res.json({'message': 'it has been created successfully'})}
        });
    })


    api.get('/findTemp', function(req, res){
        Temperature.find({}, function (err, users) {
            if( err){
                res.send(err);
                return;
            }
            else{res.json(users)}
        });
    })
    api.get('/findHumid', function(req, res){
        Humid.find({}, function (err, data) {
            if( err){
                res.send(err);
                return;
            }
            else{res.json(data)}


        });
    });
    api.get('/findGaz', function(req, res){
        Gaz.find({}, function (err, data) {
            if( err){
                res.send(err);
                return;
            }
            else{res.json(data)}


        });
    });
    api.get('/findWind', function(req, res){
        Wind.find({}, function (err, data) {
            if( err){
                res.send(err);
                return;
            }
            else{res.json(data)}


        });
    });
    api.get('/findRain', function(req, res){
        Rain.find({}, function (err, data) {
            if( err){
                res.send(err);
                return;
            }
            else{res.json(data)}


        });
    });

    return api



}

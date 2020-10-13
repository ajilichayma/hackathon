const  mongoose  = require('mongoose');
const sensor = require('./sensor')
const Humidity = sensor.discriminator('HumiditySensor',new mongoose.Schema(
    {
        HumidityMesure:{type:String , required : true , trim : true}
    }))

module.exports = Humidity;

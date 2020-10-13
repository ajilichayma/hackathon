const  mongoose  = require('mongoose');
const sensor = require('./sensor')
const Temp = sensor.discriminator('TemperatureSensor',new mongoose.Schema(
    {
        TemperatureMesure:{type:String , required : true , trim : true}
    }))

module.exports = Temp;

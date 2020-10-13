const  mongoose  = require('mongoose');
const sensor = require('./sensor')
const Gaz = sensor.discriminator('GazSensor',new mongoose.Schema(
    {
        GazMesure:{type:String , required : true , trim : true}
    }))

module.exports = Gaz;

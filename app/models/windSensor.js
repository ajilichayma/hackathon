const  mongoose  = require('mongoose');
const sensor = require('./sensor')
const Wind = sensor.discriminator('WindSensor',new mongoose.Schema(
    {
        WindMesure:{type:String , required : true , trim : true}
    }))

module.exports = Wind;

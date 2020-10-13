const  mongoose  = require('mongoose');
const sensor = require('./sensor')
const Raining = sensor.discriminator('RainingSensor',new mongoose.Schema(
    {
        RainingMesure:{type:String , required : true , trim : true}
    }))

module.exports = Raining;

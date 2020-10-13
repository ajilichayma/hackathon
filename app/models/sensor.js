const  mongoose  = require('mongoose');
const bcrypt = require ('bcrypt-nodejs')
const jwt = require ('jsonwebtoken');
const baseOptions={
    discriminatorKey:'sensortype',
    collection:'Sensors'
}
const sensorSchema = mongoose.Schema(
    {

        name:{type:String,require:true},
        description:{type:String,require:true},


    }
    ,baseOptions
);
module.exports = mongoose.model('SensorModel',sensorSchema);

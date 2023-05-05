const {Schema,model} = require('mongoose')

const userSchema = new Schema({
    email:{type:String,unique: true, require: true},
    password:{type:Boolean, default: false},
    isActivated:{type:String, require: true},
    activationLink:{type:String},
})

module.exports = model("User",userSchema)
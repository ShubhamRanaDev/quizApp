const mongoose =  require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    avatar:{
        type: String
    },
    scores:[{
        score: {
            type:Number,
        },
        date:{
            type: Date
        }
        }],
    currentQuiz:{
        type:Object
    }
})
User = mongoose.model('user',UserSchema)
module.exports = User
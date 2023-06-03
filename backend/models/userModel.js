const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        trim: true,
        required: true,
    },
    age: {
        type: Number,
        trim: true,
        required: true,
        default: 18,
        validate(val) {
            if (val <= 0) {
                throw new Error('age must be positaive')
            }
        }
    },
    country: {
        type: String,
        trim: true
    },
    Address: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
    avatar: {
        type: String,
        required: true,
        default:
            'https://cdn-icons-png.flaticon.com/512/527/527489.png?w=740&t=st=1685635226~exp=1685635826~hmac=abea93fbeec10797a742b3165a431051b7a6638a29b95218a7ba978eff4bcf7a'
    }
},
    {
        timestamps: true
    })

const User = mongoose.model('User', UserSchema)
module.exports = User
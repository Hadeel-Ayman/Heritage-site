const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 8,
        validate(pass) {
            const myRe = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])")
            if (!myRe.test(pass)) {
                throw new Error('password must contain uppercase , lowercase , numbers, special character')
            }
        }
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error('Invalid email')
            }
        }
    },
    img: {
        type: String,
        required: false,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: false,
        trim: true
    },
    desc: {
        type: String,
        required: false,
        trim: true
    },
    isSeller: {
        type: Boolean,
        trim: true,
        default: false
    },
    tokens: [
        {
            type: String,
            required: true
        }
    ]
},
    {
        timestamps: true
    })



// bcryptjs password for regestier

UserSchema.pre('save', async function () {
    const user = this
    user.password = await bcryptjs.hash(user.password, 8)
})

//login
UserSchema.statics.findByCredentials = async (emaicl, pass) => {
    const user = await User.findOne({ email: emaicl })

    if (!user) {
        throw new Error('Unable to login ccc')
    }

    const PasswordMatch = await bcryptjs.compare(pass, user.password)
    if (!PasswordMatch) {
        // return res.status(400).send('not match')
        // console.log('Unable to login bbb')
        // throw new Error('Unable to login bbb')
    }
    return user
}

// generateToken
UserSchema.methods.generateToken = async function () {
    const user = this
    const token = jwt.sign(
        {
            id: user._id.toString(),
            isSeller: user.isSeller
        }, 'hadeel')
    user.tokens = user.tokens.concat(token)
    await user.save()
    return token
}

// hide data
UserSchema.methods.toJSON = function () {
    const user = this
    const userOfObject = user.toObject()

    delete userOfObject.password
    delete userOfObject.tokens
    return userOfObject
}

const User = mongoose.model('User', UserSchema)
module.exports = User
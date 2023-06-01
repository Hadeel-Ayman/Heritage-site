const User = require("../models/userModel")

// post user
const postUser = async (req, res) => {
    const user = new User(req.body)
    await user.save()
        .then((data) => {
            res.status(200).send(data)
        }).catch((error) => {
            res.status(400).send(error)
        })
}

// get user 
const getUser = async (req, res) => {
    await User.find({})
        .then((data) => res.status(200).send(data))
        .catch((e) => res.status(400).send(e.message))
}

const getSingleUser = async (req, res) => {
    const id = req.params.id
    await User.findById(id).then((data) => {
        if (!data) {
            res.status(400).send('user not found')
        } else {
            res.status(200).send(data)
        }
    }).catch((error) => {
        res.status(500).send(error)
    })
}

//patchUser
const patchUser = async (req, res) => {
    const id = req.params.id
    const keys = Object.keys(req.body)
    const user = await User.findById(id)
    if (!user) {
        return res.status(400).send('User not found')
    }
    keys.forEach((item) => (user[item] = req.body[item]))
    res.status(200).send(user)

    await user.save()
}


//deleteUser
const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findByIdAndDelete(id)
        if (!user) {
            res.status(400).send('user not found')
        } else {
            res.status(200).send('user is deleted')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getUser,
    getSingleUser,
    postUser,
    patchUser,
    deleteUser
}
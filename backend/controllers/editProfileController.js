const User = require("../models/userModel")

const getProfile = async (req, res) => {
    const _id = req.params.id
    try {
        const userData = await User.findById({ _id })
        if (userData) {
            res.status(200).send('Profile', userData)
        } else {
            res.redirect('/')
        }
    } catch (e) {
        res.status(400).send(e)
    }
}



const editProfile = async (req, res) => {
    res.send('ss')
}


module.exports = {
    getProfile,
    editProfile
}
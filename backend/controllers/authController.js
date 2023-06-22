
const Auth = require("../models/authModel")

// register
const register = async (req, res) => {
    try {
        const user = new Auth(req.body)
        const token = await user.generateToken()
        await user.save()
        res.status(200).send([user, token])
    } catch (e) {
        res.status(400).send(e)
    }
}


// login
const login = async (req, res) => {
    try {
        const user = await Auth.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateToken()
        res.status(200).send([user, token])
    } catch (e) {
        res.status(400).send(e.message)
    }
}

// getUserById
const getUserById = async (req, res) => {
    try {
        const id = req.params.id
        const user = await Auth.findById(id);
        if (!user) {
            return res.status(404).send({ error: 'user not found' });
        } else {
            return res.status(200).send(user);
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}


const getUser = async (req, res) => {
    try {
        const user = await Auth.find()
        if (!user) {
            res.status(404).send('user not found')
        } else {
            res.status(200).send(user)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}



// logout
const logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((el) => {
            return el !== req.token
        })

        await req.user.save()
        res.status(200).send('you are logout')
    } catch (e) {
        res.status(400).send(e)
    }
}



module.exports = {
    register,
    login,
    logout,
    getUserById,
    getUser
}
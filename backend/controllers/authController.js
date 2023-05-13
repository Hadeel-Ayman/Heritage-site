// const User = require("../models/userModel")

// const register = (req, res) => {
//     const user = new User(req.body)
//     user.save()
//         .then((data) => res.status(200).send(data))
//         .catch((e) => res.status(400).send(e))
// }


// const login = async (req, res) => {
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)
//         res.status(200).send(user)
//     } catch (e) {
//         res.status(400).send(e.message)
//     }
// }


// const logout = (req, res) => {

// }



// module.exports = {
//     // register,
//     // login,
//     logout
// }
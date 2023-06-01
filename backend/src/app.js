const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('hello in platform')
})


const cookieParser = require('cookie-parser')
const cors = require('cors')

app.use(express.json())
app.use(cookieParser())
app.use(cors())
require('../db/mongoose')


// auth
const authRouter = require('../routes/authRoutes')
app.use(authRouter)

//User
const UserRouter = require('../routes/userRoutes')
app.use(UserRouter)

// service
const ServiceRouter = require('../routes/serviceRoutes')
app.use(ServiceRouter)

//conversation
const conversationRouter = require('../routes/conversationRoutes')
app.use(conversationRouter)

//detailes
const detailesRouter = require('../routes/DetailesRoutes')
app.use(detailesRouter)

//review
const reviewRouter = require('../routes/reviewRoutes')
app.use(reviewRouter)

//profile
const profileRouter = require('../routes/profileRoutes')
app.use(profileRouter)

//upload
const uploadRouter = require('../routes/uploadRoutes')
app.use(uploadRouter)



const messageRouter = require('../routes/messageRoutes')
app.use(messageRouter)

const orderRouter = require('../routes/orderRoutes')
app.use(orderRouter)






app.listen(port, () => console.log(`Localhost is ${port}`))
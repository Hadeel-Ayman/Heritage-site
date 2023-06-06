
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, file.originalname)
    }
})


const getUpload = (req, res) => {

}

const PostUpload = (req, res) => {

}

module.exports = {
    getUpload,
    PostUpload
}
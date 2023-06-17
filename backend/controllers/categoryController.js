const Category = require("../models/categoryModel")

const getCategory = async (req, res) => {
    try {
        const category = await Category.find()
        res.status(200).send({ data: category })
    } catch (e) {
        res.status(400).send({ msg: e.message })
    }
}

const PostCategory = async (req, res) => {
    try {
        const category = new Category(req.body)
        await category.save()
        res.status(200).send({ success: true, data: category })
    } catch (e) {
        res.status(400).send({ msg: e.message })
    }
}


const PatchCategory = async (req, res) => {
    const id = req.params.id
    try {
        const category = await Category.findByIdAndUpdate(id, req.body, {
            runValidators: true,
            new: true
        })
        if (!category) {
            return res.status(404).send('category not found')
        }
        return res.status(200).send({ data: category })
    } catch (e) {
        return res.status(200).send(e)
    }
}

const Deletecategory = async (req, res) => {
    try {
        const id = req.params.id
        const category = await Category.findByIdAndDelete({ _id: id })
        if (!category) {
            res.status(404).send('category not found')
        } else {
            res.status(200).send('category is deleted')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}



module.exports = {
    getCategory,
    PostCategory,
    PatchCategory,
    Deletecategory
}
const Product = require("../models/productCategModel");

const getProductCategory = async (req, res) => {
    try {
        const product = await Product.find()
        res.status(400).send({ data: product })
    } catch (e) {
        res.status(400).send({ msg: e.message })
    }
}

const PostProductCategory = async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()
        res.status(200).send({ success: true, data: product })
    } catch (e) {
        res.status(400).send({ msg: e.message })
    }
}

const PatchProductCategory = async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findByIdAndUpdate(id, req.body, {
            runValidators: true,
            new: true
        })
        if (!product) {
            return res.status(404).send('product not found')
        }
        res.status(200).send({ data: product })
    } catch (e) {
        res.status(200).send(e.message)
    }
}

const DeleteProductCategory = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findByIdAndDelete({ _id: id })
        if (!product) {
            res.status(404).send('product not found')
        } else {
            res.status(200).send('product is deleted')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}



module.exports = {
    getProductCategory,
    PostProductCategory,
    PatchProductCategory,
    DeleteProductCategory
}
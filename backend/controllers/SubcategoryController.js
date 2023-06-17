const Subcategory = require("../models/subCategoryModel")

const getSubCategory = async (req, res) => {

}

const PostSubCategory = async (req, res) => {
    try {
        const subcategory = new Subcategory(req.body)
        await subcategory.save()
        res.status(200).send({ success: true, data: subcategory })
    } catch (e) {
        res.status(400).send({ msg: e.message })
    }
}

const PatchSubCategory = async (req, res) => {
    const id = req.params.id
    try {
        const subcategory = await Subcategory.findByIdAndUpdate(id, req.body, {
            runValidators: true,
            new: true
        })
        if (!subcategory) {
            return res.status(404).send('subcategory not found')
        }
        res.status(200).send({ data: subcategory })
    } catch (e) {
        res.status(200).send(e.message)
    }
}

const DeleteSubCategory = async (req, res) => {
    try {
        const id = req.params.id
        const subcategory = await Subcategory.findByIdAndDelete({ _id: id })
        if (!subcategory) {
            res.status(404).send('subcategory not found')
        } else {
            res.status(200).send('subcategory is deleted')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}



module.exports = {
    getSubCategory,
    PostSubCategory,
    PatchSubCategory,
    DeleteSubCategory
}
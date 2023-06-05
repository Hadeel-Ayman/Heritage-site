const Service = require('../models/serviceModel')


//postService
const postService = async (req, res) => {
    const service = new Service({ ...req.body, owner: req.user._id })
    await service.save()
        .then((service) => res.status(200).send(service))
        .catch((e) => res.status(400).send(e))
}

//getService
const getService = async (req, res) => {
    await Service.find({})
        .then((data) => res.status(200).send(data))
        .catch((e) => res.status(400).send(e.message))
}

const profile = async (req, res) => {
    res.status(200).send(req.user)
}


// getServiceById
const getServiceById = async (req, res) => {
    try {
        const id = req.params.id
        const service = await Service.findOne({ _id: id, owner: req.user._id })
        if (!service) {
            return res.status(404).send('service not found')
        }
        res.status(200).send(service)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

//patchService
const patchService = async (req, res) => {
    try {

        const id = req.params.id
        const service = await Service.findOneAndUpdate({ id, owner: req.user._id }, req.params, {
            runValidators: true,
            new: true
        })
        if (!service) {
            return res.status(404).send('service not found')
        }
        res.status(200).send(service)
    } catch (e) {
        res.status(200).send(e.message)
    }

}


//deleteService
const deleteService = async (req, res) => {
    try {
        const id = req.params.id
        const service = await Service.findOneAndDelete({ _id: id, owner: req.user._id })
        if (!service) {
            res.status(404).send('service not found')
        } else {
            res.status(200).send('service is deleted')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    postService,
    getService,
    getServiceById,
    patchService,
    deleteService,
    profile
}
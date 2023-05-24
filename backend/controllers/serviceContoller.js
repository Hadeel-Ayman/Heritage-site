const Service = require('../models/serviceModel')

const postService = async (req, res) => {
    const service = new Service(req.body)
    await service.save()
        .then((service) => res.status(200).send(service))
        .catch((e) => res.status(400).send(e))
}

const getService = async (req, res) => {
    await Service.find({})
        .then((data) => res.status(200).send(data))
        .catch((e) => res.status(400).send(e.message))
}

const getServiceById = async (req, res) => {
    const id = req.params.id
    Service.findById(id).then((data) => {
        if (!data) {
            res.status(400).send('service not found')
        } else {
            res.status(200).send(data)
        }
    }).catch((error) => {
        res.status(500).send(error)
    })

}

const patchService = async (req, res) => {
    const id = req.params.id
    const keys = Object.keys(req.body)
    const service = await Service.findById(id)
    if (!service) {
        return res.status(400).send('service not found')
    }
    keys.forEach((item) => (service[item] = req.body[item]))
    res.status(200).send(service)

    await service.save()
}

const deleteService = async (req, res) => {
    const id = req.params.id
    try {
        const service = await Service.findByIdAndDelete(id)
        if (!service) {
            res.status(400).send('service not found')
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
    deleteService
}
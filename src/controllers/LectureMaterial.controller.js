import StatusCode from '../../configuration/StatusCode.js'
import Models from "../models/Models.js"
const LectureMaterialModel = Models.LectureMaterialModel


const uploadLectureMaterial = async (req, res) => {
    if (!Object.keys(req.body).length) {
        return res.status(StatusCode.BAD_REQUEST).send({message: "this endpoint requires a JSON body"})
    }

    const ExerciseFile = new LectureMaterialModel({
        title: req.body.title,
        author: req.body.author
    })

    try {
        const response = await ExerciseFile.save()
        res.status(StatusCode.CREATED).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
    }
}

const getAllLectureMaterial = async (req, res) => {
    try {
        const response = await LectureMaterialModel.find()
        res.status(StatusCode.OK).send(response)
    } catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

const searchLectureMaterialsByTitle = async (req, res) => {
    if (!Object.keys(req.body).length) {
        return res.status(StatusCode.BAD_REQUEST).send({message: "this endpoint requires a JSON body"})
    }

    try {
        const response = await LectureMaterialModel.find({ title: req.body.title })
		if (response.length !== 0) {
            res.status(StatusCode.OK).send(response)
        } else {
            res.status(StatusCode.NOT_FOUND).send({ message: "Could not find file: " + req.body.title })
        }
    } catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

const updateLectureMaterial = async (req, res) => {
    if (!Object.keys(req.body).length) {
        return res.status(StatusCode.BAD_REQUEST).send({message: "this endpoint requires a JSON body"})
    }

    try {
        const response = await LectureMaterialModel.findByIdAndUpdate(req.params.documentId, {
            title: req.body.title
        }, { new: true })
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
    }
}

const deleteLectureMaterial = async (req, res) => {
    try {
        const response = await LectureMaterialModel.findByIdAndDelete(req.params.documentId)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

export default {
    uploadLectureMaterial,
    getAllLectureMaterial,
    searchLectureMaterialsByTitle,
    updateLectureMaterial,
    deleteLectureMaterial
}
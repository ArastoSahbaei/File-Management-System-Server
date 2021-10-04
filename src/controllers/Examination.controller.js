import StatusCode from '../../configuration/StatusCode.js'
import Models from "../models/Models.js"
const ExaminationModel = Models.ExaminationModel


const uploadExamination = async (req, res) => {
    if (!Object.keys(req.body).length) {
        return res.status(StatusCode.BAD_REQUEST).send({message: "this endpoint requires a JSON body"})
    }

    const ExaminationFile = new ExaminationModel({
        title: req.body.title,
        author: req.body.author
    })

    try {
        const response = await ExaminationFile.save()
        res.status(StatusCode.CREATED).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
    }
}

const getAllExaminations = async (req, res) => {
    try {
        const response = await ExaminationModel.find()
        res.status(StatusCode.OK).send(response)
    } catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

const searchExaminationsByTitle = async (req, res) => {
    if (!Object.keys(req.body).length) {
        return res.status(StatusCode.BAD_REQUEST).send({message: "this endpoint requires a JSON body"})
    }

    try {
        const response = await ExaminationModel.find({ title: req.body.title })
		if (response.length !== 0) {
            res.status(StatusCode.OK).send(response)
        } else {
            res.status(StatusCode.NOT_FOUND).send({ message: "Could not find file: " + req.body.title })
        }
    } catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

const updateExamination = async (req, res) => {
    if (!Object.keys(req.body).length) {
        return res.status(StatusCode.BAD_REQUEST).send({message: "this endpoint requires a JSON body"})
    }

    try {
        const response = await ExaminationModel.findByIdAndUpdate(req.params.documentId, {
            title: req.body.title
        }, { new: true })
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
    }
}

const deleteExamination = async (req, res) => {
    try {
        const response = await ExaminationModel.findByIdAndDelete(req.params.documentId)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

export default {
    uploadExamination,
    getAllExaminations,
    searchExaminationsByTitle,
    updateExamination,
    deleteExamination
}
import StatusCode from '../../configuration/StatusCode.js'
import Models from "../models/Models.js"
const AssignmetModel = Models.AssignmetModel


const uploadAssignment = async (req, res) => {
    if (!Object.keys(req.body).length) {
        return res.status(StatusCode.BAD_REQUEST).send({message: "this endpoint requires a JSON body"})
    }

    const AssignmentFile = new AssignmetModel({
        title: req.body.title,
        author: req.body.author
    })

    try {
        const response = await AssignmentFile.save()
        res.status(StatusCode.CREATED).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
    }
}

const getAllAssignments = async (req, res) => {
    try {
        const response = await AssignmetModel.find()
        res.status(StatusCode.OK).send(response)
    } catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

const searchAssignmentsByTitle = async (req, res) => {
    if (!Object.keys(req.body).length) {
        return res.status(StatusCode.BAD_REQUEST).send({message: "this endpoint requires a JSON body"})
    }

    try {
        const response = await AssignmetModel.find({ title: req.body.title })
		if (response.length !== 0) {
            res.status(StatusCode.OK).send(response)
        } else {
            res.status(StatusCode.NOT_FOUND).send({ message: "Could not find file: " + req.body.title })
        }
    } catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

const updateAssignment = async (req, res) => {
    if (!Object.keys(req.body).length) {
        return res.status(StatusCode.BAD_REQUEST).send({message: "this endpoint requires a JSON body"})
    }

    try {
        const response = await AssignmetModel.findByIdAndUpdate(req.params.documentId, {
            title: req.body.title
        }, { new: true })
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
    }
}

const deleteAssignmnet = async (req, res) => {
    try {
        const response = await AssignmetModel.findByIdAndDelete(req.params.documentId)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

export default {
    uploadAssignment,
    getAllAssignments,
    searchAssignmentsByTitle,
    updateAssignment,
    deleteAssignmnet
}
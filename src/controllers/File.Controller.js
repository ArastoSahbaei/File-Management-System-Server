import StatusCode from '../../configuration/StatusCode.js'
import FileModel from "../models/Models.js"
import utils from '../utils/utils.js'
import fs from "fs"
import dotenv from 'dotenv'


dotenv.config()
const { PROJECT_ROOT_PATH } = process.env

const uploadFile = async (req, res) => {
    if (!Object.keys(req.body).length) {
        return res.status(StatusCode.BAD_REQUEST).send({message: "this endpoint requires a body"})
    }

    try {
        const File = new FileModel({
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            filePath: req.file.path
        })

        const response = await File.save()
        res.status(StatusCode.CREATED).send(response)
    } catch (error) {
        console.log("ERROR:", error)
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
    }
}


const downloadFileById = async (req, res) => {
    try {
        const response = await FileModel.findOne({ _id: req.params.fileId })
		if (response.length !== 0) {
            res.set('Content-Disposition', 'attachment')
            res.download(response.filePath)
        } else {
            res.status(StatusCode.NOT_FOUND).send({ message: "Could not find file with ID: " + req.params.fileId })
        }
    } catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}


const fuzzySearch = async (req, res) => {
    const regexSearch = new RegExp(utils.escapeRegex(req.query.search), "gi")
    try {
        const response = await FileModel.find({$or: [
            {title: regexSearch},
            {author: regexSearch},
            {category:regexSearch}
            ]}
        )
        if (response.length !== 0) {
            res.status(StatusCode.OK).send(response)
        } else {
            res.status(StatusCode.NOT_FOUND).send({ message: "Could not find file: " + req.body.search })
        }
    } catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}


const getAllFiles = async (req, res) => {
    try {
        const response = await FileModel.find()
        res.status(StatusCode.OK).send(response)
    } catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}


const getFilesByCategory = async (req, res) => {
    if (!Object.keys(req.body).length) {
        return res.status(StatusCode.BAD_REQUEST).send({message: "this endpoint requires a JSON body"})
    }

    try {
        const response = await FileModel.find({ category: req.body.category })
		if (response.length !== 0) {
            res.status(StatusCode.OK).send(response)
        } else {
            res.status(StatusCode.NOT_FOUND).send({ message: "Could not find file: " + req.body.category })
        }
    } catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}


const getFilesByTitle = async (req, res) => {
    if (!Object.keys(req.body).length) {
        return res.status(StatusCode.BAD_REQUEST).send({message: "this endpoint requires a JSON body"})
    }

    try {
        const response = await FileModel.find({ title: req.body.title })
		if (response.length !== 0) {
            res.status(StatusCode.OK).send(response)
        } else {
            res.status(StatusCode.NOT_FOUND).send({ message: "Could not find file: " + req.body.title })
        }
    } catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}


const updateFile = async (req, res) => {
    if (!Object.keys(req.body).length) {
        return res.status(StatusCode.BAD_REQUEST).send({message: "this endpoint requires a JSON body"})
    }

    try {
        const response = await FileModel.findByIdAndUpdate(req.params.fileId, {
            title: req.body.title
        }, { new: true })
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
    }
}


const deleteFile = async (req, res) => {
    try {
        const response = await FileModel.findByIdAndDelete(req.params.fileId)
        const filePath = PROJECT_ROOT_PATH + response.filePath
        fs.unlinkSync(filePath)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}


export default {
    uploadFile,
    downloadFileById,
    fuzzySearch,
    getAllFiles,
    getFilesByCategory,
    getFilesByTitle,
    updateFile,
    deleteFile
}

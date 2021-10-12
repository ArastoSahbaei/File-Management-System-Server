import StatusCode from '../../configuration/StatusCode.js'
import FileModel from "../models/Models.js"

// const uploadFile = async (req, res) => {
//     if (!Object.keys(req.body).length) {
//         return res.status(StatusCode.BAD_REQUEST).send({message: "this endpoint requires a JSON body"})
//     }

//     const File = new FileModel({
//         title: req.body.title,
//         author: req.body.author,
//         category: req.body.category
//     })

//     try {
//         const response = await File.save()
//         res.status(StatusCode.CREATED).send(response)
//     } catch (error) {
//         res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
//     }
// }

const uploadFile = async (req, res) => {
    if (!Object.keys(req.body).length) {
        return res.status(StatusCode.BAD_REQUEST).send({message: "this endpoint requires a JSON body"})
    }

    const File = new FileModel({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        filePath: req.file.path
    })

    try {
        const response = await File.save()
        res.status(StatusCode.CREATED).send(response)
    } catch (error) {
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
        res.status(StatusCode.OK).send(response)
    } catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}


export default {
    uploadFile,
    downloadFileById,
    getAllFiles,
    getFilesByCategory,
    getFilesByTitle,
    updateFile,
    deleteFile
}
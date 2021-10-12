import dotenv from 'dotenv'
import StatusCode from "../../configuration/StatusCode.js"
import multer from "multer"
import fs from "fs-extra"

dotenv.config()

const notFound = (req, res, next) => {
	const error = new Error(`Not found: ${req.originalUrl}`)
	res.status(StatusCode.NOT_FOUND)
	next(error)
}

const errorHandler = (error, req, res, next) => {
	const statuscode = (res.statusCode === 200) ? 500 : res.statusCode
	res.status(statuscode)
	res.json({
		statuscode: statuscode,
		message: error.message,
		stacktrace: process.env.ENVIRONMENT === 'PRODUCTION' ? 'Check logs' : error.stack,
	})
}

const fileStorageEngine = multer.diskStorage({
	destination: (req, file, callBack) => {
		let category = req.body.category
		let path = `./uploads/${category}`
  		fs.mkdirsSync(path)
		callBack(null, path)
	},
	filename: (req, file, callBack) => {
		callBack(null, file.originalname)
	},
})
const upload = multer({storage: fileStorageEngine})  

export default {
	notFound,
	errorHandler,
	upload
}
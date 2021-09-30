import dotenv from 'dotenv'
import StatusCode from "../../configuration/StatusCode.js"

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

export default {
	notFound,
	errorHandler
}
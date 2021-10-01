import mongoose from 'mongoose'

const FileSchema = mongoose.Schema(
	{
		title: String
	}
)

const FileModel = mongoose.model('file', FileSchema)

export default FileModel
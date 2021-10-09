import mongoose from 'mongoose'


const FileSchema = mongoose.Schema(
	{
		title: String,
		author: String,
		category: {type: String, required: true}
		//filePath: {type: String, required: true}
	}, { timestamps: true }
)

const FileModel = mongoose.model("files", FileSchema)

export default FileModel
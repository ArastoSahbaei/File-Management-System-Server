import mongoose from 'mongoose'


const FileSchema = mongoose.Schema(
	{
		title: String,
		author: String,
		category: { type: String, required: true },
		subjects: { type: Array, required: true },
		filePath: { type: String, required: true },
		fileType: { type: String, required: false },
		fileSize: { type: String, required: false }
	}, { timestamps: true }
)

const FileModel = mongoose.model("files", FileSchema)

export default FileModel
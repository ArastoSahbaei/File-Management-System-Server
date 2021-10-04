import mongoose from 'mongoose'


const AssignmentSchema = mongoose.Schema(
	{
		title: String,
		author: String
	}, { timestamps: true }
)

const ExerciseSchema = mongoose.Schema(
	{
		title: String,
		author: String
	}, { timestamps: true }
)

const ExaminationSchema = mongoose.Schema(
	{
		title: String,
		author: String
	}, { timestamps: true }
)

const LectureMaterialSchema = mongoose.Schema(
	{
		title: String,
		author: String
	}, { timestamps: true }
)

const AssignmetModel = mongoose.model('assignment', AssignmentSchema)
const ExerciseModel = mongoose.model('exercise', ExerciseSchema)
const ExaminationModel = mongoose.model('examination', ExaminationSchema)
const LectureMaterialModel = mongoose.model('lecture material', LectureMaterialSchema)

const Models = {
	AssignmetModel,
	ExerciseModel,
	ExaminationModel,
	LectureMaterialModel
}

export default Models
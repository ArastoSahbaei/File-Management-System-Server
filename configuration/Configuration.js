import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectToDatabase = async () => {
	try {
		const DB_URL = process.env.DB_URL
		await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
		console.log("Successfully connected to MongoDB")
	} catch (error) {
		console.log("Failed to connect to MongoDB", "\nERROR:", error)
		process.exit()
	}
}

const connectToPort = (app) => {
    const port = process.env.PORT
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
}

export default {
    connectToDatabase,
    connectToPort
}
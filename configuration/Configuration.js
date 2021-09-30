import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const {
    DEV_DATABASE_URL,
    PROD_DATABASE_URL,
    ENVIRONMENT,
    PORT
} = process.env

const connectToDatabase = async () => {
    const DATABASE_URL = ENVIRONMENT === 'DEVELOPMENT' ? DEV_DATABASE_URL : PROD_DATABASE_URL
    try {
        await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('✔️  SUCESSFULLY CONNECTED TO DATABASE..')
    } catch (error) {
        console.log('❌  ERROR OCCURED WHILE TRYING TO CONNECT TO THE DATABASE..', error.message)
        process.exit()
    }
}

const connectToPort = async (app) => {
    try {
        await app.listen(PORT || 3001, () => {
            console.log(`✔️  SERVER IS RUNNING ON PORT: ${PORT || 3001}`)
        })
    } catch (error) {
        console.log('❌  ERROR OCCURED WHILE TRYING TO CONNECT TO THE PORT..')
    }
}

export default {
    connectToDatabase,
    connectToPort
}
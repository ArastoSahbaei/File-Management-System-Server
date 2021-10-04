import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config()
const {
    DEV_DATABASE_URL,
    PROD_DATABASE_URL,
    ENVIRONMENT,
    PORT,
    DEV_SERVER_IP,
    PROD_SERVER_IP
} = process.env

const connectToDatabase = async () => {
    const DATABASE_URL = ENVIRONMENT === 'DEVELOPMENT' ? DEV_DATABASE_URL : PROD_DATABASE_URL
    try {
        await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('✔️  SUCCESSFULLY CONNECTED TO DATABASE')
    } catch (error) {
        console.log('❌  ERROR OCCURED WHILE TRYING TO CONNECT TO THE DATABASE', error.message)
        process.exit()
    }
}

const connectToPort = async (app) => {
    const SERVER_PUBLIC_IP = ENVIRONMENT === 'DEVELOPMENT' ? DEV_SERVER_IP : PROD_SERVER_IP
    try {
        await app.listen(PORT || 3001, (SERVER_PUBLIC_IP), () => {
            console.log(`✔️  SERVER IS RUNNING ON PORT: ${PORT || 3001}`)
        })
    } catch (error) {
        console.log('❌  ERROR OCCURED WHILE TRYING TO CONNECT TO THE PORT')
    }
}

export default {
    connectToDatabase,
    connectToPort
}
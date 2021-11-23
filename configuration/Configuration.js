import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config()
const {
    DEV_DATABASE_URL,
    DEV_DB,
    PROD_DATABASE_URL,
    PROD_DB,
    ENVIRONMENT,
    PORT,
    DEV_SERVER_IP,
    PROD_SERVER_IP
} = process.env

console.log(`RUNNING IN ${ENVIRONMENT} ENVIRONMENT`)

let port = PORT
if (port == null || port == "") {
    port = 3001
}

const connectToDatabase = async () => {
    const DATABASE_URL = ENVIRONMENT === 'DEVELOPMENT' ? DEV_DATABASE_URL + DEV_DB : PROD_DATABASE_URL
    try {
        await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`✔️  SUCCESSFULLY CONNECTED TO DATABASE:\n${DATABASE_URL}`)
    } catch (error) {
        console.log('❌  ERROR OCCURED WHILE TRYING TO CONNECT TO THE DATABASE', error.message)
        console.log("*************DATABASE_URL***************\n" + DATABASE_URL)
        process.exit()
    }
}

const connectToPort = async (app) => {
    const SERVER_PUBLIC_IP = ENVIRONMENT === 'DEVELOPMENT' ? DEV_SERVER_IP : PROD_SERVER_IP
    try {
        await app.listen(port, (SERVER_PUBLIC_IP), () => {
            console.log(`✔️  SERVER IS RUNNING ON PORT: ${port}`)
        })
    } catch (error) {
        console.log('❌  ERROR OCCURED WHILE TRYING TO CONNECT TO THE PORT', error.message)
    }
}

export default {
    connectToDatabase,
    connectToPort
}
import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import Configuration from "./configuration/Configuration.js"
import Middlewares from "./src/middlewares/Middlewares.js"
import Routes from "./src/routes/Routes.js"

const application = express()
application.use(helmet())
application.use(morgan("common"))
application.use(express.json())
application.use(cors())

Routes.routes(application)

application.use(Middlewares.notFound)
application.use(Middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(application)

export default application

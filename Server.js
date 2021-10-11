import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import Configuration from "./configuration/Configuration.js"
import Middlewares from "./src/middlewares/Middlewares.js"
import Routes from "./src/routes/Routes.js"


const app = express()
app.use(helmet())
app.use(morgan("common"))
app.use(express.json())

Routes.routes(app)

app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(app)

export default app
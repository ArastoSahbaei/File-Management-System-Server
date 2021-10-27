import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import Configuration from "./configuration/Configuration.js"
import Middlewares from "./src/middlewares/Middlewares.js"
import Routes from "./src/routes/Routes.js"
import cors from "cors"


const app = express()
app.use(helmet())
app.use(morgan("common"))
app.use(express.json())
app.use(cors())
//app.use(function(req, res, next) {
//  res.header("Access-Control-Allow-Origin"); // update to match the domain you will make the request from
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  next();
//});

Routes.routes(app)

app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(app)

export default app

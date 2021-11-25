import FileController from "../controllers/File.Controller.js"
import MWs from "../middlewares/Middlewares.js"

const routes = (app) => {
    app.post("/upload-file", MWs.upload.single("file"), FileController.uploadFile)
    app.get("/download/:fileId", FileController.downloadFileById)
    app.get("/fuzzy-search", FileController.fuzzySearch)
    app.get("/get-files", FileController.getAllFiles)
    app.get("/get-files/category", FileController.getFilesByCategory)
    app.get("/get-files/title", FileController.getFilesByTitle)
    app.get("/get-file/:fileId", FileController.getFileById)
    app.put("/update-file/:fileId", FileController.updateFile)
    app.delete("/delete-file/:fileId", FileController.deleteFile)
    app.get("/hello-world", (req, res) => {
        res.status(200).send({message: "Hello World!"})
    })
}

export default {
    routes
}

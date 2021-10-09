import FileController from "../controllers/File.Controller.js"


const routes = (app) => {
    app.post("/upload-file", FileController.uploadFile)
    app.get("/get-files", FileController.getAllFiles)
    app.get("/get-files/category", FileController.getFilesByCategory)
    app.get("/get-files/title", FileController.getFilesByTitle)
    app.put("/update-file/:fileId", FileController.updateFile)
    app.delete("/delete-file/:fileId", FileController.deleteFile)
}

export default {
    routes
}
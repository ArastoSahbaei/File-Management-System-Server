import Controller from "../controllers/Controllers.js"

const routes = (app) => {
    app.post("/upload", Controller.uploadFile)
    app.get("/files", Controller.getAllFiles)
    app.get("/search-files", Controller.searchFilesByTitle)
    app.put("/update/:fileId", Controller.updateFile)
    app.delete("/delete/:fileId", Controller.deleteFile)
}

export default {
    routes
}
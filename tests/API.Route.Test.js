import Chai from "chai"
import chaiHttp from "chai-http"
import { describe, it as test } from "mocha"
import app from "../Server.js"
import StatusCode from "../configuration/StatusCode.js"
import { response } from "express"


Chai.should()
Chai.use(chaiHttp)

//Mock Data
const randomString = Math.random().toString(36).substring(7)
const randomTitle = Math.random().toString(36).substring(7)
const randomAuthor = Math.random().toString(36).substring(7)

const mockData = {
    title: randomTitle,
    author: randomAuthor,
    category: "assignment"
}
let dbResponseMockDataId;

/* BoilerPlate for API tests
const  = () => {
    describe("", () => {
        test("should", (done) => {
            Chai.request(app)
        })
        
    })
}
*/

const testingNonExistentRoute = () => {
    describe("Testing a route that doesn't exist", () => {
        test("Expectin 404 not found", (done) => {
            Chai.request(app)
            .get(`/${randomString}`)
            .end((request, response) => {
                response.should.have.a.status(StatusCode.NOT_FOUND)
                done()
            })
        })
    })
}

const uploadFile = () => {
    describe("Testing upload function for File entity", () => {
        test("Should upload a file to the file system and create a file document in the database", (done) => {
            Chai.request(app)
            .post("/upload-file")
            .field("category", mockData.category)
            .field("title", randomTitle)
            .field("author", randomAuthor)
            .attach("file", "./mock_data/mock_file.pdf")
            .end((error, response) => {
                response.should.have.status(StatusCode.CREATED)
                const res = response.body
                res.should.be.a("object")
                res.should.have.property("_id")
                res.should.have.property("title").eq(randomTitle)
                res.should.have.property("author").eq(randomAuthor)
                res.should.have.property("category").eq(mockData.category)
                res.should.have.property("filePath").eq("uploads/assignment/mock_file.pdf")
                res.should.have.property("createdAt")
                res.should.have.property("updatedAt")
                res.should.have.property("__v")
                dbResponseMockDataId = res._id
                done()
            })
        })
        
    })
}

const downloadFile = () => {
    describe("Testing download function for File entity", () => {
        test("should download file by ID from the servers file system", (done) => {
            Chai.request(app)
            .get("/download/" + dbResponseMockDataId)
            .end((error, response) => {
                response.should.have.status(StatusCode.OK)
                response.should.have.header("content-disposition", 'attachment; filename="mock_file.pdf"')
                done()
            })
        })
        
    })
}

const getAllFiles = () => {
    describe("Fetching all files", () => {
        test("Should return all files", (done) => {
            Chai.request(app)
            .get("/get-files")
            .end((error, response) => {
                response.should.have.status(StatusCode.OK)
                const res = response.body
                res.should.be.an("array")
                res[0].should.have.property("_id").eq(dbResponseMockDataId)
                res[0].should.have.property("title").eq(mockData.title)
                res[0].should.have.property("author").eq(mockData.author)
                res[0].should.have.property("category").eq(mockData.category)
                res[0].should.have.property("createdAt")
                res[0].should.have.property("updatedAt")
                res[0].should.have.property("__v")
                done()
            })
        })
        
    })
}

const getFilesByCategory = () => {
    describe("Fetching all files by category", () => {
        test("Should return all files with specified category", (done) => {
            Chai.request(app)
            .get("/get-files/category")
            .send({category: mockData.category})
            .end((error, response) => {
                response.should.have.status(StatusCode.OK)
                const res = response.body
                res.should.be.an("array")

                for (let i = 0; i < res.length; i++) {
                    res[i].should.have.property("category").eq(mockData.category)
                }
                done()
            })
        })
        
    })
}

const getFilesByTitle = () => {
    describe("Fetching all files by title", () => {
        test("Should return all files with specified title", (done) => {
            Chai.request(app)
            .get("/get-files/title")
            .send({title: mockData.title})
            .end((error, response) => {
                response.should.have.status(StatusCode.OK)
                const res = response.body
                res.should.be.an("array")

                for (let i = 0; i < res.length; i++) {
                    res[i].should.have.property("title").eq(mockData.title)
                }
                done()
            })
        })
        
    })
}

const updateFile = () => {
    describe("Updating(PUT) a file in the database", () => {
        test("Should update a file", (done) => {
            Chai.request(app)
            .put("/update-file/" + dbResponseMockDataId)
            .send({title: "updated title"})
            .end((error, response) => {
                response.should.have.status(StatusCode.OK)
                const res = response.body
                res.should.be.a("object")
                res.should.have.property("_id").eq(dbResponseMockDataId)
                res.should.have.property("title").eq("updated title")
                res.should.have.property("author").eq(mockData.author)
                res.should.have.property("category").eq(mockData.category)
                res.should.have.property("createdAt")
                res.should.have.property("updatedAt")
                res.should.have.property("__v")
                done()
            })
        })
        
    })
}

const deleteFile = () => {
    describe("Deleting(DELETE) a file from the the database", () => {
        test("Should delete a file", (done) => {
            Chai.request(app)
            .delete("/delete-file/" + dbResponseMockDataId)
            .end((error, response) => {
                response.should.have.status(StatusCode.OK)
                done()
            })
        })
        
    })
}

describe("TESTING THE API ROUTE", () => {
    testingNonExistentRoute()
    uploadFile()
    getAllFiles()
    getFilesByCategory()
    getFilesByTitle()
    updateFile()
    downloadFile()
    //deleteFile()
})
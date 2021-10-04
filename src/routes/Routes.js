import AssignmentController from "../controllers/Assignment.controller.js"
import ExaminationController from "../controllers/Examination.controller.js"
import ExerciseController from "../controllers/Exercise.controller.js"
import LectureMaterialController from "../controllers/LectureMaterial.controller.js"


const routes = (app) => {
    //Lecture Materials
    app.post("/upload-lecture-material", LectureMaterialController.uploadLectureMaterial)
    app.get("/all-lecture-materials", LectureMaterialController.getAllLectureMaterial)
    app.get("/search-lecture-materials", LectureMaterialController.searchLectureMaterialsByTitle)
    app.put("/update-lecture-material/:documentId", LectureMaterialController.updateLectureMaterial)
    app.delete("/delete-lecture-material/:documentId", LectureMaterialController.deleteLectureMaterial)

    //Exercises
    app.post("/upload-exercise", ExerciseController.uploadExercise)
    app.get("/all-exercises", ExerciseController.getAllExercises)
    app.get("/search-exercises", ExerciseController.searchExercisesByTitle)
    app.put("/update-exercise/:documentId", ExerciseController.updateExercise)
    app.delete("/delete-exercise/:documentId", ExerciseController.deleteExercise)

    //Assignments
    app.post("/upload-assignment", AssignmentController.uploadAssignment)
    app.get("/all-assignments", AssignmentController.getAllAssignments)
    app.get("/search-assignment", AssignmentController.searchAssignmentsByTitle)
    app.put("/update-assignment/:documentId", AssignmentController.updateAssignment)
    app.delete("/delete-assignment/:documentId", AssignmentController.deleteAssignmnet)

    //Examinations
    app.post("/upload-examination", ExaminationController.uploadExamination)
    app.get("/all-examinations", ExaminationController.getAllExaminations)
    app.get("/search-examination", ExaminationController.searchExaminationsByTitle)
    app.put("/update-examination/:documentId", ExaminationController.updateExamination)
    app.delete("/delete-examination/:documentId", ExaminationController.deleteExamination)
}

export default {
    routes
}
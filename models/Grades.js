
const mongoose = require("mongoose")

const gradesSchema = new mongoose.Schema({
    student_id: {
        type: Number,
        required: true,
        
    },
    class_id:{
   type: Number,
   required: true,
    },
    scores: {
        type: Number,
        required: true,
        default: []

    }

})
const grades = mongoose.model("Grades", gradesSchema)

module.exports= grades
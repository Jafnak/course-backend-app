const mongoose = require("mongoose")
const schema = mongoose.Schema(
{
    "title":String,
    "description":String,
    "date":String,
    "duration":String,
    "venue":String,
    "trainerName":String
}
)
let coursemodel = mongoose.model("courses",schema);
module.exports={coursemodel}
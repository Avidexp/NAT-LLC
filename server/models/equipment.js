const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
    userEmail: [String],
    userId: [String],
    title: [String],
    serial: [String],
    start: [String],
    end: [String],
    condition: [String],
    desc: [String]

});
const ModelClass = mongoose.model("equipment", equipmentSchema);

// Export the model
module.exports = ModelClass;

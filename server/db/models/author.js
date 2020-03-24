const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    dateOfBirth: Date
})

module.exports = mongoose.model('Author', authorSchema);
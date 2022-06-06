const mongoose= require('mongoose');
const User = mongoose.model('User');
const bookSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        default: ""
    },
    autor: {
        type: mongoose.Schema.ObjectId, ref: "User"
        
        
    },
    precio: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('Book', bookSchema);
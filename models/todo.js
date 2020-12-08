const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating schema for todo
const TodoSchema = new Schema({
    action: {
        type: String,
        required: [true, 'The todo text field is required']
    }
})

//creating model for todo 
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;
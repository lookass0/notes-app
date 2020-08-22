const mongoose = require('mongoose');

const Notes = mongoose.Schema(
{
    category_id: String,
    note_title: String,
    note_content: String
});

module.exports = mongoose.model('Notes', Notes); 

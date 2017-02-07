const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const diarySchema = new Schema({
    title: {
            type: String,
            required: [true, 'Title is required']
    },
    content: String,
    location: String,
    photo: String,
    weather: String,
    emotion: String,
    published_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

const Diary = mongoose.model('Diary', diarySchema);

module.exports = Diary;
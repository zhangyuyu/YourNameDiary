const Diary = require('../models/diary.js');

const DiaryController = (Diary) => {

    return {
        getAll: (req, res) => {
            Diary.find((err, data) => {
                res.render('diaryList', {
                    title: 'Your Diary List',
                    content: data
                });
            });
        },

        create: (req, res) => {
            new Diary(req.body).save((err, data) => {
                res.status(201).json(data);
            });
        }
    }

};

module.exports = DiaryController;
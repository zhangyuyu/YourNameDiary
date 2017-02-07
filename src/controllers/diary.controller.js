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
        },

        deleteDiaryById: (req, res) => {
            Diary.findByIdAndRemove(req.params.id, (err, diary) => {
                res.status(200).send(`Delete Diary 《${diary.title}》 successfully`);
            });
        },
    }

};

module.exports = DiaryController;
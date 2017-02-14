const Diary = require('../models/diary.js');

const IndexController = () => {

    return {
        newDiary: (req, res) => {
            res.render('newDiary', {
                title: 'Your Diary List'
            });
        },
        createNewDiary: (req, res) => {
            Diary(req.body).save((err) => {
                if (!err) {
                    Diary.find((err, data) => {
                        res.render('diaryList', {
                            title: 'Your Diary List',
                            content: data
                        });
                    });
                }
            });
        }
    }
};

module.exports = IndexController;
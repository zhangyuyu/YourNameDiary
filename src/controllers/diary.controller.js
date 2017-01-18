const Diary = require('../models/diary.js');

const DiaryController = (Diary) => {

    return {
        getAll: (req, res) => {
            Diary.find((err, data) => {

                const first = new Diary({
                    title: "Hello World",
                    content: "First Diary by default"
                });

                res.render('diaryList', {
                    title: 'Your Diary List',
                    content: [first, first, first]
                });

            });
        }
    }

};

module.exports = DiaryController;
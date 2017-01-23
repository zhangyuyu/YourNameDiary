const Diary = require('../models/diary.js');

const IndexController = () => {

    return {
        newDiary: (req, res) => {
            res.render('newDiary', {
                title: 'Your Diary List'
            });
        }
    }
};

module.exports = IndexController;
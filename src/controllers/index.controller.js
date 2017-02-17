const Diary = require('../models/diary.js');

const IndexController = () => {

    return {
        newDiary: (req, res) => {
            res.render('newDiary', {
                title: 'New Diary'
            });
        },
        editDiary: (req, res) => {
            Diary.findById(req.params.id, (err, data) => {
                  res.render('editDiary', {
                      title: 'Edit Diary',
                      content: data
                  });
            });
        }
    }
};

module.exports = IndexController;
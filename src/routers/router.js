const router = require('express').Router();
const Diary = require('../models/diary.js');
const DiaryController = require('../controllers/diary.controller.js')(Diary);
const IndexController = require('../controllers/index.controller.js')();

router.get('/your-name-diary/', (req, res) => {
    res.render('home', {
        title: 'Your Name Diary',
        content: 'Your Name Diary'
    });
});

router.get('/your-name-diary/newDiary', IndexController.newDiary);

router.get('/your-name-diary/diaryList', DiaryController.getAll);
router.post('/your-name-diary/diaryList', DiaryController.create);

module.exports = router;
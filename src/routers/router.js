const router = require('express').Router();
const Diary = require('../models/diary.js');
const DiaryController = require('../controllers/diary.controller.js')(Diary);
const IndexController = require('../controllers/index.controller.js')();

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Your Name Diary',
        content: 'Your Name Diary'
    });
});

router.get('/newDiary', IndexController.newDiary);
router.get('/editDiary/:id', IndexController.editDiary);

router.get('/diary', DiaryController.getAll);
router.post('/diary', DiaryController.createDiary);
router.get('/diary/:id', DiaryController.getDiaryById);
router.delete('/diary/:id', DiaryController.deleteDiaryById);
router.post('/diary/:id', DiaryController.updateDiaryById);

module.exports = router;
const router = require('express').Router();

router.get('/your-name-diary/', (req, res) => {
    res.render('home', {
        title: 'Your Name Diary',
        content: 'Your Name Diary'
    });
});

module.exports = router;
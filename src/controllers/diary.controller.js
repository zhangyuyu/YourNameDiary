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

        getDiaryById: (req, res) => {
            Diary.findById(req.params.id, (err, data) => {
                res.render('diary', {
                    title: 'Diary',
                    content: data
                });
            });
        },

        createDiary: (req, res) => {
            var diaryData = {
                    title: req.body.title,
                    content: req.body.content,
                    location: req.body.location,
                    photo: req.body.photo === 'Default' ? '/images/write.jpeg': req.body.photo ,
                    weather: req.body.weather,
                    emotion: req.body.emotion,
                    updated_at: new Date()
            };
            new Diary(diaryData).save((err, data) => {
                res.redirect('/your-name-diary/diary/'+ data.id)
            });
        },

        deleteDiaryById: (req, res) => {
            Diary.findByIdAndRemove(req.params.id, (err, diary) => {
                res.status(200).send(`Delete Diary 《${diary.title}》 successfully`);
            });
        },

        updateDiaryById: (req, res) => {
            var diaryid = req.params.id;
            var diaryData = {
                title: req.body.title,
                content: req.body.content,
                location: req.body.location,
                photo: req.body.photo === 'Default' ? '/images/write.jpeg': req.body.photo ,
                weather: req.body.weather,
                emotion: req.body.emotion,
                updated_at: new Date()
            };

            var conditions = {
                _id: diaryid
            };
            var update = {
                $set: diaryData
            };
            var options = {
                upsert: true
            };
            Diary.update(conditions, update, options, function(err,diary) {
                if (err) return console.error(err);
                res.redirect('/your-name-diary/diary/' + diaryid);
            });
        }
    }

};

module.exports = DiaryController;
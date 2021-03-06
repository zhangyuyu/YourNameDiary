const express = require('express');
const ejs = require('ejs');
const router = require('./src/routers/router.js');
const bodyParser = require('body-parser');
require('./src/dao/diaryDB.js');

ejs.filters.fromNow = function(date){
    moment.lang('zh-cn');
    return moment(date).fromNow();
}

const app = express();

// view engine setup
app.engine('.ejs', ejs.__express);
app.set('views', 'src/views/');
app.set('view engine', 'ejs');
app.use(express.static('src/public/'));

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use('/your-name-diary', router);

app.get('*', (req, res) => {
  res.status(404)
     .render('error', {
          title: 'Your Name Diary',
          content: 'NOT FOUND!'
  });
});

app.listen(3000, () => {
  console.log('Forum app listening on port 3000!');
});
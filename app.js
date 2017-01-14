const express = require('express');
const ejs = require('ejs');

ejs.filters.fromNow = function(date){
    moment.lang('zh-cn');
    return moment(date).fromNow();
}

const app = express();

// view engine setup
app.engine('.ejs', ejs.__express);
app.set('views', 'src/views/');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Your Name Diary',
        content: 'Hello World!'
    });
});

app.listen(3000, () => {
  console.log('Forum app listening on port 3000!');
});
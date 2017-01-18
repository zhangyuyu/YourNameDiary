const express = require('express');
const ejs = require('ejs');
const router = require('./src/routers/router.js');

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

app.use('/', router);

app.listen(3000, () => {
  console.log('Forum app listening on port 3000!');
});
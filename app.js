var express = require('express');
var app = express();
var hbs = require('hbs');
hbs.registerPartials('views/partials');
app.set('view engine','hbs');
app.use(express.static('public'));

app.get('/',(req,res) => {
  res.render('template');
});

app.listen(3000);

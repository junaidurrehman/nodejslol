var express = require('express');
var app = express();
var hbs = require('hbs');
const port = process.env.PORT || 3000;
hbs.registerPartials('views/partials');
app.set('view engine','hbs');
app.use(express.static('public'));

app.get('/',(req,res) => {
  res.render('template');
});

app.listen(port);
console.log(port + ' port running');

var express = require('express');
var app = express();
var hbs = require('hbs');
const port = process.env.PORT || 3001;
hbs.registerPartials('views/partials');
app.set('view engine','hbs');
app.use(express.static('public'));

app.get('/',(req,res) => {
  res.render('template');
});
app.get('/hello',(req,res) => {
  res.render('projects',{
    name:'junaid'
  });
});

app.listen(port);
console.log(port + ' port running');

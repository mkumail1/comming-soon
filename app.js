var express   = require('express'),
    app       = express(),
    bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.render("coming")
});

app.post('/submit', function(req, res){
    var newsletter = req.body;
    console.log(newsletter);
    
    res.send('submitted Successfully');
});

app.listen('3000', function () {
    console.log('Successfully started..');
})
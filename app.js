const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

	app.use(express.static(__dirname + '/public'));
	app.use(express.static(__dirname + '/views'));

	app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
	app.set('view engine', 'hbs');


app.get('/', function(req, res){
	res.render('Home');
});

app.use(function(req, res) {
	res.redirect('/')
});

app.listen(3000, function () {
	console.log("Servidor Rodando Na Porta 3000");
});
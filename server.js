const http = require('http')
const express = require('express')
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.get('/', function (req, res) {
    res.render('index')
}); 

app.get('/blog', function (req, res) {
    res.render('index')
}); 

app.get('/about', function (req, res) {
    res.render('about')
}); 

app.get('/service', function (req, res) {
    res.render('service')
}); 
app.get('/contact', function (req, res) {
    res.render('contact')
});
 


http.createServer(app).listen(3000)
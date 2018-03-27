/**
 * Created by Jora Khachatran on 6/25/2017.
 */
const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const handlebars = require('express-handlebars');
const bodyParser=require('body-parser');
const app=express();

const routes = require('./routes/index');

//Connecting to database
const db = mongoose.connection;
mongoose.connect('mongodb://Jora:630132@ds131742.mlab.com:31742/heroku_jp3zqjn8');
//mongoose.connect('mongodb://localhost/newApp');

//Checking connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Server Connected to DB...."+new Date());
});


app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function(){
    console.log('Server started on port '+app.get('port'));
});




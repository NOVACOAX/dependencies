const express = require('express');
const morgan = require('morgan');
const depRoutes = require('./routes/depRoutes');
var cors = require('cors')


// * Express app
const app = express();
// * Listen for request
app.listen(3200);

// * Register view engine
app.set('view engine', 'ejs');
// * folder
app.set('views', 'views');

console.log('Visit "http://localhost:3200/dep" for more info');

// * Middleware
app.use(cors());
app.use((req, res, next)=>{
    console.log('Request of method "', req.method, '" made to path "', req.path, '".');
    next();
});


// * Middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));


app.get('/', (req, res)=>{
    res.redirect('/dep');
});

app.get('/about', (req, res)=>{
    res.render('about', {title: 'about'});
});

app.use('/dep', depRoutes);

// * 404 page
app.use((req, res)=>{
    res.status(404).render('404', {title: '404'});
})
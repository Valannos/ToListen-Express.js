var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var Genre = require('./models/genre.model');
var Author = require('./models/author.model');
var Link = require('./models/link.model');
var LinkAuthors = require('./models/link.authors.model');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var genreRouter = require('./routes/genre');
var db = require('./db');
var cors = require('cors');

var app = express();

console.log(process.env.NODE_ENV)

  app.use(cors());
  app.options('*', cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/genres', genreRouter)





Genre.sync({
    force : true,
}).then(() => {
   return Genre.create({
        label : 'Heavy Metal'
    });
});

Author.sync({
    force: true
}).then(
    () => Author.create({
        lastName : 'Accept'
    })
).then(
    () => {
        Link.sync({force: true}).then(
            () => Link.create({
                name : 'Princess of a dawn'
            }).then(
                () => LinkAuthors.sync({force: true}).then(() => {
                    Link.findByPk(1).then(
                        (link) => link.setAuthors([1])
                    )
                })
            )
        );      
    }
);









module.exports = app;

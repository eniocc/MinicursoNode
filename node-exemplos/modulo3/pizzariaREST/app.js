const path = require('path')
const express = require('express')
const passport = require('passport')

const createError = require('http-errors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const pizzasRouter = require('./routes/pizzas')
// const promosRouter = require('./routes/promos')
// const combosRouter = require('./routes/combos')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser("teste123"))
app.use(session({
  name: 'session-id',
  secret: '12345-67890-09876-54321',
  saveUninitialized: false,
  resave: false,
  store: new FileStore()
}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.use(passport.initialize())

app.use('/pizzas', pizzasRouter)
// app.use('/promos', promoRouter)
// app.use('/combos', comboRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app

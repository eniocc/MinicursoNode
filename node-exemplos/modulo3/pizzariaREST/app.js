const path = require('path')
const express = require('express')

const createError = require('http-errors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const pizzasRouter = require('./routes/pizzas')
// const promosRouter = require('./routes/promos')
// const combosRouter = require('./routes/combos')

function auth(req, res, next) {
  function unauthorized() {
    const err = new Error('Não autorizado')
    res.setHeader('WWW-Authenticate', 'Basic')
    err.status = 401
    return next(err)
  }

  if (req.signedCookies.user) {
    if (req.signedCookies.user != 'admin') unauthorized()
    next()
  }

  const header = req.headers.authorization

  if (!header) return unauthorized()

  const credentials = Buffer.from(header.split(' ')[1], 'base64')
  const [username, password] = credentials.toString().split(':')

  if (username != 'admin' || password != 'admin') return unauthorized()
  res.cookie('user', 'admin', { signed: true })
  next()
}

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser("teste123"))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.use(auth)

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

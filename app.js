const express = require('express')
const app = express()
const server = require('http').createServer(app)
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')
const bodyParser = require('body-parser')
const path = require('path')
const webpush = require('web-push')

// my vars
const port = process.env.PORT || 3000
const {MONGO_URL} = require('./config/')
require('./libs/db-connection')

/** ------ A middleware for post requests (which has body) ------ **/
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// static files
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.static(path.join(__dirname, '/public/client')))

/** ------ Keys For pushNotification ------ **/
const publicVapidKey =
  'BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo'
const privateVapidKey = '3KzvKasA2SoCxsp0iIG_o9B0Ozvl1XDwI63JRKNIWBM'

/** ------ set the Keys for webpush ------ **/
webpush.setVapidDetails(
  'mailto:test@test.com',
  publicVapidKey,
  privateVapidKey
)

/* ------------------------------ */

/** set session **/
app.use(session({
  secret: 'abc123',
  resave: true,
  saveUninitialized: true,
  // this prevents that every time the server is restarted we lose the login sessions
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    url: MONGO_URL,
    autoReconnect: true
  })
}))

/* ------------------------------ */

// passport middleware
app.use(passport.initialize())
app.use(passport.session())
// global var
app.use((req, res, next) => {
  res.locals.user = req.user || null
  res.locals.errors = []
  next()
})

/** ------ set engine ------ **/
app.set('view engine', 'ejs')

/** ------ passport config ------ **/
require('./config/passport')(passport)

// routes
app.use(require('./routes/')) // main routes
app.use('/auth', require('./routes/user')) // user routes
// run server
server.listen(port, () => console.info(`App running on port ${port}`))

const express = require('express')
const session = require('express-session')
const appRoot = require('app-root-path')
const passport = require('passport')

const logger = require('morgan')
const app = express()

const {
  reportRouter,
  calendarRouter,
  loginRouter,
  logoutRouter,
  statisticsRouter,
  userRouter,
} = require('./router')
const { sessionConfig } = require('../config/session')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(appRoot.resolve('/dist')))
app.use(
  session({
    secret: sessionConfig.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.use(userRouter)
app.use(reportRouter)
app.use(calendarRouter)
app.use(statisticsRouter)

app.use(loginRouter)
app.use(logoutRouter)

app.use(function (req, res, next) {
  res.sendFile(appRoot.resolve('/dist/index.html'))
})

app.listen(3000, () => console.log(`Listening on port 3000`))

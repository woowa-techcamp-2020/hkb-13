const express = require('express')
const router = express.Router()

const passport = require('passport')
const NaverStrategy = require('passport-naver').Strategy
const { config } = require('../../config/naverPassport')

const { findUser, createUser } = require('../model/login')

passport.use(
  new NaverStrategy(
    {
      clientID: config.CLIENT_ID,
      clientSecret: config.CLIENT_SECRET,
      callbackURL: config.CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, done) {
      const user = await findUser({
        name: profile.displayName,
        email: profile.emails[0].value,
        site: profile.provider,
      })
      if (!user.length) {
        createUser({
          name: profile.displayName,
          email: profile.emails[0].value,
          site: profile.provider,
        })
      }
      return done(false, profile)
    }
  )
)

router.get('/login/naver', passport.authenticate('naver'))

router.get('/login/naver/callback', function (req, res, next) {
  passport.authenticate('naver', function (err, user) {
    if (!user) {
      return res.redirect('http://localhost:3000/login')
    }
    req.logIn(user, function (err) {
      return res.redirect('http://localhost:3000/reports')
    })
  })(req, res)
})

module.exports = { loginRouter: router }

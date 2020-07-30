const express = require('express')

const {
  getCalendarController,
} = require('../controller/calendar')

const router = express.Router()

router.get('/api/board/:boardId/:year/:month/calendar', getCalendarController)

module.exports = { calendarRouter: router }
const router = require('express').Router()
const contact = require('../controllers/contact')
const webpush = require('web-push')

// basics routes
router.get('/auth', (req, res) => {
  res.render('index', {title: 'Indilabs Components For AuthSystem, ContacusEmail, NotificationSystem refere to the github readme for more clearfication about the structure and how to use the components'})
})

router.get('/contact', (req, res) => {
  console.log(req.body)
  res.render('contact', {msg: ''})
})

router.post('/send', (req, res) => {
  contact.sendMessage(req, res)
})

/**
 * api that call wrap up the notification system
 * @type {[type]}
 */
router.post('/subscribe', (req, res) => {
  // Get pushSubscription object
  const subscription = req.body

  // Send 201 - resource created
  res.status(201).json({})

  // Create payload
  const payload = JSON.stringify({ title: 'Push Test' })

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err))
})

module.exports = router

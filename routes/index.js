const router = require('express').Router()
const contact = require('../controllers/contact')
// basics routes
router.get('/', (req, res) => {
  res.render('index', {title: 'Login App - Node.Js - Express - MongoDB - Passport'})
})

router.get('/contact', (req, res) => {
  console.log(req.body)
  res.render('contact')
})
router.post('/send', (req, res) => {
  contact.sendMessage(req, res)
})
module.exports = router

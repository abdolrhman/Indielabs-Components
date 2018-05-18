const nodemailer = require('nodemailer')

var sendMessage = (req, res) => {
  const output = `
  <p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Company: ${req.body.company}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.phone}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>`
  nodemailer.createTestAccount((err, account) => {
    if (err) {
      console.log(err)
    }
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 465,
      secure: false, // true for 465, false for other ports
      auth: {
        user: '37f84975bf3b2b', // generated ethereal user
        pass: '7152e3f7019ff2' // generated ethereal password
      }
    })

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Fred Foo 👻" <iwcw4i@gmail.com>', // sender address
      to: 'iwcw4i@gmail.com, baz@example.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error)
      }
      console.log('Message sent: %s', info.messageId)
      console.log('message send to : %s', JSON.stringify(info))
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
      res.render('index', {msg: 'Email is sent'})
    })
  })
}

module.exports.sendMessage = sendMessage

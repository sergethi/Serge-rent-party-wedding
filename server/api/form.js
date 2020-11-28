const router = require('express').Router()
const nodemailer = require('nodemailer')

router.post('/', (req, res) => {
  let data = req.body
  let smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    auth: {user: 'sergethiti@gmail.com', pass: 'mknkbcznruutdbmu'}
  })

  let mailOption = {
    from: data.email,
    to: 'sergethiti@gmail.com',
    subject: `message from ${data.fullname}`,
    html: `
          <h3>Informations</h3>
                <ul>
                <li> Full Name: ${data.fullname}</li>
                <li> Email: ${data.email}</li>
                
                </ul> 
          <h3>Message</h3>
          <p>${data.message}</p>
        `
  }

  smtpTransport.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log(error)
      res.send(error)
    } else {
      console.log('email sent:' + info.response)
      res.send('SUCESS')
    }
  })

  smtpTransport.close()
})

module.exports = router

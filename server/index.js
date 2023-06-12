const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// ROUTE
app.get('/', (req, res) => {
    res.send(`<h1 style='text-align:center;color:blue;'>welcome to my page</h1>`)
})

app.post('/api/sendEmail', (req, res) => {
    res.send("yes i got")
    let data = req.body
    console.log(data)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "nathiya.16mani@gmail.com",
            pass: "Nathi123456@"
        }
    })
    const mailOptions = {
        from: "nathiya.16mani@gmail.com",
        to: 'nathiya16saraswathi@gmail.com',
        subject: 'message from client',
        html: `
        <ul>
            <li><h1 style='color:green;'>Name: ${data.name}</h1></li>
            <li><h1 style='color:blue;'>Phone Number: ${data.phonenumber}</h1></li>
            <li><h1 style='color:red;'>Email: ${data.email}</h1></li>
            <li><h1 style='color:red;'>Message: ${data.message}</h1></li>
        </ul>
        `
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log(`Email sent: ${info.response}`)
        }
    })
    transporter.close()
})

app.listen(8000, () => {
    console.log('server starting up port 8000!')
})


// This code sets up an Express server that listens for requests on port 8000. It uses three npm packages: body-parser for parsing request bodies, nodemailer for sending emails, and express for creating the server.

// The server has two routes:

// A GET route that returns a simple HTML message as a response when a user accesses the root URL ("/").

// A POST route that accepts a JSON payload containing name, phone number, email, and message information in the request body, and sends an email containing this information using Nodemailer.

// The email is sent to a hardcoded email address specified in the mail options object. The email account credentials are also hardcoded in the auth object of the transporter.

// When the server receives a POST request to the "/api/sendEmail" route, it sends a response of "yes i got" and then parses the JSON payload from the request body. It then creates a Nodemailer transporter object using the Gmail service and the account credentials, and sets up the email options with the payload data. Finally, it sends the email using the transporter object and logs any errors or a success message to the console.

// Note that the transporter object is closed after sending the email.





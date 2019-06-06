const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const axios = require('axios')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json());       // to support JSON-encoded bodies
  server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));

  server.post("/signup", (req, res) => {
    const email = req.body.email;
    console.log('working sever : ' + email)

    const headers = {
      'Authorization': 'auth 135285658df618353e68137e3e032865-us18',
    };

    const data = {
      members: [
        {
          email_address: email,
          status: 'subscribed',
        }
      ]
    };
    const postData = JSON.stringify(data)
    axios.post('https://us18.api.mailchimp.com/3.0/lists/54c08eb83e/members',
        postData
        , {headers: headers}
    )
    .then(function (response) {
      console.log(response);
      res.send('complete')
    })
    .catch(function (error) {
      console.error(error);
      res.status(400).send(error)
    });
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) {
      throw err
    }
    console.log(`> Ready on http://localhost:${port}`)
  })
})
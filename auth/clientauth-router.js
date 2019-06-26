const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Clients = require('./clientauth-model.js');
const secrets = require('./client-secrets.js'); //added

// for endpoints beginning with /api/auth

router.post('/client-register', async (req, res) => {
    try {
      //ideal if i get fullname username passowrd
        const clientInfo = await req.body
        clientInfo.password = await bcrypt.hashSync(clientInfo.password, 10)
        const client = await Clients.addUser(clientInfo)
        res.status(201).json(client);
    }

    catch (error){
        console.log(error);
        res.status(500).json({
          message: 'Error creating a new client suckas',
        });
  
    }
  });

  router.post('/client-login', async (req, res) => {

    let {username, password} = req.body;
    try {
        const client = await Clients.findBy( { username })

      
        if (client && bcrypt.compareSync(password, client[0].password)){
          const token = generateToken(client);
          
          res.status(200).json({message:`Welcome client ${username}!`,
        token, client
        });

        }
        else {
            res.status(401).json({message: 'Invalid Credentials'})
        }
    }
    catch (error){
        console.log(error);
        res.status(500).json({
          message: 'Error creating a new client login suckas',
        });

    }
});

function generateToken(client) {
  const payload = {
    subject: client.id, // standard claim = sub
    username: client.username //boolean if not instructor then is client. True by default.
  };
  const secret = secrets.jwtSecret
  const options = {
  expiresIn: '1d',
  }
  return jwt.sign(payload, secret, options)
}


  
module.exports = router;

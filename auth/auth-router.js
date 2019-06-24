const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Instructors = require('./auth-model.js');
const secrets = require('./secrets.js'); //added

// for endpoints beginning with /api/auth

router.post('/register', async (req, res) => {
    try {
      //ideal if i get fullname username passowrd
        const insInfo = await req.body
        insInfo.password = await bcrypt.hashSync(insInfo.password, 10)
        const instructor = await Instructors.addUser(insInfo)
        res.status(201).json(instructor);
    }

    catch (error){
        console.log(error);
        res.status(500).json({
          message: 'Error creating a new user suckas',
        });
  
    }
  });

  router.post('/login', async (req, res) => {

    let {username, password} = req.body;
    try {
        const instructor = await Instructors.findBy( { username })

      
        if (instructor && bcrypt.compareSync(password, instructor[0].password)){
          const token = generateToken(instructor);
          
          res.status(200).json({message:`Welcome instructor ${username}!`,
        token, instructor
        });

        }
        else {
            res.status(401).json({message: 'Invalid Credentials'})
        }
    }
    catch (error){
        console.log(error);
        res.status(500).json({
          message: 'Error creating a new login suckas',
        });

    }
});

function generateToken(instructor) {
  const payload = {
    subject: instructor.id, // standard claim = sub
    username: instructor.username //boolean if not instructor then is client. True by default.
  };
  const secret = secrets.jwtSecret
  const options = {
  expiresIn: '1d',
  }
  return jwt.sign(payload, secret, options)
}


  
module.exports = router;

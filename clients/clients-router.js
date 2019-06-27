const server = require('../server.js')
const router = require('express').Router();
const Clients = require('./clients-model.js');
const restricted = require('../auth/restricted.js');


module.exports = router;


router.get('/', restricted, async (req, res) => {
    try {
   
    const clients = await Clients.findAll();
  
      res.status(200).json(clients);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the dang clients',
      });
    }
  });
  
  router.get('/:id/classes', restricted, async (req, res) => {
  
    try {
      const classes = await Clients.findClientClasses(req.params.id)
      
      res.status(200).json(classes);
    } 
    catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error getting the classes for the clients',
      });
    }
  });

  router.post('/:clientId/classes/:classId', restricted, async (req, res) => {
  
    try {

      const classe= {
          client_id:req.params.clientId, 
          class_id:req.params.classId, 
        }

      const classes = await Clients.clientClassSignup(classe)
      
      res.status(200).json(classes);
    } 
    catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error posting the class for the client',
      });
    }
  });

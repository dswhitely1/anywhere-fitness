const server = require('../server.js')
const router = require('express').Router();
const Classes = require('./class-model.js');
const restricted = require('../auth/restricted.js');


router.get('/:id', restricted, async (req, res) => {

    try {
      const classe = await Classes.findClassById(req.params.id)
      console.log(_class)

      res.status(200).json( classe);
    } 
    catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error getting the class',
      });
    }
  });

  router.post('/', restricted, async (req, res) => {

    try {
        console.log(req.body)
      const classe = await Classes.addClass(req.body)


      res.status(200).json(classe);
    } 
    catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error adding the class to the database',
      });
    }
  });


//   router.get('/classes, restricted, async (req, res) => {

//     try {
//       const classes = await Classes.findClassById(req.params.id)

//       res.status(200).json(classes);
//     } 
//     catch (error) {
//       // log error to server
//       console.log(error);
//       res.status(500).json({
//         message: 'Error getting the class',
//       });
//     }
//   });
  
  module.exports = router;
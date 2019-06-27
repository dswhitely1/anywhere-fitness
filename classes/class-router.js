const server = require('../server.js')
const router = require('express').Router();
const Classes = require('./class-model.js');
const restricted = require('../auth/restricted.js');



router.get('/', restricted, async (req, res) => {

    try {
      const classes = await Classes.findClasses()
      res.status(200).json( classes);
    } 
    catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error getting the classes',
      });
    }
  });

//get classes by category id
router.get('/categories/:categoryId', restricted, async (req, res) => {

    try {
      const classe = await Classes.findClassesByCatId(req.params.categoryId)
      

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

  router.delete('/:id', async (req, res) => {
    try {
    //   console.log(res)
    console.log('hello')
    const classe = await Classes.removeClass(req.params.id);
      res.status(200).json(classe);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error updating the dang cohorts',
      });
    }
  });

  router.put('/:id', async (req, res) => {
    try {
    
    console.log('hello')
    const classe = await Classes.updateClass(req.params.id, req.body);

      res.status(200).json(classe);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error updating the dang Class',
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
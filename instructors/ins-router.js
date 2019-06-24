const server = require('../server.js')
const router = require('express').Router();
const Instructors = require('./ins-model.js');
const restricted = require('../auth/restricted.js');


router.get('/', restricted, async (req, res) => {
  try {
 
  const instructors = await Instructors.find();

    res.status(200).json(instructors);
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the dang instructors',
    });
  }
});

router.get('/:id/classes', restricted, async (req, res) => {

  try {
    const classes = await Instructors.findInstructorClasses(req.params.id)
    console.log(req.params);
    res.status(200).json(classes);
  } 
  catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error getting the actions for the hub',
    });
  }
});

module.exports = router;
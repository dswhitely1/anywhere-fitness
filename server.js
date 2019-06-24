const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const authRouter = require('./auth/auth-router.js');
const insRouter = require('./instructors/ins-router.js');
const classRouter = require('./classes/class-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send("It's alive!");
});

server.use('/api/auth', authRouter);
server.use('/api/instructors', insRouter);
server.use('/api/classes', classRouter);




module.exports = server;








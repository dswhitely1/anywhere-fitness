const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const ClientauthRouter = require('./auth/clientauth-router.js');

const authRouter = require('./auth/auth-router.js');
const insRouter = require('./instructors/ins-router.js');
const classRouter = require('./classes/class-router.js');

const clientsRouter = require('./clients/clients-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send("It's alive!");
});
server.use('/api/auth', ClientauthRouter);
server.use('/api/auth', authRouter);
server.use('/api/instructors', insRouter);
server.use('/api/classes', classRouter);
server.use('/api/clients', clientsRouter);




module.exports = server;








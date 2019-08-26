const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const auth = require('../assist/auth/restrict.js')
const authRouter = require('../routes/auth/authRouter.js');
const readsRouter = require('../routes/readsRouter.js');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/reads', readsRouter);

module.exports = server;
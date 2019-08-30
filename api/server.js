const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const auth = require('../assist/auth/restrict.js')
const authRouter = require('../routes/auth/authRouter.js');
const usersRouter = require('../routes/usersRouter.js');
const booksRouter = require('../routes/booksRouter.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/books', booksRouter);

server.get('/', (req, res) => {
    res.send("<h1>Welcome to our Better Reads Server</h1>")
});

module.exports = server;
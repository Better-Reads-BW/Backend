const Users = require('../../database/models/usersModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../../assist/config/key');
const router = require('express').Router();


router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash;

    Users.add(user)
        .then(userSaved => {
            res.status(201).json(userSaved);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    Users.findByUser({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = getToken(user);
                res.status(200).json({ message: `Welcome ${user.username }!!!`, token});
            } else {
                res.status(401).json({
                    message: "Invalid credentials."
                })
            };
        })
        .catch(err => {
            res.status(500).json(err);
            console.log(err)
        })
});

function getToken(user) {
    const payload = {
        subject: user.id, 
        username: user.username,
        jwtid: user.id
    };
    const options = {
        expiresIn: '1d',
    }
    return jwt.sign(payload, secret.jwtSecret, options);
}


module.exports = router;
const Users  = require('../database/models/usersModels');
const router = require('express').Router();
const restrict = require('../assist/auth/restrict')

// get a list of users once logged in
router.get('/', restrict,(req, res) => {
    Users.find()
        .then(users => {
            if (users){
                res.status(200).json(users);
            } else {
                res.status(404).json({ message: "Could not find users" });

            }
        }).catch((err) => {
            res.status(500).json(users);
            
        });
});

// get a specific user by id
router.get('/:id',(req,res) => {
    let { id } = req.params;
    Users.findById(id)
        .then((user) => {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: "This user was not located."});
            }
        }).catch((err) => {
            res.status(500).json(err);
        });
});

// Update a user with { username, password, firstName, lastName, email, about me}
router.put('/:id/edit', restrict, (req, res) => {
    let user = req.body;
    let id = req.params.id;
    console.log(user,'<<<>>>', id)
    Users.update(user, id)
        .then(userUpdated => {
            if (userUpdated){
                res.status(200).json(userUpdated);
            } else {
                res.status(404).json({ message: "This user could not be updated"});
            }
        }).catch((err) => {
            res.status(500).json(err);
        });
        
});

// remove a user
router.delete('/:id/delete', restrict,(req, res) => {
    let { id } = req.params;

    Users.remove(id)
        .then((userDeleted) => {
            if (userDeleted) {
                res.status(200).json({ message: "User deleted successfully." });
            } else {
                res.status(404).json({ message: "User was not deleted." });
            }
        }).catch((err) => {
            res.status(500).json(err)
        });
})

module.exports = router;
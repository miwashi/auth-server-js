const userDomain = require('../domain/user');

exports.listUsers = (req, res) => {
    res.json(userDomain.listAllUsers());
};

exports.addUser = (req, res) => {
    const { username, password } = req.body;
    if (userDomain.userExists(username)) {
        res.status(409).json({ message: 'User already exists' });
    } else {
        userDomain.addUser(username, password);
        res.status(201).json({ message: 'User added successfully' });
    }
};

exports.removeUser = (req, res) => {
    const { username } = req.body;
    if (userDomain.removeUser(username)) {
        res.status(200).json({ message: 'User removed successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

exports.clearUsers = (req, res) => {
    userDomain.clearAllUsers();
    res.status(200).json({ message: 'All users cleared' });
};

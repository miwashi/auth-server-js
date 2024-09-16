const userDomain = require('../domain/user');

exports.listUsersByRole = (req, res) => {
    const { role } = req.query;
    const users = userDomain.findUsersByRole(role);
    if (users.length > 0) {
        res.json(users);
    } else {
        res.status(404).json({ message: 'No users found with the specified role' });
    }
};

exports.addUserWithRole = (req, res) => {
    const { username, password, role } = req.body;
    if (userDomain.userExists(username)) {
        res.status(409).json({ message: 'User already exists' });
    } else {
        userDomain.addUser(username, password, role);
        res.status(201).json({ message: 'User with role added successfully' });
    }
};

exports.listAllUsers = (req, res) => {
    res.json(userDomain.listAllUsers());
};

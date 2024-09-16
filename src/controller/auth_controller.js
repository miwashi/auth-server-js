const jwt = require('jsonwebtoken');
const userDomain = require('../domain/user');

const secretKey = 'yourSecretKey';

exports.login = (req, res) => {
    const { username, password } = req.body;
    const user = userDomain.findUserByUsername(username);

    if (user && userDomain.validateUserCredentials(username, password)) {
        const token = jwt.sign({ username: user.username, role: user.role }, secretKey, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

exports.register = (req, res) => {
    const { username, password, role } = req.body; // Assume role comes from the client, or assign a default role

    if (userDomain.userExists(username)) {
        res.status(409).json({ message: 'User already exists' });
    } else {
        userDomain.addUser(username, password, role);
        res.status(201).json({ message: 'User registered successfully' });
    }
};

exports.renew = (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        // Ensure to include the role in the renewed token
        const newToken = jwt.sign({ username: decoded.username, role: decoded.role }, secretKey, { expiresIn: '1h' });
        res.cookie('token', newToken, { httpOnly: true });
        res.status(200).json({ message: 'Token renewed successfully' });
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

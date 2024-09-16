const users = [
    { username: "admin", password: "password", role: "admin" },
    { username: "bob", password: "password", role: "user" },
    { username: "charlie", password: "password", role: "user" }
];

const addUser = (username, password, role = 'user') => {
    users.push({ username, password, role });
};

const findUserByUsername = (username) => {
    return users.find(user => user.username === username);
};

// Function to check if user credentials are valid
const validateUserCredentials = (username, password) => {
    const user = findUserByUsername(username);
    return user && user.password === password;
};

const userExists = (username) => {
    return !!findUserByUsername(username);
};

const listAllUsers = () => {
    return users.map(user => ({ username: user.username, role: user.role }));
};

const findUsersByRole = (role) => {
    return users.filter(user => user.role === role).map(user => ({ username: user.username, role: user.role }));
};

const removeUser = (username) => {
    const index = users.findIndex(user => user.username === username);
    if (index !== -1) {
        users.splice(index, 1);
        return true;
    }
    return false;
};

const clearAllUsers = () => {
    users.length = 0;
};

module.exports = {
    addUser,
    findUserByUsername,
    validateUserCredentials,
    userExists,
    listAllUsers,
    findUsersByRole,
    removeUser,
    clearAllUsers
};

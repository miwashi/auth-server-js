require('dotenv').config();

const getFrontendEnvironment = () => {
    return {
        apiUrl: process.env.API_URL || 'http://localhost:3000',
        someOtherVariable: process.env.SOME_OTHER_VARIABLE || 'default',
        // Add other variables relevant for the frontend
    };
};

module.exports = {
    getFrontendEnvironment
};

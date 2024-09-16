const envDomain = require('../domain/env_domain');

exports.getFrontendEnv = (req, res) => {
    const envVars = envDomain.getFrontendEnvironment();
    res.json(envVars);
};

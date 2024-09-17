const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Role Management API',
            version: '1.0.0',
            description: 'API for managing user roles',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
    },
    apis: ['./src/routes/*.js'],
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerOptions)));
app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

app.use(express.json());

app.use('/auth', require('./routes/auth_routes'));
app.use('/test', require('./routes/test_routes'));
app.use('/api/roles', require('./routes/role_routes'));
app.use('/api', require('./routes/env_routes'));
app.use('/api', require('./routes/feature_routes'));

module.exports = app;

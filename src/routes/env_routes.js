const express = require('express');
const envController = require('../controller/env_controller');
const router = express.Router();

/**
 * @swagger
 * /api/frontend-env:
 *   get:
 *     summary: Retrieve environment variables for the frontend
 *     description: Returns a JSON object containing environment variables that are safe to expose to the frontend.
 *     responses:
 *       200:
 *         description: A JSON object of environment variables.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 apiUrl:
 *                   type: string
 *                   example: "http://localhost:3000"
 *                 someOtherVariable:
 *                   type: string
 *                   example: "default"
 *       500:
 *         description: Internal server error
 */
router.get('/frontend-env', envController.getFrontendEnv);

module.exports = router;

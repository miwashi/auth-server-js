const express = require('express');
const featureController = require('../controller/feature_controller');
const router = express.Router();

/**
 * @swagger
 * /api/features:
 *   get:
 *     summary: Get all feature toggles
 *     description: Returns a JSON object containing all feature toggles and their current states.
 *     responses:
 *       200:
 *         description: A JSON object of feature toggles.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               additionalProperties:
 *                 type: boolean
 *       500:
 *         description: Internal server error
 */
router.get('/features', featureController.getAllFeatures);

/**
 * @swagger
 * /api/toggle-feature:
 *   post:
 *     summary: Toggle a feature's enable state
 *     description: Allows toggling the enabled state of a specified feature.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - featureName
 *               - isEnabled
 *             properties:
 *               featureName:
 *                 type: string
 *                 description: The name of the feature to toggle
 *                 example: "featureX"
 *               isEnabled:
 *                 type: boolean
 *                 description: The desired state of the feature
 *                 example: true
 *     responses:
 *       200:
 *         description: Returns the updated state of the feature.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 featureName:
 *                   type: string
 *                   example: "featureX"
 *                 isEnabled:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Invalid request parameters
 *       500:
 *         description: Internal server error
 */
router.post('/toggle-feature', featureController.toggleFeature);

module.exports = router;

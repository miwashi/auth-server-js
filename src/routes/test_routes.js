const express = require('express');
const testController = require('../controller/test_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     TestUser:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: The user's username
 *         password:
 *           type: string
 *           description: The user's password
 *       example:
 *         username: "johndoe"
 *         password: "password"
 */

/**
 * @swagger
 * /test/users:
 *   get:
 *     summary: Lists all test users
 *     tags: [Testing]
 *     responses:
 *       200:
 *         description: A list of all test users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TestUser'
 */

router.get('/users', testController.listUsers);

/**
 * @swagger
 * /test/users:
 *   post:
 *     summary: Adds a test user
 *     tags: [Testing]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TestUser'
 *     responses:
 *       201:
 *         description: Test user added successfully
 *       409:
 *         description: Test user already exists
 */

router.post('/users', testController.addUser);

/**
 * @swagger
 * /test/users:
 *   delete:
 *     summary: Removes a test user by username
 *     tags: [Testing]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username to remove
 *             required:
 *               - username
 *     responses:
 *       200:
 *         description: Test user removed successfully
 *       404:
 *         description: Test user not found
 */

router.delete('/users', testController.removeUser);

/**
 * @swagger
 * /test/clear-users:
 *   post:
 *     summary: Clears all test users
 *     tags: [Testing]
 *     responses:
 *       200:
 *         description: All test users cleared successfully
 */

router.post('/clear-users', testController.clearUsers);

module.exports = router;

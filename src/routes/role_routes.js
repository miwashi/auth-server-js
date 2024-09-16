const express = require('express');
const roleController = require('../controller/role_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - password
 *         - role
 *       properties:
 *         username:
 *           type: string
 *           description: The user's username
 *         password:
 *           type: string
 *           description: The user's password
 *         role:
 *           type: string
 *           description: The user's role
 *       example:
 *         username: "johndoe"
 *         password: "password"
 *         role: "admin"
 */

/**
 * @swagger
 * /api/roles/users:
 *   get:
 *     summary: Lists all users with their roles
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of all users with roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

router.get('/users', roleController.listAllUsers);

/**
 * @swagger
 * /api/roles/users:
 *   post:
 *     summary: Adds a user with a specific role
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User added successfully
 *       409:
 *         description: User already exists
 */

router.post('/users', roleController.addUserWithRole);

/**
 * @swagger
 * /api/roles/users/by-role:
 *   get:
 *     summary: Lists users by a specific role
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *         required: true
 *         description: The role to filter users by
 *     responses:
 *       200:
 *         description: A list of users filtered by the specified role
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       404:
 *         description: No users found with the specified role
 */

router.get('/users/by-role', roleController.listUsersByRole);

module.exports = router;

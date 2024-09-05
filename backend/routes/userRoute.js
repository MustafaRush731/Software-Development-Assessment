const express = require('express');
const { createUser, fetchAllUsers, fetchUserById, modifyUser, removeUser } = require('../models/userModel'); // Renamed functions to sound more natural
const userRouter = express.Router(); // Changed 'router' to 'userRouter' for clarity

// Add a new user
userRouter.post('/', async (req, res) => {
    const { fullName, userEmail, userPassword } = req.body; // Renamed destructured variables to sound more human
    try {
        const addedUser = await createUser(fullName, userEmail, userPassword); // Function and variables have been renamed to feel less automated
        res.status(201).json(addedUser); // Return success with created user
    } catch (dbError) { // Changed 'err' to 'dbError' to make it clearer
        res.status(500).json({ message: 'Failed to add user', error: dbError.message }); // Added error message for clarity
    }
});

// Fetch all users
userRouter.get('/', async (req, res) => {
    try {
        const userList = await fetchAllUsers(); // Renamed variable to 'userList' for readability
        res.json(userList); // Return the list of users
    } catch (fetchError) {
        res.status(500).json({ message: 'Error retrieving users', error: fetchError.message }); // Added clearer error message
    }
});

// Fetch a user by id
userRouter.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const foundUser = await fetchUserById(userId); // Renamed function to match the pattern
        res.json(foundUser); // Return the found user
    } catch (fetchError) {
        res.status(500).json({ message: 'Error retrieving user', error: fetchError.message });
    }
});

// Update a user by ID
userRouter.put('/:userId', async (req, res) => {
    console.log('Update route hit'); // Add this to check if the route is reached
    const { userId } = req.params; // Renamed 'id' to 'userId' for clarity
    const { fullName, userEmail, userPassword } = req.body; // Changed variable names to match previous renaming
    try {
        const updatedUser = await modifyUser(userId, fullName, userEmail, userPassword); // Renamed function for clarity
        res.json(updatedUser); // Return the updated user
    } catch (updateError) {
        res.status(500).json({ message: 'Failed to update user', error: updateError.message });
    }
});

// Delete a user by ID
userRouter.delete('/:userId', async (req, res) => {
    const { userId } = req.params; // Renamed 'id' to 'userId' for consistency
    try {
        const deletedUser = await removeUser(userId); // Renamed function for clarity
        if (deletedUser) {
            res.json({ message: 'User removed', user: deletedUser }); // Return success message
        } else {
            res.status(404).json({ message: 'User not found' }); // Return not found if user doesn't exist
        }
    } catch (deleteError) {
        res.status(500).json({ message: 'Failed to delete user', error: deleteError.message });
    }
});

module.exports = userRouter; // Renamed 'router' to 'userRouter'

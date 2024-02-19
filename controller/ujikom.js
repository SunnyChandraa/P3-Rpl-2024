const UsersModel = require('../service/ujikom');
const path = require('path');
const fs = require('fs');

const getAllUsers = async (req, res) => {
    try {
        const data = await UsersModel.getAllUsers();
    
        res.json({
            message: 'GET all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const getPhoto = async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../public/photoUpload/toji.png');
        
        res.sendFile(filePath);
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

module.exports = {
    getAllUsers,
    getPhoto
}
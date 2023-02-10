const UserModel = require('../models/user-model');
const ObjectID = require('mongoose').Types.ObjectId;

// Create User
module.exports.signUp = async (req, res) => {
    const {pseudo, email, password} = req.body;

    try {
        const user = await UserModel.create({pseudo, email, password});
        res.status(201).json({user: user._id});
    }
    catch(err) {
        res.status(400).send({err});
    }
};

// Read All Users
module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select(['-password', '-email']);
    res.status(200).json(users);
};
const UserModel = require('../models/user-model');
const ObjectID = require('mongoose').Types.ObjectId;

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

module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select(['-_id', '-password', '-email']);
    res.status(200).json(users);
};

module.exports.getOneUser = async (req, res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown: ' + req.params.id);

    UserModel.findById(req.params.id, (err, docs) => {
        if(!err) res.send(docs);
        else console.log('ID unknown: ' + err);
    }).select(['-_id', '-password', '-email']);
};
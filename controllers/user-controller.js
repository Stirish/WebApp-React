const { findByIdAndUpdate } = require('../models/user-model');
const UserModel = require('../models/user-model');
const ObjectID = require('mongoose').Types.ObjectId;


// Create
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

// Read
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

// Update
module.exports.updateUser = async (req, res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown: ' + req.params.id);

    try {
        await UserModel.findOneAndUpdate(
            req.params.id,
            {
                $set: { 
                    bio: req.body.bio 
                }
            },
            {
                new: true, 
                upsert: true,
                setDefaultsOnInsert: true,
            }
        )
            .then((err, docs) => {
                if (!err) return res.send(docs);
                if (err) return res.status(500).send({ message: err});
            })
        
    } catch (err) {
        return res.status(500).json({ message: err})
    }
};

// Delete
module.exports.deleteUser = async (req, res) => {
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown: ' + req.params.id);

    try {
        await UserModel.deleteOne({ _id: req.params.id }).exec();
        res.status(200).json({ message: "Successfully deleted"})
    }
    catch (err) {
        return res.stauts(500).json({message: err})
    }
};
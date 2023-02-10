const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema(
    {
       pseudo: {
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 55,
        trimp: true,
       },
       email: {
        type: String,
        required: true,
        validate: [isEmail],
        lowercase: true,
        trim: true,
       },
       password: {
        type: String,
        required: true,
        minlenght: 6,
        maxlenght: 1024,
       },
       picture: {
        type: String,
        default: '',
       },
       bio: {
        type: String,
        maxlenght: 1024,
       }
    },
    {
        timestamps: true,
    }
);

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;
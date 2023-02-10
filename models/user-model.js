const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
       pseudo: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 55,
        unique: true,
        trimp: true,
       },
       email: {
        type: String,
        required: true,
        validate: [isEmail],
        lowercase: true,
        unique: true,
        trim: true,
       },
       password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 1024,
       },
       picture: {
        type: String,
        default: '',
       },
       bio: {
        type: String,
        maxlength: 1024,
       }
    },
    {
        timestamps: true,
    }
);

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password= await bcrypt.hash(this.password, salt);
    next();
});

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;
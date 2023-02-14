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
       picture: {
        type: String,
        default: '',
       },
       coins: {
        type: Number,
        required: true,
        default: 100
       },
       bio: {
        type: String,
        maxlength: 1024,
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

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({email});
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
};

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;
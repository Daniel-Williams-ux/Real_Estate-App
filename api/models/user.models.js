import mongoose from 'mongoose'

//create the schema
const userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
},
    {timestamp: true}
)

//create the model
const User = mongoose.model('User', userSchema);

export default User;
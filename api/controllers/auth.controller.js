import User from '../models/user.models.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    const { user, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ user, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(200).json('User created successfully');
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json('Error creating user');
    }
}
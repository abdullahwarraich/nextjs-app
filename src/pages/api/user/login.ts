import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/db'
import User from '@/models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    await dbConnect();

    const { username, password } = req.body;

    //TODO: Passwords should be stored in encrypted form in the database, and they should not be stored as plain text.

    const user = await User.findOne({ username, password }).select({ "password": 0 });

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    return res.status(200).json({ user });


}

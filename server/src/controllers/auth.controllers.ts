import { Request, Response } from "express";
import {
	createUser,
	getUserByEmail,
} from '../services/users.services';
import { generateToken } from '../utils/jwt';


export const register = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { email, password } = req.body;
		
		if (!email || !password) {
			res.status(400);
			throw {
				code: 400,
				message: 'You must provde an email or password',
				data: null
			};
		}
		const existingUser = await getUserByEmail(email);
		if (existingUser) {
			res.status(400);
			throw {
				code: 400,
				message: 'Email already registered',
				data: null
			}
		}
		const user = await createUser({
			email, password,
			username: ""
		});
		const accessToken = generateToken(user);
		
		return res.status(200).json({
			user,
			accessToken
		});
	} catch (error) {
		return res.json(error)
	}
}



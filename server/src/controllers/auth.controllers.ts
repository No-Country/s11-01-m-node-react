import { Request, Response } from "express";
import {
	createUser,
	getUserByEmail,
} from '../services/users.services';
import { comparePassword } from "../utils/bcrypt";
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

export const login = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { email, password } = req.body
		if (!email || !password) {
			res.status(400)
			throw ({
				code: 400,
				message: 'You must provde an email or password',
				data: null
			})
		}
		const user = await getUserByEmail(email)
		if (!user) {
			res.status(400)
			throw ({
				code: 400,
				message: 'Invalid email',
				data: null
			})
		}

		const verifyPassword = await comparePassword(password, user.password)
		if (!verifyPassword) {
			res.status(401)
			throw ({
				code: 401,
				message: 'Invalid password',
				data: null
			})
		}

		const token = generateToken(user)
		return res.status(200).cookie('Authorization',
			token,
			{
				maxAge: 600000, // 10 minutes
				httpOnly: true
			}).json(
				{
					code: 200,
					message: null,
					data: {
						user: {
							id: user.id,
							userId: user.userId,
							email: user.email,
							username: user.username
						}
					}
				})
	} catch (error) {
		return res.json(error)
	}
}

export const logout = (_req: Request, res: Response): Response => {
	return res.status(200).clearCookie('Authorization').json(
		{
			code: 200,
			message: 'Logged out',
			data: null
		}
	)
}

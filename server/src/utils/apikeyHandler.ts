import { Request, Response } from 'express'

const keyHandler = (_req: Request, res: Response) => {
	const status: number = res.statusCode;
	if (status === 402) {
		console.log('Apikey exhausted, changhing api keys!')
		
	}
}

export default keyHandler;

import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { mongodb } from '..'
import { config } from 'dotenv'
config()

const { JWT_SECRET } = process.env

const fetchMenu = async (req: Request, res: Response) => {
	const db = mongodb.db('pizza-clone')
	const menu = db.collection('menu')
	const dishes = await menu.find().toArray()

	try {
		jwt.verify(req.cookies.token, JWT_SECRET)

		res.json({ success: false, action: 'redirect', message: 'you have already made an order' })
	} catch (err) {
		res.clearCookie('token').json({ success: true, action: 'stay', menu: dishes })
	}
}

export default fetchMenu

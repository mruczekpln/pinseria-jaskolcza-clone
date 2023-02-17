import { Request, Response } from 'express'
import { mongodb } from '..'
import { config } from 'dotenv'
config()

const { JWT_SECRET } = process.env

import jwt from 'jsonwebtoken'

const addOrder = async (req: Request, res: Response) => {
	const db = mongodb.db('pizza-clone')
	const orders = db.collection('orders')

	if (await orders.findOne({ ...req.body }))
		return res.json({ success: false, action: 'redirect', message: 'your order has been already received' })

	const token = jwt.sign(req.body.adress, JWT_SECRET, { expiresIn: '10m' })

	const status = await orders.insertOne({
		...req.body,
		status: 'received'
	})

	res.cookie('token', token, {
		maxAge: 1000 * 60 * 10,
		httpOnly: true
		// signed: true
	})

	return res.json(status)
}

export default addOrder

import { MongoClient } from 'mongodb'
import express, { Request, Response } from 'express'
import cors from 'cors'

import { config } from 'dotenv'
import { json } from 'stream/consumers'
config()

const app = express()

const { MONGODB_URI, PORT } = process.env
const mongodb = new MongoClient(MONGODB_URI)

app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

app.get('/api/fetchDishes', async (req: Request, res: Response) => {
	const db = mongodb.db('pizza-clone')
	const menu = db.collection('menu')
	const dishes = await menu.find().toArray()

	console.log(dishes)

	res.json(dishes)
})

app.listen(PORT, () => console.log(`listening at ${PORT}`))

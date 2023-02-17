import { MongoClient } from 'mongodb'
import express, { Request, Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import fetchMenu from './routes/fetchMenu'
import addOrder from './routes/addOrder'

import { config } from 'dotenv'
config()

const app = express()

const { MONGODB_URI, PORT, JWT_SECRET } = process.env
export const mongodb = new MongoClient(MONGODB_URI)

app.use(
	cors({
		origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
		allowedHeaders: [
			'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
			'Access-Control-Allow-Credentials'
		],
		credentials: true
	})
)
app.use(cookieParser())
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

app.get('/api/fetchMenu', fetchMenu)

app.post('/api/addOrder', addOrder)

app.listen(PORT, () => console.log(`listening at ${PORT}`))

import express from 'express'
import mongoose from 'mongoose'

import loggerMiddleware from './middleware/logger'
import errorMiddleware from './middleware/error'
import Chat from './schema/Chat'

const app = express()
const port = process.env.PORT || 8000

mongoose.connect(
	'mongodb+srv://dvalian:231297@mymongo-rxpl9.mongodb.net/test?retryWrites=true&w=majority',
	{ useNewUrlParser: true, useUnifiedTopology: true }
)

mongoose.connection.once('open', () => {
	console.log('We are connected to mongodb!!!')
})

app.use(loggerMiddleware)

app.use((req, res, next) => {
	const chat = new Chat({ title: 'HelloWorld' })

	chat.save().then(() => {
		console.log('Chat is created!')
		
		Chat.find((err, res) => {
			if (err) {
				console.log(err)
				return next(err)
			}

			console.log('Result:', res)
			next()
		})
	})
})

app.use(errorMiddleware)

app.listen(port, () => {
	console.log('Server is listenning on port', port)
})

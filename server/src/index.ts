import express from 'express'

import loggerMiddleware from './middleware/logger'
import errorMiddleware from './middleware/error'

const app = express()
const port = process.env.PORT || 8000

app.use(loggerMiddleware)

app.use(errorMiddleware)

app.listen(port, () => {
	console.log('Server is listenning on port', port)
})

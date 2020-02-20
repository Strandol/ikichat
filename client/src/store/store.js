import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const middlewares = (dev = false) => {
	const list = dev ? [] : []

	return applyMiddleware(...list)
}

const createProdStore = (reducer, state) =>
    createStore(reducer, state, compose(middlewares()))

const createDevStore = (reducer, state) => {
	const list = middlewares(true)
	const withDevTools = composeWithDevTools(list)

	return createStore(reducer, state, withDevTools)
}

export default (reducer, state) => {
	const isDev = process.env.NODE_ENV === 'development'

	const create = isDev ? createDevStore : createProdStore

	return create(reducer, state)
}

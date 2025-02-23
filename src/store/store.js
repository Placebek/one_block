import { configureStore } from '@reduxjs/toolkit'
import burgersReducer from './reducers/burgerListReducers'
import userBasket from './reducers/usersBasketReducers'

const store = configureStore({
	reducer: {
		burgers: burgersReducer,
		basket: userBasket,
	},
})

export default store

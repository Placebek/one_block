import API from './api'

export const authenticate = async () => {
	const response = await API.get('/recommendations/popular_music/')
	return response.data[0]
}

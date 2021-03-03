import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://api2.totalvoice.com.br',
})

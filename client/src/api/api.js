import axios from 'axios';

const instance = axios.create({
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

export const $api = async ({ url, type = 'GET', auth = false, body }) => {
	if (auth) {
		const token = localStorage.getItem('token');
		instance.defaults.headers.common['Authorization'] = token;
	}

	try {
		if (type === 'GET') {
			const { data } = await instance.get(url);
			return data;
		} else if (type === 'POST') {
			const { data } = await instance.post(url, body);
			return data;
		} else if (type === 'PUT') {
			const { data } = await instance.put(url, body);
			return data;
		} else if (type === 'DELETE') {
			const { data } = await instance.delete(url);
			return data;
		}
	} catch (e) {
		throw e.response && e.response.data ? e.response.data.message : e.message;
	}
};

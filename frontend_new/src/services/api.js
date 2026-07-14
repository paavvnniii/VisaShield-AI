
import axios from 'axios'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export async function predictTransaction(payload) {
  const response = await apiClient.post('/api/predict', payload)
  return response.data
}

export default apiClient
import api, { handleError } from '@/Services'

export default async userId => {
  if (!userId) {
    return handleError({ message: 'User ID is required' })
  }
  console.log("sdasdasd", userId);
  const response = await api.get(`users/${userId}`)
  return response.data
}

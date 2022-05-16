import axios from '@/middleware'
const user = localStorage.getItem('token')
// eslint-disable-next-line no-undef

export function getUser ()
{
    
    return axios.get(`users/me`, { headers: { Authorization: `Bearer ${user}` } })
}

import axios from '@/middleware'
const user = localStorage.getItem('token')
// eslint-disable-next-line no-undef

const res = 'transactions'
export function getTransactions ()
{
    return axios.get(res, { headers: { Authorization: `Bearer ${user}` } })
}

export function createTransaction (data)
{
    return axios.post(res, { data: data }, { headers: { Authorization: `Bearer ${user}` } })
}
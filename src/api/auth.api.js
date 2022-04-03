import { mande  } from 'mande'
const user = localStorage.getItem('token')
// eslint-disable-next-line no-undef
const transaction = mande(`${process.env.VUE_APP_API_URL}/transactions`)

export function setToken(token) {
    transaction.options.headers.Authorization = 'Bearer ' + token
}   

export function getTransactions ()
{
    console.log(user)
    return transaction.get()
}
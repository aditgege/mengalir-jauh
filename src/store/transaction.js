import { defineStore } from 'pinia'
import { getTransactions } from '@/api/auth.api'
export const useTransactionStore = defineStore('transaction', {
  state: () => ({
    transaction: [],
  }),
  actions: {
    async getTransactions(){
        await getTransactions()
        .then(res => {
            this.transaction = res.data
        })
        .catch(err => {
            console.log(err)
        })
    }
  }
})
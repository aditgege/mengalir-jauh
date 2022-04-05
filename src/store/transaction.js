import { defineStore } from 'pinia'
import { getTransactions } from '@/api/transaction.api'
export const useTransactionStore = defineStore('transaction', {
  state: () => ({
    transaction: [] ,
  }),
  actions: {
    async get(){
        await getTransactions()
        .then(res => {
            this.transaction = res.data.data
        })
        .catch(err => {
            console.log(err)
        })
    }
  },
  getters: {
    totalOutCome: state => {
      let total = 0
      state.transaction.forEach(item => {
        if (item.isIncome === false) {
          total += item.amount
        }
      })
      return total
    },
    totalIncome: state => {
      let total = 0
      state.transaction.forEach(item => {
        if (item.isIncome === true) {
          total += item.amount
        }
      })
      return total
    },
    allTransaction: state => {
      return state.transaction
    },
    incomeTransaction: state => {
      return state.transaction.filter(item => item.isIncome === true)
    },
    outComeTransaction: state => {
      return state.transaction.filter(item => item.isIncome === false)
    }
  }
})
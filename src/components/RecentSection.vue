<template>
  <div class="w-full px-2 py-16 sm:px-0">
    <TabGroup>
      <TabList class="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full py-2.5 text-sm leading-5 font-medium text-primary-dark rounded-lg',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary ring-primary-lighter ring-opacity-60',
              selected
                ? 'bg-white shadow'
                : 'text-primary-lightest-6 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
          v-for="(transactions, idx) in Object.values(categories)"
          :key="idx"
          :class="[
            'bg-white rounded-xl p-3',
            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary ring-primary-lighter  ring-opacity-60',
          ]"
        >
          <ul v-if="transactions.length > 0">
            <li
              v-for="transaction in transactions"
              :key="transaction.id"
              class="relative flex justify-between p-3 rounded-md hover:bg-coolGray-100"
            >
              <div>
                <h3 class="text-sm font-medium leading-5">
                {{ transaction.name }}
                </h3>

                <ul
                  class="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500"
                >
                  <li>{{ useDateFormat(transaction.date) }}</li>
                </ul>
              </div>
              <div>
                <Chip :type="!transaction.isIncome ? 'danger': 'success'">
                  {{ usePriceFormat(transaction.amount)}}
                </Chip>
              </div>

              <a
                href="#"
                :class="[
                  'absolute inset-0 rounded-md',
                  'focus:z-10 focus:outline-none focus:ring-2 ring-primary-lighter',
                ]"
              />
            </li>
          </ul>
          <span v-else>Belum ada transaksi...</span>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { useTransactionStore } from '@/store/transaction';
import useDateFormat from '@/composables/useDateFormat'
import usePriceFormat from '@/composables/usePriceFormat';
import Chip from '@/components/Chip.vue'
const transactionStore = useTransactionStore();
const { allTransaction, incomeTransaction, outComeTransaction } = storeToRefs(transactionStore);

const categories = ref({
  Semua: allTransaction,
  Pemasukan: incomeTransaction,
  Pengeluaran: outComeTransaction
})

</script>

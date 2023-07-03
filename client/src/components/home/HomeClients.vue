<script setup lang="ts">
import { DELETE_CLIENT } from '~/graphql/mutations/DeleteClient'
import type { GetHomeQuery } from '~/graphql/__generated__/graphql'
import type { NonNullable } from '~/utils/types'

defineProps<{
  data: NonNullable<NonNullable<GetHomeQuery>['clients']>
}>()

const { fetching, executeMutation: deleteClient } = useMutation(DELETE_CLIENT)
</script>

<template>
  <div v-if="fetching"><img src="/spinner.gif" alt="" draggable="false" class="mx-auto" /></div>
  <div v-else class="overflow-x-auto" style="-webkit-overflow-scrolling: touch">
    <table class="mt-2 w-full border-collapse table-auto">
      <colgroup>
        <col class="min-w-[250px]" />
        <col class="min-w-[150px]" />
        <col class="min-w-[150px]" />
        <col class="w-10" />
      </colgroup>
      <thead>
        <tr>
          <th class="border-b border-gray-300 p-4 pb-3 pl-6 pt-0 text-left font-semibold text-gray-700">Name</th>
          <th class="border-b border-gray-300 p-4 pb-3 pt-0 text-left font-semibold text-gray-700">Email</th>
          <th class="border-b border-gray-300 p-4 pb-3 pt-0 text-left font-semibold text-gray-700">Phone</th>
          <th class="border-b border-gray-300 p-4 pb-3 pr-6 pt-0 text-left font-semibold text-gray-700"></th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <template v-for="item in data">
          <tr v-if="item && item.id" :key="item.id">
            <td class="border-b border-gray-300 p-4 pl-6 text-gray-700">{{ item.name }}</td>
            <td class="border-b border-gray-300 p-4 text-gray-700">{{ item.email }}</td>
            <td class="border-b border-gray-300 p-4 text-gray-700">{{ item.phone }}</td>
            <td class="border-b border-gray-300 p-4 pr-6 text-gray-700">
              <button
                class="h-9 w-9 flex items-center justify-center rounded-2 bg-red-600/10 text-red-600"
                @click="deleteClient({ id: item.id })"
              >
                <span class="i-mdi-delete block text-lg" />
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

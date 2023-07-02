<template>
  <div class="overflow-x-auto" style="-webkit-overflow-scrolling: touch">
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
        <tr v-for="n in 3" :key="n">
          <td class="border-b border-gray-300 p-4 pl-6 text-gray-700">
            The Sliding Mr. Bones (Next Stop, Pottersville)
          </td>
          <td class="border-b border-gray-300 p-4 text-gray-700">Malcolm Lockyer</td>
          <td class="border-b border-gray-300 p-4 text-gray-700">1961</td>
          <td class="border-b border-gray-300 p-4 pr-6 text-gray-700">
            <button class="h-9 w-9 flex items-center justify-center rounded-2 bg-red-600/10 text-red-600">
              <span class="i-mdi-delete block text-lg" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

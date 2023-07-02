<template>
  <div class="grid grid-cols-12 mt-2 gap-5">
    <div
      v-for="n in 4"
      :key="n"
      class="col-span-6 flex flex-col items-start gap-2 border border-gray-300 rounded-2 p-4 lg:col-span-4 sm:flex-row"
    >
      <div class="flex-1">
        <h3 class="mb-1 text-lg">Mobile Application</h3>
        <p>Status: <span class="font-bold">In Progress</span></p>
      </div>
      <base-button class="text-sm">View</base-button>
    </div>
  </div>
</template>

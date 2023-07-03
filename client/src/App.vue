<script setup lang="ts">
import { Client, cacheExchange, fetchExchange, provideClient } from '@urql/vue'

const client = new Client({
  url: import.meta.env.VITE_APP_API_URL,
  exchanges: [cacheExchange, fetchExchange],
})

provideClient(client)
</script>

<template>
  <router-view />
</template>

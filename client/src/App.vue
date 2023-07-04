<script setup lang="ts">
import { Client, cacheExchange, fetchExchange, provideClient, subscriptionExchange } from '@urql/vue'
import { createClient as createWSClient } from 'graphql-ws'
import { removeHttp } from '~/utils/functions'

const apiURL = import.meta.env.VITE_APP_API_URL

const wsClient = createWSClient({ url: `ws://${removeHttp(apiURL)}` })

const client = new Client({
  url: apiURL,
  exchanges: [
    cacheExchange,
    fetchExchange,
    subscriptionExchange({
      forwardSubscription(request) {
        const input = { ...request, query: request.query || '' }
        return {
          subscribe(sink) {
            const unsubscribe = wsClient.subscribe(input, sink)
            return { unsubscribe }
          },
        }
      },
    }),
  ],
})

provideClient(client)
</script>

<template>
  <router-view />
</template>

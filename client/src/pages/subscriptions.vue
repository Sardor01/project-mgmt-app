<script setup lang="ts">
import { GREETINGS } from '~/graphql/subscriptions/Greetings'

const { data } = useSubscription({ query: GREETINGS }, (messages: (string | null | undefined)[] = [], response) => {
  return [response.greetings, ...messages]
})
</script>

<template>
  <main class="px-4 py-10 font-sans text-gray-700 container">
    <div>
      <pre>{{ JSON.stringify(data, null, 2) }}</pre>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'
import { GET_HOME } from '~/graphql/queries/GetHome'

const { data, fetching } = useQuery({ query: GET_HOME })
</script>

<template>
  <main class="px-4 py-10 font-sans text-gray-700 container">
    <div v-if="fetching"><img src="/spinner.gif" alt="" draggable="false" class="mx-auto" /></div>
    <div v-if="data" class="space-y-6">
      <details v-if="data.clients && data.clients.length" open>
        <summary class="cursor-pointer py-1 text-2xl font-semibold">Clients</summary>
        <home-clients :data="data.clients" />
      </details>

      <details v-if="data.projects && data.projects.length" open>
        <summary class="cursor-pointer py-1 text-2xl font-semibold">Projects</summary>
        <home-projects :data="data.projects" />
      </details>
    </div>
  </main>
</template>

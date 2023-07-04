<script setup lang="ts">
import { GET_HOME } from '~/graphql/queries/GetHome'

const { data, fetching } = useQuery({ query: GET_HOME })
</script>

<template>
  <main class="px-4 py-10 font-sans text-gray-700 container">
    <div class="mb-6 flex flex-wrap items-center gap-4">
      <router-link v-slot="{ href, navigate }" to="/clients/create" custom>
        <base-button :href="href" size="large" variant="gray" class="text-sm font-semibold uppercase" @click="navigate">
          <span class="i-mdi-account-plus mr-1 text-lg" />
          Create Client
        </base-button>
      </router-link>
      <router-link v-slot="{ href, navigate }" to="/projects/create" custom>
        <base-button :href="href" size="large" variant="gray" class="text-sm font-semibold uppercase" @click="navigate">
          <span class="i-mdi-book-plus mr-1 text-lg" />
          Create Project
        </base-button>
      </router-link>
    </div>
    <div v-if="fetching"><img src="/spinner.gif" width="150" alt="" draggable="false" class="mx-auto" /></div>
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

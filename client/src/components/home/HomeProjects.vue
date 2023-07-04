<script setup lang="ts">
import type { GetHomeQuery } from '~/graphql/__generated__/graphql'
import type { NonNullable } from '~/utils/types'

defineProps<{
  data: NonNullable<NonNullable<GetHomeQuery>['projects']>
}>()
</script>

<template>
  <div class="grid grid-cols-12 mt-2 gap-5">
    <template v-for="item in data">
      <div
        v-if="item && item.id"
        :key="item.id"
        class="col-span-6 flex flex-col items-start gap-2 border border-gray-300 rounded-2 p-4 lg:col-span-4 sm:flex-row"
      >
        <div class="flex-1">
          <h3 class="mb-1 text-lg">{{ item.name }}</h3>
          <p>
            Status: <span class="font-bold">{{ item.status }}</span>
          </p>
        </div>
        <router-link v-slot="{ href, navigate }" :to="`/projects/${item.id}`" custom>
          <base-button :href="href" size="small" variant="gray" class="text-sm" @click="navigate">View</base-button>
        </router-link>
      </div>
    </template>
  </div>
</template>

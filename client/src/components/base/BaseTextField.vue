<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const {
  is = 'input',
  type = 'text',
  autocomplete = 'off',
} = defineProps<{
  id: string
  label?: string
  placeholder?: string
  is?: 'input' | 'textarea'
  type?: 'text' | 'number' | 'tel' | 'email'
  autocomplete?: 'on' | 'off'
  message?: string
  error?: boolean
  wrapperClass?: string
  required?: boolean
}>()

const inputValue = defineModel<string | number | undefined>()

const inputBase = 'block w-full border rounded-2 px-3 leading-12 focus:outline-0 focus:ring-4'
const inputSize = computed(() => ``)

const inputVariant =
  'border-gray-200 bg-gray-100 text-dark-800 focus:(border-blue-400 ring-blue-400/30) placeholder:text-dark-800/60'
const inputVariantError =
  'border-red-100 bg-red-50 text-red-600 focus:(border-red-600 ring-red-600/30) placeholder:text-red-600/60'
</script>

<template>
  <div :class="wrapperClass">
    <label v-if="label" :for="id" class="mb-1 inline-block" :class="{ 'after:content-[\'*\'] after:ml-0.5': required }">
      {{ label }}</label
    >:
    <div class="relative">
      <input
        v-if="is === 'input'"
        v-bind="$attrs"
        :id="id"
        v-model="inputValue"
        :type="type"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :required="required"
        class="h-12 align-middle md:h-13"
        :class="[inputBase, error ? inputVariantError : inputVariant]"
      />
      <textarea
        v-else
        v-bind="$attrs"
        :id="id"
        v-model="inputValue"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :required="required"
        class="min-h-[100px]"
        :class="[inputBase, inputSize, error ? inputVariantError : inputVariant]"
      />
      <slot name="suffix" />
    </div>
    <div v-if="message" class="mt-1 block text-sm" :class="error && 'text-red-600'">
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { object, string } from 'yup'
import { ADD_CLIENT } from '~/graphql/mutations/AddClient'

const formSchema = object({
  name: string().required('Field is required'),
  email: string().email('Field must be email').required('Field is required'),
  phone: string().required('Field is required'),
})

const router = useRouter()

const { fetching, executeMutation: addClient } = useMutation(ADD_CLIENT)

const { handleSubmit } = useForm({ validationSchema: toTypedSchema(formSchema) })
const name = useField<string>('name')
const email = useField<string>('email')
const phone = useField<string>('phone')

const onSubmit = handleSubmit(async (values) => {
  const res = await addClient(values)
  if (!res.error) {
    await router.push('/')
  }
})
</script>

<template>
  <main class="px-4 py-10 font-sans text-gray-700 container">
    <router-link v-slot="{ href, navigate }" to="/" custom>
      <base-button :href="href" size="medium" variant="gray" class="mb-6" @click="navigate">
        <span class="i-mdi-chevron-left text-lg" />
        Back Home
      </base-button>
    </router-link>
    <form class="space-y-5" @submit.prevent="onSubmit">
      <base-text-field
        id="name"
        v-model="name.value.value"
        label="Name"
        placeholder="Elon Musk"
        :message="name.errorMessage.value"
        :error="!name.meta.valid && !!name.errorMessage.value"
      />
      <base-text-field
        id="email"
        v-model="email.value.value"
        type="email"
        label="Email"
        placeholder="elon@musk.io"
        :message="email.errorMessage.value"
        :error="!email.meta.valid && !!email.errorMessage.value"
      />
      <base-text-field
        id="phone"
        v-model="phone.value.value"
        type="tel"
        label="Phone"
        placeholder="123-456-7890"
        :message="phone.errorMessage.value"
        :error="!phone.meta.valid && !!phone.errorMessage.value"
      />
      <base-button
        size="large"
        variant="gray"
        class="text-sm font-semibold uppercase !mt-7"
        :disabled="fetching"
        :loading="fetching"
      >
        Create Client
      </base-button>
    </form>
  </main>
</template>

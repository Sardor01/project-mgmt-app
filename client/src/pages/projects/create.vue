<script setup lang="ts">
import { mixed, object, string } from 'yup'
import { GET_CLIENTS } from '~/graphql/queries/GetClients'
import { ADD_PROJECT } from '~/graphql/mutations/AddProject'
import { ProjectStatus } from '~/graphql/__generated__/graphql'

const formSchema = object({
  name: string().required('Field is required'),
  description: string().required('Field is required'),
  status: mixed<ProjectStatus>().oneOf(Object.values(ProjectStatus)).required('Field is required'),
  clientId: string().required('Field is required'),
})

const router = useRouter()

const { data, fetching: clientsFetching } = useQuery({ query: GET_CLIENTS })
const { fetching: projectFetching, executeMutation: addProject } = useMutation(ADD_PROJECT)

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(formSchema),
  initialValues: { status: ProjectStatus.NotStarted },
})
const name = useField<string>('name')
const description = useField<string>('description')
const status = useField<string>('status')
const clientId = useField<string | number>('clientId')

const onSubmit = handleSubmit(async (values) => {
  const res = await addProject(values)
  if (!res.error) {
    await router.push('/')
  }
})
</script>

<template>
  <main class="px-4 py-10 font-sans text-gray-700 container">
    <router-link v-slot="{ href, navigate }" to="/" custom>
      <base-button :href="href" size="medium" class="mb-6" @click="navigate">
        <span class="i-mdi-chevron-left text-lg" />
        Back Home
      </base-button>
    </router-link>
    <form class="space-y-5" @submit.prevent="onSubmit">
      <base-text-field
        id="name"
        v-model="name.value.value"
        label="Project title"
        :message="name.errorMessage.value"
        :error="!name.meta.valid && !!name.errorMessage.value"
      />
      <base-text-field
        is="textarea"
        id="description"
        v-model="description.value.value"
        label="Project description"
        :message="description.errorMessage.value"
        :error="!description.meta.valid && !!description.errorMessage.value"
      />
      <base-select
        id="clientId"
        v-model="clientId.value.value"
        :options="data && data.clients  ? data.clients.filter((i) => i && i.id && i.name).map((i) => ({ label: i!.name!, value: i!.id! })) : []"
        label="Project client"
        placeholder="Choose project client"
        :message="clientId.errorMessage.value"
        :error="!clientId.meta.valid && !!clientId.errorMessage.value"
      />
      <base-select
        id="status"
        v-model="status.value.value"
        :options="Object.values(ProjectStatus)"
        label="Project status"
        :message="status.errorMessage.value"
        :error="!status.meta.valid && !!status.errorMessage.value"
      />
      <base-button
        size="large"
        class="text-sm font-semibold uppercase !mt-7"
        :disabled="clientsFetching || projectFetching"
        :loading="clientsFetching || projectFetching"
      >
        Create Project
      </base-button>
    </form>
  </main>
</template>

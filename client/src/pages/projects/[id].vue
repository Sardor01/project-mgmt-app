<script setup lang="ts">
import type { RouteLocationResolved } from 'vue-router/auto'
import { mixed, object, string } from 'yup'
import { GET_CLIENTS } from '~/graphql/queries/GetClients'
import { GET_PROJECT } from '~/graphql/queries/GetProject'
import { UPDATE_PROJECT } from '~/graphql/mutations/UpdateProject'
import { DELETE_PROJECT } from '~/graphql/mutations/DeleteProject'
import { ProjectStatusUpdate } from '~/graphql/__generated__/graphql'

const formSchema = object({
  name: string().required('Field is required'),
  description: string().required('Field is required'),
  status: mixed<ProjectStatusUpdate>().oneOf(Object.values(ProjectStatusUpdate)).required('Field is required'),
  clientId: string().required('Field is required'),
})

const route = useRoute() as RouteLocationResolved<'/projects/[id]'>
const router = useRouter()

const { data: clientsData, fetching: clientsFetching } = useQuery({ query: GET_CLIENTS })
const {
  data: projectData,
  fetching: projectFetching,
  then,
} = useQuery({ query: GET_PROJECT, variables: { id: route.params.id } })
const { fetching: updateProjectFetching, executeMutation: updateProject } = useMutation(UPDATE_PROJECT)
const { fetching: deleteProjectFetching, executeMutation: deleteProject } = useMutation(DELETE_PROJECT)

const { handleSubmit, setValues } = useForm({
  validationSchema: toTypedSchema(formSchema),
  initialValues: { status: ProjectStatusUpdate.NotStarted },
})
const name = useField<string>('name')
const description = useField<string>('description')
const status = useField<string>('status')
const clientId = useField<string | number>('clientId')

const isLoading = computed(() => {
  return clientsFetching.value || projectFetching.value || updateProjectFetching.value || deleteProjectFetching.value
})

const onSubmit = handleSubmit(async (values) => {
  const res = await updateProject({ ...values, id: route.params.id })
  if (!res.error) await router.push('/')
})

const onDelete = async () => {
  const res = await deleteProject({ id: route.params.id })
  if (!res.error) await router.push('/')
}

then(() => {
  if (projectData.value && projectData.value.project) {
    const project = projectData.value.project
    setValues({
      name: project.name || '',
      description: project.description || '',
      status: (project.status
        ? project.status.split(' ').join('_').toUpperCase()
        : ProjectStatusUpdate.NotStarted) as ProjectStatusUpdate,
      clientId: project.client?.id || '',
    })
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
        :options="clientsData && clientsData.clients ? clientsData.clients.filter((i) => i && i.id && i.name).map((i) => ({ label: i!.name!, value: i!.id! })) : []"
        label="Project client"
        placeholder="Choose project client"
        :message="clientId.errorMessage.value"
        :error="!clientId.meta.valid && !!clientId.errorMessage.value"
      />
      <base-select
        id="status"
        v-model="status.value.value"
        :options="Object.values(ProjectStatusUpdate)"
        label="Project status"
        :message="status.errorMessage.value"
        :error="!status.meta.valid && !!status.errorMessage.value"
      />
      <div class="flex flex-wrap items-center gap-4">
        <base-button
          size="large"
          variant="gray"
          class="text-sm font-semibold uppercase !mt-7"
          :disabled="isLoading"
          :loading="isLoading"
        >
          Update Project
        </base-button>
        <base-button
          type="submit"
          size="large"
          variant="red"
          class="text-sm font-semibold uppercase !mt-7"
          :disabled="isLoading"
          :loading="isLoading"
          @click="onDelete"
        >
          Delete Project
        </base-button>
      </div>
    </form>
  </main>
</template>

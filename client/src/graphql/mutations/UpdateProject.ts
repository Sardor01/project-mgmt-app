import { gql } from '@urql/vue'
import type { UpdateProjectMutation, UpdateProjectMutationVariables } from '~/graphql/__generated__/graphql'

export const UPDATE_PROJECT = gql<UpdateProjectMutation, UpdateProjectMutationVariables>`
  mutation UpdateProject($id: ID!, $name: String, $description: String, $status: ProjectStatusUpdate) {
    updateProject(id: $id, name: $name, description: $description, status: $status) {
      id
      name
    }
  }
`

import { gql } from '@urql/vue'
import type { AddProjectMutation, AddProjectMutationVariables } from '~/graphql/__generated__/graphql'

export const ADD_PROJECT = gql<AddProjectMutation, AddProjectMutationVariables>`
  mutation AddProject($name: String!, $description: String!, $clientId: ID!, $status: ProjectStatus) {
    addProject(name: $name, description: $description, clientId: $clientId, status: $status) {
      id
      name
    }
  }
`

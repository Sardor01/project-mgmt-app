import { gql } from '@urql/vue'
import type { DeleteClientMutation, DeleteClientMutationVariables } from '~/graphql/__generated__/graphql'

export const DELETE_PROJECT = gql<DeleteClientMutation, DeleteClientMutationVariables>`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
      name
    }
  }
`

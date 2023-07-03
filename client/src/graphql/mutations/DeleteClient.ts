import { gql } from '@urql/vue'
import type { DeleteClientMutation, DeleteClientMutationVariables } from '~/graphql/__generated__/graphql'

export const DELETE_CLIENT = gql<DeleteClientMutation, DeleteClientMutationVariables>`
  mutation DeleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
    }
  }
`

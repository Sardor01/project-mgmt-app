import { gql } from '@urql/vue'
import type { AddClientMutation, AddClientMutationVariables } from '~/graphql/__generated__/graphql'

export const ADD_CLIENT = gql<AddClientMutation, AddClientMutationVariables>`
  mutation AddClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id
      name
    }
  }
`

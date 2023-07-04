import { gql } from '@urql/vue'
import type { GetClientsQuery } from '~/graphql/__generated__/graphql'

export const GET_CLIENTS = gql<GetClientsQuery>`
  query GetClients {
    clients {
      id
      name
    }
  }
`

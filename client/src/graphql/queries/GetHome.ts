import { gql } from '@urql/vue'
import type { GetHomeQuery } from '~/graphql/__generated__/graphql'

export const GET_HOME = gql<GetHomeQuery>`
  query GetHome {
    clients {
      id
      name
      email
      phone
    }
    projects {
      id
      name
      description
      status
    }
  }
`

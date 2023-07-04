import { gql } from '@urql/vue'
import type { GetProjectQuery, GetProjectQueryVariables } from '~/graphql/__generated__/graphql'

export const GET_PROJECT = gql<GetProjectQuery, GetProjectQueryVariables>`
  query GetProject($id: ID!) {
    project(id: $id) {
      name
      description
      status
      client {
        id
      }
    }
  }
`

import { gql } from '@urql/vue'
import type { GreetingsSubscription } from '~/graphql/__generated__/graphql'

export const GREETINGS = gql<GreetingsSubscription>`
  subscription Greetings {
    greetings
  }
`

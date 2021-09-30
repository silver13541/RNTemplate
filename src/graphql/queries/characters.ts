import { gql } from '@apollo/client'

export const CHARACTERS_QUERY = gql`
  query Characters {
    characters {
      results {
        name
        status
        image
      }
    }
  }
`

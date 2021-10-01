import { gql } from '@apollo/client'

const CHARACTERS_QUERY = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        status
        image
      }
    }
  }
`

export { CHARACTERS_QUERY }

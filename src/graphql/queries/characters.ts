import { gql } from '@apollo/client'

const CHARACTERS_QUERY = gql`
  query Characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
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

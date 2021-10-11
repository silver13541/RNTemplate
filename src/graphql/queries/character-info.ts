import { gql } from '@apollo/client'

const CHARACTER_QUERY = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      gender
      type
      origin {
        id
        name
      }
      location {
        id
        name
      }
      episode {
        id
        episode
        name
        air_date
      }
    }
  }
`

export { CHARACTER_QUERY }

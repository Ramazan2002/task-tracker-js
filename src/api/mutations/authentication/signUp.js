import {gql} from '@apollo/client'
import {USER_PARTIAL_FRAGMENT} from '../../fragments/user'

export const SIGN_UP_MUTATION = gql`
  mutation signUp(
    $email: String!
    $password: String!
    $firstName: String
    $lastName: String
  ) {
    signup(
      input: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      accessToken
      refreshToken
      me {
        ${USER_PARTIAL_FRAGMENT}
      }
    }
  }
`

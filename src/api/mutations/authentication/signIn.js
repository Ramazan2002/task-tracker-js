import {gql} from '@apollo/client'
import {USER_PARTIAL_FRAGMENT} from '../../fragments/user'

export const SIGN_IN_MUTATION = gql`
  mutation ($login: String!, $password: String!) {
    signin(input: {email: $login, password: $password}) {
      accessToken
      me {
        ${USER_PARTIAL_FRAGMENT}
      }
      refreshToken
    }
  }
`

export default async function signIn(client, params) {
  const {
    data: {signin}
  } = await client.mutate({mutation: SIGN_IN_MUTATION, variables: params})
  return signin
}

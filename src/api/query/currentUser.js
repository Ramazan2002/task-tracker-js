import {gql} from '@apollo/client'
import {USER_PARTIAL_FRAGMENT} from '../fragments/user'
import projectFragment from '../fragments/project'
import taskFragment from '../fragments/task'
import commentFragment from '../fragments/comment'

export const CURRENT_USER = gql`
  query currentUser {
    me {
      ${USER_PARTIAL_FRAGMENT}
      projects {
        ...ProjectFragment
        tasks {
          ...TaskFragment
          comments {
            ...CommentFragment
            creator {
              ${USER_PARTIAL_FRAGMENT}
            }
          }
          creator {
            ${USER_PARTIAL_FRAGMENT}
          }
        }
        creator {
          ${USER_PARTIAL_FRAGMENT}
        }
        users {
          ${USER_PARTIAL_FRAGMENT}
        }
      }
    }
  }
  ${projectFragment}
  ${taskFragment}
  ${commentFragment}
`

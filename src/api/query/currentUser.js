import {gql} from '@apollo/client'
import {USER_PARTIAL_FRAGMENT} from '../fragments/user'
import {PROJECT_FRAGMENT} from '../fragments/project'
import {TASK_FRAGMENT} from '../fragments/task'
import {COMMENT_FRAGMENT} from '../fragments/comment'

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
  ${PROJECT_FRAGMENT}
  ${TASK_FRAGMENT}
  ${COMMENT_FRAGMENT}
`

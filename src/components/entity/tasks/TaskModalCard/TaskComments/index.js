import React from 'react'
import Box from '@mui/material/Box'
import CustomLabel from '../../../mui/CustomLabel'
import CommentCard from '../../../comments/CommentCard'
import {useStyle} from './components'

export default function TaskComments({comments}) {
  const classes = useStyle()
  return (
    <Box className={classes.root}>
      <CustomLabel label="Comments" />
      <Box className={classes.comments}>
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            id={comment.id}
            text={comment.text}
            creator={comment.creator}
            createdAt={comment.createdAt}
            updatedAt={comment.updatedAt}
          />
        ))}
      </Box>
    </Box>
  )
}

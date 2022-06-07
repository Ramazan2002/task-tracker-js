import React from 'react'
import ModalCard from '../../modals/ModalCard'
import Box from '@mui/material/Box'
import ProjectUpdateForm from './ProjectUpdateForm'
import ProjectAddUser from './ProjectAddUser'
import {useStyle} from './components'

export default function ProjectModalCard({project, onCloseModalClick}) {
  const classes = useStyle()
  return (
    <ModalCard onCloseModalClick={onCloseModalClick}>
      <Box className={classes.root}>
        <ProjectUpdateForm project={project} />
        <ProjectAddUser project={project} />
      </Box>
    </ModalCard>
  )
}

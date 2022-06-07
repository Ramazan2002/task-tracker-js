import React from 'react'
import useDestoryProject from '../../../../../hooks/mutations/projects/useDestroyProject'
import Box from '@mui/material/Box'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import {useStyle} from './components'

export default function Header({id, name, onProjectShowClick}) {
  const {destroyProject} = useDestoryProject()
  const classes = useStyle()

  function handleDestroy() {
    const result = confirm('Are you sure you want to delete this project?')
    if (result) destroyProject(id)
  }
  return (
    <Box component="div" className={classes.root}>
      <Typography className={classes.name}>{name}</Typography>
      <IconButton
        className={classes.icon}
        sx={{color: '#8585e0'}}
        onClick={() => onProjectShowClick()}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        className={classes.icon}
        sx={{color: '#ff751a'}}
        color="warning"
        onClick={() => handleDestroy()}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  )
}

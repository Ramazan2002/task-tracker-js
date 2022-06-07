import React from 'react'

import Box from '@material-ui/core/Box'
import Header from './Header'

import TaskCard from '../../tasks/TaskCard'
import TasksCardsWrapper from '../../tasks/TasksCardsWrapper'
import TaskCreateForm from '../../tasks/TaskCreateForm'
import {useStyle} from './components'

export default function ProjectCard({
  id,
  name,
  tasks,
  onTaskShowClick,
  onProjectShowClick
}) {
  const classes = useStyle()

  return (
    <Box className={classes.root}>
      <Header
        id={id}
        name={name}
        onProjectShowClick={onProjectShowClick}
      ></Header>
      <TasksCardsWrapper>
        {tasks?.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            status={task.status}
            createdAt={task.createdAt}
            onTaskShowClick={() => {
              onTaskShowClick(id, task.id)
            }}
          />
        ))}
      </TasksCardsWrapper>
      <TaskCreateForm projectId={id} />
    </Box>
  )
}

import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    backgroundColor: '#fda4d0',
    minWidth: 300,
    borderRadius: 5
  },

  form: {
    padding: '30px 10px 20px 10px'
  },

  action: {
    display: 'flex',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  iconButton: {
    '&:hover': {
      background: '#403d3d'
    }
  }
}))

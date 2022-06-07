import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    width: '220px',
    minHeight: '40px',
    padding: '5px 7px 0px 7px',
    marginBottom: '20px',
    borderRadius: '5px',
    backgroundColor: '#8000ff',
    border: '2px solid #6b6867',
    height: 'auto',
    transition: 'all 0.5s',
    '&:hover': {
      border: '2px solid #197da5',
      background: '#bf80ff'
    }
  },

  title: {
    color: 'white',
    fontWeight: 'bold',
    '-webkit-user-select': 'none'
  }
}))

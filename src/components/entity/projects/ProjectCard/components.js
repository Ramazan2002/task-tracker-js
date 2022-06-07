import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    minWidth: '250px',
    maxWidth: '250px',
    padding: '10px',
    marginRight: '25px',
    borderRadius: '10px',
    backgroundColor: '#fda4d0',
    maxHeight: '95%',
    overFlowY: 'auto',
    display: 'flex',
    flexDirection: 'column'
  }
}))

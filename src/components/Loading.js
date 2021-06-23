import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  root: {
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pharagraph: {
    marginTop: 10,
    fontSize: 14,
    color: 'white'
  }
}));

export const Loading = ({title}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.root} />
      <p className={classes.pharagraph} ><b>{title}</b></p>
    </div>
  );
}

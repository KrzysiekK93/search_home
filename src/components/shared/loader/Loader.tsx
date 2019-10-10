import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import ILoading from './interface';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      margin: theme.spacing(2),
    },
    progressWrapper: {
        position: 'relative',
        textAlign: 'center'
    }
  }),
);

const Loader: React.FC<ILoading> = (props: ILoading) => {
    const classes = useStyles();
    if (props.pending){
        return (
            <div className={classes.progressWrapper}>
                <CircularProgress className={classes.progress} />
            </div>
        );
    } else {
        return(<div></div>);
    }
}

export default Loader;
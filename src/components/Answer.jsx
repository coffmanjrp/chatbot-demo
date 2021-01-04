import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      marginBottom: '8px',
      backgroundColor: '#fff',
      borderColor: '#ffb549',
      fontWeight: 600,
      color: '#ffb549',
      '&:hover': {
        backgroundColor: '#ffb549',
        color: '#fff',
      },
    },
  })
);

function Answer(props) {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="outlined"
      onClick={() => props.select(props.content, props.nextId)}
    >
      {props.content}
    </Button>
  );
}

export default Answer;

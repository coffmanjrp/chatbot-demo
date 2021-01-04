import React from 'react';
import { Chat } from './index';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles(() =>
  createStyles({
    chats: {
      padding: 0,
      height: '400px',
      overflow: 'auto',
    },
  })
);

function Chats(props) {
  const classes = useStyles();

  return (
    <List className={classes.chats}>
      {props.chats.map((chat, index) => {
        return (
          <Chat text={chat.text} type={chat.type} key={index.toString()} />
        );
      })}
    </List>
  );
}

export default Chats;

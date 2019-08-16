import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Drawer,
  Divider,
  createStyles,
  makeStyles,
  Theme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { AssignmentInd } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      position: 'fixed',
      zIndex: 50,
      backgroundColor: theme.palette.primary.main,
      width: '298px'
    },
    toolBar: {
      paddingTop: '4.5rem'
    }
  })
);

const Navigation: React.FC = () => {
  const classes = useStyles();

  return (
    <Drawer
      variant="persistent"
      open={true}
      anchor="left"
      classes={{ paper: classes.drawer }}
    >
      <Toolbar className={classes.toolBar}>
        <List>
          <Divider variant="middle" />
          <ListItem>
            <ListItemIcon>
              <AssignmentInd />
            </ListItemIcon>
            <ListItemText>Multiplayer</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Forum</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>About</ListItemText>
          </ListItem>
        </List>
      </Toolbar>
    </Drawer>
  );
};

export default Navigation;

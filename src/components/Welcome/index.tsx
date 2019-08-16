import React from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Typography
} from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';
import Jumbotron from './Jumbotron';
import Descriptions from './Descriptions';
import Footer from './Footer';
import { useWindowManager } from 'components/WindowManager';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    surface: {
      backgroundColor: theme.palette.primary.main,
      width: '100vw'
    },
    mainLogo: {
      width: '200%',
      justifyContent: 'center',
      height: '32vw'
    },
    titleBox: {
      marginTop: '5.5rem'
    },
    titleSub: {
      marginTop: '2rem',
      color: theme.palette.secondary.contrastText,
      height: '24px',
      fontFamily: "'Trajan Sans Pro', 'Roboto'"
    },
    ribbon: {
      marginTop: '-40px',
      marginLeft: '-100vw',
      width: '300vw',
      height: '56px',
      color: theme.palette.secondary.contrastText,
      boxSizing: 'border-box',
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.dark,
      borderWidth: '4px 0px 4px 0px',
      borderStyle: 'solid',
      '& h5': {
        fontFamily: "'Trajan Sans Pro', 'Roboto'"
      }
    },
    iconLargeSecondary: {
      color: theme.palette.secondary.dark,
      fontSize: '10rem'
    }
  })
);

const Welcome: React.FC = () => {
  const classes = useStyles();
  const scroll = useWindowManager();

  return (
    <Grid container className={classes.surface}>
      <Grid
        container
        style={{ height: scroll.clientHeight - 60 }}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={4} className={classes.mainLogo}>
          <Jumbotron />
        </Grid>
        <Grid item xs={6} className={classes.titleBox}>
          <Typography variant="h1" align="center">
            Be The History!
          </Typography>
          <Typography variant="h5" align="center" className={classes.titleSub}>
            The Civilization VI Multiplayer Platform
          </Typography>
          <div className={classes.ribbon} />
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ height: '0px' }}>
        <KeyboardArrowDown
          className={classes.iconLargeSecondary}
          style={{
            width: '100vw',
            marginTop: '-5rem',
            marginRight: 'auto',
            marginLeft: 'auto',
            position: 'relative',
            bottom: 0
          }}
        />
      </Grid>
      <Descriptions />
      <Footer />
    </Grid>
  );
};

export default Welcome;

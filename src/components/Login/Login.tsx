import React from 'react';
import {
  Divider,
  createStyles,
  makeStyles,
  Theme,
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import logo from 'assets/image/banner/discord/white.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    marginalized: {
      margin: '1rem 1rem 1rem 0'
    },
    icon: {
      color: theme.palette.secondary.dark,
      fontSize: '10rem',
      marginTop: '0.75rem'
    }
  })
);

const Login: React.FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={5}>
        <Typography variant="h2" align="right" className={classes.marginalized}>
          Sign-in / Sign-up
        </Typography>
        <Divider style={{ marginLeft: '-10vw' }} />
        <Typography
          variant="body1"
          align="right"
          className={classes.marginalized}
        >
          We use Discord for the entire authentication process.
          <br />
          Please sign in to your account, or register if you do not have a one.
        </Typography>
      </Grid>
      <Grid container justify="center" item xs={2} alignItems="center">
        <Grid item>
          <KeyboardArrowRight
            style={{ display: 'flex' }}
            className={classes.icon}
          />
        </Grid>
      </Grid>
      <Grid container justify="center" item xs={4} alignItems="center">
        <Grid item>
          <Button
            variant="contained"
            style={{ backgroundColor: '#7289DA', marginTop: '0.75rem' }}
          >
            <img
              src={logo}
              style={{ height: '5rem', margin: '0.5rem 2rem 0.5rem 2rem' }}
            />
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </React.Fragment>
  );
};

export default Login;

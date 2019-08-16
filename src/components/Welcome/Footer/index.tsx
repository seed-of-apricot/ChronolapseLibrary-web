import React from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Button
} from '@material-ui/core';
import { Explore, DeveloperBoard, AssignmentInd } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    surfaceMain: {
      backgroundColor: theme.palette.primary.main,
      height: '45vh',
      padding: '2rem 0 2rem 0'
    },
    title: {
      paddingBottom: '1rem',
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    button: {
      fontSize: '1.25rem',
      width: '14rem',
      height: '4rem',
      float: 'left',
      margin: '1rem 0 1rem 0'
    },
    icon: {
      fontSize: '2.5rem',
      margin: '0 1rem 0 0'
    },
    description: {
      marginTop: '1rem',
      height: '4rem',
      paddingLeft: '1rem',
      display: 'flex',
      alignItems: 'center',
      whiteSpace: 'nowrap'
    }
  })
);
const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container justify="center" className={classes.surfaceMain}>
        <Grid container item xs={12} justify="center">
          <Typography variant="h3" align="center" className={classes.title}>
            Ready to begin your journey?
          </Typography>
        </Grid>
        <Grid container justify="center" alignContent="center">
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              <Explore className={classes.icon} />
              Explore
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Typography variant={'body1'} className={classes.description}>
              Visit the site and see how it works.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" alignContent="center">
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              <AssignmentInd className={classes.icon} />
              Sign up
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Typography variant={'body1'} className={classes.description}>
              Join the website and start your histroy.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" alignContent="center">
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              <DeveloperBoard className={classes.icon} />
              Dev Team
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Typography variant={'body1'} className={classes.description}>
              Or do you like to join the dev team?
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Footer;

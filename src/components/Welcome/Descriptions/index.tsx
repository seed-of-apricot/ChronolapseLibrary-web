import React from 'react';
import Animation from './Animation';
import {
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Typography
} from '@material-ui/core';
import { useWindowManager } from 'components/WindowManager';

import dataOne from 'assets/animation/welcome/description/1.json';
import dataTwo from 'assets/animation/welcome/description/2.json';
import dataThree from 'assets/animation/welcome/description/3.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    surfaceMain: {
      backgroundColor: theme.palette.primary.main,
      height: '60vh'
    },
    surfaceSub: {
      backgroundColor: theme.palette.primary.light,
      height: '60vh'
    }
  })
);

const Descriptions: React.FC = () => {
  const classes = useStyles();
  const scroll = useWindowManager();
  const pause: boolean[] = [
    scroll.scrollTop < scroll.clientHeight * 0.2,
    scroll.scrollTop < scroll.clientHeight * 0.8,
    scroll.scrollTop < scroll.clientHeight * 1.4
  ];

  return (
    <React.Fragment>
      <Grid
        container
        className={classes.surfaceSub}
        justify="center"
        alignItems="center"
      >
        <Grid container item xs={5} justify="center">
          <Grid xs={10}>
            <Animation data={JSON.stringify(dataOne)} pause={pause[0]} />
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h3" align="center">
            Weave your story.
          </Typography>
          <br />
          <Typography variant="h5" align="center">
            Record and share your multiplayer games.
            <br />
            Observe online matches in realtime.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.surfaceMain}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={5}>
          <Typography variant="h3" align="center">
            Play beyond borders.
          </Typography>
          <br />
          <Typography variant="h5" align="center">
            Realtime text translations let you go <br />
            beyond the language barriers.
          </Typography>
        </Grid>
        <Grid container item xs={5} justify="center">
          <Grid xs={8}>
            <Animation data={JSON.stringify(dataTwo)} pause={pause[1]} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.surfaceSub}
        justify="center"
        alignItems="center"
      >
        <Grid container item xs={5} justify="center">
          <Grid xs={8}>
            <Animation data={JSON.stringify(dataThree)} pause={pause[2]} />
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h3" align="center">
            Fame your strategy.
          </Typography>
          <br />
          <Typography variant="h5" align="center">
            Establish your skills and strategies
            <br />
            through statistics and achievements.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Descriptions;

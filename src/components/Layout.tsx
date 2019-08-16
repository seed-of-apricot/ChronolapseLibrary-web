import React, { ReactNode } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, Grid } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';

const userStyles = makeStyles({
  screen: {
    margin: 0,
    padding: 0
  },
  container: {
    width: '100vw',
    height: '100vh'
  }
});

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC = (props: LayoutProps) => {
  const classes = userStyles();
  return (
    <Container fixed className={classes.screen}>
      <Grid container className={classes.container}>
        {/* <Navigation /> */}
        <Header />
        {props.children}
        <Footer />
      </Grid>
    </Container>
  );
};

export default Layout;

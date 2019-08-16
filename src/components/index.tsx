import React from 'react';
import Layout from './Layout';
import { Switch, Route } from 'react-router';
import Welcome from './Welcome';
import Login from './Login';
import Authentication from './Authentication';

const Components: React.FC = () => {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/Login" component={Login} />
        </Switch>
        <Authentication />
      </Layout>
    </React.Fragment>
  );
};

export default Components;

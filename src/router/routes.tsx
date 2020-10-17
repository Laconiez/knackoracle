import React, { FunctionComponent, ComponentClass, LazyExoticComponent } from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from 'pages/Main';
import Person from 'pages/Person';
import Skills from 'pages/Skill';
import Questions from 'pages/Questions';
import Question from 'pages/Questions/Question';

type RoutesProps = {
  path: string;
  component: FunctionComponent | ComponentClass | LazyExoticComponent<any>;
  exact?: boolean;
};

const routes: RoutesProps[] = [
  { path: '/', component: Main, exact: true },
  {
    path: '/persons',
    component: Person,
    exact: true,
  },
  {
    path: '/skills',
    component: Skills,
  },
  {
    path: '/questions',
    component: Questions,
    exact: true,
  },
  {
    path: '/questions/:idQuestion',
    component: Question,
  },
];

const Routes = () => (
  <Switch>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
    ))}
  </Switch>
);

export default Routes;

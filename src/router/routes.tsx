import React, { FunctionComponent, ComponentClass, LazyExoticComponent } from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from 'pages/Main';
import Persons from 'pages/Persons/Persons';
import Person from 'pages/Persons/Person';
import Skills from 'pages/Skill';
import Questions from 'pages/Questions';
import Question from 'pages/Questions/Question';
import Projects from 'pages/Projects';

type RoutesProps = {
  path: string;
  component: FunctionComponent | ComponentClass | LazyExoticComponent<any>;
  exact?: boolean;
};

const routes: RoutesProps[] = [
  { path: '/', component: Main, exact: true },
  {
    path: '/persons',
    component: Persons,
    exact: true,
  },
  {
    path: '/persons/:idPerson',
    component: Person,
  },
  {
    path: '/projects',
    component: Projects,
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

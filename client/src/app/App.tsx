import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import { Header } from '../header/Header';
import { Home } from '../home/Home';
import { MasonryStyles } from './MasonryStyles';

export const App: React.FC = () => (
  <>
    <GlobalStyles />
    <MasonryStyles />
    <Router>
      <Route path='/:headerItemValue?' component={Header} />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  </>
);

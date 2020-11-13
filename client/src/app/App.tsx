import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import { Home } from '../home/Home';
import { MasonryStyles } from './MasonryStyles';
import { Greetings } from '../greetings/Greetings';

export const App: React.FC = () => (
  <>
    <GlobalStyles />
    <MasonryStyles />
    <Router>
      <div id='background-image-container'>
        <div id='background-image' />
      </div>
      <Route path='/:headerItemValue?' component={Greetings} />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  </>
);

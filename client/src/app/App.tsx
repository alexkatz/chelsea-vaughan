import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import { Greetings } from '../greetings/Greetings';
import { Home } from '../home/Home';
import { MasonryStyles } from './MasonryStyles';
import { Sidebar } from '../sidebar/Sidebar';
import { About } from '../about/About';

export const App: React.FC = () => (
  <>
    <GlobalStyles />
    <MasonryStyles />
    <Router>
      <div id='background-image-container'>
        <div id='background-image' />
      </div>
      <Route path='/:headerItemValue?' component={Greetings} />
      {/* <Route path='/:headerItemValue?' component={About} /> */}
      {/* <Route path='/:headerItemValue?' component={Sidebar} /> */}
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  </>
);

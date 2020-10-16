import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from 'styles/global';

import Routes from 'router/routes';

function App() {
  return (
    <main>
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </main>
  );
}

export default App;

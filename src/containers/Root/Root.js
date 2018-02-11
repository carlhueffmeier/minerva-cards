import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Inbox } from 'containers';

function Root(props) {
  return (
    <Router>
      <div className="app">
        <h1>Minerva Cards</h1>
        <Route path="/" component={Inbox} />
      </div>
    </Router>
  );
}

export default Root;

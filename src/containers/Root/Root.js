import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Inbox, DeckDetails, AddNote } from 'containers';

function Root(props) {
  return (
    <Router>
      <div className="app">
        <h1>Minerva Cards</h1>
        <Route exact path="/" component={Inbox} />
        <Route exact path="/decks/:deckId" component={DeckDetails} />
        <Route exact path="/add-note" component={AddNote} />
      </div>
    </Router>
  );
}

export default Root;

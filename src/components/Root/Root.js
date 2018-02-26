import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Inbox from 'components/Inbox';
import DeckDetails from 'components/DeckDetails';
import AddNote from 'components/AddNote';
import Review from 'components/Review';

function Root(props) {
  return (
    <Router>
      <div className="app">
        <h1>Minerva Cards</h1>
        <Route exact path="/" component={Inbox} />
        <Route exact path="/decks/:deckId" component={DeckDetails} />
        <Route exact path="/decks/:deckId/add-note" component={AddNote} />
        <Route exact path="/notes/add-note" component={AddNote} />
        <Route exact path="/review" component={Review} />
      </div>
    </Router>
  );
}

export default Root;

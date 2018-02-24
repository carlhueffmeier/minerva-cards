// DRAFT

import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Review {
  state = {
    currentCard
  };
  render() {
    const { currentCard } = this.state;
    return (
      <div>
        <Card card={this.state.currentCard} />
        <AnswerButtons cardId={currentCard.id} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { deckId } = ownProps.match.params;
  return {
    // What I really want to do is a query for the next due card
    // given the parameters passed to the component
    cards: deckId ? getCardsByDeck(deckId) : getAllCards
  };
}

export default connect(mapStateToProps)(Review);

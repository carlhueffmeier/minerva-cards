import React, { Component } from 'react';
import Card from 'components/Card';

export default class Review extends Component {
  state = {
    currentCardIndex: 0
  };

  nextCard() {
    this.setState(state => ({ currentCardIndex: state.currentCardIndex + 1 }));
  }

  render() {
    const currentCard = this.props.cards[this.state.currentCardIndex];

    if (!currentCard) {
      return `All done!`;
    }

    return (
      <div>
        <Card id={currentCard.id} />
        <button onClick={this.nextCard.bind(this)}>Next</button>
      </div>
    );
  }
}

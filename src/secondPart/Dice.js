import React from 'react';

class Dice extends React.Component {
  state = {
    images: [
      '../img/dice-empty.png',
      '../img/dice1.png',
      '../img/dice2.png',
      '../img/dice3.png',
      '../img/dice4.png',
      '../img/dice5.png',
      '../img/dice6.png',
    ],
    randomNumber: 1,
  };

  handleClick = () => {
    setTimeout(() => {
      this.setState({ randomNumber: 0 });
      setTimeout(
        () =>
          this.setState({ randomNumber: Math.round(5 * Math.random()) + 1 }),
        1000
      );
    }, 1);
  };

  render() {
    return (
      <img
        className="dice"
        src={this.state.images[this.state.randomNumber]}
        onClick={this.handleClick}
      />
    );
  }
}

export default Dice;
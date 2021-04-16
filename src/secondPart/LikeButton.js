import React from 'react';

class LikeButton extends React.Component {
  state = {
    counter: 0,
    colors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <button
        className="btn"
        style={{
          backgroundColor: `${
            this.state.colors[this.state.counter % this.state.colors.length]
          }`,
        }}
        onClick={this.handleClick}
        value={this.state.counter}
      >
        {this.state.counter} Likes
      </button>
    );
  }
}

export default LikeButton;
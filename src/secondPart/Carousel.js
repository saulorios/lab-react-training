import React from 'react';

class Carousel extends React.Component {
  state = { idx: 0 };

  increaseCounter = () => {
    if (this.state.idx < this.props.imgs.length - 1) {
      this.setState({ idx: this.state.idx + 1 });
    }
  };
  decreaseCounter = () => {
    if (this.state.idx > 0) {
      this.setState({ idx: this.state.idx - 1 });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.decreaseCounter}>Left</button>
        <img src={this.props.imgs[this.state.idx]} />
        <button onClick={this.increaseCounter}>Right</button>
      </div>
    );
  }
}

export default Carousel;
import React from 'react';

class ClickablePicture extends React.Component {
  state = { img: this.props.img };

  handleClick = () => {
    return this.state.img === this.props.img
      ? this.setState({ img: this.props.imgClicked })
      : this.setState({ img: this.props.img });
  };

  render() {
    return <img src={this.state.img} onClick={this.handleClick}></img>;
  }
}

export default ClickablePicture;
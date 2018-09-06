import React, { Component } from "react";
import { connect } from "react-redux";

class Board extends Component {
  render() {
    let p = this.props.board;
    return (
      <div>
        <span>{p}</span>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  board: state.counter.number
});

export default connect(
  mapStateToProps,
  null
)(Board);

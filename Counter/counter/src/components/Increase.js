import React, { Component } from "react";
import { connect } from "react-redux";
import { increase } from "../store/actions/action_counter";

class Increase extends Component {
  render() {
    return (
      <div onClick={() => this.props.increase(this.props.number)}>
        Add+
        {this.props.number}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  number: state.counter.number
});
export default connect(
  mapStateToProps,
  { increase }
)(Increase);

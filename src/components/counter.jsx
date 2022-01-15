import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
    };

  render() {
    return (
      <div>
        <span class="badge bg-primary m-2">{this.formatCount()}</span>
        <button class="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;

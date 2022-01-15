import React, { Component } from "react";

class Counter extends Component {
   state = {
      count: 1,
   };

   render() {
      let classes = this.getBadgeClasses();

      return (
         <div>
            <span class={classes}>{this.formatCount()}</span>
            <button class="btn btn-secondary btn-sm">Increment</button>
         </div>
      );
   }

   getBadgeClasses() {
      let classes = "badge m-2 bg-";
      classes += this.state.count === 0 ? "warning" : "primary";
      return classes;
   }

   formatCount() {
      const { count } = this.state;
      return count === 0 ? "Zero" : count;
   }
}

export default Counter;

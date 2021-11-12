/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {h, Component, render} from "preact";

class Component2 extends Component {
  // Initial State
  state = {value: "", name: "world"};

  onInput = (event: any): void => {
    this.setState({value: event.target.value});
  };

  // Add a submit handler that updates the `name` with the latest input value
  onSubmit = (event: any) => {
    // Prevent default browser behavior (aka don't submit the form here)
    event.preventDefault();

    this.setState({name: this.state.value});
  };

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <p>Type your name:</p>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.value} onInput={this.onInput} />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default Component2;

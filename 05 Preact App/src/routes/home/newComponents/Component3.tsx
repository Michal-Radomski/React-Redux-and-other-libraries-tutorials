/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {h, render, Component} from "preact";

class Component3 extends Component {
  state = {time: Date.now()};
  timer: NodeJS.Timer;

  // Called whenever our component is created
  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      this.setState({time: Date.now()});
    }, 1000);
  }

  // Called just before our component will be destroyed
  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer);
  }

  render() {
    const time = new Date(this.state.time).toLocaleString();
    return <span>Now is: {time}</span>;
  }
}

export default Component3;

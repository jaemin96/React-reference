import React, { Component } from 'react';

interface Props {}

interface State {
  date: Date;
}

export default class Timer extends Component<Props, State> {
  timerID?: ReturnType<typeof setInterval>;

  constructor(props: Props) {
    super(props);
    this.state = { date: new Date() };
  }

  // Mount
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // UnMount
  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h2>Time {this.state.date.toLocaleTimeString()} </h2>
      </div>
    );
  }
}

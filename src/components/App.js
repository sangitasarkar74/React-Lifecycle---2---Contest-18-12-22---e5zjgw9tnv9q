import React from 'react'

import '../styles/App.css';


class App extends React.Component {


  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(state => ({ count: state.count + 1 }))

  }

  componentDidMount() {
    console.log("mounted");
  }

  render() {
    console.log('rendered')
    return (
      <div id="main">
        <div id="count">{this.state.count}</div>
        <button id="incr" onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}


export default App;

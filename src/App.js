import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    
  }

  render() {
    return (
      <div>
          <p>
            Edit and save to reload.
          </p>

          <input type="button" onClick={this.handleClick} value="点我下载文件"/>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </div>
    );
  }
}

export default App;

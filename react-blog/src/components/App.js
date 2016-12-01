import React, { Component } from 'react';
class App extends Component {

  render() {
    return (
      <div className="container">
        <header>
          <h2>React Blog Demo</h2>
        </header>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default App;
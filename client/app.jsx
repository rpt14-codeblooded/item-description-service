import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div>
        <h3>I am App</h3>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

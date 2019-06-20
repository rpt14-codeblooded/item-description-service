import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      id: 1
    }
  }
  componentDidMount() {
    const currentPath = window.location.pathname;
    const numbersArr = currentPath.match(/[0-9]/g)
    if (numbersArr) {
      const id = Number(numbersArr.join(""));
      if (id >= 0 && id <= 100) {
        this.setState({
          id: id
        });
      }
    }
  }
  render() {
    return (
      <div>
        <h3>I am App</h3>
        <div>ID: {this.state.id}</div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

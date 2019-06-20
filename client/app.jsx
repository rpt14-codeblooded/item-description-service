import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super()
    // this.state = {
    //   id: null
    // }
  }
  // componentDidMount() {
  //    fetch('/api/items')
  //    .then((data)=>{
  //       this.setState({
  //         id: data
  //       });
  //    });


  // }
  render() {
    return (
      <div>
        <h3>I am App</h3>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

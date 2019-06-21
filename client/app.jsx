import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  componentDidMount() {
    const currentPath = window.location.pathname;
    const numbersArr = currentPath.match(/[0-9]/g)
    if (numbersArr) {
      const id = Number(numbersArr.join(""));
      if (id >= 0 && id <= 100) {
        $.get(`/${id}`, (data)=> {
          console.log('data', data);
          let newState = {};
          for (var key in data) {
            if(data[key]) {
              newState[key] = data[key]
            }
          }
          this.setState(newState,()=>{});
        });
      }

    }


  }
  render() {
    const itemSpecifics = Object.keys(this.state);
    console.log(itemSpecifics);
    const values = [];
    itemSpecifics.forEach(val => {
      values.push(this.state[val]);
    });
    console.log('values', values);
    return (
      <div>
        <h2 className="itemSpecifics">Item specifics</h2>
        <div>{itemSpecifics[0]}: {values[0]}</div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

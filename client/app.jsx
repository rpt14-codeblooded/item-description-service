import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Description from './components/description-tab.jsx'

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  componentDidMount() {
    const currentPath = window.location.pathname;
    const numbersArr = currentPath.match(/[0-9]/g);
    if (numbersArr) {
      const id = Number(numbersArr.join(""));
      if (id >= 0 && id <= 100) {
        $.get(`/${id}`, (data)=> {
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

    return (
      <div>
        <Description values={this.state}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

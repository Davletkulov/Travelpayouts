import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./Components/Menu/Menu";
import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import Card from "./Components/Card/Card";


  class App extends Component {
    constructor() {
      super()
      this.state = {
        speed: ''
      }
    }

    onChangeSpeedInKph = (e) => {
      console.log(1)
      this.setState({
        speed: e
      })
    }
  render() {
    return (
      <div className="page_wrapper">
        <Menu/>
        <div className='Content'>
          <Header/>
          <div className='Content-page'>
            <Filter speed={this.state.speed} onChangeSpeed={this.onChangeSpeedInKph}/>
            <Card/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;

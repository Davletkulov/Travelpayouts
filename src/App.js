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
        speed: '',
        // value: ''
      }
    }


    onChangeSpeedInKph = (e) => {


      this.setState({
        speed: e
      })
    }

    onDeleteValue = () => {
      console.log(1)
      this.setState({
        speed: ''
      })
    }
  render() {

    return (
      <div className="page_wrapper">
        <div className='a'>
          <Menu/>
        </div>
        <div className='Content'>
          <Header/>
          <div className='Content-page'>
            <Filter speed={this.state.speed} onChangeSpeed={this.onChangeSpeedInKph} onDeleteValue={this.onDeleteValue}/>
            <Card speed={this.state.speed} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;

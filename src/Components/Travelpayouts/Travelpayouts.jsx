import React, {Component} from 'react';
import Filter from "../Filter/Filter";
import Card from "../Card/Card";

class  Travelpayouts extends  Component {
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
      <div>
        <Filter speed={this.state.speed} onChangeSpeed={this.onChangeSpeedInKph} onDeleteValue={this.onDeleteValue}/>
        <Card speed={this.state.speed} />
      </div>
    )
  }

}

export  default Travelpayouts
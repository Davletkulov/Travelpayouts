import React, {Component} from 'react';
import './Filter.scss'
import Button from "../Button/Button";

class  Filter extends Component{
  constructor(props) {
    super(props)
  }

  onChangeSpeed = (e) => {
    this.props.onChangeSpeed(e.target.value)
  }
  render() {
    const {speed} = this.props
    return (
      <div className='Filter'>
        <h1>Сервисы</h1>
        <div>
          <input value={speed} onChange={this.onChangeSpeed} className='Filter-input'/>
          <Button text='СБРОСИТЬ' whiteButton='Button-white'/>
        </div>
      </div>
    )
  }
}

export default Filter
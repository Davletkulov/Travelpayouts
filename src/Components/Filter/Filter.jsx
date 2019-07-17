import React, {Component} from 'react';

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
      <div>
        <h1>Сервисы</h1>
        <div>
          <input value={speed} onChange={this.onChangeSpeed}/>
          <button>СБРОСИТЬ</button>
        </div>
      </div>
    )
  }
}

export default Filter
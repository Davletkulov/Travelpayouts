import React, {Component} from 'react';
import customData from '../../data.js';
import './Card.scss'

class  Card extends Component {

  constructor() {
    super()
    this.myInput = React.createRef();
  }

  CopyText = (e) => {
    console.log(e.target.id)
    console.log(this.myInput)
    let copyText = document.getElementById("myInput");
    this.myInput.current.select();
    document.execCommand("copy");
    alert("Copied the text: " + this.myInput.current.value);
  }

  render() {

    const title = customData.bonuses.map((item, index) =>
      <div className='Card' key={index}>
        <div className='Card-title'>
          <div>{item.title}</div>
          <div> {item.description}</div>
        </div>
        <div className='Card-promocode'>
          <div className='Card-promocode__title'>ПРОМОКОД</div>
          <div className='Card-promocode__text'>

            <input type="text" value={item.promocode} id={index}  disabled ref={this.myInput}/>
            <button className='Card-promocode__copy' onClick={this.CopyText}></button>
          </div>
        </div>
        <button className='Card-button'>ПОЛУЧИТЬ БОНУС</button>
      </div>
    )
    return (
      <div>
        {title}
      </div>
    )
  }
}

export default Card
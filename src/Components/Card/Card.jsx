import React, {Component} from 'react';
import customData from '../../data.js';
import './Card.scss'

class  Card extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  CopyText = (e) => {
    console.log(e.target.id)
    // console.log(this.myInput)
   
    // this.myInput.current.select();
    // document.execCommand("copy");
    // alert("Copied the text: " + this.myInput.current.value);
    
  }

  myInput = (ref) => {
    return console.log(ref.id)
  }

  render() {
    const str = ''
    const title = customData.bonuses.map((item, index) => {
      if (str) {
        if (str === item.title ) {
          return (
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
        } 
      } else {
        return (
          <div className='Card' key={index}>
            <div className='Card-title'>
              <div>{item.title}</div>
              <div> {item.description}</div>
            </div>
            <div className='Card-promocode'>
              <div className='Card-promocode__title'>ПРОМОКОД</div>
              <div className='Card-promocode__text' onClick={this.CopyText}>
  
                <input type="text" value={item.promocode} id={index}  disabled ref={this.myInput}/>
                <button id={index} className='Card-promocode__copy'></button>
              </div>
            </div>
            <button className='Card-button'>ПОЛУЧИТЬ БОНУС</button>
          </div>
        )  
      }
      
    }
   
      
    )
    return (
      <div>
        {title}
      </div>
    )
    
  }
  
}

export default Card
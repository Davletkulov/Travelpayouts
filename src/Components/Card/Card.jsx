import React, {Component} from 'react';
import customData from '../../data.js';
import './Card.scss'

class  Card extends Component {


  constructor(props) {
    super(props);
    this.state = {
      refInput: null,
    }
  }

  CopyText = (e) => {
    console.log(e.target.id)
  console.log(this.state.refInput)

    this.state.refInput.select();
    document.execCommand("copy");
    alert("Copied the text: " + this.state.refInput.value);
    
  }

  // myInput = (ref) => {
  //   this.state.refInput =ref;
  //   return console.log(ref.id)
  // }

  render() {
    const str = this.props.speed;
    const title = customData.bonuses.map((item, index) => {
      if (str) {
        if ( !item.title.indexOf(str) ) {
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
              <div className='Card-promocode__text'>
  
                <input type="text" value={item.promocode} id={index}  disabled ref={this.myInput}/>
                <button id={index} className='Card-promocode__copy'  onClick={this.CopyText}></button>
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
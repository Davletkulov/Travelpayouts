import React, {Component} from "react"

class Fetch extends Component {

  constructor() {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/1")
      .then(res => res.json())
      .then(data => {
        this.setState({
          character: data,
          loading: true
        })
      })
  }

  render() {
    const text = this.state.loading ? this.state.character.name : 'LOADING...'
    return (
      <div>
        {text}
      </div>
    )
  }
}

export  default  Fetch
// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  subbu = () => {
    this.setState({number: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {number} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Random Numbers</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.subbu}>
            Generate
          </button>
          <p className="count">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

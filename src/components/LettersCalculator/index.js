// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  onChangeText = event => {
    const len = event.target.value.length
    this.setState({count: len})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <div className="matter">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <p className="para">Enter the phrase</p>
            <input type="text" className="input" onChange={this.onChangeText} />
            <div className="count">
              <h1>No.of letters: {count}</h1>
            </div>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="img-size"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator

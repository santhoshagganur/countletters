// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {text: '', count: 0}

  onChangeText = event => {
    const {text, count} = this.state
    this.setState({text: event.target.value, count: event.target.value.length})
  }

  render() {
    const {text, count} = this.state

    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">
            Calculate the <br />
            Letters you
            <br /> enter
          </h1>
          <label className="suggestion" htmlFor="input">
            Enter the phrase
          </label>
          <br />
          <input
            type="search"
            id="input"
            className="input-element"
            placeholder="Enter the phrase"
            onChange={this.onChangeText}
            value={text}
          />
          <p className="count"> No.of Letters: {count} </p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator

// Write your code here

import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="paragraph-1">
            The button has been clicked
            <span className="counter-style"> {count} </span>times.
          </h1>
          <p className="paragraph-2">Click the button to increase the count!</p>
          <div className="btn-center">
            <button className="btn-style" onClick={this.onIncrement}>
              Click Me!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ClickCounter

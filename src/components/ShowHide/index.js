// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isJoe: false, isJonas: false}

  onClickButtonJoe = () => {
    this.setState(prevstate => ({
      isJoe: !prevstate.isJoe,
    }))
  }

  onClickButtonJonas = () => {
    this.setState(prevstate => ({
      isJonas: !prevstate.isJonas,
    }))
  }

  render() {
    const {isJoe, isJonas} = this.state
    const Joe = isJoe ? <p className="names">Joe</p> : null
    const Jonas = isJonas ? <p className="names">Jonas</p> : null
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Show/Hide</h1>
          <div className="button-container">
            <div className="c">
              <button
                className="button"
                type="button"
                onClick={this.onClickButtonJoe}
              >
                Show/Hide Firstname
              </button>
              {Joe}
            </div>
            <div className="c">
              <button
                className="button"
                type="button"
                onClick={this.onClickButtonJonas}
              >
                Show/Hide Lastname
              </button>
              {Jonas}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

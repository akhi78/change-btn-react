import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {IsSubscribe: true, btnname: 'Subscribe'}

  ChnageBtn = () => {
    const {IsSubscribe, btnname} = this.state
    if (IsSubscribe) {
      this.setState({IsSubscribe: false})
      this.setState({btnname: 'Subscribed'})
    } else {
      this.setState({IsSubscribe: true})
      this.setState({btnname: 'Subscribe'})
    }
  }

  render() {
    const {btnname} = this.state
    return (
      <div className="main-con">
        <h1 className="heading">Welcome</h1>
        <p className="details">Thank you! Happy Learning</p>
        <button className="btn" type="button" onClick={this.ChnageBtn}>
          {btnname}
        </button>
      </div>
    )
  }
}

export default Welcome

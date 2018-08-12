import React from 'react'
import PropTypes from 'prop-types';

class CountDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timeInSeconds: this.props.timeInSeconds || 0,
      countTime: this.props.countTime || 0,
    }
  }


  render () {
    return (
      <span className='count-down'>
        {this.formattedTime(this.state.timeInSeconds)}
      </span>
    )
  }

  componentDidMount () {
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  tick = () => {
    if (this.props.stop) {
      clearInterval(this.interval)
      return
    }
    this.setState({ countTime: this.state.countTime + 1 }, () => { this.props.gameTime(this.state) })
    this.setState({ timeInSeconds: this.state.timeInSeconds - 1 })
    if (this.state.timeInSeconds <= 0) {
      clearInterval(this.interval)
      this.props.onTimeExpired &&
        this.props.onTimeExpired()
    }
  }

  formattedTime = (state) => {
    let minutes = Math.floor(state / 60)
    if (String(minutes).length < 2) minutes = `0${minutes}`
    let seconds = state % 60
    if (String(seconds).length < 2) seconds = `0${seconds}`
    return `${minutes}:${seconds}`
  }
}
CountDown.propTypes = {
  timeInSeconds: PropTypes.number,
  countTime: PropTypes.number,
  onTimeExpired: PropTypes.func,
  stop: PropTypes.bool,
  gameTime: PropTypes.func
}
export default CountDown
import React from 'react'
import PropTypes from 'prop-types';

class Card extends React.Component {
  constructor(props){
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  render () {
    const className = this.props.revealed ? '' : 'rotate'

    return (
      <div className={`card ${className}`} onClick={this.clickHandler}>
        <a href='#'>
          <div className='card-icon'>
            <img className='card-img-top' src={this.props.src} alt={this.props.label}/>
          </div>
        </a>
      </div>
    )
  }

  clickHandler = e => {
    e.preventDefault();
    this.props.onClick &&
      this.props.onClick({
        index: this.props.index,
        label: this.props.label,
        revealed: !this.props.revealed
      })
  }
}
Card.defaultProps = {
   revealed: false
}
Card.propTypes = {
  index: PropTypes.number,
  image: PropTypes.string,
  background: PropTypes.string,
  label: PropTypes.string,
  revealed: PropTypes.bool,
  onClick: PropTypes.func
}
export default Card
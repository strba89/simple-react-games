import React from 'react'
import style from './lightbox.scss'

export default React.createClass({
  render () {
    return (
      <div className='lightbox'>
        <div className='container'>{this.props.children}</div>
        <div className='overlay' />
      </div>
    )
  }
})

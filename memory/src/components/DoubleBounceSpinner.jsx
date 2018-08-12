import React from 'react'

class Spinner extends React.Component{
  render () {
    return (
      <div className='double-bounce-spinner'>
        <div className='bounce1' />
        <div className='bounce2' />
      </div>
    )
  }
}
export default Spinner

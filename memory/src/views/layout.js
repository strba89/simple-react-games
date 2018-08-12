import React from 'react';
import Header from '../components/Header'

class Layout extends React.Component {
  render () {
    return (
      <div className='row justify-content-center'>
        <Header />
        <div className='col-xl-9 col-md-10 col-12 card-wrapper'>
          {this.props.children}
        </div>
      </div>)
  }
}
export default Layout
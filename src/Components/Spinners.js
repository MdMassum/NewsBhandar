import React, { Component } from 'react'
import loading from './Iphone-spinner-2.gif'
// import loading from './Walk.gif'

export class Spinners extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={loading} alt="" />
      </div>
    )
  }
}

export default Spinners
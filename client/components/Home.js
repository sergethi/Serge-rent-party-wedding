import React from 'react'
import {Spring} from 'react-spring/renderprops'

import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getCart} from '../store/cart'
import {Link} from 'react-router-dom'

const Home = props => {
  return (
    // <Spring
    //   from={{opacity: 0, marginLeft: -4000}}
    //   to={{opacity: 1, marginLeft: 0}}

    // >
    //   {props => (
    <div style={props}>
      <div>
        <div className="home-head">
          <h1>Welcome To SERGE Event & Party Rentals</h1>
          {/* <h2>
                RENT Tents | Chairs | Tables | Lightning | Speackers | Dj
                Equipments
              </h2>
              <h3>Contact Us 646-852-5930 & sergeEventRental@gmail.com</h3> */}
        </div>
        <h2 className="home-middle-text">We are renting</h2>

        <div className="flex-container">
          <div className="flex-item">
            <p>Tents</p>
            <img
              src="https://media-api.theknot.com/images/0b4ad1c3-0c73-41a8-ab72-4989d618a052"
              width="647"
              height="250"
            />
          </div>
          <div className="flex-item">
            <p>Lightning</p>
            <img src="/gallery-lightning.jpg" width="647" height="250" />
          </div>
          <div className="flex-item">
            <p>Tables</p>
            <img src="/table-1701733_1920.jpg" width="647" height="250" />
          </div>
          <div className="flex-item">
            <p>Sound</p>
            <img
              src="https://i.ytimg.com/vi/tPZjasYw6_A/maxresdefault.jpg"
              width="647"
              height="250"
            />
          </div>
        </div>
      </div>
    </div>
    //   )}
    // </Spring>
  )
}

export default Home

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getCart} from '../store/cart'
import {Link} from 'react-router-dom'

const Home = props => {
  return (
    <div className="home-page">
      <div className="home-page">
        <h1>Welcome To SERGE Event & Party Rentals</h1>
        <h2>
          RENT Tents | Chairs | Tables | Lightning | Speackers | Dj Equipments
        </h2>
        <h3>Contact Us 646-852-5930 & sergeEventRental@gmail.com</h3>
      </div>
      {/* <div>
      <img className="home-page" src = "https://mauipride.org/wp-content/uploads/2013/12/New-Years-Eve-Party-Slider-Background.jpg"/>
    </div> */}
      <div className="flex-container">
        <div className="flex-item">
          Tents<img
            src="https://media-api.theknot.com/images/0b4ad1c3-0c73-41a8-ab72-4989d618a052"
            width="400"
            height="200"
          />
        </div>
        <div className="flex-item">
          Lightning<img
            src="https://i0.wp.com/lightsupeventlighting.com/wp-content/uploads/2017/11/IMG_2796-e1543392151566.jpg?fit=3024%2C2268"
            width="400"
            height="200"
          />
        </div>
        <div className="flex-item">
          Tables<img
            src="https://www.givdo.com/wp-content/uploads/2015/06/beach-wedding-table-decorations-1.jpg"
            width="400"
            height="200"
          />
        </div>
        <div className="flex-item">
          Sound<img
            src="https://i.ytimg.com/vi/tPZjasYw6_A/maxresdefault.jpg"
            width="400"
            height="200"
          />
        </div>
      </div>
    </div>
  )
}

export default Home

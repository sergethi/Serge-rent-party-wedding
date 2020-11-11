import React from 'react'
import {FaEnvelope, FaFacebookSquare, FaInstagram} from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
      <p>&copy; Copyright 2020, Serge-Sound</p>
      <div className="social_links">
        <ul>
          <li>
            <a href="mailto:sergethiti@gmail.com">
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

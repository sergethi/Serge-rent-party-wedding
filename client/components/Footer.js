import React from 'react'
import {FaEnvelope, FaFacebookSquare, FaInstagram} from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
      <p>&copy; Copyright 2020, Serge-Sound</p>
      <div className="social_links">
        <ul>
          <li>
            <a href="mailto:sergethiti@gmail.com" target="_blank" rel="noreferrer">
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

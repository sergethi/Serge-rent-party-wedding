import React from 'react'

import {Navbar, Footer} from './components'
import Routes from './routes'
import {withRouter} from 'react-router-dom'

const App = ({location}) => {
  return (
    <div>
      {location.pathname !== '/' && <Navbar />}
      {/* <Navbar /> */}
      <Routes />
      {location.pathname !== '/' && <Footer />}
      {/* <Footer /> */}
    </div>
  )
}

export default withRouter(App)

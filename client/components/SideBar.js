import React from 'react'
import {connect} from 'react-redux'
import {slide as Menu} from 'react-burger-menu'
import {sortProducts} from '../store/products'

class SideBar extends React.Component {
  constructor(props) {
    super(props)
    this.HandleClick = this.HandleClick.bind(this)
  }
  HandleClick(category) {
    this.props.getCategories(category)
  }
  render() {
    let products = this.props.products
    //console.log('herere', )
    return (
      <Menu {...products}>
        <a className="menu-item" href="/products">
          All products
        </a>

        <a
          className="menu-item"
          href="#"
          onClick={() => this.HandleClick('Tents')}
        >
          Tents
        </a>

        <a
          className="menu-item"
          href="#"
          onClick={() => this.HandleClick('Seating')}
        >
          Seating
        </a>

        <a
          className="menu-item"
          href="#"
          onClick={() => this.HandleClick('Lightning')}
        >
          Lightning
        </a>

        <a
          className="menu-item"
          href="#"
          onClick={() => this.HandleClick('Sound')}
        >
          Sound
        </a>
      </Menu>
      //   <div>
      //      <form>
      //        <label>Filter by category</label>
      //        <select >
      //          <option>ALL PRODUCTS</option>
      //          <option onChange = {()=> console.log('CLICKED')}>Tents</option>

      //        </select>
      //      </form>

      //  </div>
    )
  }
}

const mapState = state => {
  console.log('here', state)
  return {
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    getCategories: category => dispatch(sortProducts(category))
  }
}

export default connect(mapState, mapDispatch)(SideBar)

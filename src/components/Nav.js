import React, {Component} from 'react'

class Nav extends Component {
  render () {
    return (
    <nav>
      <div className="nav">
        <img src="../images/ironhack-logo.svg" className="nav-icons" alt="menu" />
        <img src="./images/menu-top.svg" className="nav-icons" alt="menu" />
      </div>
    </nav>
  )
  }
}

export default Nav;
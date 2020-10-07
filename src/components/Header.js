import React from 'react'

import Footer from './Footer'
import Logo from './Logo';
import FlipText from './FlipText'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <div className="circle">
            <Logo />
          </div>
          <FlipText />
          <Footer />
        </div>
      </header>
    )
  }
}

export default Header

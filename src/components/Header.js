import React from 'react'

import Footer from './Footer'
import Logo from './Logo';
import TextLoop from './FlipText'

const h1Style = {
    textAlign: 'center',
};

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                   <div className="circle">
                       <Logo />
                   </div>
                   <h1 style={h1Style}><strong>Hello, I'm E!</strong></h1>
                   <TextLoop />
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header

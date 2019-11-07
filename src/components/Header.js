import React from 'react'

import Footer from './Footer'

const svgStyle = {
    margin: '30px auto 1rem',
    display: 'block',
    width: '100px',
    height: '100px',
};

const h1Style = {
    textAlign: 'center',
};

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" style={svgStyle} viewBox="0 0 14.23 20.56" fill="url(#eGradient)" d="M293.468,275.282c0,1.617-1.311,2.928-2.928,2.928H8.46c-1.617,0-2.928-1.311-2.928-2.928V13.718
      c0-1.617,1.311-2.928,2.928-2.928h282.08c1.617,0,2.928,1.311,2.928,2.928V275.282z">
                        <title>E Kathuria logo</title>
                        <defs>
                            <linearGradient id="eGradient" x1="100%" y1="100%">
                                <stop offset="0%" stop-color="white" stop-opacity="1">
                                    <animate attributeName="stop-color" values="#ffffff;#964BFF;#D64BFF;#D2B2FF;#ffffff;" dur="7s" repeatCount="1"></animate>
                                </stop>
                                <stop offset="100%" stop-color="white" stop-opacity="1">
                                    <animate attributeName="stop-color" values="#ffffff;" dur="5s" repeatCount="1"></animate>
                                </stop>
                            </linearGradient>
                        </defs>
                        <path d="M4.38,1.22l7.14,20.56,2.08-6H12v-2h2.27L15.9,9.12H12V7.22h4.54l2.07-6Z" transform="translate(-4.38 -1.22)"/>
                    </svg>
                    <h1 style={h1Style}><strong>Hello, I'm E!</strong></h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header

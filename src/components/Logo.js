import React from 'react';

const svgStyle = {
    margin: '30px auto 1rem',
    display: 'block',
    width: '100px',
    height: '100px',
};

class Logo extends React.Component {
    render() {
        return (
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" style={svgStyle} viewBox="0 0 962.12 962.13" fill="url(#eGradient)"><circle cx="481.06" cy="481.06" r="481.06"/><circle fill="#1e0f33" cx="481.06" cy="481.06" r="465.64"/><path d="M289.32,195.65l211.37,608.7,61.37-177.61H515V568.46H582.2l47.94-138.77H515V373.26h134.6l61-176.69Z" transform="translate(-18.94 -18.94)"/>
                <title>E Kathuria logo</title>
                <defs>
                    <linearGradient id="eGradient" x1="100%" y1="100%">
                        <stop offset="0%" stop-color="white" stop-opacity="1">
                            <animate attributeName="stop-color" values="#ffffff;#D6419F;#D2C53E;#49BF9D;#ED6447;#ffffff;" dur="12s" repeatCount="1"></animate>
                        </stop>
                        <stop offset="100%" stop-color="white" stop-opacity="1">
                            <animate attributeName="stop-color" values="#ffffff;" dur="5s" repeatCount="1"></animate>
                        </stop>
                    </linearGradient>
                </defs>
            </svg>

        );
    }
}

export default Logo;
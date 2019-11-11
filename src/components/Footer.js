import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://github.ekathuria.com" className="fab fa-github"></a></li>
                        <li><a href="https://linkedin.com/in/ekathuria" target="_blank" rel="noopener noreferrer" className="fab fa-linkedin"></a></li>
                        <li><a href="https://www.meetup.com/members/56793422/" target="_blank" rel="noopener noreferrer" className="fab fa-meetup"><span className="label">Meetup</span></a></li>
                        <li><a href="https://www.last.fm/user/ekathuria" target="_blank" rel="noopener noreferrer" className="fab fa-lastfm"><span className="label">LastFM</span></a></li>
                        <li><a href="https://open.spotify.com/user/ebo.one" target="_blank" rel="noopener noreferrer" className="fab fa-spotify"><span className="label">Spotify</span></a></li>
                        <li><a href="https://goodreads.com/haikutear" target="_blank" rel="noopener noreferrer" className="fab fa-goodreads"><span className="label">Goodreads</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer

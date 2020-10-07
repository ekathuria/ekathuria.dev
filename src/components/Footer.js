import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <div className="icons">
                        <a href="https://github.com/ekathuria" className="fab fa-github"><span className="label">Github</span></a>
                        <a href="https://www.notion.so/Reading-List-923600ed9afc4db9b7cb8f99dcda99ed" target="_blank" rel="noopener noreferrer" className="fas fa-glasses"><span className="label">Books</span></a>
                        <a href="https://open.spotify.com/user/ebo.one" target="_blank" rel="noopener noreferrer" className="fab fa-spotify"><span className="label">Spotify</span></a>
                        <a href="https://www.meetup.com/members/56793422/" target="_blank" rel="noopener noreferrer" className="fab fa-meetup"><span className="label">Meetup</span></a>
                        <a href="https://www.notion.so/Movie-Tracker-ee0c353b9957484c9fdc2cf8bde949f7" target="_blank" rel="noopener noreferrer" className="fas fa-film"><span className="label">Movies</span></a>
                        <a href="https://www.last.fm/user/ekathuria" target="_blank" rel="noopener noreferrer" className="fab fa-lastfm"><span className="label">LastFM</span></a>
                        <a href="https://linkedin.com/in/ekathuria" target="_blank" rel="noopener noreferrer" className="fab fa-linkedin"><span className="label">LinkedIn</span></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer

import React from 'react'
import { config } from 'config'

class Bio extends React.Component {
  render () {
    return (
      <div className="bio">
        <hr/>
        <div className="bio-img">
          <img
            src="https://avatars2.githubusercontent.com/u/7448569?v=3&s=460"
            alt={`author ${config.authorName}`}
          />
        </div>
        <div className="bio-detail">
          <p className="texts">
            <span className="is-xl">{config.authorName}</span>
          </p>
          <p>
            {config.authorDetail}
          </p>
          <ul className="social-buttons">
            {
              config.twitterId ?
              <li><a href={`https://twitter.com/${config.twitterId}`}><i className="icon-twitter"></i></a></li> : ""
            }
            {
              config.facebookId ?
              <li><a href={`https://www.facebook.com/${config.facebookId}`}><i className="icon-facebook"></i></a></li> : ""
            }
            {
              config.githubId ?
              <li><a href={`https://github.com/${config.githubId}`}><i className="icon-github"></i></a></li> : ""
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Bio

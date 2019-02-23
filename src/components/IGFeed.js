import React from 'react';
import Instafeed from 'instafeed.js';

class IGFeed extends React.Component {
  componentDidMount() {
    const userFeed = new Instafeed({
      get: 'user',
      userId: process.env.GATSBY_IG_USER_ID,
      accessToken: process.env.GATSBY_IG_ACCESS_TOKEN,
      resolution: 'standard_resolution',
      template: `<div class="post">
          <a href="{{link}}" target="_blank" id="{{id}}">
            <img src="{{image}}" />
          </a>
          <div class="analytics">
            <span class="likes"><i class="fa fa-heart-o"></i> {{likes}}</span>
            <span class="comments"><i class="fa fa-comment-o"></i> {{comments}}</span>
          </div>
        </div>
      `,
      sortBy: 'most-recent',
      limit: 6,
      links: false,
    });
    userFeed.run();
  }

  render() {
    return <div id="instafeed" />;
  }
}

export default IGFeed;

import React, { Component } from "react";
import { FacebookProvider, EmbeddedPost } from "react-facebook";

export default class FacebookPost extends Component {
  render() {
    return (
      <div
        class="fb-page"
        data-href="https://www.facebook.com/sathmara"
        data-tabs="timeline"
        data-width="500px"
        data-height="610px"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="true"
        data-show-facepile="false"
      >
        <blockquote
          cite="https://www.facebook.com/sathmara"
          class="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/sathmara">Sathmara</a>
        </blockquote>
      </div>
    );
  }
}

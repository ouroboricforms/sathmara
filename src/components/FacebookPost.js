import React, { Component } from "react";
import { FacebookProvider, EmbeddedPost } from "react-facebook";

export default class FacebookPost extends Component {
  render() {
    return (
      <FacebookProvider appId="1346235042234128">
        <EmbeddedPost
          href="https://www.facebook.com/pg/Sathmara/posts/?ref=page_internal"
          width="700"
        />
      </FacebookProvider>
    );
  }
}

/*tsx code
const FacebookPost = () => {
  return (
    <FacebookProvider appId="228713168293343">
      <EmbeddedPost
        href="https://www.facebook.com/pg/Sathmara/posts/?ref=page_internal"
        width="700"
      />
    </FacebookProvider>
  );
};
export default FacebookPost;
*/

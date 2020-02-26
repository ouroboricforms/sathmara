import React from "react";
import {
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave
} from "@ionic/react";
import "./FacebookPost.css";
import "@ionic/react/css/core.css";

const FacebookPost: React.FC = () => {
  useIonViewDidEnter(() => {
    console.log("ionViewDidEnter event fired");
  });

  useIonViewDidLeave(() => {
    console.log("ionViewDidLeave event fired");
  });

  useIonViewWillEnter(() => {
    console.log("ionViewWillEnter event fired");
  });

  useIonViewWillLeave(() => {
    console.log("ionViewWillLeave event fired");
  });

  return (
    <div
      className="fb-page"
      data-href="https://www.facebook.com/sathmara"
      data-tabs="timeline"
      data-width="500"
      data-height="610"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="true"
      data-show-facepile="false"
      adapt-container-width="true"
    >
      <blockquote
        cite="https://www.facebook.com/sathmara"
        className="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/sathmara">Sathmara</a>
      </blockquote>
    </div>
  );
};

export default FacebookPost;

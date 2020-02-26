import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import "./Tab4.css";
import { Fab } from "../components/Fab";
import "@ionic/react/css/core.css";
const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Portfolio</IonTitle>
        </IonToolbar>
        <Fab />
      </IonHeader>
      <IonContent>
        <div className="container">
          <h1>Portfolio</h1>
          <p>
            Click on any of the images to see more pictures of that particular
            project and read a short description about it. Also, find me on
            social media to see updates and even more examples of my work!
            Direct links to social media can be found in the navigation bar at
            the top of the page or below in the footer.
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;

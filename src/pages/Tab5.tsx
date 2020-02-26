import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab5.css";
import { Fab } from "../components/Fab";
import "@ionic/react/css/core.css";
const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Tab 5</IonTitle>
        </IonToolbar>
        <Fab />
      </IonHeader>
      <IonContent>
        <ExploreContainer name="Tab 5 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab5;

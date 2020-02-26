import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import FacebookPost from "../components/FacebookPost";
import "./Tab1.css";
import { Fab } from "../components/Fab";
import "@ionic/react/css/core.css";
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar class="toolbar" color="primary" mode="md">
          <IonTitle>Home</IonTitle>
        </IonToolbar>
        <Fab />
      </IonHeader>
      <IonContent>
        <div className="container2">
          <h1>Facebook</h1>
          <FacebookPost />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

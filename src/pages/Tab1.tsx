import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import FacebookPost from "../components/FacebookPost";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="toolbar" color="primary" mode="md">
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="container">
          <FacebookPost />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

import React from "react";
import { IonFab, IonFabButton, IonIcon, IonFabList } from "@ionic/react";
import { add, logoFacebook, logoInstagram } from "ionicons/icons";
import "./Fab.css";

export const Fab: React.FC = () => (
  <IonFab horizontal="end" vertical="bottom" slot="fixed" edge>
    <IonFabButton>
      <IonIcon icon={add} color="primary-contrast"></IonIcon>
    </IonFabButton>
    <IonFabList side="start">
      <IonFabButton href="http://www.facebook.com/Sathmara">
        <IonIcon icon={logoFacebook} color="primary"></IonIcon>
      </IonFabButton>
      <IonFabButton href="http://www.instagram.com/Sathmara.official">
        <IonIcon icon={logoInstagram} color="primary"></IonIcon>
      </IonFabButton>
    </IonFabList>
  </IonFab>
);

import React from "react";
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonButton,
  IonHeader
} from "@ionic/react";

export const Fab: React.FC = () => (
  <IonContent>
    <IonFab horizontal="end" vertical="top" slot="fixed" edge>
      <IonFabButton color="primary-shade">
        <IonIcon name="add-outline"></IonIcon>
      </IonFabButton>
      <IonFabList side="start">
        <IonFabButton color="primary-tint">
          <IonIcon name="logo-facebook-outline"></IonIcon>
        </IonFabButton>
        <IonFabButton color="primary-tint">
          <IonIcon name="logo-twitter-outline"></IonIcon>
        </IonFabButton>
      </IonFabList>
    </IonFab>
  </IonContent>
);

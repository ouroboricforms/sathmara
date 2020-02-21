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
import { add, logoFacebook, logoTwitter } from "ionicons/icons";

export const Fab: React.FC = () => (
  <IonContent>
    <IonFab horizontal="end" vertical="top" slot="fixed" edge>
      <IonFabButton>
        <IonIcon icon={add} color="primary-contrast"></IonIcon>
      </IonFabButton>
      <IonFabList side="start">
        <IonFabButton href="http://www.facebook.com">
          <IonIcon icon={logoFacebook} color="primary"></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoTwitter} color="primary"></IonIcon>
        </IonFabButton>
      </IonFabList>
    </IonFab>
  </IonContent>
);

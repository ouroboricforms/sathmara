import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from "@ionic/react";
import "./Tab2.css";
import { Fab } from "../components/Fab";
import "@ionic/react/css/core.css";
const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>About the Artist</IonTitle>
        </IonToolbar>
        <Fab />
      </IonHeader>
      <IonContent>
        <div className="container">
          <h1>stuff</h1>
          <p>
            Sathmara is a moniker that I have chosen for myself, much as a
            writer chooses a pen name. My birth name is Maria Gabriela Hernandez
            and I have had an interest in clothing and sewing since a very young
            age. I didn’t get much chance to explore sewing as a hobby during my
            early years, the most I ever did was a few hand sewn projects here
            and there; little nick-knacks, doilies, and the like. During high
            school I was highly involved in theater and it was in my 11th grade
            year that I was offered the chance to really become well acquainted
            with a sewing machine. Needless to say, the sewing machine and I
            have been inseparable since then. Within that same year I won a
            Cappie award for Costume Design for the musical The Scarlet
            Pimpernel. After high school I studied for a time at Point Park
            University’s Conservatory of Performing Arts as a Costume Design
            concentration in their Technical Theater program. I returned home to
            Florida where I continued to study at The Art Institute of Ft.
            Lauderdale as part of their Fashion Design program. After that, I
            dedicated myself to being a freelance custom clothing and costume
            designer for private and commercial clients.
          </p>
          <p>
            I enjoy being able to take people’s ideas for an article of clothing
            they want and making it a reality regardless of whether they are
            asking for something simple, like a night gown, or something
            complex, like a wedding dress. I also greatly enjoy creating or
            recreating costumes which tend to be more challenging and creative
            endeavors. Some of my previous clients include cosplayers, models,
            brides, men, women, children, you name it.
          </p>
          <p>
            If it is meant to be worn, I am always happy to give it my best shot
            at making it a reality. I can also do small jobs such as
            alterations, patches, fixes etc. so long as time and other
            preexisting projects allow.
          </p>
          <p>
            If you are interested in having something made, visit the Contact Me
            page and fill out the form. I will get back to you as soon as
            possible.
          </p>
          <p>
            Also, if you haven’t already, feel free to look at my Portfolio Page
            to see some of my previous work.
          </p>
          <p>Thank you for taking the time to read this entry,</p>
          <p>Sathmara,</p>
          <p>Maria Hernandez</p>
          <IonButton color="primary">Facebook</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

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
          <IonTitle>Services</IonTitle>
        </IonToolbar>
        <Fab />
      </IonHeader>
      <IonContent>
        <div className="container">
          <h1>stuff again</h1>
          <p>
            To put it simply, I’ll try my hand at just about anything involving
            fabric. If I haven’t mentioned anything about a project you’re
            looking to have done, ask me about it anyways. I’ll be more than
            happy to tell you if it’s within my skill-set or even if I know
            someone who would be better for the job. I’m always happy to help
            however I can.
          </p>
          <p>
            That being said, here is a basic list of some of the more common
            projects types I do…
          </p>
          <p>IMAGES AND STUFF HERE</p>
          <p>
            Essentially, the creation of anything that requires pieces of fabric
            to be held together by thread. Whether it be a costume that requires
            a custom pattern, a basic T-shirt, or a completely unique wedding
            dress. I’m you’re one stop shop for just about anything involving
            fabric and I don’t mind working with people of all shapes, sizes,
            and ages. My favorite projects are costume projects because I love
            the challenge of making something out-of-the-ordinary a reality but
            I am more than happy to design and make any custom garment for you.
            <br />
            Pricing for custom garments vary widely as each project has it’s own
            challenges and specifications. No single project is ever really the
            same. The best advice I can give is to just talk to me about your
            project and I will help guide you on what the options are and how
            each option affects the overall cost of the project.
          </p>
          <p>ALTERATION THINGS</p>
          <p>
            Sometimes old clothing doesn’t fit like it used to; Sometimes, new
            clothing just doesn’t sit right on your frame; and sometimes, you’re
            just tired of that old, dated dress and you want to transform it
            into something new and refreshing. Alterations are essential to
            looking your best because to look good, clothing has to fit properly
            and you just can’t achieve that with store-bought, ready-to-wear
            clothing. What can be done will always depend on several factors,
            but there are always options to be considered before you give up on
            an article of clothing.
            <br />
            Some of the more basic alterations have set prices. (For example,
            replacing a zipper, shortening or extending a hem, taking a garment
            in, etc.) The more complex projects are generally based on the
            amount of hours needed to complete the alteration and will be priced
            accordingly. Contact me to discuss your specific needs so I can give
            you an idea of the scope of the project and an estimate of overall
            cost.
            <br />
            <a href="http://www.facebook.com">
              Click here for a list of basic alteration prices.
            </a>
          </p>
          <p>Embroidery</p>
          <p>
            Embroidery can add some elegant flair or fun designs to anything
            from a shirt to a baby blanket. I’ve got hundreds of pre-made
            designs to choose from but I can also digitize and embroider custom
            designs for anything from company or school uniforms to
            monogramming, lettering, and patches (Sew-on or Iron-on). I can also
            do metallic thread, 3D puff, applique and so much more.
            <br />
            <a href="http://www.facebook.com">
              Click here for a list of general pricing on embroidery.
            </a>
          </p>
          <p>Printing</p>
          <p>
            The majority of printing I do is silk screen printing. It’s a tried
            and true classic technique for making printed apparel; especially in
            large quantities. Depending on your desired design, screen print
            might not be a good fit for you, in that case I also work with vinyl
            transfers. This option is good for detailed, color heavy designs or
            small batch projects. Vinyl is also good for materials that can’t be
            printed very well like polyester and other synthetics. I will
            discuss your specific design needs with you and recommend which
            option I think will fir your project best.
            <br />
            <a href="http://www.facebook.com">
              Click here for a list of general pricing for prints.
            </a>
          </p>
          <p>Fashion Styling and Advice</p>
          <p>
            If you’re not sure or have trouble understanding how to dress your
            particular body shape, I can help you find what you’re looking for.
            I can discuss with you what features you like and what you want to
            showcase and then teach you how to pick out clothing that will do
            just that.
          </p>
          <p>Home Decor</p>
          <p>
            There’s fabric to be had inside your home too and I’ve had to make
            my fair share of cushions, curtains, and table cloths. Nothing is
            off limits… except maybe full sized furniture like sofas. That’s for
            the upholstery professionals with the fancy staple guns!
          </p>
          <IonButton color="primary">Facebook</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

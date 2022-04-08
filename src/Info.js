import React from "react";
import skeleton from "./images/skeleton.png";
import spine_cervical from "./images/spine_cervical.png";
import spine_lumbar from "./images/spine_lumbar.png";
import spine_cervical_lumbar from "./images/spine_cervical_lumbar.png";
import spine_whole from "./images/spine_whole.png";
import spine_sacrum from "./images/spine_sacrum.png";
import spine_coccyx from "./images/spine_coccyx.png";
import upper_shoulder from "./images/upper_shoulder.png";
import upper_elbow from "./images/upper_elbow.png";
import upper_wrist from "./images/upper_wrist.png";
import upper_hand from "./images/upper_hand.png";
import upper_finger from "./images/upper_finger.png";
import upper_thumb from "./images/upper_thumb.png";
import lower_hip from "./images/lower_hip.png";
import lower_knee from "./images/lower_knee.png";
import lower_ankle from "./images/lower_ankle.png";
import lower_foot from "./images/lower_foot.png";

import { BodyRegionContext } from "./BodyRegionContext";

export default function Info() {
  const [bodyRegionContext, setBodyRegionContext] = React.useContext(BodyRegionContext);

  return (
    <div className="lg-12 col">
    <header>
      {/* <h1 className="title">ORAC</h1> */}
      {(() => {
        switch (bodyRegionContext){
          case "Cervical Spine":
            return <img className="image" src={spine_cervical} />;
          case "Lumbar Spine":
            return <img className="image" src={spine_lumbar} />;
          case "Cervical / Lumbar Spine":
            return <img className="image" src={spine_cervical_lumbar} />;
          case "Whole Spine":
            return <img className="image" src={spine_whole} />;
          case "Sacrum":
            return <img className="image" src={spine_sacrum} />;
          case "Coccyx":
            return <img className="image" src={spine_coccyx} />;
          case "Shoulder":
            return <img className="image" src={upper_shoulder} />;
          case "Elbow":
            return <img className="image" src={upper_elbow} />;
          case "Wrist":
            return <img className="image" src={upper_wrist} />;
          case "Hand":
            return <img className="image" src={upper_hand} />;
          case "Finger":
            return <img className="image" src={upper_finger} />;
          case "Thumb":
            return <img className="image" src={upper_thumb} />;
          case "Hip":
            return <img className="image" src={lower_hip} />;
          case "Knee":
            return <img className="image" src={lower_knee} />;
          case "Ankle":
            return <img className="image" src={lower_ankle} />;
          case "Foot":
            return <img className="image" src={lower_foot} />;
          default:
            return <img className="image" src={skeleton} />;
        }
      })()}

    </header>
    </div>
  );
}

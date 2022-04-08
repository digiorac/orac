import React from "react";
import { AppStepContext } from "./AppStepContext";
import { BarContext } from "./BarContext";

export default function Nav() {
  const [barContext, setBarContext] = React.useContext(BarContext);
  const [appStepContext, setAppStepContext] = React.useContext(AppStepContext);

  function setBothContext() {
    setAppStepContext(0);
    setBarContext(0);
  }

  return (
    <div no-padding>
      <nav>
        <div className="nav-brand">
          <h3>ORAC Visualiser</h3>
        </div>
        <div className="collapsible-body">
          <ul className="inline">
            <li onClick={() => setBothContext()}>
              <a href="#">
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="lg-12 col no-padding">
        <div className="row">
          <div className="progress margin-bottom">
            {barContext !== 7 ? 
            <div className={"bar striped secondary w-" + (barContext*25>>0)}></div> : 
            <div className="bar striped w-100"></div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

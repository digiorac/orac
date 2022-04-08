import React, { useContext } from "react";
import { BodyRegionContext } from "./BodyRegionContext";
import { BarContext } from "./BarContext";
import { AppStepContext } from "./AppStepContext"
import Info from "./Info";
import Citations from "./Citations";
import Nav from "./Nav";
import Resources from "./Resources";
import BaseButtons from "./BaseButtons";
import "./App.css";

function App() {

  const [bodyRegionContext, setBodyRegionContext] = React.useState("");
  const [barContext, setBarContext] = React.useState("");
  const [appStepContext, setAppStepContext] = React.useState(0);

  return (
    <BodyRegionContext.Provider value={[bodyRegionContext, setBodyRegionContext]}>
      <BarContext.Provider value={[barContext, setBarContext]}>
        <AppStepContext.Provider value={[appStepContext, setAppStepContext]}>
          <React.Fragment>
              <Nav />
              <div className="row">
                <div className="lg-5 col no-padding">
                  <div className="paper no-padding">
                    <Info />
                  </div>
                </div>
                <BaseButtons />
                <div className="lg-12 col no-side-padding">
                  {/* <Resources /> */}
                  <Citations />
                </div>
              </div>
          </React.Fragment>
        </AppStepContext.Provider>
      </BarContext.Provider>
    </BodyRegionContext.Provider>
  );
}

export default App;

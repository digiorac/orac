import React from "react";
import oracData from "./oracData";
import { BodyRegionContext } from "./BodyRegionContext";
import { BarContext } from "./BarContext";
import { AppStepContext } from "./AppStepContext";
import { TiArrowBack } from "react-icons/ti";
import "./App.css";

export default function BaseButtons() {
  const targetRef = React.useRef(null);
  const [oracType, setOracType] = React.useState("");
  const [curHeader, setCurHeader] = React.useState("ORAC Guidelines");
  const [bodyRegions, setBodyRegions] = React.useState([]);
  const [bodyRegion, setBodyRegion] = React.useState("");
  const [clinicalIndications, setClinicalIndications] = React.useState([]);
  const [clinicalIndication, setClinicalIndication] = React.useState("");
  const [appropriatenessCriteria, setAppropriatenessCriteria] = React.useState([]);
  const [clinicalConsiderations, setClinicalConsiderations] = React.useState([]);
  const [recommendedProjections, setRecommendedProjections] = React.useState("");
  const [xRayRemarks, setXRayRemarks] = React.useState([]);
  const [referralImagingRequirements, setReferralImagingRequirements] = React.useState("");

  const [bodyRegionContext, setBodyRegionContext] = React.useContext(BodyRegionContext);
  const [barContext, setBarContext] = React.useContext(BarContext);
  const [appStepContext, setAppStepContext] = React.useContext(AppStepContext);

  const uniqueOracTypes = [...new Set(oracData.map(item => item.oracType))];

  //Sets status of page, i.e header & current buttons that appear on page
  function setStatus(step) {
    if (window.innerWidth < 1000) {
      window.scrollTo(0, 750)
    } else {
      window.scrollTo(0, 0)
    }
    setAppStepContext(step);
    setBarContext(step);
    switch (step) {
      case 1:
        setCurHeader("Body Region");
        break;
      case 2:
        setCurHeader("Clinical Indication");
        break;
      case 3:
        setCurHeader("Appropriateness Criteria & Clinical Considerations");
        break;
      case 4:
        setCurHeader("Recommended Projections, X-Ray Remarks & Orthopaedic Referral Imaging Requirements");
        break;
      default:
        setCurHeader("ORAC Guidelines");
    }
  }

  //takes all unique body regions from the oracData.js file and puts them in an array
  function populateBodyRegions(oracType) {
    const relevantData = oracData.filter(item => item.oracType === oracType);
    setBodyRegions([...new Set(oracData.filter(item => item.oracType === oracType).map(item => item.bodyRegion))]);
  }

  //takes all unique clinical indications for the chosen body region from the oracData.js file and puts them in an array
  function populateClinicalIndications(bodyRegion) {
    const relevantData = oracData.filter(item => item.bodyRegion === bodyRegion);
    const result = [];
    relevantData.forEach(record =>
      record.information.forEach(
        item => result.push(item.clinicalIndication)
      )
    )
    setClinicalIndications([...new Set(result)]);
  }

  //populates the rest of the data for the rest of the boxes for the chosen clinical indication from the oracData.jsfile
  function populateRestOfData(clinicalIndication) {
    const relevantData = oracData.filter(item => item.bodyRegion === bodyRegion);

    for (let i = 0; i < relevantData[0].information.length; i++) {
      if (relevantData[0].information[i].clinicalIndication === clinicalIndication) {
        let info = relevantData[0].information[i];
        setAppropriatenessCriteria(info.appropriatenessCriteria);
        setClinicalConsiderations(info.clinicalConsiderations);
        setRecommendedProjections(info.recommendedProjections);
        setXRayRemarks(info.xRayRemarks);
        setReferralImagingRequirements(info.referralImagingRequirements);
      }
    }
  }



  return (
    <div className="lg-7 col no-padding">
      <div className="paper">
        <div
          className="article-title"
          style={{
            resize: "horizontal",
            overflow: "hidden",
            textAlign: "center"
          }}>
          <h3>{curHeader}</h3>
        </div>
        {(() => {
          switch (appStepContext) {
            //after orac type is selected, generate buttons based on body regions
            case 1: return <div>
              {bodyRegions.map((bodyRegion, index) => {
                return <div className="row">
                  <div className="col-fill col no-padding">
                    <button
                      class="btn-block"
                      className="main-button"
                      onClick={() => {
                        setStatus(2);
                        setBodyRegion(bodyRegion);
                        populateClinicalIndications(bodyRegion);
                        setBodyRegionContext(bodyRegion);
                      }}>
                      <div ref={targetRef} className="border inner-paper">
                        <h4 className="h4">{bodyRegion}</h4>
                      </div>
                    </button>
                  </div>
                </div>
              })}
              <div className="col-fill col no-padding">
                <button
                  class="btn-secondary"
                  className="main-button-back"
                  onClick={() => {
                    setStatus(0);
                  }}>
                  <div ref={targetRef} className="border inner-paper-back">
                    <TiArrowBack className="h4"></TiArrowBack>
                    &nbsp;
                    <h4 className="h4">Back</h4>
                  </div>
                </button>
              </div>
            </div>
            //after body region is selected, generate buttons based on clinical indications
            case 2: return <div>
              {clinicalIndications.map((clinicalIndication, index) => {
                return <div className="row">
                  <div className="col-fill col no-padding">
                    <button
                      class="btn-block"
                      className="main-button"
                      onClick={() => {
                        setStatus(3);
                        setClinicalIndication(clinicalIndication);
                        populateRestOfData(clinicalIndication);
                      }}>
                      <div ref={targetRef} className="border inner-paper">
                        <h4 className="h4">{clinicalIndication}</h4>
                      </div>
                    </button>
                  </div>
                </div>
              })}
              <div className="col-fill col no-padding">
                <button
                  class="btn-secondary"
                  className="main-button-back"
                  onClick={() => {
                    setStatus(1);
                  }}>
                  <div ref={targetRef} className="border inner-paper-back">
                    <TiArrowBack className="h4"></TiArrowBack>
                    &nbsp;
                    <h4 className="h4">Back</h4>
                  </div>
                </button>
              </div>
            </div>;
            //after clinical indication is selected, show the rest of the data in text boxes
            case 3:
              return <div>
                <div className="row">
                  <div className="col-fill col no-padding">
                    <div style={{ overflow: "hidden", width: "100%" }}>
                      <div
                        ref={targetRef}
                        className="border"
                        style={{
                          backgroundColor: "aliceblue",
                          padding: "1rem",
                          resize: "horizontal",
                          overflow: "hidden",
                          maxWidth: "100%",
                          minWidth: "4rem"
                        }}
                      >
                        {appropriatenessCriteria.remarks}
                      </div>
                    </div>
                  </div>
                </div>
                {appropriatenessCriteria.conditions.length !== 0 ?
                  <div className="row">
                    <div className="col-fill col no-padding">
                      <div style={{ overflow: "hidden", width: "100%" }}>
                        <div
                          ref={targetRef}
                          className="border"
                          style={{
                            backgroundColor: "aliceblue",
                            padding: "1rem",
                            resize: "horizontal",
                            overflow: "hidden",
                            maxWidth: "100%",
                            minWidth: "4rem"
                          }}
                        >
                          {appropriatenessCriteria.conditions.map((item, index) => {
                            return <fieldset class="form-group">
                              <label for={"paperChecksA" + index} class="paper-check">
                                <input type="checkbox" name="paperChecks" id={"paperChecksA" + index} value={"paperChecksA" + index} /> <span>{item}</span>
                              </label>
                            </fieldset>
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  : <div></div>}
                {appropriatenessCriteria.remarks2 !== "" ?
                  <div className="row">
                    <div className="col-fill col no-padding">
                      <div style={{ overflow: "hidden", width: "100%" }}>
                        <div
                          ref={targetRef}
                          className="border"
                          style={{
                            backgroundColor: "aliceblue",
                            padding: "1rem",
                            resize: "horizontal",
                            overflow: "hidden",
                            maxWidth: "100%",
                            minWidth: "4rem"
                          }}
                        >
                          {appropriatenessCriteria.remarks2}
                        </div>
                      </div>
                    </div>
                  </div>
                  : <div></div>}
                {appropriatenessCriteria.conditions2.length !== 0 ?
                  <div className="row">
                    <div className="col-fill col no-padding">
                      <div style={{ overflow: "hidden", width: "100%" }}>
                        <div
                          ref={targetRef}
                          className="border"
                          style={{
                            backgroundColor: "aliceblue",
                            padding: "1rem",
                            resize: "horizontal",
                            overflow: "hidden",
                            maxWidth: "100%",
                            minWidth: "4rem"
                          }}
                        >
                          {appropriatenessCriteria.conditions2.map((item, index) => {
                            return <fieldset class="form-group">
                              <label for={"paperChecksB" + index} class="paper-check">
                                <input type="checkbox" name="paperChecks" id={"paperChecksB" + index} value={"paperChecksA" + index} /> <span>{item}</span>
                              </label>
                            </fieldset>
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  : <div></div>}
                <div>
                  {clinicalConsiderations.map((clinicalConsideration, index) => {
                    return <div className="row">
                      <div className="col-fill col no-padding">
                        <div className="main-button">
                          <div
                            ref={targetRef}
                            className="border"
                            style={{
                              backgroundColor: "aliceblue",
                              padding: "1rem",
                              resize: "horizontal",
                              overflow: "hidden",
                              maxWidth: "100%",
                              minWidth: "4rem"
                            }}
                          >
                            {clinicalConsideration}
                          </div>
                        </div>
                      </div>
                    </div>
                  })}
                  <div className="row">
                    <div className="col-fill col no-padding">
                      <button
                        class="btn-block"
                        className="main-button"
                        onClick={() => {
                          setStatus(4);
                        }}>
                        <div ref={targetRef} className="border inner-paper">
                          <h4 className="h4">Next</h4>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="col-fill col no-padding">
                    <button
                      class="btn-secondary"
                      className="main-button-back"
                      onClick={() => {
                        setStatus(2);
                      }}>
                      <div ref={targetRef} className="border inner-paper-back">
                        <TiArrowBack className="h4"></TiArrowBack>
                        &nbsp;
                        <h4 className="h4">Back</h4>
                      </div>
                    </button>
                  </div>
                </div>
              </div>;
            case 4: return <div>
              {recommendedProjections.map((recommendedProjection, index) => {
                return <div className="row">
                  <div className="col-fill col no-padding">
                    <div className="main-button">
                      <div
                        ref={targetRef}
                        className="border"
                        style={{
                          backgroundColor: "aliceblue",
                          padding: "1rem",
                          resize: "horizontal",
                          overflow: "hidden",
                          maxWidth: "100%",
                          minWidth: "4rem"
                        }}
                      >
                        {recommendedProjection}
                      </div>
                    </div>
                  </div>
                </div>
              })}
                {xRayRemarks.map((xRayRemark, index) => {
                  return <div className="row">
                    <div className="col-fill col no-padding">
                      <div className="main-button">
                        <div
                          ref={targetRef}
                          className="border"
                          style={{
                            backgroundColor: "aliceblue",
                            padding: "1rem",
                            resize: "horizontal",
                            overflow: "hidden",
                            maxWidth: "100%",
                            minWidth: "4rem"
                          }}
                        >
                          {xRayRemark}
                        </div>
                      </div>
                    </div>
                  </div>
                })}
                {referralImagingRequirements.map((requirement, index) => {
                  return <div className="row">
                    <div className="col-fill col no-padding">
                      <div className="main-button">
                        <div
                          ref={targetRef}
                          className="border"
                          style={{
                            backgroundColor: "aliceblue",
                            padding: "1rem",
                            resize: "horizontal",
                            overflow: "hidden",
                            maxWidth: "100%",
                            minWidth: "4rem"
                          }}
                        >
                          {requirement}
                        </div>
                      </div>
                    </div>
                  </div>
                })}
                <div className="row">
                  <div className="col-fill col no-padding">
                    <button
                      class="btn-block"
                      className="main-button-back"
                      onClick={() => {
                        setStatus(0);
                        setBodyRegionContext("");
                      }}>
                      <div ref={targetRef} className="border inner-paper-finish">
                        <h4 className="h4">Finish</h4>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="col-fill col no-padding">
                  <button
                    class="btn-secondary"
                    className="main-button-back"
                    onClick={() => {
                      setStatus(3);
                    }}>
                    <div ref={targetRef} className="border inner-paper-back">
                      <TiArrowBack className="h4"></TiArrowBack>
                      &nbsp;
                      <h4 className="h4">Back</h4>
                    </div>
                  </button>
                </div>
            </div>;
            //on start: set & display buttons based on orac type (1 of 3)
            default: return uniqueOracTypes.map((oracType, index) => {
              return <div className="row">
                <div className="col-fill col no-padding">
                  <button
                    class="btn-block"
                    className="main-button"
                    onClick={() => {
                      setStatus(1);
                      setOracType(oracType);
                      populateBodyRegions(oracType);
                    }}>
                    <div ref={targetRef} className="border inner-paper">
                      <h4 className="h4">{oracType}</h4>
                    </div>
                  </button>
                </div>
              </div>
            });
          }
        })()}
      </div>
    </div>
  );
}


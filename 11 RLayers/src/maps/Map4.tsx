import React from "react";
import {fromLonLat, transform} from "ol/proj";
import {LineString, Point} from "ol/geom";
import {Polyline as PolylineFormat} from "ol/format";
import "ol/ol.css";

import {RMap, ROSM, RLayerVector, RFeature} from "rlayers";
import {RStyle, RCircle, RFill, RStroke} from "rlayers/style";

// This example uses the free Nominatim service of OpenStreetMap which is subject to very strict usage rules
// https://operations.osmfoundation.org/policies/nominatim/
// The address request rate is limited to 1 request per second and they immediately ban you if you exceed this limit
// There are paid alternatives to this service

function fillAddress(point: Point): Promise<string> {
  if (point === null) return Promise.resolve("");
  const coordsWGS = transform(point.getCoordinates(), "EPSG:3857", "EPSG:4326");
  const URL = `https://nominatim.openstreetmap.org/reverse?format=json&lon=${coordsWGS[0]}&lat=${coordsWGS[1]}`;
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.display_name)
    .catch((error) => error.message);
}

const polyReader = new PolylineFormat();
function parseRoute(routes: string[] | any[]): LineString {
  if (routes && routes.length > 0) {
    const f: any = polyReader.readFeature(routes[0].geometry);
    f.getGeometry().transform("EPSG:4326", "EPSG:3857");
    // console.log("f:", f);
    return f.getGeometry();
  }
  // @ts-ignore
  return null;
}

function buildRoute(start: Point, finish: Point): Promise<LineString> {
  if (start === null || finish === null) return Promise.resolve(null!);
  const startCoords = transform(start.getCoordinates(), "EPSG:3857", "EPSG:4326");
  const finishCoords = transform(finish.getCoordinates(), "EPSG:3857", "EPSG:4326");

  const URL =
    "https://router.project-osrm.org/route/v1/driving/" +
    `${startCoords[0]},${startCoords[1]};${finishCoords[0]},${finishCoords[1]}`;
  // @ts-ignore
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      // console.log("data:", data);
      parseRoute(data.routes);
    });
}

const Map4 = (): JSX.Element => {
  const [start, setStart] = React.useState(null as unknown as Point);
  const [finish, setFinish] = React.useState(null as unknown as Point);
  enum Step {
    START = 0,
    FINISH = 1,
  }
  const [step, setStep] = React.useState(Step.START);
  const [startAddress, setStartAddress] = React.useState("");
  const [finishAddress, setFinishAddress] = React.useState("");
  const [route, setRoute] = React.useState(null as unknown as LineString);

  // On start change
  React.useEffect(() => {
    fillAddress(start).then((address) => setStartAddress(address));
  }, [start]);

  // On finish change
  React.useEffect(() => {
    fillAddress(finish).then((address) => setFinishAddress(address));
  }, [finish]);

  // When either one changes
  React.useEffect(() => {
    buildRoute(start, finish).then((line) => setRoute(line));
  }, [start, finish]);

  return (
    <div className="container">
      <RMap
        width={"100%"}
        height={"50vh"}
        className="example-map"
        initial={{center: fromLonLat([18.5, 54.5]), zoom: 11}}
        onClick={(event) => {
          const coords = event.map.getCoordinateFromPixel(event.pixel);
          if (step === Step.START) {
            setFinish(null!);
            setStart(new Point(coords));
            setStep(Step.FINISH);
          } else {
            setFinish(new Point(coords));
            setStep(Step.START);
          }
        }}
      >
        <ROSM />
        <RLayerVector>
          <RStyle>
            <RCircle radius={6}>
              <RFill color="red" />
            </RCircle>
          </RStyle>
          <RFeature key={0} geometry={start} />
          <RFeature key={1} geometry={finish} />
          <RFeature key={2} geometry={route}>
            <RStyle>
              <RStroke width={4} color="darkgreen" />
            </RStyle>
          </RFeature>
        </RLayerVector>
      </RMap>
      <div className="mx-0 mt-0 mb-3 p-1 w-100 jumbotron shadow shadow">
        <p>
          <strong>Select {step === Step.START ? "START" : "FINISH"} point</strong>
        </p>
        <div className="d-flex mt-2 justify-content-between">
          {startAddress.length === 0 ? null : (
            <div>
              <strong>From: </strong>
              <em>{startAddress}</em>
            </div>
          )}
          {finishAddress.length === 0 ? null : (
            <div>
              <strong>To: </strong>
              <em>{finishAddress}</em>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Map4;

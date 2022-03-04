import React from "react";
import {fromLonLat} from "ol/proj";
import {Coordinate} from "ol/coordinate";
import {Point} from "ol/geom";
import "ol/ol.css";

import {RMap, ROSM, RLayerVector, RFeature, ROverlay, RStyle} from "rlayers";
import locationIcon from "./Map3.svg";

const coords: Record<string, Coordinate> = {
  origin: [2.364, 48.82],
  ArcDeTriomphe: [2.295, 48.8737],
};

const Map3 = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="container">
        <RMap className="example-map" initial={{center: fromLonLat(coords.origin), zoom: 11}} width={"100%"} height={"30vh"}>
          <ROSM />
          <RLayerVector zIndex={10}>
            <RStyle.RStyle>
              <RStyle.RIcon src={locationIcon} anchor={[0.5, 0.8]} />
            </RStyle.RStyle>
            <RFeature
              geometry={new Point(fromLonLat(coords.ArcDeTriomphe))}
              onClick={(event: any) => {
                event.map.getView().fit(event.target.getGeometry().getExtent(), {
                  duration: 250,
                  maxZoom: 15,
                });
                // console.log("event - Map3:", event);
              }}
            >
              <ROverlay className="example-overlay">
                Arc de Triomphe
                <br />
                <em>&#11017; click to zoom</em>
              </ROverlay>
            </RFeature>
          </RLayerVector>
        </RMap>
      </div>
    </React.Fragment>
  );
};

export default Map3;

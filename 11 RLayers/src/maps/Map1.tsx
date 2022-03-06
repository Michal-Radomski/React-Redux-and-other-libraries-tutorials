import React from "react";
import {fromLonLat} from "ol/proj";
import "ol/ol.css";

import {RMap, ROSM} from "rlayers";

const center = fromLonLat([18.5, 54.5]);

const Map1 = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="container">
        <RMap width={"100%"} height={"30vh"} initial={{center: center, zoom: 11}} minZoom={5}>
          <ROSM />
        </RMap>
      </div>
    </React.Fragment>
  );
};

export default Map1;

import React from "react";
import {MapBrowserEvent} from "ol";
import {fromLonLat, toLonLat} from "ol/proj";
import "ol/ol.css";
import "rlayers/control/layers.css";

import {RMap, RContext, ROSM, RControl} from "rlayers";

const origin = [18.5, 54.5];

const Map2 = (): JSX.Element => {
  const [loc, setLoc] = React.useState<number[]>(origin);
  return (
    <React.Fragment>
      <div className="container">
        <RMap
          width={"100%"}
          height={"50vh"}
          className="example-map"
          initial={{center: fromLonLat(origin), zoom: 11}}
          noDefaultControls={true}
          onClick={React.useCallback((event: MapBrowserEvent<UIEvent>) => {
            const coords = event.map.getCoordinateFromPixel(event.pixel);
            const lonlat = toLonLat(coords);
            setLoc(lonlat);
          }, [])}
        >
          <ROSM />
          <RControl.RScaleLine />
          <RControl.RAttribution />
          <RControl.RZoom />
          <RControl.RZoomSlider />
          <RControl.RFullScreen />
          <RControl.RFullScreen
            // Take a look at index.html and example.css for this one
            className="example-fullscreen"
            source="fullscreen"
            label="&#x6269;"
            labelActive="&#x564f;"
          />
          <RControl.RCustom className="example-control">
            <RContext.Consumer>
              {({map}) => <button onClick={() => map?.getView().setCenter(fromLonLat(loc))}>C</button>}
            </RContext.Consumer>
          </RControl.RCustom>
        </RMap>
        <div className="mx-0 mt-0 mb-3 p-1 w-100 jumbotron shadow">
          <p>
            Last click location is <strong>{`${loc[1].toFixed(3)} : ${loc[0].toFixed(3)}`}</strong>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Map2;

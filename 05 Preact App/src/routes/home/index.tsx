import {FunctionalComponent, h} from "preact";
import style from "./style.css";

import Component1 from "./newComponents/Component1";
import Component2 from "./newComponents/Component2";
import Component3 from "./newComponents/Component3";

const Home: FunctionalComponent = () => {
  return (
    <div class={style.home}>
      <h1>Home</h1>
      <p>This is the Home component.</p>
      <Component1 myName="Michal" library={2} />
      <Component2 />
      <br />
      <Component3 />
    </div>
  );
};

export default Home;

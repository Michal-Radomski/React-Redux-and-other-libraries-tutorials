import React from "react";
import {gsap} from "gsap";

import "./fonts/FranklinGothicBook.ttf";
import Logo from "./media/logo.png";

import "./StarWarsCrawl.scss";

const StarWarsCrawl = (): JSX.Element => {
  const intro = React.useRef<HTMLDivElement>(null);
  const title = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let tl = gsap.timeline();
    //*Below the same
    // gsap.to(intro.current, {opacity: 1, delay: 1, duration: 4.5});
    // gsap.to(intro.current, {opacity: 0, delay: 5.5, duration: 1.5});
    tl.to(intro.current, {opacity: 1, delay: 1, duration: 4.5})
      .to(intro.current, {opacity: 0, duration: 1.5})
      .set(title.current, {opacity: 1, scale: 2.75})
      .to(title.current, {scale: 0.05, ease: "power2", duration: 8})
      .to(title.current, {opacity: 0, duration: 1.5}, "-=1.5");
  }, []);

  return (
    <>
      <div className="StarWarsMain">
        <section className="intro" ref={intro}>
          <p>
            Some time ago, in the Solar System on Mars,
            <br /> quite not that far ...
          </p>
        </section>
        <section className="title" ref={title}>
          <img src={Logo} alt="Code Wars title" />
        </section>
      </div>
      ;
    </>
  );
};

export default StarWarsCrawl;

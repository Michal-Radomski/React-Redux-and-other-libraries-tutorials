import React from "react";
import {gsap} from "gsap";

import "./fonts/FranklinGothicBook.ttf";
import Logo from "./media/logo.png";
import Mute from "./media/mute.png";
import Volume from "./media/volume.png";

import "./StarWarsCrawl.scss";

interface AudioRefElem extends React.MutableRefObject<HTMLAudioElement> {
  muted: boolean;
  play(): void;
}

const StarWarsCrawl = (): JSX.Element => {
  const intro = React.useRef<HTMLDivElement>(null);
  const title = React.useRef<HTMLDivElement>(null);
  const content = React.useRef<HTMLDivElement>(null);
  const audio = React.useRef<AudioRefElem | any>();

  const [muted, setMuted] = React.useState<boolean>(true);

  React.useEffect(() => {
    let tl = gsap.timeline();
    //*Below the same
    // gsap.to(intro.current, {opacity: 1, delay: 1, duration: 4.5});
    // gsap.to(intro.current, {opacity: 0, delay: 5.5, duration: 1.5});
    tl.to(intro.current, {opacity: 1, delay: 1, duration: 4.5})
      .to(intro.current, {
        opacity: 0,
        duration: 1.5,
        onComplete: () => {
          audio!.current!.play();
        },
      })
      .set(title.current, {opacity: 1, scale: 2.75, delay: 0.5})
      .to(title.current, {scale: 0.05, ease: "power3.inOut", duration: 8})
      .to(title.current, {opacity: 0, duration: 1.5}, "-=1.5")
      .to(content.current, {top: "-170%", duration: 20})
      .to(content.current, {opacity: 0, duration: 1.5});
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
          <img src={Logo} alt="Mars Wars" />
        </section>
        <section className="crawl">
          <div className="content" ref={content}>
            <h1 className="episode-number">Episode 0</h1>
            <h2 className="episode-title">THE JEDI ON MARS</h2>
            <p>
              Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than
              only Mercury.
            </p>
            <p>In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".</p>
            <p>
              Mars is the site of <b>Olympus Mons</b>, the largest volcano and highest known mountain on any planet in the
              Solar System, and of <b>Valles Marineris</b>, one of the largest canyons in the Solar System.
            </p>
          </div>
        </section>

        <audio ref={audio} muted>
          <source type="audio/mpeg" src="https://ia801501.us.archive.org/23/items/StarWars_20180709/Star%20Wars.mp3" />
        </audio>
        <button
          className="volume"
          type="button"
          onClick={() => {
            audio!.current!.muted = !muted;
            setMuted(!muted);
          }}
        >
          {muted ? <img src={Mute} alt="Volume is off" /> : <img src={Volume} alt="Volume is on" />}
        </button>
      </div>
    </>
  );
};

export default StarWarsCrawl;

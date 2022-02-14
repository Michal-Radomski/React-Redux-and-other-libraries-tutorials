import React from "react";
import {gsap} from "gsap";

import "./fonts/FranklinGothicBook.ttf";
import Logo from "./media/logo.png";
import Mute from "./media/mute.png";
import Volume from "./media/volume.png";

import "./StarWarsCrawl.scss";

const StarWarsCrawl = (): JSX.Element => {
  const intro = React.useRef<HTMLDivElement>(null);
  const title = React.useRef<HTMLDivElement>(null);
  const content = React.useRef<HTMLDivElement>(null);
  const audio = React.useRef<any>();

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
          audio.current.play();
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
            <h1 className="episode-number">Episode X</h1>
            <h2 className="episode-title">THE APP AWAKENS</h2>
            <p>
              The Development Team Lead has vanished. In her absence, the sinister FUNCTIONAL BUG has risen from the ashes of
              the CI Tool and will not rest until the last developer has been destroyed.
            </p>
            <p>
              With the support of the QA TEAM, the Software Developer leads a brave RESISTANCE. He is desperate to find his
              Lead and gain her help in restoring peace and justice to the repository.
            </p>
            <p>
              The Developer has sent his most daring editor theme on a secret mission to the production branch, where an old
              ally has discovered a clue to the Lead’s whereabouts....
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
            audio.current.muted = !muted;
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

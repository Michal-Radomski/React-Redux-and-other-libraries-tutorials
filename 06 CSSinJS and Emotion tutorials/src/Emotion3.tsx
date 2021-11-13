import React from "react";
import {css} from "@emotion/react";

const Emotion3 = (): JSX.Element => {
  const style: any = css`
    color: hotpink;
    background-color: green;
  `;

  const SomeComponent = ({children}: any): JSX.Element => (
    <div className={style}>
      Some hotpink text.
      {children}
    </div>
  );

  const anotherStyle: any = css({
    textDecoration: "underline",
  });

  const AnotherComponent = (): JSX.Element => <div className={anotherStyle}>Some text with an underline.</div>;

  return (
    <div>
      <SomeComponent>
        <AnotherComponent />
      </SomeComponent>
    </div>
  );
};

export default Emotion3;

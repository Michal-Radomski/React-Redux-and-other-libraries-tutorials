//- Fix the styles

import {css} from "@emotion/react";

const Emotion3 = () => {
  const style: any = css`
    color: hotpink;
  `;

  const SomeComponent = ({children}: any): JSX.Element => (
    <div className={style}>
      Some hotpink text.
      {children}
    </div>
  );

  return (
    <div>
      <SomeComponent />
    </div>
  );
};

export default Emotion3;

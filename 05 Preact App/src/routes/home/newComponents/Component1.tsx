import {h, FunctionalComponent} from "preact";

type MyComponentProps = {
  myName: string;
  library: number;
};

const Component1: FunctionalComponent<MyComponentProps> = ({myName, library}: MyComponentProps) => {
  return (
    <div>
      My name is {myName}. This is JS library nr {library}.
    </div>
  );
};

export default Component1;

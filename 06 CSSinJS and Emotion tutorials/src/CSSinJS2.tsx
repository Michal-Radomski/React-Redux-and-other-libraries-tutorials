import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
  myButton: {
    margin: (props: any) => props.spacing,
    padding: (props: any) => props.spacing,
  },
  myLabel: (props) => ({
    display: "block",
    color: props.labelColor,
    fontWeight: props.fontWeight,
    fontStyle: props.fontStyle,
    padding: props.padding,
  }),
});

const Button = ({children, ...props}: any): JSX.Element => {
  const classes = useStyles(props);
  return (
    <button className={classes.myButton}>
      Submit
      <span className={classes.myLabel}>{children}CSSinJS</span>
    </button>
  );
};

Button.defaultProps = {
  spacing: 10,
  fontWeight: "bold",
  labelColor: "red",
};

export const Button2 = () => <Button fontStyle="italic"></Button>;

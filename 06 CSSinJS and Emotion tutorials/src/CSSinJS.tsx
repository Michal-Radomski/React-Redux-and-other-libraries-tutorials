import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
  myButton: {
    padding: 10,
    color: "green",
    margin: {
      top: 5, // jss-default-unit makes this 5px
      right: 5,
      bottom: 5,
      left: "1rem",
    },
    "& span": {
      fontWeight: "bold", // jss-camel-case turns this into 'font-weight'
    },
  },
  myLabel: {
    fontStyle: "italic",
  },
});

const Button = (): JSX.Element => {
  const classes = useStyles();
  return (
    <button className={classes.myButton}>
      Button
      <span className={classes.myLabel}>CCCinJS</span>
    </button>
  );
};

export default Button;

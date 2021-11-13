import {createUseStyles, ThemeProvider} from "react-jss";

const useStylesFromThemeFunction = createUseStyles((theme: any) => ({
  button: {
    background: theme.colorPrimary,
    color: "red",
    padding: 10,
  },
  label: {
    fontWeight: "bold",
  },
}));

const Button = ({children, ...props}: any): JSX.Element => {
  const classes = useStylesFromThemeFunction(props);
  return (
    <button className={classes.button}>
      <span className={classes.label}>{children}</span>
    </button>
  );
};

const theme = {
  colorPrimary: "green",
};

export const Component3 = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Button>I am a button with green background</Button>
  </ThemeProvider>
);

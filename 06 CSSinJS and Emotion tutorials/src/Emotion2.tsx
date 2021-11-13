//- Fix the styles

const P = (props: any) => (
  <p
    css={{
      margin: 0,
      fontSize: 12,
      lineHeight: "1.5",
      fontFamily: "Sans-Serif",
      color: "black",
    }}
    {...props} // <- props contains the `className` prop
  />
);

const ArticleText = (props: any): JSX.Element => (
  <P
    css={{
      fontSize: 14,
      fontFamily: "Georgia, serif",
      color: "darkgray",
    }}
    {...props} // <- props contains the `className` prop
  >
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aut distinctio atque dolorum consectetur fugit.
  </P>
);

export default ArticleText;

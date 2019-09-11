const colors = {
  primary: "#7159c1",
  secondary: "#9b49c1",
  default: "#fff",
  black: "#000"
};

const viewports = {
  smartphone: "360px",
  tablet: "720px",
  desktop: "1280px"
};

const typograph = {
  title: {
    fontSize: "24px",
    color: colors.primary,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: "20px",
    color: colors.secondary,
    fontWeight: "bold"
  },
  text: {
    fontSize: "16px",
    color: colors.black,
    fontWeight: 400
  }
};

const theme = Object.freeze({
  colors,
  typograph,
  viewports
});

export default theme;

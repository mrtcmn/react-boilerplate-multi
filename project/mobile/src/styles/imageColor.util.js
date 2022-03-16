const defaultIconColor = '#86B2E4';
const blueVersion = {
  // bottomBar
  bottomDefault: defaultIconColor,
};
const whiteVersion = {
  // bottomBar
  bottomDefault: 'rgba(0,0,0,0.7)',
};
export default (theme = 'white') => {
  if (theme === 'dark') {
    return blueVersion;
  }
  if (theme === 'white') {
    return whiteVersion;
  }
};

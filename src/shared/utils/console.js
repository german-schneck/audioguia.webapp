// Dependencies
const isDevelopment = () => process.env.NODE_ENV === 'development';

const Console = {
  log: function(text) {
    if (isDevelopment()) {
      console.log(text);
    }
  },
  error: function(err) {
    if (isDevelopment() || !process.env.REACT_APP_SENTRY_ON) {
      console.error(err);
    } else {
      // Sentry.captureException(err);
    }
  }
};

export default Console;

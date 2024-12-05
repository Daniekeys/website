import ReactGA from "react-ga4";

// Initialize Google Analytics with your Measurement ID
export const initializeAnalytics = () => {
  ReactGA.initialize("GTM-N5CWC585"); // Replace with your Measurement ID
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const GTAG_UA = 'UA-141936827-1';

export const trackPageView = (url) => {
  try {
    window.gtag('config', GTAG_UA, {
      page_location: url
    });
  } catch (error) {
    // silences the error in dev mode
    // and/or if gtag fails to load
  }
};

export const trackLinkClick = (linkName) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'Link',
      event_label: linkName,
    });
  }
};

export const trackEvent = (eventName, paramter) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag('event', eventName, paramter);
  }
};
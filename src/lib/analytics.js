export const trackLinkClick = (linkName) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'Link',
      event_label: linkName,
    });
  }
};
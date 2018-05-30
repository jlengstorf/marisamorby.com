exports.onClientEntry = async () => {
  // If required — e.g. Safari — add the IntersectionObserver polyfill.
  if (typeof IntersectionObserver === 'undefined') {
    await import('intersection-observer');
  }
};

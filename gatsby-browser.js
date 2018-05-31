exports.onClientEntry = async () => {
  // If required — e.g. Safari — add the IntersectionObserver polyfill.
  if (typeof IntersectionObserver === 'undefined') {
    await import('intersection-observer');
  }

  (function(d) {
    var config = {
        kitId: 'axw8srx',
        scriptTimeout: 3000,
        async: true,
      },
      h = d.documentElement,
      t = setTimeout(function() {
        h.className =
          h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive';
      }, config.scriptTimeout),
      tk = d.createElement('script'),
      f = false,
      s = d.getElementsByTagName('script')[0],
      a;
    h.className += ' wf-loading';
    tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
    tk.async = true;
    tk.onload = tk.onreadystatechange = function() {
      a = this.readyState;
      if (f || (a && a !== 'complete' && a !== 'loaded')) return;
      f = true;
      clearTimeout(t);
      try {
        window.Typekit.load(config);
      } catch (e) {}
    };
    s.parentNode.insertBefore(tk, s);
  })(document);
};

(() => {
  // Public GoatCounter site code, not a password or API token.
  const siteCode = "areastudies";
  const productionHosts = new Set(["areastudies.cn", "www.areastudies.cn"]);

  if (
    !siteCode ||
    window.location.protocol !== "https:" ||
    !productionHosts.has(window.location.hostname)
  ) {
    return;
  }

  // Merge directory/index.html aliases, retaining the language in the path.
  // Query strings and fragments are not part of the recorded page path.
  window.goatcounter = {
    path: window.location.pathname.replace(/\/index\.html$/, "/") || "/",
  };

  const tracker = document.createElement("script");
  tracker.async = true;
  tracker.src = "https://gc.zgo.at/count.js";
  tracker.dataset.goatcounter = `https://${siteCode}.goatcounter.com/count`;
  document.head.appendChild(tracker);
})();

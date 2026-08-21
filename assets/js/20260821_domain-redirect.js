(() => {
  const redirectHosts = new Set(["area-studies.cn", "www.area-studies.cn"]);

  if (!redirectHosts.has(window.location.hostname)) {
    return;
  }

  const destination = new URL(window.location.href);
  destination.protocol = "https:";
  destination.hostname = "areastudies.cn";
  destination.port = "";
  window.location.replace(destination.toString());
})();

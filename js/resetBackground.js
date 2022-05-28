const ua = navigator.userAgent.toLowerCase();
if (ua.indexOf("safari") != -1) {
  if (ua.indexOf("chrome") <= -1) {
    document.getElementById("banner").classList.add("bg-reset");
    document.getElementById("event").classList.add("bg-reset");
  }
}

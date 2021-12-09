function getDeviceWidth(device, mobileWidth, desktopWidth) {
  return device === "desktop" ? desktopWidth : mobileWidth;
}

window.addEventListener("DOMContentLoaded", (event) => {
  var deviceWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
  var device = deviceWidth < 1280 ? "mobile" : "desktop";
  var controller = new ScrollMagic.Controller({});

  new ScrollMagic.Scene({
    triggerElement: "#sec1",
    triggerHook: "onLeave",
    duration: getDeviceWidth(device, 400, 600),
    offset: getDeviceWidth(device, -110, -80),
  })
    .setClassToggle("#sec1", "active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#sec2", duration: 1000 })
    .setClassToggle("#sec2", "active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#sec3", duration: 1000 })
    .setClassToggle("#sec3", "active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: "#sec4",
    duration: getDeviceWidth(device, 800, 1000),
  })
    .setClassToggle("#sec4", "active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: "#sec5",
    duration: 1000,
    offset: 200,
  })
    .setClassToggle("#sec5", "active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: "#sec6",
    duration: getDeviceWidth(device, 1700, 1200),
  })
    .setClassToggle("#sec6", "active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: "#sec7",
    duration: getDeviceWidth(device, 900, 1000),
  })
    .setClassToggle("#sec7", "active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: "#sec8",
    duration: getDeviceWidth(device, 1200, 500),
  })
    .setClassToggle("#sec8", "active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});

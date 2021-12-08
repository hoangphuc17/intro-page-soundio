window.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(function () {
    var sec1Ele = document.getElementById("sec1");
    if (!sec1Ele.classList.contains("active")) {
      sec1Ele.classList.add("active");
    }
  }, 2000);

  // init controller
  var controller = new ScrollMagic.Controller({});

  // build scenes
  // new ScrollMagic.Scene({
  //   triggerElement: "#sec1",

  //  })
  //   .setClassToggle("#img-app-preview", "active") // add class toggle
  //   .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#sec2" })
    .setClassToggle("#sec1", "active") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  // new ScrollMagic.Scene({ triggerElement: "#sec2" })
  //   .setClassToggle("#high2", "active") // add class toggle
  //   .addTo(controller);
  // new ScrollMagic.Scene({ triggerElement: "#sec3" })
  //   .setClassToggle("#high3", "active") // add class toggle
  //   .addTo(controller);
  // new ScrollMagic.Scene({ triggerElement: "#sec4" })
  //   .setClassToggle("#high4", "active") // add class toggle
  //   .addTo(controller);
});

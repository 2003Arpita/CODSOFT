const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".container .text__left", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1000,
  });
  ScrollReveal().reveal(".container .text__right", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1000,
  });
  ScrollReveal().reveal(".container .explore", {
    duration: 1000,
    delay: 2000,
  });
  ScrollReveal().reveal(".container h5", {
    duration: 1000,
    interval: 500,
    delay: 2000,
  });
  ScrollReveal().reveal(".footer p", {
    duration: 1000,
    delay: 3000,
  });
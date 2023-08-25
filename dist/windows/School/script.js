document.addEventListener("DOMContentLoaded", () => {
  pannellum.viewer("panorama", {
    default: {
      firstScene: "streetView",
      sceneFadeDuration: 1000,
      autoLoad: true,
      autoRotate: -2,
    },
    scenes: {
      streetView: {
        title: "Amphitheater",
        yaw: 200,
        pitch: 0,
        hfov: 105,
        type: "equirectangular",
        panorama:
          "../../assets/B504-electrical and computing school.jpg",
      },
    },
  });
});

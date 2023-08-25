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
        title: "Bank",
        yaw: 250,
        pitch: 0,
        hfov: 100,
        type: "equirectangular",
        panorama: "../../assets/B103-bank.jpg",
      },
    },
  });
});

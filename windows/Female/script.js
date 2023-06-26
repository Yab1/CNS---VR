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
        title: "Female library",
        yaw: 200,
        pitch: 0,
        hfov: 105,
        type: "equirectangular",
        panorama: "../../assets/B201-females library.jpg",
        hotSpots: [
          {
            yaw: -104,
            pitch: 6,
            type: "scene",
            text: "Room 5",
            sceneId: "R5",
          },
        ],
      },
    },
  });
});

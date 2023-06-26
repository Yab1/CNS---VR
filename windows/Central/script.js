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
        title: "Central engineering library",
        yaw: -10,
        pitch: 0,
        hfov: 105,
        type: "equirectangular",
        panorama: "../../assets/B206-central.jpeg",
        hotSpots: [
          {
            yaw: 15,
            pitch: 3,
            type: "scene",
            text: "Go Inside",
            sceneId: "inside",
          },
        ],
      },
      inside: {
        title: "inside",
        yaw: -100,
        pitch: 0,
        hfov: 105,
        type: "equirectangular",
        panorama: "../../assets/S206-centeral.jpg",
        hotSpots: [
          {
            yaw: 150,
            pitch: -0.6,
            type: "scene",
            text: "Go Out Side",
            sceneId: "streetView",
            targetYaw: -23,
            targetPitch: 2,
          },
        ],
      },
    },
  });
});

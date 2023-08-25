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
        title: "Administration building",
        yaw: 280,
        pitch: 0,
        hfov: 105,
        type: "equirectangular",
        panorama: "../../assets/B101-admin.jpg",
        hotSpots: [
          {
            yaw: -75,
            pitch: 3,
            type: "scene",
            text: "Inside",
            sceneId: "inside",
          },
        ],
      },

      inside: {
        title: "Inside Administration",
        yaw: -50,
        pitch: 0,
        hfov: 105,
        type: "equirectangular",
        panorama: "../../assets/S101-admin building.jpg",
        hotSpots: [
          {
            yaw: 5,
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

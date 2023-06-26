ocument.addEventListener("DOMContentLoaded", () => {
  pannellum.viewer("panorama", {
    default: {
      firstScene: "streetView",
      sceneFadeDuration: 1000,
      autoLoad: true,
      autoRotate: -2,
    },

    scenes: {
      streetView: {
        title: "B507",
        yaw: 200,
        pitch: 0,
        hfov: 105,
        type: "equirectangular",
        panorama: "../../assets/B507-class.jpg",
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

      R5: {
        title: "R5",
        yaw: -50,
        pitch: 0,
        hfov: 105,
        type: "equirectangular",
        panorama: "../../assets/S507-class.jpg",
        hotSpots: [
          {
            yaw: 112,
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

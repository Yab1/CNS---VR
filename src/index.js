import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "customized-navigation-system.firebaseapp.com",
  projectId: "customized-navigation-system",
  storageBucket: "customized-navigation-system.appspot.com",
  messagingSenderId: "3696229373",
  appId: process.env.FIREBASE_API_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getBuildings() {
  try {
    const buildRef = collection(
      db,
      "Locations",
      "Adama Science And Technology",
      "BuildingsData"
    );
    const buildingSnapshot = await getDocs(buildRef);
    const buildingList = buildingSnapshot.docs.map((doc) => doc.data());
    const container = document.querySelector("#cards-container");
    const buildingData = buildingList.filter((building) => building.url !== "");

    buildingData.forEach((building) => {
      let link = building.buildingName.split(" ")[0];

      const cardContainer = document.createElement("div");
      cardContainer.className = "col-12-xs col-5-md col-4-lg";

      const cardDiv = document.createElement("div");
      cardDiv.className = "card p-0";

      const cardTitle = document.createElement("h3");
      cardTitle.className = "card-title m-1";
      const cardTitleLink = document.createElement("a");
      cardTitleLink.href = `../windows/${link}/${link}.html`;
      cardTitleLink.textContent = building.buildingName;
      cardTitle.appendChild(cardTitleLink);

      const imgLink = document.createElement("a");
      imgLink.href = `/WayFinderPlus-VR/windows/windows/${link}/${link}.html`;
      const imgElement = document.createElement("img");
      imgElement.src = "img/panorama-icon-2.jpg";
      imgElement.alt = "panorama-icon";
      imgElement.className = "pointer-event-none";
      imgLink.appendChild(imgElement);

      cardDiv.appendChild(cardTitle);
      cardDiv.appendChild(imgLink);

      cardContainer.appendChild(cardDiv);

      container.appendChild(cardContainer);
    });
    return buildingList;
  } catch (error) {
    alert(error.message);
  }
}
getBuildings();

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

    let cards = "";
    const buildingData = buildingList.filter((building) => building.url !== "");
    buildingData.forEach((building) => {
      let link = building.buildingName.split(" ")[0];
      const card = `
          <div class="col-12-xs col-5-md col-4-lg">
            <div class="card p-0">
              <h3 class="card-title m-1">
              <a href="../windows/${link}/${link}.html">
              ${building.buildingName}
              </a>
              </h3>
              <a href="../windows/${link}/${link}.html">
                <img src="../img/panorama-icon-2.jpg" alt=""  id="clickableImg" class="pointer-event-none"/>
              </a>
            </div>
          </div>
          `;
      cards += card;
    });

    container.innerHTML = cards;
    return buildingList;
  } catch (error) {
    alert(error.message);
  }
}
getBuildings();

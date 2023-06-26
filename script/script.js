let buildingData;
window.addEventListener("dataReceived", function (event) {
  buildingData = event.detail;
});
const container = document.querySelector("#cards-container");
let cards = "";

setTimeout(() => {
  buildingData.forEach((building) => {
    let link = building.buildingName.split(" ")[0];
    const card = `
          <div class="col-12-xs col-6-md col-6-lg">
            <div class="card p-0">
              <h3 class="card-title m-1">
              <a href="windows/${link}/${link}.html">
              ${building.buildingName}
              </a>
              </h3>
              <img src="img/panorama-icon-2.jpg" alt=""  id='clickableImg'/>
            </div>
          </div>
  `;

    cards += card;
  });
  container.innerHTML = cards;
}, 3000);

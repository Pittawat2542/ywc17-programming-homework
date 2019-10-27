document.addEventListener("DOMContentLoaded", () => {
  fetch("https://panjs.com/ywc.json")
    .then(response => response.json())
    .then(data => {
      if (Object.entries(data).length === 0 && data.constructor === Object) {
        console.log("Data fetched is empty.");
        //TODO: Handle somehow
      }

      data.navbarItems.map(navItem => {
        const navAElement = document.createElement("a");
        navAElement.textContent = navItem.label;
        navAElement.href = navItem.href;
        const bottomLineAElement = document.createElement("a");
        bottomLineAElement.textContent = navItem.label;
        bottomLineAElement.href = navItem.href;
        document.querySelector("nav").appendChild(navAElement);
        document.querySelector("#bottom-line").appendChild(bottomLineAElement);
      });

      const durationH1Element = document.createElement("h1");
      durationH1Element.textContent = data.duration;
      document.querySelector("#duration").appendChild(durationH1Element);

      const detailPElement = document.createElement("p");
      detailPElement.innerHTML = data.detail;
      document.querySelector("#detail").appendChild(detailPElement);

      const conditionPElement = document.createElement("p");
      conditionPElement.innerHTML = data.condition;
      document.querySelector("#condition").appendChild(conditionPElement);
    })
    .catch(err => console.log(err));
});

// TODO: Change syntax to support older browser

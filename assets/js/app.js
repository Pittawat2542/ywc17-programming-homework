document.addEventListener("DOMContentLoaded", () => {
  fetch("https://panjs.com/ywc.json")
    .then(response => response.json())
    .then(data => {
      if (Object.entries(data).length === 0 && data.constructor === Object) {
        document.querySelector("nav .lds-roller").remove();
        document.querySelector("#duration .lds-roller").remove();
        document.querySelector("#detail+.lds-roller").remove();
        document.querySelector("#condition+.lds-roller").remove();

        let pElement = document.createElement("p");
        pElement.textContent =
          "ไม่สามารถดาวน์โหลดข้อมูลจากเซิร์ฟเวอร์ได้ กรุณาติดต่อผู้ดูแลระบบ";
        document.querySelector("nav").appendChild(pElement);
        pElement = document.createElement("p");
        pElement.textContent =
          "ไม่สามารถดาวน์โหลดข้อมูลจากเซิร์ฟเวอร์ได้ กรุณาติดต่อผู้ดูแลระบบ";
        document.querySelector("#duration").appendChild(pElement);
        pElement = document.createElement("p");
        pElement.textContent =
          "ไม่สามารถดาวน์โหลดข้อมูลจากเซิร์ฟเวอร์ได้ กรุณาติดต่อผู้ดูแลระบบ";
        document.querySelector("#detail").appendChild(pElement);
        pElement = document.createElement("p");
        pElement.textContent =
          "ไม่สามารถดาวน์โหลดข้อมูลจากเซิร์ฟเวอร์ได้ กรุณาติดต่อผู้ดูแลระบบ";
        document.querySelector("#condition").appendChild(pElement);
      }

      data.navbarItems.map(navItem => {
        const navLiElement = document.createElement("li");
        const navAElement = document.createElement("a");
        navAElement.textContent = DOMPurify.sanitize(navItem.label);
        navAElement.href = DOMPurify.sanitize(navItem.href);
        navAElement.target = "_blank";
        navAElement.rel = "noreferrer";
        navLiElement.appendChild(navAElement);

        const mobileNavLiElement = document.createElement("li");
        const mobileNavAElement = document.createElement("a");
        mobileNavAElement.textContent = DOMPurify.sanitize(navItem.label);
        mobileNavAElement.href = DOMPurify.sanitize(navItem.href);
        mobileNavAElement.target = "_blank";
        mobileNavAElement.rel = "noreferrer";
        mobileNavLiElement.appendChild(mobileNavAElement);

        const bottomLineAElement = document.createElement("a");
        bottomLineAElement.textContent = DOMPurify.sanitize(navItem.label);
        bottomLineAElement.href = DOMPurify.sanitize(navItem.href);
        bottomLineAElement.target = "_blank";
        bottomLineAElement.rel = "noreferrer";

        document.querySelector("nav > ul").appendChild(navLiElement);
        document
          .querySelector(".mobile-menu ul")
          .appendChild(mobileNavLiElement);
        document.querySelector("#bottom-line").appendChild(bottomLineAElement);
      });

      document.querySelector("nav .lds-roller").remove();

      const durationH1Element = document.createElement("h1");
      durationH1Element.textContent = DOMPurify.sanitize(data.duration);
      document.querySelector("#duration").appendChild(durationH1Element);

      document.querySelector("#duration .lds-roller").remove();

      const detailPElement = document.createElement("p");
      detailPElement.innerHTML = DOMPurify.sanitize(data.detail);
      document.querySelector("#detail").appendChild(detailPElement);

      document.querySelector("#detail+.lds-roller").remove();

      const conditionPElement = document.createElement("p");
      conditionPElement.innerHTML = DOMPurify.sanitize(data.condition);
      document.querySelector("#condition").appendChild(conditionPElement);

      document.querySelector("#condition+.lds-roller").remove();
    })
    .catch(err => {
      document.querySelector("nav .lds-roller").remove();
      document.querySelector("#duration .lds-roller").remove();
      document.querySelector("#detail+.lds-roller").remove();
      document.querySelector("#condition+.lds-roller").remove();

      let pElement = document.createElement("p");
      pElement.textContent =
        "ไม่สามารถดาวน์โหลดข้อมูลจากเซิร์ฟเวอร์ได้ กรุณาติดต่อผู้ดูแลระบบ";
      document.querySelector("nav").appendChild(pElement);
      pElement = document.createElement("p");
      pElement.textContent =
        "ไม่สามารถดาวน์โหลดข้อมูลจากเซิร์ฟเวอร์ได้ กรุณาติดต่อผู้ดูแลระบบ";
      document.querySelector("#duration").appendChild(pElement);
      pElement = document.createElement("p");
      pElement.textContent =
        "ไม่สามารถดาวน์โหลดข้อมูลจากเซิร์ฟเวอร์ได้ กรุณาติดต่อผู้ดูแลระบบ";
      document.querySelector("#detail").appendChild(pElement);
      pElement = document.createElement("p");
      pElement.textContent =
        "ไม่สามารถดาวน์โหลดข้อมูลจากเซิร์ฟเวอร์ได้ กรุณาติดต่อผู้ดูแลระบบ";
      document.querySelector("#condition").appendChild(pElement);
    });
});

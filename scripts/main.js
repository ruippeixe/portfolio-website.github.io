// burger menu
const menuBtn = document.querySelector(".menu-btn");
const topbar = document.querySelector(".top-bar");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  topbar.classList.toggle("open");
});

// homepage 'more about me' dropdown
const aboutMe = document.querySelector(".about-me");
const moreAboutMe = document.querySelector(".more-about-me-btn");

if (moreAboutMe) {
  moreAboutMe.addEventListener("click", () => {
    aboutMe.classList.toggle("show");

    // rotate arrow
    const imgElement = document.querySelector(".more-about-me-btn img");
    imgElement.style.transform = aboutMe.classList.contains("show") ? "rotate(180deg)" : "rotate(0deg)";
  });
}

// project list accordion
const listItems = document.querySelectorAll(".projects-list-grid.list-item");
const listItem = document.querySelectorAll(".item-1");

listItem.forEach((item) => {
  item.addEventListener("click", (event) => {
    const clickedElement = event.currentTarget;
    const parentItem = clickedElement.closest(".projects-list-grid.list-item");

    if (parentItem.classList.contains("active")) {
      parentItem.classList.remove("active");
    } else {
      listItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
      });
      parentItem.classList.add("active");
    }
  });
});

// project list uxui archive accordion
const uxuiList = document.querySelector(".ux-ui-case-studies");
const uxuiListBtn = document.querySelector(".ux-ui-case-studies-btn");
const uxuiListItems = document.querySelector(".ux-ui-case-studies-list");

if (uxuiList) {
  uxuiListBtn.addEventListener("click", () => {
    uxuiList.classList.toggle("active");
    uxuiListItems.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

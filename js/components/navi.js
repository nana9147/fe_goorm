const closeAllMenus = (naviEl) => {
  naviEl
    .querySelectorAll("li.main-menu.open")
    .forEach((item) => item.classList.remove("open"));
};

export function navi() {
  const naviEl = document.querySelector(".navi");
  if (!naviEl) return;

  const mainMenuLinks = naviEl.querySelectorAll("li.main-menu > a");
  const subMenuLinks = naviEl.querySelectorAll(".sub-menu a");
  const homeLink = naviEl.querySelector("ul > li:first-child > a");

  // 메인 메뉴 클릭 → open 토글
  mainMenuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // 이동 제어

      const li = this.closest("li.main-menu");
      if (!li) return;

      const isOpen = li.classList.contains("open");

      // 다른 메뉴 닫기
      closeAllMenus(naviEl);

      if (!isOpen) {
        li.classList.add("open");
      }
    });
  });

  // 서브 메뉴 클릭 → close + 페이지 이동
  subMenuLinks.forEach((subLink) => {
    subLink.addEventListener("click", function () {
      closeAllMenus(naviEl);
    });
  });

  // home 버튼 클릭 → close + 페이지 이동
  if (homeLink) {
    homeLink.addEventListener("click", function () {
      closeAllMenus(naviEl);
    });
  }
}

const mainMenuLinks = document.querySelectorAll(".navi li.main-menu > a");
const subMenuLinks = document.querySelectorAll(".navi .sub-menu a");
const homeLink = document.querySelector(".navi ul > li:first-child > a");

export function navi() {
  const naviEl = document.querySelector(".navi");
  if (!naviEl) return;

  const closeAllMenus = () => {
    naviEl
      .querySelectorAll("li.main-menu.open")
      .forEach((item) => item.classList.remove("open"));
  };

  // 메인 메뉴 클릭 → open 토글
  mainMenuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); //이동제어

      const li = this.closest("li.main-menu");
      if (!li) return;

      const isOpen = li.classList.contains("open");

      // 다른 메뉴는 닫기
      closeAllMenus();

      if (!isOpen) {
        li.classList.add("open");
      }
    });
  });

  // 서브 메뉴 클릭 → close + 페이지이동
  subMenuLinks.forEach((subLink) => {
    subLink.addEventListener("click", function () {
      closeAllMenus();
    });
  });

  //home버튼 클릭 -> close + 페이지이동
  if (homeLink) {
    homeLink.addEventListener("click", function () {
      closeAllMenus();
    });
  }
}

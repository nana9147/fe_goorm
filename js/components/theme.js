const THEME_KEY = "theme";

/**
 * jsdoc 문법
 * @param {"light" | "dark"} theme
 */
const handleChangeTheme = (theme) => {
  if (typeof window === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
};

/*모든 페이지에서 공통으로 호출 */
export function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const theme = saved === "dark" || saved === "light" ? saved : "light";

  handleChangeTheme(theme);
}

/* 토글이 있는 페이지에서만 호출 */
export function initThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  // 현재 data-theme 기준으로 체크 상태 맞추기
  const current = document.documentElement.getAttribute("data-theme");
  toggle.checked = current === "dark";

  toggle.addEventListener("change", () => {
    const nextTheme = toggle.checked ? "dark" : "light";
    handleChangeTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
  });
}

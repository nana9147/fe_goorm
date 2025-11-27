import { setCommonMeta } from "./meta.js";
import { navi } from "./navi.js";
import { initTheme, initThemeToggle } from "./theme.js";

const CONTAINER_IDS = {
  HEADER: "header-container",
  FOOTER: "footer-container",
};

const mapContainerIdToContainerName = {
  [CONTAINER_IDS.HEADER]: "헤더",
  [CONTAINER_IDS.FOOTER]: "푸터",
};

async function loadCommonLayout(containerId, url) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const containerName = mapContainerIdToContainerName[containerId];
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${containerName} 로딩 실패: ${response.status}`);
    }
    const html = await response.text();
    container.innerHTML = html;
  } catch (e) {
    console.error(`${containerName} 오류 : `, e);
  }
}

// header
async function loadHeader() {
  return loadCommonLayout(CONTAINER_IDS.HEADER, "../partials/header.html");
}

// footer
async function loadFooter() {
  return loadCommonLayout(CONTAINER_IDS.FOOTER, "../partials/footer.html");
}

export async function initCommonLayout() {
  initTheme();
  setCommonMeta();

  // header-container가 있으면 header 로드
  await loadHeader();
  // header 안에 토글이 있으면 이벤트 연결
  initThemeToggle();
  await loadFooter();

  navi();
}

//로그인페이지용
export function initBasePage() {
  initTheme();
  setCommonMeta();
}

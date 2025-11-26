// js/main.js
import { setCommonMeta } from "./meta.js";
import { navi } from "./navi.js";
import { products } from "./productData.js";
import { initTheme, initThemeToggle } from "./theme.js";

//------------------------------------------------------------
// header
//------------------------------------------------------------
async function loadHeader() {
  const container = document.getElementById("header-container");
  if (!container) return;

  try {
    const response = await fetch("../partials/header.html");
    if (!response.ok) {
      throw new Error("헤더 로딩 실패: " + response.status);
    }
    const html = await response.text();
    container.innerHTML = html;
  } catch (e) {
    console.error("헤더 오류:", e);
  }
}

//------------------------------------------------------------
// footer
//------------------------------------------------------------
async function loadFooter() {
  const container = document.getElementById("footer-container");
  if (!container) return;

  try {
    const response = await fetch("../partials/footer.html");
    if (!response.ok) {
      throw new Error("푸터 로딩 실패: " + response.status);
    }
    const html = await response.text();
    container.innerHTML = html;
  } catch (e) {
    console.error("푸터 오류:", e);
  }
}

//------------------------------------------------------------
// product card
//------------------------------------------------------------
function renderProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  grid.innerHTML = products
    .map(
      (p) => `
      <article class="product-card">
        <div class="product-img-wrap">
          <img src="${p.img}" alt="${p.name}" />
        </div>
        <h3 class="product-brand">${p.brand}</h3>
        <p class="product-name">${p.name}</p>
        <p class="product-price">
          <span class="product-discount">${p.discount}%</span>
          <span class="product-price-value">${p.price}</span>
        </p>
        <p class="product-meta">★ ${p.rating} | 리뷰 ${p.reviews}</p>
      </article>
      `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", async () => {
  initTheme();

  setCommonMeta();

  // header-container가 있으면 header 로드
  await loadHeader();

  // header 안에 토글이 있으면 이벤트 연결
  initThemeToggle();

  await loadFooter();

  navi();
  renderProducts();
});

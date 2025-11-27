import { products } from "./productData.js";

export function renderProducts() {
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

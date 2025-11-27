import { initCommonLayout } from "./components/index.js";
import { renderProducts } from "./productCard.js";

document.addEventListener("DOMContentLoaded", async () => {
  await initCommonLayout();
  renderProducts();
});


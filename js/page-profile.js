import { initCommonLayout } from "./components/index.js";
import { renderProfile } from "./profile.js";

document.addEventListener("DOMContentLoaded", async () => {
  await initCommonLayout();
  renderProfile();
});

export function setCommonMeta() {
  fetch("../partials/meta.html") // 데이터 요청
    .then((res) => res.text())
    .then((html) => document.head.insertAdjacentHTML("beforeend", html));
}

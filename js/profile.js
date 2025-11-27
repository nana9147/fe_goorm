const user = {
  name: "김우빈",
  photoUrl: "../img/cloud.png",
  email: "genie@gmail.com",
  phone: "010-1234-5678",
  address: "마법의 램프 안 (The Magic Lamp)",
  point: 135000,
  tier: "Diamond",
};

export function renderProfile() {
  const info = document.getElementById("profile-wrap");
  if (!info) return;

  info.innerHTML = `
    <div class="main-profile">
      <div class="profile-img-wrap">
        <div class="profile-img">
          <img src="${user.photoUrl}" alt="프로필사진" />
        </div>
        <button class="edit-profile-btn">정보수정</button>
      </div>

      <div class="user-name">${user.name}</div>
      <div class="user-tier">${user.tier}</div>
      <div class="user-email">${user.email}</div>
    </div>

    <div class="sub-profile">
      <div class="phone-info">
        <div class="info-title">
          연락처
          <span class="desc"> | 배송/알림수신에 사용됩니다.</span>
        </div>
        <p class="infoData">${user.phone}</p>
      </div>

      <div class="address-info">
        <div class="info-title">
          기본 배송지 
          <span class="desc"> | 주문시 기본 배송지로 배송됩니다.</span>
        </div>
        <p class="infoData">${user.address}</p>
      </div>

      <div class="point-info">
        <div class="info-title">
          보유 포인트
          <span class="desc"> | 구매시 사용 가능합니다.</span>
        </div>
        <p class="infoData">${user.point.toLocaleString()} P</p>
      </div>
    </div>
  `;
}

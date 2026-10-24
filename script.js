
/* ============================================================
   청계숲 공식 홈페이지
   CHEONGGYEFOREST

   파일명: script.js

   [목차]
   01. 매장 기본 정보
   02. 데이터 저장 및 불러오기
   03. 공통 함수
   04. 전화 / 예약 / 길찾기
   05. 매장 카드 및 상세 정보
   06. 모바일 매장 선택창
   07. 관리자 화면
   08. 관리자 저장 및 초기화
   09. 버튼 클릭 이벤트
   10. 홈페이지 시작

   ★ 매장 정보를 변경하려면 01번 구역을 수정하세요.
   ============================================================ */


/* ============================================================
   01. 매장 기본 정보

   ★ id 값은 절대 변경하지 마세요.
   ★ 사진은 현재 임시 이미지입니다.
   ★ booking에 실제 네이버 예약 URL을 입력하면
     예약 버튼이 해당 주소로 바로 이동합니다.
   ============================================================ */

const defaults = [

  // ----------------------------------------------------------
  // 01-1. 청계숲양대창 청계산본점
  // 브랜드 컬러: #264122
  // ----------------------------------------------------------
  {
    id: "main",

    name: "청계숲양대창 청계산본점",
    short: "청계산본점",

    tagline:
      "청계산에서 시작된 숯불 양대창의 깊은 맛",

    description:
      "2016년 청계산에서 시작된 숯불 양대창 전문점입니다. " +
      "특양과 한우대창, 한우곱창전골, 투뿔 한우국밥 등을 선보입니다. " +
      "유기농 상추무침과 천연 과일 물김치를 정성껏 준비하며, " +
      "청계산 등산 후 식사와 가족 외식에 어울리는 공간입니다.",

    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=85",

    phone: "0507-1355-2350",

    address:
      "서울 서초구 청룡마을1길 15",

    // 정확한 운영시간 확인 후 수정
    hours: "영업시간은 네이버 플레이스에서 확인",

    // ★ 실제 네이버 예약 신청 URL을 받으면 여기에 입력
    booking: "https://m.place.naver.com/restaurant/38217704/booking?theme=place&entry=pll&lang=ko",

    // 예약 URL이 없을 때 이동하는 네이버 검색 페이지
    place:
      "https://map.naver.com/p/search/" +
      encodeURIComponent("청계숲양대창 청계산본점"),

    // 매장 상세 페이지
    detail: "/cheonggyesan/",

    // 매장별 브랜드 색상
    color: "#264122"
  },


  // ----------------------------------------------------------
  // 01-2. 청계숲양대창 강남직영점
  // 브랜드 컬러: #264122
  // ----------------------------------------------------------
  {
    id: "gangnam",

    name: "청계숲양대창 강남직영점",
    short: "강남직영점",

    tagline:
      "강남역 회식과 프라이빗 모임을 위한 숯불 양대창",

    description:
      "강남역 인근에 위치한 숯불 양대창 전문점입니다. " +
      "특양, 한우대창, 한우막창, 한우곱창전골을 선보이며, " +
      "프라이빗 룸과 직원 구이 서비스를 제공합니다. " +
      "직장인 회식, 비즈니스 모임, 가족 외식은 물론 " +
      "점심 국밥과 전골 식사도 즐길 수 있습니다.",

    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=85",

    phone: "0507-1370-9279",

    address:
      "서울 강남구 강남대로 324 역삼디오슈페리움 1층",

    // 정확한 운영시간 확인 후 수정
    hours: "영업시간은 네이버 플레이스에서 확인",

    // ★ 실제 네이버 예약 신청 URL을 받으면 여기에 입력
    booking: "https://m.place.naver.com/restaurant/1880659013/booking?entry=pll&bk_query=%EC%B2%AD%EA%B3%84%EC%88%B2%EC%96%91%EB%8C%80%EC%B0%BD",

    // 예약 URL이 없을 때 이동하는 네이버 검색 페이지
    place:
      "https://map.naver.com/p/search/" +
      encodeURIComponent("청계숲양대창 강남직영점"),

    // 매장 상세 페이지
    detail: "/gangnam/",

    // 매장별 브랜드 색상
    color: "#264122"
  },


  // ----------------------------------------------------------
  // 01-3. 청계산지기
  // 브랜드 컬러: #422212
  // ----------------------------------------------------------
  {
    id: "jigi",

    name: "청계산지기",
    short: "청계산지기",

    tagline:
      "계절을 담은 메밀 음식과 넉넉한 한 상",

    description:
      "청계산입구역 원터골 인근에 위치한 계절음식 전문점입니다. " +
      "수제옹심이 메밀칼국수, 손메밀묵온반, " +
      "오징어바글바글김치전, 한우육전과 제철 한식을 선보입니다. " +
      "평일과 주말 관계없이 투뿔한우어복쟁반을 " +
      "서비스로 제공하고 있습니다.",

    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=85",

    phone: "0507-1436-2387",

    address:
      "서울 서초구 청룡마을1길 3, 1층",

    // 정확한 운영시간 확인 후 수정
    hours: "영업시간은 네이버 플레이스에서 확인",

    // ★ 실제 네이버 예약 신청 URL을 받으면 여기에 입력
    booking: "https://m.place.naver.com/restaurant/1776139315/booking?entry=plt",

    // 사용자가 제공한 청계산지기 네이버 플레이스
    place:
      "https://m.place.naver.com/restaurant/1776139315/home?entry=plt",

    // 매장 상세 페이지
    detail: "/jigi/",

    // 청계산지기 공식 브랜드 컬러
    color: "#422212"
  }

];


/* ============================================================
   02. 매장 정보 불러오기

   ★ 관리자 기능 제거
   ★ localStorage 사용하지 않음
   ★ script.js의 defaults 정보가 항상 적용됨
   ============================================================ */

const stores = structuredClone(defaults);


/* ============================================================
   03. 공통 함수
   ============================================================ */

// HTML 요소 찾기
function $(selector) {
  return document.querySelector(selector);
}


// ------------------------------------------------------------
// 03-1. HTML 특수문자 처리
// ------------------------------------------------------------

function escapeHTML(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]
  );
}


// ------------------------------------------------------------
// 03-2. 안내 메시지 표시
// ------------------------------------------------------------

function toast(message) {
  const toastElement = $("#toast");

  if (!toastElement) {
    console.log(message);
    return;
  }

  toastElement.textContent = message;
  toastElement.style.display = "block";

  setTimeout(() => {
    toastElement.style.display = "none";
  }, 3300);
}


// ------------------------------------------------------------
// 03-3. URL 유효성 검사
// ------------------------------------------------------------

function validUrl(url) {
  try {
    const parsedUrl = new URL(url);

    return (
      parsedUrl.protocol === "http:" ||
      parsedUrl.protocol === "https:"
    );

  } catch {
    return false;
  }
}


// ------------------------------------------------------------
// 03-4. 사진 경로 유효성 검사
// ------------------------------------------------------------

function validImagePath(path) {
  if (!path) {
    return false;
  }

  if (validUrl(path)) {
    return true;
  }

  return (
    path.startsWith("./images/") ||
    path.startsWith("/images/") ||
    path.startsWith("images/")
  );
}


// ------------------------------------------------------------
// 03-5. 매장 사진 가져오기
// ------------------------------------------------------------

function getStoreImage(store, index) {
  if (validImagePath(store.image)) {
    return store.image;
  }

  return defaults[index].image;
}


// ------------------------------------------------------------
// 03-6. 새 창에서 링크 열기
// ------------------------------------------------------------

function openExternalLink(url) {
  if (!validUrl(url)) {
    toast("연결할 주소를 확인해 주세요.");
    return;
  }

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}


/* ============================================================
   04. 전화 / 네이버 예약 / 길찾기
   ============================================================ */

function act(type, store) {

  // ----------------------------------------------------------
  // 04-1. 전화하기
  // ----------------------------------------------------------

  if (type === "call") {
    if (!store.phone) {
      toast("전화번호가 등록되지 않았습니다.");
      return;
    }

    const phoneNumber = store.phone.replace(
      /[^+0-9]/g,
      ""
    );

    window.location.href = "tel:" + phoneNumber;
    return;
  }


  // ----------------------------------------------------------
  // 04-2. 네이버 예약 또는 매장 페이지
  //
  // booking이 등록되어 있으면 예약 신청 URL로 이동
  // booking이 비어 있으면 네이버 플레이스로 이동
  // ----------------------------------------------------------

  if (type === "book") {
    const reservationUrl = validUrl(store.booking)
      ? store.booking
      : store.place;

    openExternalLink(reservationUrl);
    return;
  }


  // ----------------------------------------------------------
  // 04-3. 네이버 지도
  // ----------------------------------------------------------

  if (type === "directions") {
    if (!store.address) {
      toast("주소가 등록되지 않았습니다.");
      return;
    }

    const mapUrl =
      "https://map.naver.com/p/search/" +
      encodeURIComponent(store.address);

    openExternalLink(mapUrl);
    return;
  }

}


/* ============================================================
   05. 홈페이지 매장 카드 및 상세 정보 출력
   ============================================================ */

function render() {

  // ----------------------------------------------------------
  // 05-1. 메인 화면 매장 카드
  // ----------------------------------------------------------

  const restaurantCards = stores.map((store, index) => {

    const image = getStoreImage(store, index);

    // 각 매장의 독립 상세 페이지
    const detailUrl = store.detail;

    // 실제 예약 URL이 있으면 예약 버튼 표시
    const hasBooking = validUrl(store.booking);

    const bookingLabel = hasBooking
      ? "네이버 예약 ↗"
      : "네이버 매장 안내 ↗";

    return `
      <article class="restaurant">

        <img
          src="${escapeHTML(image)}"
          alt="${escapeHTML(store.name)} 대표 이미지"
          loading="lazy"
        >

        <div class="restaurant-content">

          <div
            class="eyebrow"
            style="color: ${escapeHTML(store.color)};"
          >
            0${index + 1} / CHEONGGYEFOREST
          </div>

          <h3 class="serif">
            ${escapeHTML(store.name)}
          </h3>

          <p>
            ${escapeHTML(store.tagline)}
          </p>

          <div class="restaurant-actions">

            <a
              class="btn"
              href="${escapeHTML(detailUrl)}"
            >
              매장 소개 ↗
            </a>

            <button
              class="btn primary"
              style="
                background-color: ${escapeHTML(store.color)};
                border-color: ${escapeHTML(store.color)};
                color: #ffffff;
              "
              data-act="book"
              data-id="${escapeHTML(store.id)}"
            >
              ${bookingLabel}
            </button>

          </div>

        </div>

      </article>
    `;

  }).join("");

  const restaurantGrid = $("#restaurantGrid");

  if (restaurantGrid) {
    restaurantGrid.innerHTML = restaurantCards;
  }


  // ----------------------------------------------------------
  // 05-2. 메인 화면 아래 매장 상세 정보
  // ----------------------------------------------------------

  const restaurantDetails = stores.map((store, index) => {

    const image = getStoreImage(store, index);

    const addressText =
      store.address || "주소 등록 예정";

    const hoursText =
      store.hours || "영업시간 등록 예정";

    const hasBooking = validUrl(store.booking);

    const bookingLabel = hasBooking
      ? "네이버 예약"
      : "네이버 매장 안내";

    return `
      <article
        class="detail"
        id="${escapeHTML(store.id)}"
      >

        <img
          src="${escapeHTML(image)}"
          alt="${escapeHTML(store.name)} 대표 이미지"
          loading="lazy"
        >

        <div>

          <div
            class="eyebrow"
            style="color: ${escapeHTML(store.color)};"
          >
            OUR RESTAURANT 0${index + 1}
          </div>

          <h3 class="serif">
            ${escapeHTML(store.name)}
          </h3>

          <p>
            ${escapeHTML(store.description)}
          </p>

          <p class="meta">
            ${escapeHTML(addressText)}<br>
            ${escapeHTML(hoursText)}
          </p>

          <div class="restaurant-actions">

            <a
              class="btn"
              href="${escapeHTML(store.detail)}"
            >
              자세히 보기 ↗
            </a>

            <button
              class="btn primary"
              style="
                background-color: ${escapeHTML(store.color)};
                border-color: ${escapeHTML(store.color)};
                color: #ffffff;
              "
              data-act="book"
              data-id="${escapeHTML(store.id)}"
            >
              ${bookingLabel}
            </button>

            <button
              class="btn"
              data-act="call"
              data-id="${escapeHTML(store.id)}"
            >
              전화
            </button>

            <button
              class="btn"
              data-act="directions"
              data-id="${escapeHTML(store.id)}"
            >
              길찾기
            </button>

          </div>

        </div>

      </article>
    `;

  }).join("");

  const details = $("#details");

  if (details) {
    details.innerHTML = restaurantDetails;
  }

}


/* ============================================================
   06. 모바일 매장 선택창
   ============================================================ */

function choose(type) {
  const chooserTitle = $("#chooserTitle");
  const chooserOptions = $("#chooserOptions");

  if (!chooserTitle || !chooserOptions) {
    return;
  }

  chooserTitle.textContent =
    type === "call"
      ? "전화할 매장 선택"
      : "길찾기할 매장 선택";

  chooserOptions.innerHTML = stores.map((store) => {

    return `
      <button
        class="btn"
        style="
          display: block;
          width: 100%;
          margin: 10px 0;
          text-align: left;
        "
        data-act="${escapeHTML(type)}"
        data-id="${escapeHTML(store.id)}"
      >
        ${escapeHTML(store.name)} ↗
      </button>
    `;

  }).join("");

  $("#chooser").classList.add("show");
}


/* ============================================================
   09. 버튼 클릭 이벤트
   ============================================================ */

// ------------------------------------------------------------
// 09-1. 전화 / 예약 / 길찾기 / 팝업 닫기
// ------------------------------------------------------------

document.addEventListener("click", (event) => {

  const actionButton = event.target.closest("[data-act]");

  if (actionButton) {

    const store = stores.find(
      (item) => item.id === actionButton.dataset.id
    );

    if (store) {
      act(actionButton.dataset.act, store);
    }

  }


  const closeButton = event.target.closest("[data-close]");

  if (closeButton) {

    const popup = document.getElementById(
      closeButton.dataset.close
    );

    if (popup) {
      popup.classList.remove("show");
    }

  }

});


// ------------------------------------------------------------
// 09-2. 모바일 전화 버튼
// ------------------------------------------------------------

const mobileCall = $("#mobileCall");

if (mobileCall) {
  mobileCall.onclick = () => {
    choose("call");
  };
}


// ------------------------------------------------------------
// 09-3. 모바일 길찾기 버튼
// ------------------------------------------------------------

const mobileDirections = $("#mobileDirections");

if (mobileDirections) {
  mobileDirections.onclick = () => {
    choose("directions");
  };
}



// ------------------------------------------------------------
// 09-7. 모바일 메뉴 열기 / 닫기
// ------------------------------------------------------------

const menuToggle = $("#menuToggle");
const nav = $("#nav");

if (menuToggle && nav) {

  menuToggle.onclick = () => {

    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  };

}


// ------------------------------------------------------------
// 09-8. 메뉴 선택 후 모바일 메뉴 닫기
// ------------------------------------------------------------

document.querySelectorAll("nav a").forEach((link) => {

  link.addEventListener("click", () => {

    if (nav) {
      nav.classList.remove("open");
    }

    if (menuToggle) {
      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );
    }

  });

});


/* ============================================================
   10. 홈페이지 시작
   ============================================================ */

render();

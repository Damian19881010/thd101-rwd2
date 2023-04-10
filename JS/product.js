// 當網頁滾動時
window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  
  // 如果網頁滾動的距離超過 Header 的高度
  if (window.pageYOffset > header.offsetHeight) {
    // 讓 Header 向上移動
    header.style.top = "-" + header.offsetHeight + "px";
  } else {
    // 讓 Header 回到原位
    header.style.top = "0";
  }
});
// ----------------------------------------
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// =======================================


var my_btn = document.getElementById("btn");
my_btn.addEventListener("click", function(){
  alert("還沒寫完 別亂按!");
});

// ----------------------------------------

// // 預設開啟第一個頁籤
// document.getElementById("defaultOpen").click();

// // 頁籤點擊事件
// function openPage(evt, pageName) {
//     // 宣告變數
//     var i, page, tablinks

//     // 取得所有 class 為 tabcontent 的元素，並隱藏它們
//     page = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < page.length; i++) {
//         page[i].style.display = "none";
//     }

//     // 取得所有 class 為 tablinks 的元素，並移除它們的 active 狀態
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     // 顯示當前頁籤的內容，並將該頁籤的按鈕設定為 active 狀態
//     document.getElementById(pageName).style.display = "block";
//     evt.currentTarget.className += " active";
//   }


  // ---------------------------------//

  // 預設開啟第一個頁籤
document.getElementById("defaultOpen").click();

// 頁籤點擊事件
function openPage(evt, pageName) {
  // 宣告變數
  var i, page, tablinks;

  // 取得所有 class 為 page 的元素，並隱藏它們
  page = document.getElementsByClassName("page");
  for (i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }

  // 取得所有 class 為 tablinks 的元素，並移除它們的 active 狀態
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // 顯示當前頁籤的內容，並將該頁籤的按鈕設定為 active 狀態
  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tablinks").click();
});





// -----------------------------------------
// function openPage(pageName) {
//   var i, page;
//   page = document.getElementsByClassName("page");
//   for (i = 0; i < page.length; i++) {
//     page[i].classList.remove("active");
//   }
//   document.getElementById(pageName).classList.add("active");

//   var tablinks;
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].classList.remove("active");
//   }
//   document.querySelector("button[data-page='" + pageName + "']").classList.add("active");
// }

// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector(".tablinks").click();
// })

// ======================================
// -----------------------------------------




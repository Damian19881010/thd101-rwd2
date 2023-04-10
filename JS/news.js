// 當網頁滾動時
window.addEventListener("scroll", function () {
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

// ------------------------------swiper------------------------------------

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});

// ---------------------------------------------------------------
document.getElementById("defaultOpen").click();

function openTab(evt, tabName) {
  var i, tabcontent, page2;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  page2 = document.getElementsByClassName("page2");
  for (i = 0; i < page2.length; i++) {
    page2[i].className = page2[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", showPrevTab);
nextBtn.addEventListener("click", showNextTab);

function showPrevTab() {
  var currentIndex = getActiveTabIndex();
  var targetIndex = (currentIndex === 0) ? 6 : (currentIndex - 1);
  document.getElementsByClassName("page2")[targetIndex].click();
}

function showNextTab() {
  var currentIndex = getActiveTabIndex();
  var targetIndex = (currentIndex === 6) ? 0 : (currentIndex + 1);
  document.getElementsByClassName("page2")[targetIndex].click();
}

function getActiveTabIndex() {
  var page2 = document.getElementsByClassName("page2");
  for (var i = 0; i < page2.length; i++) {
    if (page2[i].classList.contains("active")) {
      return i;
    }
  }
}




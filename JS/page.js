$(window).on("load",function(){
  $('.lightbox').click(function(e){
      //防止點擊時跳轉到 href 指定的 URL
      e.preventDefault();
      // 取得被點擊的圖片 URL
      let img_url = $(this).attr("href");
      // console.log(img_url);
      $('.lightbox-image').attr("src",img_url);
      $('.lightbox-overlay').fadeIn(500)
  })

  //點X關閉
  $('.lightbox-close').click(function(){
      $('.lightbox-overlay').fadeOut(500)
  })
})

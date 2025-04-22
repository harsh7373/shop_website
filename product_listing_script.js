const buy_btn=document.querySelectorAll(".buy_btn")
const overlay=document.getElementById("dark_overlay")


buy_btn.forEach(function(buy_btns){
    buy_btns.addEventListener("click",function(){
         overlay.style.display="block"
         overlay.style.display="flex"
    })
  })



  const border_frames=document.querySelectorAll(".border_frame")
  const allVideos = document.querySelectorAll(".product_vids");
  

border_frames.forEach(function (frames) {
  frames.addEventListener("click", function () {
    const card_container=frames.parentElement
    const vids=card_container.querySelector(".product_vids")

    allVideos.forEach(function (v) {
      if (v !== vids) {
        v.pause();
        v.currentTime = 0;
      }
    });

    vids.play();
    const play_icon = card_container.querySelector(".fa-play")
    play_icon.style.display="none"
    vids.muted="false"
    
  });
});







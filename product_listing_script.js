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
        const showcase_boxes=v.parentElement

        const paused_card_conatiner=showcase_boxes.parentElement
        
        const play_icon = paused_card_conatiner.querySelector(".fa-play")
        play_icon.style.display="block"

        const this_buy_btn=paused_card_conatiner.querySelector(".buy_btn")
        this_buy_btn.style.display="block"
      }
    });

    vids.play();
    const play_icon = card_container.querySelector(".fa-play")
    play_icon.style.display="none"
    const this_buy_btn=card_container.querySelector(".buy_btn")
    this_buy_btn.style.display="none"
    
  });
});


  var clicks_counter=0

 border_frames.forEach(function (frames){

  frames.addEventListener("click",function(){

   clicks_counter++

   const parent=frames.parentElement

   const video=parent.querySelector(".product_vids")

      if(clicks_counter%2==0){

        video.pause()
        video.currentTime = 0;

        const play_icon = parent.querySelector(".fa-play")
        
        play_icon.style.display="block"

        const this_buy_btn=parent.querySelector(".buy_btn")
        this_buy_btn.style.display="block"
      }
  })
 })




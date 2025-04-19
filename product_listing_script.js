const buy_btn=document.querySelectorAll(".buy_btn")
const overlay=document.getElementById("dark_overlay")
buy_btn.forEach(function(buy_btns){
    buy_btns.addEventListener("click",function(){
         overlay.style.display="block"
         overlay.style.display="flex"
    })
  })


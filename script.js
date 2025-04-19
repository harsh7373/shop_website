import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAv-V4Ot19aFkB1n39MZU3WCTmLk7PuV3Y",
    authDomain: "my-shop-site-img-storage-cc350.firebaseapp.com",
    projectId: "my-shop-site-img-storage-cc350",
    storageBucket: "my-shop-site-img-storage-cc350.firebasestorage.app",
    messagingSenderId: "470309769714",
    appId: "1:470309769714:web:4c9b710a001fc23ec69b6b",
    measurementId: "G-227BPWV61R"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const storage = getStorage(app);


  const LoginDiv = document.getElementById("login_div")
  const checkbtn = document.getElementById("auth_check")
  const file_input = document.getElementById("file_upload")
  const file_input2 = document.getElementById("file_upload2")
  const file_input3 = document.getElementById("file_upload3")
  const file_input4 = document.getElementById("file_upload4")
  const file_input5 = document.getElementById("file_upload5")
  const file_input6 = document.getElementById("file_upload6")
  const UserBgImage = document.getElementById("user_bg_img")
  const UserBgImage2 = document.getElementById("user_bg_img2")
  const UserBgImage3 = document.getElementById("user_bg_img3")
  const UserBgImage4 = document.getElementById("user_bg_img4")
  const UserBgImage5 = document.getElementById("user_bg_img5")
  const UserBgImage6 = document.getElementById("user_bg_img6")
  const LoginBtn = document.getElementById("login_btn")
  const plus=document.querySelector(".fa-plus")
  const plus2=document.querySelector(".plus2")
  const plus3=document.querySelector(".plus3")
  const plus4=document.querySelector(".plus4")
  const plus5=document.querySelector(".plus5")
  const plus6=document.querySelector(".plus6")





  plus.style.display="none"
  plus2.style.display="none"
  plus3.style.display="none"
  plus4.style.display="none"
  plus5.style.display="none"
  plus6.style.display="none"
  

  LoginBtn.addEventListener("click",function login(){
    
    LoginDiv.style.display="block"
    LoginBtn.style.display="none"
  })

  checkbtn.addEventListener("click",function security_check(){

    const email = document.getElementById("email_input").value
  const password = document.getElementById("password_input").value

  signInWithEmailAndPassword(auth,email,password)
      .then(function check(){
         
        LoginDiv.style.display="none"

          plus.style.display="block"

          plus2.style.display="block"

          plus3.style.display="block"

          plus4.style.display="block"

          plus5.style.display="block"

          plus6.style.display="block"
     
         file_input.style.display="block"

         file_input2.style.display="block"

         file_input3.style.display="block"

         file_input4.style.display="block"

         file_input5.style.display="block"

         file_input6.style.display="block"


  file_input.addEventListener("change",function FileUpload(){
    const user_file = file_input.files[0]
    
    const path = ref(storage,"hello")
    
    uploadBytes(path,user_file)
    .then(function uploading(object){
      return getDownloadURL(object.ref)
      
    })
    .then(function (downloadURL) {
      UserBgImage.style.backgroundImage = `url(${downloadURL})`;

        plus.style.display="none"

      
      file_input.style.display="none"


      LoginBtn.style.display="block"
  
    })
    .catch(function error(){
      console.log("file not uploaded")
    })

    .catch(function error(){
      console.log("something went wrong")
    })
    
    

  })


  file_input2.addEventListener("change",function FileUpload(){
    const user_file2= file_input2.files[0]
    const path2=ref(storage,"hello2")
    uploadBytes(path2,user_file2)
    .then(function uploading(object){
      return getDownloadURL(object.ref)
      
    })
    .then(function (downloadURL) {
      UserBgImage2.style.backgroundImage = `url(${downloadURL})`;

    })
    .catch(function error(){
      console.log("file not uploaded")
    })

    .catch(function error(){
      console.log("something went wrong")
    })
    

  })


  file_input3.addEventListener("change",function FileUpload(){
    const user_file3= file_input3.files[0]
    const path3=ref(storage,"hello3")
    uploadBytes(path3,user_file3)
    .then(function uploading(object){
      return getDownloadURL(object.ref)
      
    })
    .then(function (downloadURL) {
      UserBgImage3.style.backgroundImage = `url(${downloadURL})`;

    })
    .catch(function error(){
      console.log("file not uploaded")
    })

    .catch(function error(){
      console.log("something went wrong")
    })
    

  })

  file_input4.addEventListener("change",function FileUpload(){
    const user_file4= file_input4.files[0]
    const path4=ref(storage,"hello4")
    uploadBytes(path4,user_file4)
    .then(function uploading(object){
      return getDownloadURL(object.ref)
      
    })
    .then(function (downloadURL) {
      UserBgImage4.style.backgroundImage = `url(${downloadURL})`;

    })
    .catch(function error(){
      console.log("file not uploaded")
    })

    .catch(function error(){
      console.log("something went wrong")
    })
    

  })

  file_input5.addEventListener("change",function FileUpload(){
    const user_file5= file_input5.files[0]
    const path5=ref(storage,"hello5")
    uploadBytes(path5,user_file5)
    .then(function uploading(object){
      return getDownloadURL(object.ref)
      
    })
    .then(function (downloadURL) {
      UserBgImage5.style.backgroundImage = `url(${downloadURL})`;

    })
    .catch(function error(){
      console.log("file not uploaded")
    })

    .catch(function error(){
      console.log("something went wrong")
    })
    
  })

  file_input6.addEventListener("change",function FileUpload(){
    const user_file6= file_input6.files[0]
    const path6=ref(storage,"hello6")
    uploadBytes(path6,user_file6)
    .then(function uploading(object){
      return getDownloadURL(object.ref)
      
    })
    .then(function (downloadURL) {
      UserBgImage6.style.backgroundImage = `url(${downloadURL})`;

    })
    .catch(function error(){
      console.log("file not uploaded")
    })

    .catch(function error(){
      console.log("something went wrong")
    })
    

  })

  })
     
  })
  


  window.addEventListener("load",function reload(){

    const path = ref(storage,"hello")
    const path2 = ref(storage,"hello2")
    const path3 = ref(storage,"hello3")
    const path4 = ref(storage,"hello4")
    const path5 = ref(storage,"hello5")
    const path6 = ref(storage,"hello6")


   getDownloadURL(path)
   .then(function reget(url){

    UserBgImage.style.backgroundImage = `url(${url})`; 
     
   })
    .catch(function error(){
      console.log("unable to reload file")
    })

    getDownloadURL(path2)
   .then(function reget(url){

    UserBgImage2.style.backgroundImage = `url(${url})`; 
     
   })
    .catch(function error(){
      console.log("unable to reload file")
    })

    getDownloadURL(path3)
   .then(function reget(url){

    UserBgImage3.style.backgroundImage = `url(${url})`; 
     
   })
    .catch(function error(){
      console.log("unable to reload file")
    })

    getDownloadURL(path4)
   .then(function reget(url){

    UserBgImage4.style.backgroundImage = `url(${url})`; 
     
   })
    .catch(function error(){
      console.log("unable to reload file")
    })

    getDownloadURL(path5)
   .then(function reget(url){

    UserBgImage5.style.backgroundImage = `url(${url})`; 
     
   })
    .catch(function error(){
      console.log("unable to reload file")
    })

    getDownloadURL(path6)
   .then(function reget(url){

    UserBgImage6.style.backgroundImage = `url(${url})`; 
     
   })
    .catch(function error(){
      console.log("unable to reload file")
    })

  })













  const search_icon=document.querySelector(".fa-magnifying-glass")
  const choose_container=document.getElementById("choose")
  const options=document.getElementById("option1")
  const options2=document.getElementById("option2")
  const collection_btn=document.getElementById("more_collection_btn")
  const contact_btn=document.getElementById("info")
  const homepg_overlay_img=document.querySelector(".dark_overlay_home_pg")
 

  search_icon.addEventListener("click",function(){
    choose_container.style.display="block"
  })

  search_icon.addEventListener("click",function(){
    choose_container.style.display="block"
  })

  options.addEventListener("click",function(){
    window.location.href="product_listing_lehenga.html"
  })

  options2.addEventListener("click",function(){
    window.location.href="product_listing_saree.html"
  })


  collection_btn.addEventListener("click",function(){
    window.location.href="product_listing_lehenga.html"
  })

  contact_btn.addEventListener("click",function(){
    homepg_overlay_img.style.display="block"
    homepg_overlay_img.style.display="flex"
  })
  
  
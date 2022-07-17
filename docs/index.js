

// bottomの初期スクロール位置を下部に移動
// bottom.scrollLeft = bottom.scrollWidth - bottom.clientWidth;

function updateScroll(event) {
  const image = document.querySelector(".scroll-image");
  const back = document.querySelector(".back");
  image.scrollLeft = document.documentElement.scrollTop * 0.2;
  back.scrollLeft = document.documentElement.scrollTop * 0.03;
}

document.body.onscroll = updateScroll;

const scrollNum = document.getElementById('scroll-num');

window.addEventListener('scroll',function(){
  scrollNum.textContent = window.pageYOffset;
  let scroll = window.pageYOffset;

  let Backimg = document.getElementById("back-img");
  let hitoimg = document.getElementById("hito-img");
  let frontimg = document.getElementsByClassName("front-image");
   console.log(frontimg);


   if(scroll <= 12000 ){   
    frontimg.src = "images/kino.png"
  }else if(scroll > 12000 && scroll <= 24000){
    frontimg.src = "images/kris.png"
  }

  if(scroll <= 7000 ){   
    Backimg.src = "images/back.png"
  }else if(scroll > 7000 && scroll <= 8000){
    Backimg.src = "images/back2.png"
  }else if(scroll > 8000 && scroll <= 9000){
    Backimg.src = "images/back3.png"
  }else if(scroll > 9000 && scroll <= 10000){
    Backimg.src = "images/back4.png"
  }else if(scroll > 10000 && scroll <= 12000){
    Backimg.src = "images/back5.png"
  }else if(scroll > 12000 && scroll <= 14000){
    Backimg.src = "images/krisback5.png"
  }else if(scroll > 14000 && scroll <= 15000){
    Backimg.src = "images/krisback4.png"
  }else if(scroll > 15000 && scroll <= 16000){
    Backimg.src = "images/krisback3.png"
  }else if(scroll > 16000 && scroll <= 17000){
    Backimg.src = "images/krisback2.png"
  }else if(scroll > 17000 && scroll <= 18000){
    Backimg.src = "images/krisback.png"
  }

  if(scroll <= 500 ){   
    hitoimg.src = "images/hito.png"
  }else if(scroll > 500 && scroll <= 1000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 1000 && scroll <= 1500){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 1500 && scroll <= 2000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll >2000 && scroll <= 2500){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 2500 && scroll <= 3000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 3000 && scroll <= 3500){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 3500 && scroll <= 4000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 4000 && scroll <= 4500){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 4500 && scroll <= 5000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll >5000 && scroll <= 5500){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 5500 && scroll <= 6000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 6000 && scroll <= 6500){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 6500 && scroll <= 7000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 7000 && scroll <= 7500){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 7500 && scroll <= 8000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 8000 && scroll <= 8500){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 8500 && scroll <= 9000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 9000 && scroll <= 9500){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 9500 && scroll <= 10000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 10000 && scroll <= 10500){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 10500 && scroll <= 11000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 11000 && scroll <= 11500){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 11500 && scroll <= 12000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 12000 && scroll <= 12500){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 12500 && scroll <= 13000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 13000 && scroll <= 13500){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 13500 && scroll <= 14000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 14000 && scroll <= 14500){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 14500 && scroll <= 15000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 15000 && scroll <= 15500){
    hitoimg.src = "images/hito2.png"
  }


  
})


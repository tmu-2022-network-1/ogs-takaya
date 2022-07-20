

// bottomの初期スクロール位置を下部に移動
// bottom.scrollLeft = bottom.scrollWidth - bottom.clientWidth;

function updateScroll(event) {
  const image = document.querySelector(".scroll-image");
  const back = document.querySelector(".back");
  image.scrollLeft = document.documentElement.scrollTop * 0.2;
  back.scrollLeft = document.documentElement.scrollTop * 0.03;
}
document.body.onscroll = updateScroll;

// const scrollNum = document.getElementById('scroll-num');

window.addEventListener('scroll',function(){
  // scrollNum.textContent = window.pageYOffset;
  let scroll = window.pageYOffset;

  let Backimg = document.getElementById("back-img");
  let hitoimg = document.getElementById("hito-img");
  let textimg = document.getElementById("text-img");


  if(scroll <= 300){
    textimg.scr = "images/kuuhaku.png"
  }else if(scroll > 300 && scroll <= 900 ){   
    textimg.src = "images/prologue1.png"
  }else if(scroll > 900 && scroll <= 1500){   
    textimg.src = "images/prologue2.png"
  }else if(scroll > 1500 && scroll <= 2100){   
    textimg.src = "images/prologue3.png"
  }else if(scroll > 2100 && scroll <= 13500){   
    textimg.src = "images/kuuhaku.png"
  }else if(scroll > 1400 && scroll <= 15500){   
    textimg.src = "images/text1.png"
  }else if(scroll > 15500 && scroll <= 17000){   
    textimg.src = "images/text2.png"
  }else if(scroll > 17000 && scroll <= 18500 ){   
    textimg.src = "images/text3.png"
  }else if(scroll > 18500){
    textimg.src = "images/kuuhaku.png"
  }


  if(scroll <= 2000 ){   
    Backimg.src = "images/back5.png"
  }else if(scroll > 2000 && scroll <= 3000 ){   
    Backimg.src = "images/back4.png"
  }else if(scroll > 3000 && scroll <= 4000){
    Backimg.src = "images/back3.png"
  }else if(scroll > 4000 && scroll <= 5000){
    Backimg.src = "images/back2.png"
  }else if(scroll > 5000 && scroll <= 10000 ){   
    Backimg.src = "images/back.png"
  }else if(scroll > 10000 && scroll <= 11000){
    Backimg.src = "images/back2.png"
  }else if(scroll > 11000 && scroll <= 12000){
    Backimg.src = "images/back3.png"
  }else if(scroll > 12000 && scroll <= 13000){
    Backimg.src = "images/back4.png"
  }else if(scroll > 13000 && scroll <= 16000){
    Backimg.src = "images/back5.png"
  }else if(scroll > 16000 && scroll <= 21000){
    Backimg.src = "images/krisback5.png"
  }else if(scroll > 21000 && scroll <= 22000){
    Backimg.src = "images/krisback4.png"
  }else if(scroll > 22000 && scroll <= 24000){
    Backimg.src = "images/krisback3.png"
  }else if(scroll > 24000 && scroll <= 26000){
    Backimg.src = "images/krisback2.png"
  }else if(scroll > 26000 && scroll <= 34000){
    Backimg.src = "images/krisback.png"
  }else if(scroll > 34000 && scroll <= 35000){
    Backimg.src = "images/krisflash1.png"
  }else if(scroll > 35000 && scroll <= 36000){
    Backimg.src = "images/krisflash2.png"
  }else if(scroll > 36000 && scroll <= 37000){
    Backimg.src = "images/krisflash3.png"
  }else if(scroll > 37000 && scroll <= 38000){
    Backimg.src = "images/krisflash4.png"
  }

  if(scroll <= 1000 ){   
    hitoimg.src = "images/hito.png"
  }else if(scroll > 1000 && scroll <= 2000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 2000 && scroll <= 3000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 3000 && scroll <= 4000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 4000 && scroll <= 5000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 5000 && scroll <= 6000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 6000 && scroll <= 7000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 7000 && scroll <= 8000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 8000 && scroll <= 9000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 9000 && scroll <= 10000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 10000 && scroll <= 11000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 11000 && scroll <= 12000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 12000 && scroll <= 13000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 13000 && scroll <= 14000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 14000 && scroll <= 15000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 15000 && scroll <= 16000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 16000 && scroll <= 17000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 17000 && scroll <= 18000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 18000 && scroll <= 19000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 19000 && scroll <= 20000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 20000 && scroll <= 21000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 21000 && scroll <= 22000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 22000 && scroll <= 23000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 23000 && scroll <= 24000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 24000 && scroll <= 25000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 25000 && scroll <= 26000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 26000 && scroll <= 27000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 27000 && scroll <= 28000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 28000 && scroll <= 29000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 29000 && scroll <= 30000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 30000 && scroll <= 31000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 31000 && scroll <= 32000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 32000 && scroll <= 33000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 33000 && scroll <= 34000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 34000 && scroll <= 35000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 35000 && scroll <= 36000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 36000 && scroll <= 37000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 37000 && scroll <= 38000){
    hitoimg.src = "images/hito.png"
  }else if(scroll > 38000 && scroll <= 39000){
    hitoimg.src = "images/hito2.png"
  }else if(scroll > 39000 && scroll <= 40000){
    hitoimg.src = "images/hitoflash1.png"
  }else if(scroll > 40000 && scroll <= 41000){
    hitoimg.src = "images/hitoflash2.png"
  }else if(scroll > 41000 && scroll <= 42000){
    hitoimg.src = "images/hitoflash3.png"
  }else if(scroll > 42000 && scroll <= 43000){
    hitoimg.src = "images/hitoflash4.png"
  }else if(scroll > 43000 && scroll <= 43500){
    hitoimg.src = "images/about4.png"
  }else if(scroll > 43500 && scroll <= 44000){
    hitoimg.src = "images/about3.png"
  }else if(scroll > 44000 && scroll <= 44500){
    hitoimg.src = "images/about2.png"
  }else if(scroll > 44500 && scroll <= 45000){
    hitoimg.src = "images/about.png"
  }
  
})


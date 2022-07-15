

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
  console.log(Backimg);

  if(scroll <= 500 ){   
    Backimg.src = "images/back.png"
  }else if(scroll > 500){
    Backimg.src = "images/ori.png"
  }
})


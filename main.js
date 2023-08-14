let docwidth = window.innerWidth; //화면 넓이
let wrap = document.querySelector('.newspaper');
let imgs = document.querySelectorAll('.newspaperWrap .hb')
let slideWidth = wrap.clientWidth // wrap의 넓이

wrap.addEventListener('mousemove', function(e){
  let mouseX =e.pageX;
  // console.log
  let offset=(mouseX/docwidth)*slideWidth-mouseX/2;
  //값을 빼준다.
console.log(offset)
  for(let i=0; i<imgs.length; i++){
    imgs[i].style.transform=`translateX(${-offset}px)`
  }
})

wrap.addEventListener('mouseleave', function(){
  for(let i=0; i<imgs.length; i++){
    imgs[i].style.transform=`translateX(0px)`;
    imgs[i].style.transition=`.5s`; 
  }
})
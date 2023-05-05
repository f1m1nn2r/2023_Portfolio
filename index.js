

// 스크롤 효과
$("html").easeScroll();
$("html").easeScroll({
    frameRate: 60,
    animationTime: 6000,
    stepSize: 120,
    pulseAlgorithm: !0,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: !0,
    arrowScroll: 10
});

// 섹션01
const section01 = document.querySelector('.section01');

// 섹션03
const section03 = document.querySelector('.sticky-section');
const fir_txt = document.querySelectorAll('.sc01-txt-wrap__1 p');
const fir_line = document.querySelector('.sc01-txt-wrap__1 .line');
var widthSum = 0;
for(var i=0; i<fir_txt.length; i++){
    var fir_txt_width = fir_txt[i].clientWidth;
    widthSum = (widthSum + fir_txt_width) * 2;
    console.log(widthSum);
    fir_line.style.height = `calc(100% - ${widthSum}px)`;
}

const section03_txt = document.querySelectorAll('.section03 .txt-wrap .txt-inner');
const circle = document.querySelector('.float');
const circle_exposure = document.querySelector('.line-circle-exposure');
const section04 = document.querySelector('.section04');
window.addEventListener('scroll', function(){
    var windowY = window.scrollY;
    var circleValue = windowY / 100 - 16;
    if(windowY >= section03.offsetTop / 1.2){
        circle.classList.add('sticky');
        circle_exposure.style.transform = `translate3d(${circleValue}vw, 0, 0)`; // circle 배경 라인 노출
    }else if(windowY >= section04.offsetTop / 1.2){ // circle 섹션04 이전에 sticky 클래스 삭제 <<<<< 동작 안 되고 있음
        circle.classList.remove('sticky');
    }else{
        circle.classList.remove('sticky');
    }
});

// 섹션04


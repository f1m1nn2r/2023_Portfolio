

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

// 섹션02
const section02 = document.querySelector('.section02'); 
const sc02_RLScroll_comm = document.querySelectorAll('.section02 .RL-comm'); 
const sc02_RLScroll_comm_txt = document.querySelectorAll('.section02 .RL-comm h1'); 
var heightSum = 0;
for (var i = 0; i < sc02_RLScroll_comm.length; i++) { 
    sc02_RLScroll_comm[i].style.height = sc02_RLScroll_comm_txt[i].clientHeight / 10 + 'vh'; 
    heightSum += sc02_RLScroll_comm_txt[i].clientHeight;
}
section02.style.height = heightSum/10 + 'vh';
// 섹션03
const section03 = document.querySelector('.sticky-section');
const fir_txt = document.querySelectorAll('.sc01-txt-wrap__1 p');
const fir_line = document.querySelector('.sc01-txt-wrap__1 .line');
var widthSum = 0;
for(var i=0; i<fir_txt.length; i++){
    var fir_txt_width = fir_txt[i].clientHeight * 1.65;
    widthSum = widthSum + fir_txt_width;
    fir_line.style.height = `calc(100% - ${widthSum}px)`;
}

const section03_txt = document.querySelectorAll('.section03 .txt-wrap .txt-inner');
const circle = document.querySelector('.float');
const circle_exposure = document.querySelector('.line-circle-exposure');
const section04 = document.querySelector('.section04');
window.addEventListener('scroll', function(){
    var windowY = window.scrollY;
    // 헤더, 풋터 - 섹션03 도달 시 노출 안 되도록
    const header = document.querySelector('header');
    const footer = document.querySelector('.footer-section');

    // 섹션02 - 스크롤 시 텍스트 좌 우 이동
    for(var i=0; i<sc02_RLScroll_comm.length; i++){
        if(i % 2 == 0){
            sc02_RLScroll_comm_txt[i].style.transform = `translate3d(-${window.scrollY / sc02_RLScroll_comm[i].clientHeight * 2}vw, 0, 0) translateY(-50%)`
        }else if(i % 2 == 1){
            sc02_RLScroll_comm_txt[i].style.transform = `translate3d(${window.scrollY / sc02_RLScroll_comm[i].clientHeight * 2}vw, 0, 0) translateY(-50%) scale(-1)`
        }
    }
    
    var circleValue = (windowY / 100) - 16;
    // 전체 스크롤 값이 섹션03의 (스크롤 값+500) 값과 같거나 커질 경우
    // +500은 섹션02 넘어갈 때 height 값을 100vh로 설정하는 sticky 클래스 때문인지 스크롤 동작이 제대로 안 돼서 추가함
    if(windowY >= section03.offsetTop + 500){
        circle.classList.add('sticky'); // sticky 클래스 추가
        circle_exposure.style.transform = `translate3d(${circleValue}vw, 0, 0)`; // circle 배경 라인 노출되도록
        header.classList.add('no-exposure'); // 섹션03일 시 헤더 비노출
        footer.classList.add('no-exposure'); // 섹션03일 시 풋터 비노출
        section03.classList.add('border'); // 섹션03일 시 좌 우 하단 border 추가
    }//else if(windowY >= section04.offsetTop / 1.2){ // circle 섹션04 이전에 sticky 클래스 삭제 <<<<< 동작 안 되고 있음
        //circle.classList.remove('sticky');}
    else{
        circle.classList.remove('sticky');
        header.classList.remove('no-exposure');
        footer.classList.remove('no-exposure');
        section03.classList.remove('border');
    }
});

// 섹션04

// 섹션05
const section05 = document.querySelector('.section05');
const sc05_RLScroll_comm = document.querySelectorAll('.section05 .RL-comm');
const sc05_RLScroll_comm_txt = document.querySelectorAll('.section05 .RL-comm h1');
var sc05_heightSum = 0;
for(var i=0; i<sc05_RLScroll_comm.length; i++){
    sc05_RLScroll_comm[i].style.height = sc05_RLScroll_comm_txt[i].clientHeight/10 + '%';
    sc05_heightSum += sc05_RLScroll_comm_txt[i].clientHeight;
}
section05.style.height = sc05_heightSum/10 + 'vh';
window.addEventListener('scroll', function(){
    for(var i=0; i<sc05_RLScroll_comm.length; i++){
        if(window.scrollY >= section05.offsetTop / 1.3){
            if(i % 2 == 0){
                sc05_RLScroll_comm_txt[i].style.transform = `translate3d(-${window.scrollY / section01.offsetTop -7 }vw, 0, 0) translateY(-50%)`
            }else if(i % 2 == 1){
                sc05_RLScroll_comm_txt[i].style.transform = `translate3d(${window.scrollY / section01.offsetTop - 7 }vw, 0, 0) translateY(-50%) scale(-1)`
            }
        }else{
            if(i % 2 == 0){
                sc05_RLScroll_comm_txt[i].style.transform = `translate3d(0, 0, 0) translateY(-50%)`
            }else if(i % 2 == 1){
                sc05_RLScroll_comm_txt[i].style.transform = `translate3d(0, 0, 0) translateY(-50%) scale(-1)`
            }
        }
    }
})
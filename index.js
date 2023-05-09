

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

// 섹션02
const section02 = document.querySelector('.section02'); 
const sc02_RLScroll_comm = document.querySelectorAll('.section02 .RL-comm'); 
const sc02_RLScroll_comm_txt = document.querySelectorAll('.section02 .RL-comm h1'); 
var heightSum = 0;
for (var i = 0; i < sc02_RLScroll_comm.length; i++) { 
    sc02_RLScroll_comm[i].style.height = sc02_RLScroll_comm_txt[i].scrollHeight + 'px'; // RL-comm의 height 값이 h1의 높이값과 동일하도록
    heightSum += sc02_RLScroll_comm_txt[i].scrollHeight;
}
section02.style.height = heightSum + 'px';

// 섹션03
const section03 = document.querySelector('.sticky-section');
const fir_txt = document.querySelectorAll('.sc01-txt-wrap__1 p');
const fir_line = document.querySelector('.sc01-txt-wrap__1 .line');
var widthSum = 0;
for(var i=0; i<fir_txt.length; i++){
    var fir_txt_width = fir_txt[i].clientHeight * 1.65;
    widthSum += fir_txt_width;
    fir_line.style.height = `calc(100% - ${widthSum}px)`;
}
const section03_txt = document.querySelectorAll('.section03 .txt-wrap');
var sc03HeightSum = 0;
for(var i=0; i<section03_txt.length; i++){
    var section03_txt_height = section03_txt[i].scrollHeight;
    sc03HeightSum += section03_txt_height;
}
section03.style.height = sc03HeightSum + 'px';

// 섹션05
const section05 = document.querySelector('.section05');
const sc05_RLScroll_comm = document.querySelectorAll('.section05 .RL-comm');
const sc05_RLScroll_comm_txt = document.querySelectorAll('.section05 .RL-comm h1');
var sc05_heightSum = 0;
for(var i=0; i<sc05_RLScroll_comm.length; i++){
    sc05_RLScroll_comm[i].style.height = sc05_RLScroll_comm_txt[i].scrollHeight + 'px';
    sc05_heightSum += sc05_RLScroll_comm_txt[i].scrollHeight;
}
section05.style.height = sc05_heightSum + 'px';

// 섹션06
const workSection = document.querySelector('.work-section');
const workSectionWrap = document.querySelector('.work-img-wrap');
for(var i=1; i<11; i++){
    const workDiv = document.createElement('div'); // div 태그 생성
    workDiv.setAttribute('class', 'work-img-slide');
    workSectionWrap.appendChild(workDiv); // work-img-wrap 태그 안에 work-img-slide 삽입
}
const workImgSlide = document.querySelectorAll('.work-img-slide');
var workImgArray = new Array();
for(var i=0; i<workImgSlide.length; i++){
    workImgArray[i] = new Image();
    workImgArray[i].src = `./img/work-img-0${i + 1}.png`;
    workImgSlide[i].append(workImgArray[i]);
}

// 섹션07
const section07 = document.querySelector('.section07');
const section07_inner = document.querySelector('.section07-inner');
const section07_child = document.querySelectorAll('.section07-inner > div');
var childWidthSum = 0;
for(var i=0; i<section07_child.length; i++){
    childWidthSum += section07_child[i].scrollWidth;
}
section07_inner.style.width = childWidthSum + 'px';

// 윈도우 로드 완료되면
const section01 = document.querySelector('.section01');
const introText = document.querySelectorAll('.section01 .sc01_comm h1');
const introTextSpan = document.querySelectorAll('.section01 .sc01_comm h1 span');
const header = document.querySelector('.at-header');
const footer = document.querySelector('.footer-section');
window.onload = function(){
    section01.classList.add('load_ani');
    header.classList.add('load_ani');
    footer.classList.add('load_ani');
    section02.classList.add('load_ani');
    setTimeout(function(){
        document.body.classList.remove('no-scroll');
    }, 1200);
}
for(var i=0; i<introText.length; i++){
    introText[i].style.height = (introTextSpan[i].getBoundingClientRect().height) + 'px';
}

window.addEventListener('scroll', function(){
    var windowY = window.scrollY;
    // 헤더, 풋터 - 전체 스크롤 값이 섹션03의 (스크롤 값+500) 값과 같거나 커질 경우 노출 안 되도록
    const header = document.querySelector('header');
    const footer = document.querySelector('.footer-section');
    if(window.scrollY >= section03.offsetTop){
        header.classList.add('no-exposure'); 
        footer.classList.add('no-exposure');
    }else{
        header.classList.remove('no-exposure'); 
        footer.classList.remove('no-exposure');
    }

    // 섹션02 - 스크롤 시 텍스트 좌 우 이동
    for(var i=0; i<sc02_RLScroll_comm.length; i++){
        if(i % 2 == 0){ // 짝수번 째 텍스트는 translate3d x축 -로
            sc02_RLScroll_comm_txt[i].style.transform = `translate3d(-${window.scrollY / sc02_RLScroll_comm[i].clientHeight * 2}vw, 0, 0) translateY(-50%)`
        }else if(i % 2 == 1){ // 홀수번 째 텍스트는 translate3d x축 +로
            sc02_RLScroll_comm_txt[i].style.transform = `translate3d(${window.scrollY / sc02_RLScroll_comm[i].clientHeight * 2}vw, 0, 0) translateY(-50%) scale(-1)`
        }
    }

    // 섹션03
    const circle = document.querySelector('.float');
    const circle_exposure = document.querySelector('.line-circle-exposure');
    var circleValue = (windowY / 100) - 16;
    // +500은 섹션02 넘어갈 때 height 값을 100vh로 설정하는 sticky 클래스 때문인지 스크롤 동작이 제대로 안 돼서 추가함
    if(windowY >= section03.offsetTop + 500){
        circle.classList.add('sticky'); // sticky 클래스 추가
        circle_exposure.style.transform = `translate3d(${circleValue}vw, 0, 0)`; // circle 배경 라인 노출되도록
        section03.classList.add('border'); // 섹션03일 시 좌 우 하단 border 추가
    }else{
        circle.classList.remove('sticky');
        circle_exposure.style.transform = `translate3d(-${circleValue}vw, 0, 0)`;
        section03.classList.remove('border');
    }

    // 섹션05
    for(var i=0; i<sc05_RLScroll_comm.length; i++){
        if(window.scrollY >= section05.offsetTop / 1.3){
            if(i % 2 == 0){
                sc05_RLScroll_comm_txt[i].style.transform = `translate3d(-${window.scrollY * 2 / sc05_RLScroll_comm_txt[i].clientHeight - 10 }vw, 0, 0) translateY(-50%)`
            }else if(i % 2 == 1){
                sc05_RLScroll_comm_txt[i].style.transform = `translate3d(${window.scrollY * 2 / sc05_RLScroll_comm_txt[i].clientHeight - 10 }vw, 0, 0) translateY(-50%) scale(-1)`
            }
        }else{
            if(i % 2 == 0){
                sc05_RLScroll_comm_txt[i].style.transform = `translate3d(${window.scrollY * 2 / sc05_RLScroll_comm_txt[i].clientHeight }vw, 0, 0) translateY(-50%)`
            }else if(i % 2 == 1){
                sc05_RLScroll_comm_txt[i].style.transform = `translate3d(-${window.scrollY * 2 / sc05_RLScroll_comm_txt[i].clientHeight}vw, 0, 0) translateY(-50%) scale(-1)`
            }
        }
    }

    // 섹션06
    const sc06_li = document.querySelectorAll('.section06 ul li');
    const workImgSlide = document.querySelectorAll('.work-img-slide');
    var iBox = 0;
    for(var i=0; i<sc06_li.length; i++){
        sc06_li[i].style.opacity = '0.1';
        workImgSlide[i].style.display = 'none';
        var opacityValue = 0.2 + (window.scrollY / document.documentElement.scrollHeight); 

        if(sc06_li[i].getBoundingClientRect().top < window.innerHeight / 2){ // 화면 중앙 탐지
            sc06_li[i].style.opacity = opacityValue;
            workImgSlide[i].style.display = 'block';
        }else{
            sc06_li[i].style.opacity = '0.1';
            workImgSlide[i].style.display = 'none';
        }
    }

    const bgCircle = document.querySelector('.bg-circle span');
    bgCircle.style.width = '10vw';
    bgCircle.style.height = '10vw';

    const sc07ScrollTxt = document.querySelector('.section07 .txt-wrap h1');
    if(window.scrollY >= section07.offsetTop + 300){
        bgCircle.style.width = `${(window.scrollY / header.offsetHeight + footer.offsetHeight) / 3}vw`;
        bgCircle.style.height = `${(window.scrollY / header.offsetHeight + footer.offsetHeight) / 3}vw`;

        var lastValue = -window.scrollY / header.offsetHeight;
        sc07ScrollTxt.style.transform = `translate3d(${lastValue + 387}vw, 0, 0) translate(-50%, -50%)`
    }
});

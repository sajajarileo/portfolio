let modalCategory = '';
let modalImgFormat = '.jpg';
let modalVideo = false;
let modalLink = ['|'];
let modalDescription = ['', ''];
let modalTool = [''];
let modalContribution = [''];
/*
['|']
['ps, ai, id, pr, fig']
['디자인', '코딩']
*/
let nowScrollY;

const DOTHOME = 'http://sajajari.dothome.co.kr';
const WRAP = document.querySelector('#wrap');
const MODAL = document.querySelector('#modal');
const TITLE = document.querySelector('#modal .title-name');
const CATEGORY = document.querySelector('#modal .title-category');
const IMG = document.querySelector('#modal .content-img img');
const VIDEO = document.querySelector('#modal .content-img video');
const LINK = document.querySelectorAll('#modal .text-link a');
const DESCRIPTION = document.querySelector('#modal .text-info-description');
const TOOL = document.querySelectorAll('#modal .text-info-tool div');
const CONTRIBUTION = document.querySelector('#modal .text-info-contribution');
const PARTICIPATION = document.querySelector('#modal .text-info-contribution p');
const CONTRIBUTION_DESIGN = document.querySelector('#modal .contribution-design');
const CONTRIBUTION_CODING = document.querySelector('#modal .contribution-coding');
const CONTRIBUTION_PLAN = document.querySelector('#modal .contribution-plan');

// 그리드 조정
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-grid').forEach(each => {
    if (each.children.length == 3) {each.classList.add('rem3')}
  });
});

/*** 프리셋 ***/
// document.querySelector('#').addEventListener('click', function(){
//   modalCategory[0] = modalCategory[1];
//   modalLink = ['|', '|', '|'];
//   modalDescription = ['', ''];
//   modalTool = [0, 0, 0, 0, 0];
//   modalContribution = 'default';
// });

document.querySelector('#being-sand').addEventListener('click', function(){
  modalCategory = 'UI/UX';
  modalLink = ['UI/UX 디자인|https://www.figma.com/proto/kmZLUJjjzDmVif1ZeYNylu/being_sand?node-id=2090-2190&t=VB2Xw2D8QlwF4ljc-1', '브랜드 디자인|'+DOTHOME+'/pdf/plan_being-sand.pdf'];
  modalDescription = ['빙 샌드 UI/UX 디자인', '가상의 브랜드 "빙 샌드"를 만들고, 목적에 맞게 UI/UX 디자인을 설계했습니다.'];
  modalTool = ['ps', 'fig'];
  modalContribution = ['디자인', '100%'];
});

document.querySelector('#binggrae').addEventListener('click', function(){
  modalCategory = '반응형 웹';
  modalLink = ['웹 사이트|http://sajajarileo.dothome.co.kr/', '기획안|'+DOTHOME+'/pdf/plan_binggrae.pdf'];
  modalDescription = ['빙그레 반응형 웹 디자인', '빙그레의 웹 사이트를 레트로 감성이 물씬 드는 반응형 웹으로 리뉴얼 했습니다.'];
  modalTool = ['ai', 'pr', 'fig'];
  modalContribution = [3, '디자인', '회사소개 대표 페이지', '제품소개 대표 페이지', 'ESG 대표 페이지', '뉴스룸 대표 페이지', '코딩', '100%'];
});

document.querySelector('#jo-malone').addEventListener('click', function(){
  modalCategory = '웹';
  modalLink = ['웹 사이트|http://gmail000leo8202.dothome.co.kr/', '기획안|'+DOTHOME+'/pdf/plan_jo-malone.pdf'];
  modalDescription = ['조 말론 웹 디자인', '조 말론의 웹 사이트를 깔끔하고 세련된 느낌에 초점을 맞추어 리뉴얼 했습니다.'];
  modalTool = ['ps', 'ai'];
  modalContribution = [3, '디자인', '디자인 총괄', '디자인 가이드 작성', '코딩', 'html 48개 구조 작성', 'style.css 작성', 'ajax를 이용한 auto_href.js 작성'];
});

document.querySelector('#seoul-milk').addEventListener('click', function(){
  modalCategory = '';
  modalLink = ['웹 사이트|http://gmail000leo820.dothome.co.kr/product.html'];
  modalDescription = ['서울우유 상세페이지', '서울우유의 상세페이지 리뉴얼 디자인 입니다.'];
  modalTool = ['ps', 'ai'];
  modalContribution = ['디자인', '100%', '코딩', '100%'];
});

document.querySelector('#trekstar').addEventListener('click', function(){
  modalCategory = '광고';
  modalDescription = ['트렉스타 광고 디자인', '트렉스타의 광고를 활동적으로 리뉴얼 한 광고 디자인 입니다. 자연적인 이미지와 역동적이게 변형한 신발 이미지를 이용하여 소비자로 하여금 등산 욕구를 불러 일으키고 트랙스타 신발을 구매 하도록 유도하였습니다.'];
  modalTool = ['ps'];
  modalContribution = ['디자인', '100%'];
});

document.querySelector('#lg-group').addEventListener('click', function(){
  modalCategory = '광고';
  modalDescription = ['LG전자 기업광고', 'LG전자의 사업을 고객 경험 중심의 스마트 홈 솔루션으로 정의하고, 이에 맞는 기업광고를 제작했습니다. 고객 주위에 항상 LG기업의 가전들이 있다는 걸 표현했습니다.'];
  modalTool = ['ps'];
  modalContribution = ['디자인', '100%'];
});

document.querySelector('#starbucks').addEventListener('click', function(){
  modalCategory = '광고';
  modalDescription = ['스타벅스 배너 디자인', '스타벅스의 신메뉴를 홍보하는 옥외 배너를 디자인 했습니다. 각 메뉴에 대한 정보와 상품 이미지를 강조하는 배경을 활용했습니다.'];
  modalTool = ['ps', 'ai'];
  modalContribution = ['디자인', '100%'];
});

document.querySelector('#aiai').addEventListener('click', function(){
  modalCategory = '광고';
  modalDescription = ['아잉이 텀블러 광고 디자인', '가상의 ai 드로잉 브랜드 "아잉이"의 텀블러 굿즈를 홍보하는 웹 배너 입니다. 브랜드 심볼 드로잉은 chatGPT의 기능을 이용하였으며, 일러스트로 수정 후 로고타입을 완성했습니다.'];
  modalTool = ['ps', 'ai'];
  modalContribution = ['디자인', '100%'];
});

document.querySelector('#almondlight').addEventListener('click', function(){
  modalCategory = '패키지';
  modalDescription = ['아몬드 라이트 패키지', '가상으로 만든 음료 제품 아몬드 라이트의 패키지 디자인입니다. 맛은 오리지널, 바나나, 초콜릿, 말차이며 맛의 이미지를 살린 각각의 디자인이 있습니다.'];
  modalTool = ['ps', 'ai'];
  modalContribution = ['디자인', '100%'];
});

document.querySelector('#nmk').addEventListener('click', function(){
  modalCategory = '리플렛 편집';
  modalDescription = ['국립중앙박물관 리플렛', '국립중앙박물관을 소개하는 3단 리플렛 입니다. 전시, 공연, 각 층별 안내도, 기본 정보들을 한 눈에 볼 수 있습니다.'];
  modalTool = ['ps', 'id'];
  modalContribution = ['디자인', '100%'];
});

document.querySelector('#welcome-to-korea').addEventListener('click', function(){
  modalCategory = '편집';
  modalDescription = ['Welcome to Korea!', '외국인을 대상으로 한 한국의 관광 명소를 소개하는 잡지 입니다. 전주 한옥마을, 롯데월드 타워, N 서울 타워로 총 4개의 챕터로 구성되어 있습니다. 각 챕터에는 세부적인 관광지와 위치 등을 담았습니다.'];
  modalTool = ['id'];
  modalContribution = ['디자인', '100%'];
});

document.querySelector('#god-road').addEventListener('click', function(){
  modalCategory = '영상 편집';
  modalVideo = true;
  modalDescription = ['GOD 길 뮤직비디오', '영화 "부당거래"의 장면들을 컷 편집하여 GOD 길의 뮤직비디오를 공수사관의 애환이 담긴 뮤직비디오로 만들었습니다.'];
  modalTool = ['pr'];
  modalContribution = ['디자인', '100%'];
});

document.querySelector('#bacchus').addEventListener('click', function(){
  modalCategory = '영상 편집';
  modalVideo = true;
  modalDescription = ['', '박카스의 오랜 역사를 보여주며 친밀한 느낌을 주는 목적의 광고 영상입니다.'];
  modalTool = ['pr'];
  modalContribution = [3, '디자인', '전반적인 편집', '기획', '전반적인 컨셉', '카피라이팅'];
});

document.querySelector('#construction-w-ai').addEventListener('click', function(){
  modalCategory = '영상 편집';
  modalVideo = true;
  modalDescription = ['', 'ai를 활용하여 생성한 건설 광고 영상의 시놉시스, 시놉시스에 맞는 영상, 음원을 생성한 후 편집하여 완성했습니다.'];
  modalTool = ['pr'];
  modalContribution = ['디자인', '100%'];
});



document.querySelectorAll('.project').forEach(function(project){
  project.addEventListener('click', function(){
    nowScrollY = window.scrollY;
    if (WRAP.classList.contains('modal-open')) {
      return;
    } else {
      // 모달 오픈 트랜지션 설정
      if (window.innerWidth >= 1024) {MODAL.style.transition = 'left 0s 0s, opacity 0.5s ease';}
      else if (window.innerWidth < 1024) {MODAL.style.transition = 'left 0.5s ease';}
      // 모달 오픈 스크롤 설정
      WRAP.classList.add('modal-open');
      WRAP.style.top = nowScrollY * -1 + 'px';

      // 프로젝트 제목 설정
      TITLE.innerHTML = this.querySelector('.project-name').innerHTML;

      // 디자인 카테고리 설정
      CATEGORY.innerHTML = modalCategory+' 디자인';

      // 이미지 or 비디오 설정
      IMG.src = DOTHOME+'/img/proj_'+this.id.replace('#', '')+modalImgFormat;
      if (modalVideo == true) {
        IMG.style.display = 'none';
        VIDEO.style.display = 'block';
        VIDEO.src = DOTHOME+'/vid/proj_'+this.id.replace('#', '')+'.mp4'; // 특이한게 비디오는 replace 안해도 먹힘
      } else {
        IMG.style.display = 'block';
        VIDEO.style.display = 'none';
        VIDEO.src = '';
      }

      // 프로젝트 설명 설정
      if (modalDescription[0] == '') {modalDescription[0] = this.querySelector('.project-name').innerHTML}
      DESCRIPTION.querySelector('h4').innerHTML = modalDescription[0];
      DESCRIPTION.querySelector('p').innerHTML = modalDescription[1];

      // 프로젝트 링크 설정
      LINK.forEach(each => {each.style.display = 'none';});
      modalLink.forEach((each, index) => {
        if (each != '|' && each != '') { // 변수값, 배열 순번
          var [name, link] = each.split('|');
          LINK[index].href = link;
          LINK[index].innerHTML = name;
          LINK[index].style.display = 'block';
        }
      });

      // 프로젝트 사용 툴 설정
      TOOL.forEach(each => {each.style.display = 'none';})
      modalTool.forEach(each => {
        document.querySelector('.'+each).style.display =
        'block';
      });

      // 프로젝트 기여도 설정
      let write = null; // 명시적 초기화
      CONTRIBUTION_DESIGN.style.display = 'none';
      CONTRIBUTION_CODING.style.display = 'none';
      CONTRIBUTION_PLAN.style.display = 'none';
      CONTRIBUTION_DESIGN.querySelector('ul').innerHTML = '';
      CONTRIBUTION_CODING.querySelector('ul').innerHTML = '';
      CONTRIBUTION_PLAN.querySelector('ul').innerHTML = '';
      for (let i = 0; i < modalContribution.length; i++) {
        var value = modalContribution[i];
        if (i == 0 && value > 1) {
          // value가 숫자 아니면 else if, 빡세게 하려면 typeof
          PARTICIPATION.innerHTML = '1 / '+value;
          CONTRIBUTION.classList.add('teamwork');
        } else if (i ==0) {
          PARTICIPATION.innerHTML = '1 / 1';
          CONTRIBUTION.classList.remove('teamwork');
        }
        if (value == '디자인') {
          write = CONTRIBUTION_DESIGN.querySelector('ul');
          CONTRIBUTION_DESIGN.style.display = 'block';
          continue;
        }
        if (value == '코딩') {
          write = CONTRIBUTION_CODING.querySelector('ul');
          CONTRIBUTION_CODING.style.display = 'block';
          continue;
        }
        if (value == '기획') {
          write = CONTRIBUTION_PLAN.querySelector('ul');
          CONTRIBUTION_PLAN.style.display = 'block';
          continue;
        }
        if (write) {
          // write 값이 유효할 때
          var create = document.createElement('li');
          create.textContent = value;
          write.appendChild(create);
        }
      }
      
      // 초기화
      modalCategory = '';
      modalImgFormat = '.jpg';
      modalVideo = false;
      modalLink = ['|'];
      modalDescription = ['', ''];
      modalTool = [''];
      modalContribution = [''];
    }
  });
});

// 모달 닫기
document.querySelector('.modal-close').addEventListener('click', function(){
  WRAP.classList.remove('modal-open');
  IMG.src = '';
  VIDEO.src = '';
  window.scrollTo(0, nowScrollY);
});



/*** 레거시 ***//*
[padding 크기잡고 bgi > 자녀요소 img 태그]
// let modalImgRatio = [1, 1];
// const THUMBNAIL = document.querySelector('#modal .content-img');

// THUMBNAIL.style.backgroundImage = 'url('+DOTHOME+'/img/'+this.id.replace('#', '')+modalImgFormat+')';
      // if (window.innerWidth >= 1024) {
      //   THUMBNAIL.style.paddingTop = 'calc(60% / '+modalImgRatio[0]+' * '+modalImgRatio[1]+')';
      // } else if (window.innerWidth < 1024) {
      //   THUMBNAIL.style.paddingTop = 'calc(100% / '+modalImgRatio[0]+' * '+modalImgRatio[1]+')';
      // } // 초기값 설정, resize시 재설정, transition은 꺼지는거 동일해서 resize 불필요

// window.addEventListener('resize', function(){
//   if (window.innerWidth >= 1024) {
//     THUMBNAIL.style.paddingTop = 'calc(60% / '+modalImgRatio[0]+' * '+modalImgRatio[1]+')';
//   } else if (window.innerWidth < 1024) {
//     THUMBNAIL.style.paddingTop = 'calc(100% / '+modalImgRatio[0]+' * '+modalImgRatio[1]+')';
//   }
// });

[모달 닫으면 src 초기화로 변경]
// VIDEO.muted = true;


[빈 링크는 작성 안해도 되도록 변경]
(모든 링크 dn, 작성된 링크 순번만 db)
// modalLink.forEach((value, index) => {
//   if (value == '|' || value == '') { // 변수값, 배열 순번
//     LINK[index].style.display = 'none'; // 배열 순번째 LINK(선택자)
//   } else {
//     var [name, link] = value.split('|');
//     LINK[index].style.display = 'block';
//     LINK[index].href = link;
//     LINK[index].innerHTML = name;
//   }
// });

[ps, ai 등 약자를 array에 넣으면 show 하도록 변경]
// let modalTool = [0, 0, 0, 0, 0];
// modalTool.forEach((value, index) => {
//   TOOL[index].style.display = value == 0 ? 'none' : 'block';
// }); // 삼항 연산자

// let modalCategory = ['', '웹', '광고', '편집', '패키지', '그 외'];
// if (modalCategory != '그 외') {modalCategory[0] = modalCategory[0] + ' 디자인'}
// CATEGORY.innerHTML = modalCategory[0];


// https://blog.naver.com/tombyun/222437552881




// 프로젝트 기여도 설정
      // if (modalContribution == 'default') {modalContribution = '디자인 - 100%'}
      // modalParticipation = '1 / '+modalParticipation+'<br>'
      // CONTRIBUTION.innerHTML = modalParticipation+modalContribution;

      // modalContributionDesign.forEach((value, index) => {
      //   if (value != '') {
      //     CONTRIBUTION_DESIGN.style.display = 'block';
      //     var li = document.createElement('li');
      //     li.textContent = value;
      //     CONTRIBUTION_DESIGN.appendChild(li);
      //   }
      // });

[없으면 비워놓으면 되도록 변경 > 초기화 불필요]
// 초기화 (선택 사항) 좋은 점: 넣을 아이템 변수 순번만 넣으면 됨
// modalTitle = 'default';
// modalCategory = ['', '웹', '광고', '편집', '패키지', '그 외'];
// modalImgFormat = '.jpg';
// modalVideo = false;
// modalLink = ['|', '|', '|'];
// modalParticipation = 1;
// modalDescription = ['', ''];
// // modalTool = [''];
// modalContribution = 'default';


// let modalTitle = 'default';
*/
/* 
  $('대상').method(); 대상의 값은 css에서 사용되던 선택자 작성 방식과 동일

  == document.querySelector('');
  jQuery('*'); 제이쿼리 방식으로 전체 선택자를 탐색해라
  $('#id'); 아이디 선택자 탐색
  $('.class'); 클래스 선택자 탐색
  $('#id > .class, type type'); 다중 선택자 탐색
  $('type:nth-child()');
  $('type[attribute=value]');
  $(':hover');

  .method();
  $().parent(); 직계 부모 노드 탐색
  $().parents(); 모든 부모 노드 탐색
  $().children(); 모든 직계 자식 노드 탐색
  $().siblings(); 형제 노드 탐색
  $().prev(); 바로 이전 형제 노드 탐색
  $().next(); 바로 다음 형제 노드 탐색
  $().prevAll(); 이전 형제 노드 '모두' 탐색
  $().nextAll(); 다음 형제 노드'모두' 탐색
  $().first(); 일치하는 요소에서 첫번째 노드 탐색
  $().last(); 일치하는 요소에서 마지막 노드 탐색
  $().find(); 일치하는 하위 노드 탐색. 반드시 매개변수 작성해야 함
  $().filter(); 일치하는 노드 탐색(주로 걸러냄)
*/

// 문서 준비 이벤트 document.addEventListener('DOMContentLoaded', function() {});
// $(document).ready(function(){});

$(document).ready(function () {
  // ==.style.backgroundColor
  // $().css({'속성': '값', '속성':'값'});
  $('body').css({ 'background-color': '#efefef' });
  $('body *').css({ border: '3px sold #999', padding: '10px', margin: '10' });

  $('a').parent(); // a의 직계 부모 (li) 탐색
  // method chaining 여러 개의 메서드 연결
  $('a').parent().css({ 'border-color': 'red' });
  // $('a').css({ 'border-color': 'red' }).parent(); a에 css를 적용한 뒤 부모 탐색

  // $('a').parents().css({'border-style':'dotted'}); 매개변수를 작성하지 않으면 a의 상위 노드 모두 탐색. 즉 body, html도 탐색
  $('a').parents('#wrapper').css({ 'border-style': 'dotted' });

  $('.container').children(); // 자식 노드 탐색. 매개 변수를 지정하지 않으면 같은 라인의 모든 직계 자식 노드 탐색
  // $('.container').children().css({'border-color':'#000'})
  $('.container').children('h1').css({ 'border-color': '#000' });

  $('li.part').siblings(); // li.part의 형제 관계 탐색
  $('li.part').siblings().css({
    backgroundColor: 'lightblue',
  });
});

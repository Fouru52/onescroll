// 스크롤이 되면 헤더 모양 바뀜
const header = document.querySelector('header');

window.addEventListener('scroll', function(){
  if(window.scrollY > 300){
    header.classList.add('on');
  }
  if(window.scrollY <= 300){
  header.classList.remove('on');
  }
})

// 헤더 버튼
  const menuItems = document.querySelectorAll('nav ul > li > a')

  menuItems.forEach(function(item,idx){
    item.onclick = function(e){ //a의 가상태그로 인해 맨위로 올라가는것을 막아줌
      e.preventDefault();
      document.querySelector(`#s${idx+1}`).scrollIntoView({
        behavior:'smooth'
      });
    }
  })
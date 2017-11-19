var toggleNav = document.querySelector('#toggleNav');

var navList = document.querySelector('#navList');

if(toggleNav){
  toggleNav.addEventListener('click',function(){
    if(navList.classList.contains('toggleOff')){
      navList.classList.remove('toggleOff');
    } else {
      navList.classList.add('toggleOff');
    }
  });
}

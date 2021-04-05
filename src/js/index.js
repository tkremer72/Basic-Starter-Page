
/* Toggle hamburger menu */
/* const toggleButton = document.getElementById('toggle-menu');
const naviList = document.getElementById('navi-list');
toggleButton.addEventListener('click', () => {
           naviList.classList.toggle('active');
}); */


function toggleMenu() {
     const toggleButton = document.getElementById('toggle-menu');
     const naviList = document.getElementById('navi-list');
     toggleButton.addEventListener('click', () => {
          naviList.classList.toggle('active');
     });
}
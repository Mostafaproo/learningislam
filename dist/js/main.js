// Toggle side bar event
let iconToggle = document.getElementById("icon-toggle");
let sidebar = document.getElementById("side-bar");
let viewwrapper = document.getElementById("view-wrapper");

iconToggle.addEventListener("click", function () {
  sidebar.classList.toggle("is-active");
  viewwrapper.classList.toggle("is-pushed-full");
});

// Toggle Sub Menu
let header = document.querySelectorAll('.item-nav');
let submenu = document.querySelectorAll('.sub-menu');
let iconNav = document.querySelectorAll('.icon-nav');
let preveIndex = null;

// for(let i = 0; i < header.length; i++){

//     header[i].addEventListener('click',()=>{

//       for(let j = 0; j < submenu.length; j++){
        
//         submenu[j].classList.remove('active')
//       }

//       if(preveIndex === i){
//         submenu[i].classList.remove('active')
//         preveIndex = null;
//       }else{
        
//         submenu[i].classList.add('active')
//         preveIndex = i;
//       }
    
//     })

// }

$('.item-nav  #toggle-link').click(function(e){
  e.preventDefault();
  $(this).next('.sub-menu').slideToggle(500);
  $('.sub-menu').not($(this).next()).slideUp(500)
  $(this).parent().find('#icon-nav').toggleClass('rotate')
})


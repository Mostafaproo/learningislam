$(document).ready(function () {
  $(".prog").each(function () {
    var $bar = $(this).find(".bar");
    var $val = $(this).find("span");
    var perc = parseInt($val.text(), 10);

    $({ p: 0 }).animate(
      { p: perc },
      {
        duration: 3000,
        easing: "swing",
        step: function (p) {
          $bar.css({
            transform: "rotate(" + (45 + p * 1.8) + "deg)", // 100%=180° so: ° = % * 1.8
            // 45 is to add the needed rotation to have the green borders at the bottom
          });
          $val.text(p | 0);
        },
      }
    );
  });
});




// Toggle side bar event
let iconToggle = document.getElementById("icon-toggle");
let sidebar = document.getElementById("side-bar");
let viewwrapper = document.getElementById("view-wrapper");

if(iconToggle){
  iconToggle.addEventListener("click", function () {
    sidebar.classList.toggle("is-active");
    viewwrapper.classList.toggle("is-pushed-full");
  });

}

// Acctive navigation on mobile
let iconMobile = document.getElementById('icon-mobile');
let mainNav = document.getElementById('main-nav')

if(iconMobile){
  iconMobile.addEventListener("click",function(){
    sidebar.classList.toggle('sidebar-active-mobile');
    mainNav.classList.toggle('is-actvie-nav')
  })
}



// Toggle Sub Menu
// let header = document.querySelectorAll(".item-nav");
// let submenu = document.querySelectorAll(".sub-menu");
// let iconNav = document.querySelectorAll(".icon-nav");
// let preveIndex = null;

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

$(".item-nav  #toggle-link").click(function (e) {
  e.preventDefault();
  $(this).next(".sub-menu").slideToggle(500);
  $(".sub-menu").not($(this).next()).slideUp(500);
  $(this).parent().find("#icon-nav").toggleClass("rotate");
});

// let searchInput = document.getElementById("search-input");
// let message = document.getElementById("show-result");

// searchInput.addEventListener("focus", function () {
//   message.style.display = "block";
// });

// searchInput.addEventListener("focusout", function () {
//   message.style.display = "none";
// });



let SelectField = document.getElementById('selected-item');
let itemText = document.getElementById('text')
let listItems = document.getElementsByClassName('list-item');
let list = document.getElementById('list');
let iconList = document.getElementById('icon-list');
console.log(list);

if(SelectField){

  SelectField.addEventListener('click',function(){
    list.classList.toggle('show')
    iconList.classList.toggle('rotate')
  })
}



for(listItem of listItems){
  listItem.onclick = function(){
    itemText.innerHTML = this.innerHTML;
    list.classList.toggle('show')
    iconList.classList.toggle('rotate')
  }
}
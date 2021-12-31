// $('.autoplay').slick({
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     autoplay: true,
//     autoplaySpeed: 2000,
// });
var sliderList = document.querySelector(".slider").clientWidth
var sliderLi = document.querySelectorAll(".slider ul li").length
sliderWidth = sliderList * sliderLi;
var dot1 = document.querySelector(".palgation .dot-1")
var dot2 = document.querySelector("palgation .dot-2")
var dot3 = document.querySelector(".palgation .dot-3")
var dot3 = document.querySelector(".palgation .dot-4")
var SlideUl = document.querySelector(".slider ul")
SlideUl.style.width = sliderWidth + "px"
var c = 0;

dot1.onclick = function () {
    Dot1();
    console.log(dot1);
}

function Dot1() {
    c++;
    if (c == sliderLi - 1) {
        c = 0;
    }
    SlideUl.style.left = -(c * sliderWidth) + "px"
}

// function Dot2(){
//     c++;
//     if(c==sliderLi){
//         c= 1;
//     }
//     SlideUl.style.left = -(c*sliderWidth)+ "px"
// }function Dot3(){
//     // c++;
//     if(c==sliderLi){
//         c= 2;
//     }
//     SlideUl.style.left = -(c*sliderWidth)+ "px"
// }function Dot4(){
//     // c++;
//     if(c==sliderLi){
//         c= 3;
//     }
//     SlideUl.style.left = -(c*sliderWidth)+ "px"
// }






//   $("dot1").click(function(){

//   })

$("#header .bottom-header .navBar .navIcon i").click(function () {
    $("#header .bottom-header .navBar .nav-menu").toggleClass("active");

})
// $("body").click(function(){
//     $("#header .bottom-header .navBar .nav-menu").removeClass("active");

// })
$("#header .bottom-header .navBar .navIcon .nav-icon").click(function () {
    $("#header .bottom-header .navBar .navIcon .nav-icon").animate({
        display: 'none'
    })

})

// $("#header .bottom-header .navBar .nav-content .nav-about ").click(function(){

//     $("#header .bottom-header .navBar .nav-content .nav-about ul").slideToggle("active")


// })

$("#header .bottom-header .navBar .nav-content .nav-about .d-flex ").click(function () {

    $(this).css({
        background: "#01B3A7"
    })

    $(this).next().stop().toggle(500);
})
$("#header .bottom-header .ellipsis i").click(function(){
$(this).next().animate({
    display : "block",
    transform :"rotate(90deg)" 
})
    $("#header .bottom-header .ellipsis .ellips-menu").toggleClass("active")

  

})
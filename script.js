/*let showMoreButton = document.querySelector(".show-more");
let hiddenText = document.querySelector(".hidden");
let devlogBox = document.querySelector(".devlog");
collapseButton = document.querySelector(".collapse-all");
showMoreButton.style.display = "block";
showMoreButton.onclick=function(){
    hiddenText.style.display = "block";
    showMoreButton.style.display = "none";
    devlogBox.style.height = "1200px";
    collapseButton.style.display = "block";
};
collapseButton.onclick=function(){
    collapseButton.style.display = "none";
    hiddenText.style.display = "none";
    showMoreButton.style.display = "inline-block";
    devlogBox.style.height = "350px";
};
*/

let scrollToTop = document.querySelector(".scroll-to-top");

//scrollToTop.onclick=function(){
//    document.documentElement.scrollTop = 0;
//}
scrollToTop.addEventListener("click", testFunction);
function testFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
};
// Buttons on Dev Log Page
let homeTab = document.querySelector(".homeTab");
let aboutTab = document.querySelector(".aboutTab");
let portfolioTab = document.querySelector(".portfolioTab");
let skillsTab = document.querySelector(".skillsTab");
let devTab = document.querySelector(".devTab");

let breaks = document.querySelector(".breaks");

// Content for buttons on Dev Log Page
let homeLog = document.querySelector(".homeLog");
let aboutLog = document.querySelector(".aboutLog");
let portfolioLog = document.querySelector(".portfolioLog");
let skillsLog = document.querySelector(".skillsLog");
let devLogLog = document.querySelector(".devLogLog");

// onclick functions to show content
homeTab.onclick = function(){
    aboutLog.style.display = "none";
    portfolioLog.style.display = "none";
    skillsLog.style.display = "none";
    devLogLog.style.display = "none";
    homeLog.style.display = "block";
    breaks.style.display = "none";
}
aboutTab.onclick = function(){
    homeLog.style.display = "none";
    portfolioLog.style.display = "none";
    skillsLog.style.display = "none";
    devLogLog.style.display = "none";
    aboutLog.style.display = "block";
    breaks.style.display = "none";

}
portfolioTab.onclick = function(){
    aboutLog.style.display = "none";
    homeLog.style.display = "none";
    skillsLog.style.display = "none";
    devLogLog.style.display = "none";
    portfolioLog.style.display = "block";
    breaks.style.display = "none";


}
skillsTab.onclick = function(){
    aboutLog.style.display = "none";
    homeLog.style.display = "none";
    skillsLog.style.display = "block";
    devLogLog.style.display = "none";
    portfolioLog.style.display = "none";    
    breaks.style.display = "none";

}
devTab.onclick = function(){
    aboutLog.style.display = "none";
    homeLog.style.display = "none";
    skillsLog.style.display = "none";
    devLogLog.style.display = "block";
    portfolioLog.style.display = "none";    
    breaks.style.display = "none";

}
window.onscroll = function() {myFunction()};

function myFunction() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("scrollBar").style.width = scrolled + "%";
};
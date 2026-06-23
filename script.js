document.querySelector(".menu-btn")
.addEventListener("click",()=>{

const nav=document.querySelector(".nav-links");

if(nav.style.display==="flex"){
    nav.style.display="none";
}
else{
    nav.style.display="flex";
}

});
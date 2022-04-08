function changeBgColor(){
    var navbar=document.getElementById("navbar")
    var scrollValue=window.scrollY;
    console.log(scrollValue);
    if(scrollValue<400){
        navbar.classList.remove("navbar-scrolled");
    }else{
        navbar.classList.add("navbar-scrolled");
    }
}
window.addEventListener('scroll', changeBgColor)
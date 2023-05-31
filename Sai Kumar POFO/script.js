document.querySelector(".close").style.display = "none";

document.querySelector(".hamburger").addEventListener("click", ()=>{
    document.querySelector(".sidenav").classList.toggle("sidenavGo");

    if(document.querySelector(".sidenav").classList.contains("sidenavGo")){
        document.querySelector(".ham").style.display ="inline";
        document.querySelector(".close").style.display ="none";
    }else{
        setTimeout(()=>{
            document.querySelector(".close").style.display ="inline";
        },200);
        document.querySelector(".ham").style.display ="none";
    }
})

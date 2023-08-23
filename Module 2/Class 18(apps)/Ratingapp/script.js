let starcontainer = document.querySelector(".star-container");
let allstar = document.querySelectorAll(".star");
let ratingno=document.querySelector("h3")

let prevClicked=0;


starcontainer.addEventListener("click",function(e){
    // console.log(e.target)
    // console.log(e.target.dataset.pos)
    let currentselect=e.target.dataset.pos;

    for(let i=0;i<prevClicked;i++){
        allstar[i].classList.remove("gold");
    }

    for(let i=0;i<currentselect;i++){
        allstar[i].classList.add("gold");
    }
    ratingno.innerText='Rating: '+currentselect;
    prevClicked =currentselect;
})

starcontainer.addEventListener("mouseover",function(e){
    let currentselected=e.target.dataset.pos;
    console.log(currentselected);

    for(let i=0;i<allstar.length;i++){
        if(allstar[i].classList.contains("gold"));
            allstar[i].classList.remove("gold")
    }
    for(let i=0;i<currentselected;i++){
        allstar[i].classList.add("gold");
    }
})

starcontainer.addEventListener("mouseleave",function(){
    for(let i=0;i<allstar.length;i++){
        allstar[i].classList.remove("gold");
    }
    
    for(let i=0;i<prevClicked;i++){
        allstar[i].classList.add("gold");
    }
})




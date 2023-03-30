const boutonGauche=document.querySelector(".boutonGauche");
const boutonDroit=document.querySelector(".boutonDroit");
const imgs=document.querySelectorAll(".images img");

let positionActuelle=0;

function changerImage(direction){
    imgs[positionActuelle].classList.remove("visible")
    if(direction ==="gauche"){
            positionActuelle--;
        if(positionActuelle<0){
            positionActuelle=imgs.length-1;
        }
    }else{
            positionActuelle++;
        if(positionActuelle>=imgs.length){
            positionActuelle=0;
        }
    }

    imgs[positionActuelle].classList.add("visible")

    
}
    

    


boutonGauche.addEventListener("click", () => {
    changerImage("gauche")
})

boutonDroit.addEventListener("click",() =>{
    changerImage("droit")
})
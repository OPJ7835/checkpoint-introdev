const totalElement= document.querySelector(".total")
const ajoutBtn= document.querySelectorAll(".ajouter")
const retirBtn= document.querySelectorAll(".retirer")
const supprimBtn= document.querySelectorAll(".supprime")

//pour le boton aimer
var aimer = document.querySelectorAll(".aime");
aimer.forEach(aime => {
aime.addEventListener("click",()=>{
if (aime.style.color=="black") {
        aime.style.color="red" 
    } else {
        aime.style.color="black"
        
    }
});

})
//function de calcule
function ajouTotal() {
    let Total=0
    document.querySelectorAll(".card-body").forEach(card => {
        const quantity= parseInt(card.querySelector(".quantity").textContent)
        const prix= parseInt(card.querySelector(".unit-price").textContent)
        Total +=( quantity*prix)/2
    });

    totalElement.textContent=Total
}
//ajout d'un element
ajoutBtn.forEach(button=> {
    button.addEventListener("click",()=>{
        const quantiteElement=button.parentElement.querySelector(".quantity")
        let quantity= parseInt(quantiteElement.textContent)
        quantity++
        quantiteElement.textContent=quantity
        ajouTotal()
    })
    
});

//resduction d'element
retirBtn.forEach(button => {
    button.addEventListener("click",()=>{
        const quantiteElement=button.parentElement.querySelector(".quantity")
        let quantity= parseInt(quantiteElement.textContent)
        if (quantity>0) {
            quantity--
            quantiteElement.textContent=quantity
            ajouTotal()  
        }
        
    })
    
});

// supprimer produit
supprimBtn.forEach(button => {
    button.addEventListener("click",()=>{
        const cardElement= button.closest(".card-body")
        cardElement.remove()
        ajouTotal()
    })
    
});
// initialisation du total
ajouTotal()
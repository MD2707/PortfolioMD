function scrollProjet(){
    const element=document.querySelectorAll(".texte");
    Array.from(element).forEach((t,index) =>
    {
       if(this.scrollY >= t.offsetTop-400 && this.scrollY <= t.offsetTop+400 && t.classList[1]==undefined){
           t.classList.add("affiche");
           console.log(t.classList[2]);
           t.animate([
                {
                    opacity : "0",
                },
                {
                    opacity : "1",
                }],1000);
            t.style.opacity=1; 
       }

    });
}
function onClickMenu(){
    var doc=document.getElementById("menu");
    var etat= doc.style.display;
    if(etat== "none")
    doc.style.display="flex";
    else
    doc.style.display="none";
  }
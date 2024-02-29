class VuePilote{
    constructor(){
      this.html = document.getElementById("html-vue-pilote").innerHTML;
      this.pilote = null;
    }
  
    initialiserPilote(pilote){
      this.pilote = pilote;
    }
  
    afficher(){
      document.getElementsByTagName("body")[0].innerHTML = this.html;
      document.getElementById("pilote-nom").innerHTML = this.pilote.nom;
      document.getElementById("pilote-prenom").innerHTML = this.pilote.prenom;
      document.getElementById("pilote-age").innerHTML = this.pilote.age;
      document.getElementById("pilote-marque").innerHTML = this.pilote.marque;
      document.getElementById("pilote-coequipier").innerHTML = this.pilote.coequipier;
      document.getElementById("pilote-nat").innerHTML = this.pilote.nat;
      document.getElementById("pilote-nbGp").innerHTML = this.pilote.nbGp;
    }
  
  }
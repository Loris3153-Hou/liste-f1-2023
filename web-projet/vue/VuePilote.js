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
      document.getElementById("pilote-marque").innerHTML = this.pilote.marque;
      document.getElementById("pilote-description").innerHTML = this.pilote.description;
    }
  
  }
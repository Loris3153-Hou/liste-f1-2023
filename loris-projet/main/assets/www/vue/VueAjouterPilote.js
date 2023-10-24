class VueAjouterPilote{
    constructor(){
      this.html = document.getElementById("html-vue-ajouter-pilote").innerHTML;
      this.actionAjouterPilote = null;
    }
  
    initialiserActionAjouterPilote(actionAjouterPilote){
      this.actionAjouterPilote = actionAjouterPilote;
    }
  
    afficher(){
      document.getElementsByTagName("body")[0].innerHTML = this.html;
      document.getElementById("formulaire-ajouter").addEventListener("submit",evenement =>this.enregistrer(evenement));
    }
  
    enregistrer(evenement){
      evenement.preventDefault();
  
      let nom = document.getElementById("pilote-nom").value;
      let marque = document.getElementById("pilote-marque").value;
      let description = document.getElementById("pilote-description").value;
  
      this.actionAjouterPilote(new Pilote(nom, marque, description, null));
  
    }
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
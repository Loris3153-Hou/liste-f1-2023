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
      let prenom = document.getElementById("pilote-prenom").value;
      let age = document.getElementById("pilote-age").value;
      let marque = document.getElementById("pilote-marque").value;
      let coequipier = document.getElementById("pilote-coequipier").value;
      let nat = document.getElementById("pilote-nat").value;
      let nbGp = document.getElementById("pilote-nbGp").value;
  
      this.actionAjouterPilote(new Pilote(nom, prenom, age, marque, coequipier, nat, nbGp, null));
  
    }
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
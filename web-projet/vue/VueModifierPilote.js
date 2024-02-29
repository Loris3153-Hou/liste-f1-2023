class VueModifierPilote{
    constructor(){
      this.html = document.getElementById("html-vue-modifier-pilote").innerHTML;
      this.actionModifierPilote = null;
    }
  
    initialiserPilote(pilote){
      this.pilote = pilote;
    }

    initialiserActionModifierPilote(actionModifierPilote){
      this.actionModifierPilote = actionModifierPilote;
    }
  
    afficher(){
      document.getElementsByTagName("body")[0].innerHTML = this.html;   
      document.getElementById("pilote-nom").value = this.pilote.nom;
      document.getElementById("pilote-prenom").value = this.pilote.prenom;
      document.getElementById("pilote-age").value = this.pilote.age;
      document.getElementById("pilote-marque").value = this.pilote.marque;
      document.getElementById("pilote-coequipier").value = this.pilote.coequipier;
      document.getElementById("pilote-nat").value = this.pilote.nat;
      document.getElementById("pilote-nbGp").value = this.pilote.nbGp;
      document.getElementById("formulaire-modifier").addEventListener("submit",evenement =>this.enregistrer(evenement));
      console.log(this.pilote.id);
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
      let id = this.pilote.id;
  
      this.actionModifierPilote(new Pilote(nom, prenom, age, marque, coequipier, nat, nbGp, id));
  
    }
  
  }
  
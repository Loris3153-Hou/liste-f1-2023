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
      document.getElementById("pilote-marque").value = this.pilote.marque;
      document.getElementById("pilote-description").innerHTML = this.pilote.description;
      document.getElementById("formulaire-modifier").addEventListener("submit",evenement =>this.enregistrer(evenement));
      console.log(this.pilote.id);
    }
  
    enregistrer(evenement){
      evenement.preventDefault();
  
      let nom = document.getElementById("pilote-nom").value;
      let marque = document.getElementById("pilote-marque").value;
      let description = document.getElementById("pilote-description").value;
      let id = this.pilote.id;
  
      this.actionModifierPilote(new Pilote(nom, marque, description, id));
  
    }
  
  }
  
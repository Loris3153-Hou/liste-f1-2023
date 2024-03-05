class VueSupprimerPilote{
    constructor(){
      this.html = document.getElementById("html-vue-modifier-pilote").innerHTML;
      this.actionSupprimerPilote = null;
      this.piloteDAO = new PiloteDAO();
    }
  
    initialiserPilote(pilote){
      this.pilote = pilote;
    }

    initialiserActionSupprimerPilote(actionSupprimerPilote){
      this.actionSupprimerPilote = actionSupprimerPilote;
    }

  
    supprimer(pilote){

      this.actionSupprimerPilote(pilote);
  
    }
  
  }
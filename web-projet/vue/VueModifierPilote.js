class VueModifierPilote{
    constructor(){
      this.html = document.getElementById("html-vue-modifier-pilote").innerHTML;
      this.actionModifierPilote = null;
      this.piloteDAO = new PiloteDAO();
    }
  
    initialiserPilote(pilote){
      this.pilote = pilote;
    }

    initialiserActionModifierPilote(actionModifierPilote){
      this.actionModifierPilote = actionModifierPilote;
    }
  
    /*afficher(){
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
    }*/

    afficher(){
      this.piloteDAO.getPilote(this.pilote).then(() => {
        let listeDesPilotes = this.piloteDAO.getListeObjetsPilotes();
        this.infosPilote = [];
      
        this.infosPilote.push(listeDesPilotes[0].getNomPilote());
        this.infosPilote.push(listeDesPilotes[0].getPrenomPilote());
        this.infosPilote.push(listeDesPilotes[0].getAgePilote());
        this.infosPilote.push(listeDesPilotes[0].getMarquePilote());
        this.infosPilote.push(listeDesPilotes[0].getCoequipierPilote());
        this.infosPilote.push(listeDesPilotes[0].getNatPilote());
        this.infosPilote.push(listeDesPilotes[0].getNbGpPilote());
        
        document.getElementsByTagName("body")[0].innerHTML = this.html;   
        document.getElementById("pilote-nom").value = this.infosPilote[0];
        document.getElementById("pilote-prenom").value = this.infosPilote[1];
        document.getElementById("pilote-age").value = this.infosPilote[2];
        document.getElementById("pilote-marque").value = this.infosPilote[3];
        document.getElementById("pilote-coequipier").value = this.infosPilote[4];
        document.getElementById("pilote-nat").value = this.infosPilote[5];
        document.getElementById("pilote-nbGp").value = this.infosPilote[6];
        document.getElementById("formulaire-modifier").addEventListener("submit",evenement =>this.enregistrer(evenement));
    });
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
      let id = this.pilote;

      this.actionModifierPilote(new Pilote(nom, prenom, age, marque, coequipier, nat, nbGp, id));
  
    }
  
  }
  
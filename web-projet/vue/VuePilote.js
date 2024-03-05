class VuePilote{
    constructor(){
      this.html = document.getElementById("html-vue-pilote").innerHTML;
      this.pilote = null;
      this.piloteDAO = new PiloteDAO();
    }
  
    initialiserPilote(pilote){
      this.pilote = pilote;
    }
  
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
    });
    }
  
  }
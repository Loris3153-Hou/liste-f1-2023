 
class PiloteDAO{
    constructor(){
  /*
      this.listePilote = [{nom:"Auto téléguidée", marque:"Tesla", description:"Petite voiture pour faire rêver", id:0},
                          {nom:"Montre intelligente", marque:"Neo Pebble", description:"Une vraie montre intelligente open source", id:1},
                          {nom:"Lunette de réalité augmentée", marque:"Seer Glasses", description:"Des lunettes qui me montrent l'invisible", id:2}]
        */
        this.token = "valeur";
        this.listeObjetsPilotes = null;
        this.listePilote = [];
    }

    listePilotes() {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            var apiUrl = 'https://arbre-du-savoir.shop/serveur-app-f1/controlleurs/PiloteControlleur.php?methode=getPilotes&token=' + this.token;

            xhr.open('GET', apiUrl, true);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        var response = xhr.responseText;
                        this.listeObjetsPilotes = this.convertirJsonEnString(response);
                        console.log(this.listeObjetsPilotes);
                        for (let pilote of this.listeObjetsPilotes) {
                            console.log('ID du joueur :', pilote.getIdPilote());
                        }
                        resolve();
                    } else {
                        reject('La requête a échoué.');
                    }
                }
            };

            xhr.send();
        });
    }

    lister(){

        if(localStorage['pilote']){
            this.listePilote = JSON.parse(localStorage['pilote']); 
        }

        for(let position in this.listePilote){
          let pilote = new Pilote(this.listePilote[position].nom,
                                  this.listePilote[position].prenom,
                                  this.listePilote[position].age,
                                  this.listePilote[position].marque,
                                  this.listePilote[position].coequipier,
                                  this.listePilote[position].nat,
                                  this.listePilote[position].nbGp,
                                  this.listePilote[position].id);
    
          this.listePilote[pilote.id] = pilote;
        }
    
        return this.listePilote;
    }

    ajouter(pilote)
    {
    // il faut ici attribuer un id au pilote
    if(this.listePilote.length > 0)
        pilote.id = this.listePilote[this.listePilote.length-1].id + 1;
    else
        pilote.id = 0;

    this.listePilote[pilote.id] = pilote;
    localStorage['pilote'] = JSON.stringify(this.listePilote);
    console.log("JSON.stringify(this.listePilote) : " + JSON.stringify(this.listePilote));
    }

    modifier(pilote){

    this.listePilote[pilote.id] = pilote;
    localStorage['pilote'] = JSON.stringify(this.listePilote);
    console.log("JSON.stringify(this.listePilote) : " + JSON.stringify(this.listePilote));
    }

    convertirJsonEnString(jsonInput) {
        var listeObjetsPilotes = JSON.parse(jsonInput).map(jsonPilote => {
            const pilote = new Pilote();
            pilote.setIdPilote(jsonPilote.idPilote);
            pilote.setNomPilote(jsonPilote.nomPilote);
            pilote.setPrenomPilote(jsonPilote.prenomPilote);
            pilote.setAgePilote(jsonPilote.agePilote);
            pilote.setMarquePilote(jsonPilote.marquePilote);
            pilote.setCoequipierPilote(jsonPilote.coequipierPilote);
            pilote.setNatPilote(jsonPilote.natPilote);
            pilote.setNbGpPilote(jsonPilote.nbGpPilote);
            return pilote;
        });
        return listeObjetsPilotes;
    }

    getListeObjetsPilotes() {
        return this.listeObjetsPilotes;
    }
}
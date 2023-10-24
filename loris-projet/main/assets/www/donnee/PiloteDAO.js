class PiloteDAO{
    constructor(){
  /*
      this.listePilote = [{nom:"Auto téléguidée", marque:"Tesla", description:"Petite voiture pour faire rêver", id:0},
                          {nom:"Montre intelligente", marque:"Neo Pebble", description:"Une vraie montre intelligente open source", id:1},
                          {nom:"Lunette de réalité augmentée", marque:"Seer Glasses", description:"Des lunettes qui me montrent l'invisible", id:2}]
        */
      this.listePilote = [];
    }

    lister(){

        if(localStorage['pilote']){
            this.listePilote = JSON.parse(localStorage['pilote']); 
        }

        for(let position in this.listePilote){
          let pilote = new Pilote(this.listePilote[position].nom,
                                  this.listePilote[position].marque,
                                  this.listePilote[position].description,
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
}
class Application {

  constructor(window, piloteDAO, vueListePilote, vueAjouterPilote, vuePilote, vueModifierPilote){
    this.window = window;
    this.piloteDAO = piloteDAO;

    this.vueListePilote = vueListePilote;

    this.vueAjouterPilote = vueAjouterPilote;
    this.vueModifierPilote = vueModifierPilote;
    this.vueAjouterPilote.initialiserActionAjouterPilote(pilote =>this.actionAjouterPilote(pilote));
    this.vueModifierPilote.initialiserActionModifierPilote(pilote =>this.actionModifierPilote(pilote));

    this.vuePilote = vuePilote;
   
    this.window.addEventListener("hashchange", () =>this.naviguer());

    this.naviguer();

  }


  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.vueListePilote.afficher();

    }else if(hash.match(/^#ajouter-pilote/)){

      this.vueAjouterPilote.afficher();

    }else if (hash.match(/^#pilote\/([0-9]+)/)){

      let navigation = hash.match(/^#pilote\/([0-9]+)/);
      let idPilote = navigation[1];

      this.vuePilote.initialiserPilote(idPilote);
      this.vuePilote.afficher();

    }
    else {
      let navigation = hash.match(/^#modifier\/([0-9]+)/);
      let idPilote = navigation[1];
      this.vueModifierPilote.initialiserPilote(idPilote);
      this.vueModifierPilote.afficher();
    }
  }

  actionAjouterPilote(pilote){
    this.piloteDAO.ajouter(pilote);
    this.window.location.hash = "#";
  }

  actionModifierPilote(pilote){
    this.piloteDAO.modifier(pilote);
    this.window.location.hash = "#";
  }
}



new Application(window, new PiloteDAO(), new VueListePilote(), new VueAjouterPilote(), new VuePilote(), new VueModifierPilote());

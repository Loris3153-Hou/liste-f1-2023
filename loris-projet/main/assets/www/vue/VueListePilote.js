class VueListePilote {
    constructor(){
        this.html = document.getElementById("html-vue-liste-pilote").innerHTML;
        this.listePiloteDonnee = null;
    }

    initialiserListePilote(listePiloteDonnee){
        this.listePiloteDonnee = listePiloteDonnee;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
    
        let listePilote = document.getElementById("liste-pilote");
        const listePiloteItemHTML = listePilote.innerHTML;
        let listePiloteHTMLRemplacement = "";
    
        for(var numeroPilote in this.listePiloteDonnee){
          let listePiloteItemHTMLRemplacement = listePiloteItemHTML;
          listePiloteItemHTMLRemplacement = listePiloteItemHTMLRemplacement.replace("{Pilote.id}",this.listePiloteDonnee[numeroPilote].id);
          listePiloteItemHTMLRemplacement = listePiloteItemHTMLRemplacement.replace("{Pilote.id}",this.listePiloteDonnee[numeroPilote].id);
          listePiloteItemHTMLRemplacement = listePiloteItemHTMLRemplacement.replace("{Pilote.nom}",this.listePiloteDonnee[numeroPilote].nom);
          listePiloteHTMLRemplacement += listePiloteItemHTMLRemplacement;
        }

        listePilote.innerHTML = listePiloteHTMLRemplacement;
    }
} 

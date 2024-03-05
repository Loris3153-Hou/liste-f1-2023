class VueListePilote {
    constructor(){
        this.html = document.getElementById("html-vue-liste-pilote").innerHTML;
        this.listePiloteDonnee = null;
        this.piloteDAO = new PiloteDAO();
    }

    initialiserListePilote(listePiloteDonnee){
        this.listePiloteDonnee = listePiloteDonnee;
    }

    /*afficher(){
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
    }*/

    afficher(){

        this.piloteDAO.listePilotes().then(() => {
            let listeDesPilotes = this.piloteDAO.getListeObjetsPilotes();
            this.listeIdsPilotes = [];
            this.listeNomsPilotes = [];
            this.listePrenomsPilotes = [];
            for (let i = 0; i < listeDesPilotes.length; i++) {
                this.listeIdsPilotes.push(listeDesPilotes[i].getIdPilote());
                this.listeNomsPilotes.push(listeDesPilotes[i].getNomPilote());
                this.listePrenomsPilotes.push(listeDesPilotes[i].getPrenomPilote());
            }
            document.getElementsByTagName("body")[0].innerHTML = this.html;
    
            let listePilote = document.getElementById("liste-pilote");
            const listePiloteItemHTML = listePilote.innerHTML;
            let listePiloteHTMLRemplacement = "";
            console.log(JSON.stringify('test'+ this.listeIdsPilotes));
            for(var numeroPilote in this.listeNomsPilotes){
                let listePiloteItemHTMLRemplacement = listePiloteItemHTML;
                listePiloteItemHTMLRemplacement = listePiloteItemHTMLRemplacement.replace("{Pilote.id}",this.listeIdsPilotes[numeroPilote]);
                listePiloteItemHTMLRemplacement = listePiloteItemHTMLRemplacement.replace("{Pilote.id}",this.listeIdsPilotes[numeroPilote]);
                listePiloteItemHTMLRemplacement = listePiloteItemHTMLRemplacement.replace("{Pilote.id}",this.listeIdsPilotes[numeroPilote]);
                listePiloteItemHTMLRemplacement = listePiloteItemHTMLRemplacement.replace("{Pilote.nom}",this.listePrenomsPilotes[numeroPilote] + " " + this.listeNomsPilotes[numeroPilote]);
                listePiloteHTMLRemplacement += listePiloteItemHTMLRemplacement;
            }

            listePilote.innerHTML = listePiloteHTMLRemplacement;
        });
    }
}

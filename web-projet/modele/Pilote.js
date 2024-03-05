class Pilote {
  constructor(nomPilote, prenomPilote, agePilote, marquePilote, coequipierPilote, natPilote, nbGpPilote, idPilote){
      this.idPilote = idPilote;
      this.nomPilote = nomPilote;
      this.prenomPilote = prenomPilote;
      this.agePilote = agePilote;
      this.marquePilote = marquePilote;
      this.coequipierPilote = coequipierPilote;
      this.natPilote = natPilote;
      this.nbGpPilote = nbGpPilote;
  }

  // Getters
  getIdPilote() {
      return this.idPilote;
  }

  getNomPilote() {
      return this.nomPilote;
  }

  getPrenomPilote() {
      return this.prenomPilote;
  }

  getAgePilote() {
      return this.agePilote;
  }

  getMarquePilote() {
      return this.marquePilote;
  }

  getCoequipierPilote() {
      return this.coequipierPilote;
  }

  getNatPilote() {
      return this.natPilote;
  }

  getNbGpPilote() {
      return this.nbGpPilote;
  }

  // Setters
  setIdPilote(idPilote) {
      this.idPilote = idPilote;
  }

  setNomPilote(nomPilote) {
      this.nomPilote = nomPilote;
  }

  setPrenomPilote(prenomPilote) {
      this.prenomPilote = prenomPilote;
  }

  setAgePilote(agePilote) {
      this.agePilote = agePilote;
  }

  setMarquePilote(marquePilote) {
      this.marquePilote = marquePilote;
  }

  setCoequipierPilote(coequipierPilote) {
      this.coequipierPilote = coequipierPilote;
  }

  setNatPilote(natPilote) {
      this.natPilote = natPilote;
  }

  setNbGpPilote(nbGpPilote) {
      this.nbGpPilote = nbGpPilote;
  }
}

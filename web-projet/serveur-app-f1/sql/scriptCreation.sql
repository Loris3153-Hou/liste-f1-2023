DROP TABLE IF EXISTS PILOTE;

CREATE TABLE PILOTE(
    idPilote INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nomPilote VARCHAR(100) NOT NULL,
    prenomPilote VARCHAR(100) NOT NULL,
    agePilote VARCHAR(100) NOT NULL,
    marquePilote VARCHAR(100) NOT NULL,
    coequipierPilote VARCHAR(100) NOT NULL,
    natPilote VARCHAR(100) NOT NULL,
    nbGpPilote VARCHAR(100) NOT NULL
);
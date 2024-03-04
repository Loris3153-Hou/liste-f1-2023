<?php

namespace DAO;
use models;

include_once('../models/Pilote.php');
require_once('DAO.php');

class PiloteDAO
{
    public function creerPilote($tmp)
    {

        $pilote = new models\Pilote();

        $pilote->setIdPilote($tmp['idPilote']);
        $pilote->setNomPilote($tmp['nomPilote']);
        $pilote->setPrenomPilote($tmp['prenomPilote']);
        $pilote->setAgePilote($tmp['agePilote']);
        $pilote->setMarquePilote($tmp['marquePilote']);
        $pilote->setCoequipierPilote($tmp['coequipierPilote']);
        $pilote->setNatPilote($tmp['natPilote']);
        $pilote->setNbGpPilote($tmp['nbGpPilote']);

        return $pilote;
    }

    public function lireRequete($sql, $arguments)
    {
	global $db_name, $user, $pass;

	$bdd = new \PDO("mysql:host=localhost;dbname=$db_name", $user, $pass);
        $rs = $bdd->prepare($sql);
        $rs->execute($arguments);

        $listPilote = array();
        while ($tmp = $rs->fetch()) {
            $pilote = $this->creerPilote($tmp);
            array_push($listPilote, $pilote);
        }
        return $listPilote;
    }

    public function executerRequete($sql, $arguments)
    {
	global $db_name, $user, $pass;

        $bdd = new \PDO("mysql:host=localhost;dbname=$db_name", $user, $pass);
        $rs = $bdd->prepare($sql);
        $rs->execute($arguments);

    }

    public function getToutesPilote()
    {
        $sql = "SELECT * FROM PILOTE;";
        $argument = array();
        return $this->lireRequete($sql, $argument);
    }

    public function getPiloteParId($id)
    {
        $sql = "SELECT * FROM PILOTE WHERE idPilote = ?;";
        $arguments = array();
        array_push($arguments, $id);
        return $this->lireRequete($sql, $arguments);
    }

    public function insertPilote($nomPilote, $prenomPilote, $agePilote, $marquePilote, $coequipierPilote, $natPilote, $nbGpPilote)
    {
        $sql = "INSERT into PILOTE Values (0, ?, ?, ?, ?, ?, ?, ?)";
        $argument = array();
        array_push($argument, $nomPilote, $prenomPilote, $agePilote, $marquePilote, $coequipierPilote, $natPilote, $nbGpPilote);
        return $this->executerRequete($sql, $argument);
    }

    public function updatePilote($nomPilote, $prenomPilote, $agePilote, $marquePilote, $coequipierPilote, $natPilote, $nbGpPilote, $id)
    {
        $sql = "UPDATE PILOTE SET PILOTE.PILOTE = ?, PILOTE.PILOTE = ?, PILOTE.PILOTE = ?,
            PILOTE.PILOTE = ?, PILOTE.PILOTE = ?, PILOTE.PILOTE = ?, PILOTE.PILOTE = ?
            WHERE `JOUEUR`.`id_joueur` = ?;";
        $argument = array();
        array_push($argument, $nomPilote, $prenomPilote, $agePilote, $marquePilote, $coequipierPilote, $natPilote, $nbGpPilote, $id);
        return $this->executerRequete($sql, $argument);
    }

}
?>

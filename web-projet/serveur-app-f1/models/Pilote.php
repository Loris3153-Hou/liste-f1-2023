<?php

namespace models;

class Pilote
{

    public $idPilote;
    public $nomPilote;
    public $prenomPilote;
    public $agePilote;
    public $marquePilote;
    public $coequipierPilote;
    public $natPilote;
    public $nbGpPilote;

    public function __construct()
    {
        $this->idPilote = "";
        $this->nomPilote = "";
        $this->prenomPilote = "";
        $this->agePilote = "";
        $this->marquePilote = "";
        $this->coequipierPilote = "";
        $this->natPilote = "";
        $this->nbGpPilote = "";
    }

    /**
     * @return string
     */
    public function getIdPilote()
    {
        return $this->idPilote;
    }

    /**
     * @param string $idPilote
     */
    public function setIdPilote($idPilote)
    {
        $this->idPilote = $idPilote;
    }

    /**
     * @return string
     */
    public function getNomPilote()
    {
        return $this->nomPilote;
    }

    /**
     * @param string $nomPilote
     */
    public function setNomPilote($nomPilote)
    {
        $this->nomPilote = $nomPilote;
    }

    /**
     * @return string
     */
    public function getPrenomPilote()
    {
        return $this->prenomPilote;
    }

    /**
     * @param string $prenomPilote
     */
    public function setPrenomPilote($prenomPilote)
    {
        $this->prenomPilote = $prenomPilote;
    }

    /**
     * @return string
     */
    public function getAgePilote()
    {
        return $this->agePilote;
    }

    /**
     * @param string $agePilote
     */
    public function setAgePilote($agePilote)
    {
        $this->agePilote = $agePilote;
    }

    /**
     * @return string
     */
    public function getMarquePilote()
    {
        return $this->marquePilote;
    }

    /**
     * @param string $marquePilote
     */
    public function setMarquePilote($marquePilote)
    {
        $this->marquePilote = $marquePilote;
    }

    /**
     * @return string
     */
    public function getCoequipierPilote()
    {
        return $this->coequipierPilote;
    }

    /**
     * @param string $coequipierPilote
     */
    public function setCoequipierPilote($coequipierPilote)
    {
        $this->coequipierPilote = $coequipierPilote;
    }

    /**
     * @return string
     */
    public function getNatPilote()
    {
        return $this->natPilote;
    }

    /**
     * @param string $natPilote
     */
    public function setNatPilote($natPilote)
    {
        $this->natPilote = $natPilote;
    }

    /**
     * @return string
     */
    public function getNbGpPilote()
    {
        return $this->nbGpPilote;
    }

    /**
     * @param string $nbGpPilote
     */
    public function setNbGpPilote($nbGpPilote)
    {
        $this->nbGpPilote = $nbGpPilote;
    }



}

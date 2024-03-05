
<?php

header("Access-Control-Allow-Origin: *");

include_once('../DAO/PiloteDAO.php');

$PiloteDAO = new DAO\PiloteDAO();
$util = "";
if (isset($_GET["token"])){
    if($_GET["token"] == "valeur"){
        if (isset($_GET["methode"])) {

            if ($_GET["methode"] == "getPilotes") {
                
                $utilisateur = $PiloteDAO->getToutesPilote();
                $util = json_encode($utilisateur);
                
            }

            if ($_GET["methode"] == "getPilote") {
                if (isset($_GET["id"])) {
                    $id = $_GET["id"];
                    $utilisateur = $PiloteDAO->getPiloteParId($id);
                    $util = json_encode($utilisateur);
                }
            }

            if ($_GET["methode"] == "modifierPilote") {
                if (isset($_GET["pilote"])) {

                    $piloteData = json_decode($_GET["pilote"], true);

                    $idPilote = $piloteData['idPilote'];
                    $nomPilote = $piloteData['nomPilote'];
                    $prenomPilote = $piloteData['prenomPilote'];
                    $agePilote = $piloteData['agePilote'];
                    echo "<script>console.log('agePilote: " . $agePilote . "');</script>";
                    $marquePilote = $piloteData['marquePilote'];
                    $coequipierPilote = $piloteData['coequipierPilote'];
                    $natPilote = $piloteData['natPilote'];
                    $nbGpPilote = $piloteData['nbGpPilote'];
                    $utilisateur = $PiloteDAO->updatePilote($nomPilote, $prenomPilote, $agePilote, $marquePilote, $coequipierPilote, $natPilote, $nbGpPilote, $idPilote);
                    $util = json_encode($utilisateur);
                }
            }

            echo $util;

            //echo json_encode($PiloteDAO->getToutesPilote());
        }
    }
}
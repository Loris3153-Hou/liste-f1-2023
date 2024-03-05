
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

            echo $util;

            //echo json_encode($PiloteDAO->getToutesPilote());
        }
    }
}
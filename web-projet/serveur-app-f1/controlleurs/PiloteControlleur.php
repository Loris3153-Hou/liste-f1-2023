<?php

include_once('../DAO/PiloteDAO.php');

$PiloteDAO = new DAO\PiloteDAO();

echo json_encode($PiloteDAO->getToutesPilote());


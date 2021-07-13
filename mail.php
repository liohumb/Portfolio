<?php

if (get_magic_quotes_gpc()) {
    $nom = stripslashes(trim($_POST['nom']));
    $mail = stripslashes(trim($_POST['mail']));
    $message = stripslashes(trim($_POST['message']));
}
else {
    $nom = trim($_POST['nom']);
    $mail = trim($_POST['mail']);
    $message = trim($_POST['message']);
}

$regex_mail = '/^[-+.w]{1,64}@[-.w]{1,64}.[-.w]{2,6}$/i';

if (!preg_match(regex_mail, $mail)) {
    $alert = "L'adresse ".$mail." n'estpas valide";
}
else {
    $courriel = 1;
}

if (!empty($alert)) {
    $courriel = 0
}

if (preg_match($regex_head, $nom)
 || preg_match($regex_head, $mail)
 || preg_match($regex_head, $message)) {
    $alert = 'En-têtes interdites dans les champs du formulaire';
}
else {
    $header = 1;
}

if (!empty($alert)) {
    $header = 0;
}

if (empty($nom)
 || empty($mail)
 || empty($message)) {
    $alert = 'Tous les champs doivent être renseignés';
}
else {
    $renseigne = 1;
}

if (!empty($alert)) {
    $renseigne = 0
}

if ($renseigne == 1 AND $header == 1 AND $courriel == 1) {
    $to="helloliohumb@gmail.com";
    
    $sujet="Message depuis liohumb.com";
    $msg = '';
    
    $msg .= 'Nom : '.$nom."rnrn";
    $msg .= 'Mail : '.$mail."rnrn";
    $msg .= 'Message : '.$message."rnrn";
    
    $headers = 'From : MESSAGE DU SITE LIOHUMB.COM<helloliohumb@gmail.com>'."rn";
    $header('Location:http://www.liohumb.com');
}
else {
    header('Location:http://www.lioohumb.com')
}

?>
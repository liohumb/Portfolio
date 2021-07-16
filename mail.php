<?php

if (isset($_POST['valider'])) {
    if (isset($_POST['user_name']) AND isset($_POST['user_email']) AND isset($_POST['user_message'])) {
        if (!empty($_POST['user_name']) AND !empty($_POST['user_email']) AND !empty($_POST['user_message'])) {
            # code...
        }
    }
}

?>
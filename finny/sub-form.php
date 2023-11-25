<?php
$email = $_POST['email'];
$to = "finian.iwu@fintserv.com";
$subject = "Mail from subscription";

$headers = "From: " . $email . "\r\n" .
    "CC: info@fintserv.com";

$txt = "A new user has subscribed with " . "Email:" . $email;

if ($email != NULL) {
    mail($to, $subject, $txt, $headers);
    echo 'success'; // Send success response to AJAX
}
?>
